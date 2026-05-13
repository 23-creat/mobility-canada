import { createSign } from "node:crypto";
import { NextResponse } from "next/server";

type LeadPayload = {
  status?: string;
  answers?: Record<string, string>;
  contact?: {
    prenom?: string;
    email?: string;
    whatsapp?: string;
  };
  utms?: Record<string, string>;
  page?: string;
};

const SHEET_ID = process.env.GOOGLE_SHEET_ID ?? "1o9rCug4vBv-LaqWFkVk5MMUYa8wA6dmSusw8MtUxgKs";
const SHEET_RANGE = process.env.GOOGLE_SHEET_RANGE ?? "A:Z";

function base64Url(input: string) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function signJwt(email: string, privateKey: string) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = base64Url(
    JSON.stringify({
      iss: email,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    })
  );
  const unsigned = `${header}.${payload}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsigned);
  signer.end();
  const signature = signer
    .sign(privateKey)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  return `${unsigned}.${signature}`;
}

async function getAccessToken() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!email || !rawPrivateKey) {
    throw new Error("Missing Google service account env vars");
  }

  const privateKey = rawPrivateKey.replace(/\\n/g, "\n");
  const assertion = signJwt(email, privateKey);
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });

  if (!response.ok) {
    throw new Error(`Google auth failed: ${await response.text()}`);
  }

  const data = (await response.json()) as { access_token: string };
  return data.access_token;
}

async function appendToSheet(payload: LeadPayload) {
  const token = await getAccessToken();
  const answers = payload.answers ?? {};
  const contact = payload.contact ?? {};
  const utms = payload.utms ?? {};

  const values = [
    [
      new Date().toISOString(),
      payload.status ?? "",
      answers.lettre ?? "",
      answers.rentree ?? "",
      answers.origine ?? "",
      answers.defi ?? "",
      contact.prenom ?? "",
      contact.email ?? "",
      contact.whatsapp ?? "",
      utms.utm_source ?? "",
      utms.utm_medium ?? "",
      utms.utm_campaign ?? "",
      utms.utm_content ?? "",
      payload.page ?? "",
    ],
  ];

  const url = new URL(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(
      SHEET_RANGE
    )}:append`
  );
  url.searchParams.set("valueInputOption", "USER_ENTERED");
  url.searchParams.set("insertDataOption", "INSERT_ROWS");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values }),
  });

  if (!response.ok) {
    throw new Error(`Google Sheets append failed: ${await response.text()}`);
  }
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as LeadPayload;
    await appendToSheet(payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to save lead",
      },
      { status: 500 }
    );
  }
}
