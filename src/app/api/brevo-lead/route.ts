import { NextResponse } from "next/server";

type BrevoLeadPayload = {
  prenom?: string;
  email?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Missing BREVO_API_KEY" },
        { status: 500 }
      );
    }

    const payload = (await request.json()) as BrevoLeadPayload;
    const prenom = payload.prenom?.trim() ?? "";
    const email = payload.email?.trim().toLowerCase() ?? "";

    if (!prenom || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid lead payload" },
        { status: 400 }
      );
    }

    const listId = Number(process.env.BREVO_LIST_ID);
    const body: {
      email: string;
      attributes: Record<string, string>;
      listIds?: number[];
      updateEnabled: boolean;
    } = {
      email,
      attributes: {
        PRENOM: prenom,
        SOURCE: "pas-encore-pret",
        STATUT_PROJET: "lettre_admission_pas_encore",
      },
      updateEnabled: true,
    };

    if (Number.isInteger(listId) && listId > 0) {
      body.listIds = [listId];
    }

    const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!brevoResponse.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: "Brevo contact creation failed",
        },
        { status: brevoResponse.status }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "Unable to save Brevo lead" },
      { status: 500 }
    );
  }
}
