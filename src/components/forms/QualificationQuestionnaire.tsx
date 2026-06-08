"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getUtms } from "@/lib/utm";

type AnswerValue =
  | "lettre_oui"
  | "lettre_en_cours"
  | "lettre_non"
  | `rentree_automne_${number}`
  | `rentree_hiver_${number}`
  | "rentree_inconnue"
  | "origine_martinique"
  | "origine_guadeloupe"
  | "origine_guyane"
  | "origine_reunion"
  | "origine_france_metro"
  | "origine_autre"
  | "defi_logement"
  | "defi_immigration"
  | "defi_les_deux"
  | "defi_autre";

type QuestionKey = "lettre" | "rentree" | "origine" | "defi";

type Answers = Partial<Record<QuestionKey, AnswerValue>>;

type Contact = {
  prenom: string;
  email: string;
  whatsapp: string;
};

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/mobility-canada-admin/30min";

const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;

const QUESTIONS: Array<{
  key: QuestionKey;
  question: string;
  options: Array<{ label: string; value: AnswerValue }>;
}> = [
  {
    key: "lettre",
    question: "Tu as déjà reçu une lettre d'admission d'une université ou école québécoise ?",
    options: [
      { label: "Oui, je l'ai reçue", value: "lettre_oui" },
      { label: "Ma candidature est en cours", value: "lettre_en_cours" },
      { label: "Pas encore", value: "lettre_non" },
    ],
  },
  {
    key: "rentree",
    question: "Quelle rentrée tu vises ?",
    options: [
      { label: `Automne ${currentYear} (septembre)`, value: `rentree_automne_${currentYear}` },
      { label: `Hiver ${nextYear} (janvier)`, value: `rentree_hiver_${nextYear}` },
      { label: "Je ne sais pas encore", value: "rentree_inconnue" },
    ],
  },
  {
    key: "origine",
    question: "D'où pars-tu ?",
    options: [
      { label: "Martinique", value: "origine_martinique" },
      { label: "Guadeloupe", value: "origine_guadeloupe" },
      { label: "Guyane", value: "origine_guyane" },
      { label: "La Réunion", value: "origine_reunion" },
      { label: "France métropolitaine", value: "origine_france_metro" },
      { label: "Autre", value: "origine_autre" },
    ],
  },
  {
    key: "defi",
    question: "Ton plus grand défi en ce moment ?",
    options: [
      { label: "Trouver un logement à Montréal", value: "defi_logement" },
      { label: "Les démarches d'immigration (CAQ, permis d'études)", value: "defi_immigration" },
      { label: "Les deux à la fois", value: "defi_les_deux" },
      { label: "Autre", value: "defi_autre" },
    ],
  },
];

async function saveLead(payload: {
  status: "qualified" | "not_qualified";
  answers: Answers;
  contact?: Contact;
}) {
  const response = await fetch("/api/qualification-lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      utms: getUtms(),
      page: window.location.pathname,
    }),
  });

  if (!response.ok) throw new Error("Lead save failed");
}

type QualificationQuestionnaireProps = {
  calendlyUrl?: string;
};

export default function QualificationQuestionnaire({
  calendlyUrl = CALENDLY_URL,
}: QualificationQuestionnaireProps) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [contact, setContact] = useState<Contact>({ prenom: "", email: "", whatsapp: "" });
  const [screen, setScreen] = useState<"questions" | "contact" | "redirect" | "calendly">("questions");
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const progress = useMemo(() => {
    if (screen === "contact") return 88;
    if (screen === "calendly") return 100;
    return Math.round(((step + 1) / QUESTIONS.length) * 72);
  }, [screen, step]);

  const current = QUESTIONS[step];
  const calendlySrc = `${calendlyUrl}?hide_gdpr_banner=1&locale=fr&name=${encodeURIComponent(
    contact.prenom
  )}&email=${encodeURIComponent(contact.email)}`;

  async function chooseAnswer(key: QuestionKey, value: AnswerValue) {
    const nextAnswers = { ...answers, [key]: value };
    setAnswers(nextAnswers);
    setError("");

    if (key === "lettre" && value === "lettre_non") {
      setScreen("redirect");
      setIsSaving(true);
      try {
        await saveLead({ status: "not_qualified", answers: nextAnswers });
      } catch {
        // The prospect should still continue through the intended path.
      } finally {
        setIsSaving(false);
        window.setTimeout(() => router.push("/pas-encore-pret"), 2400);
      }
      return;
    }

    if (step === QUESTIONS.length - 1) {
      setScreen("contact");
      return;
    }

    setStep((value) => value + 1);
  }

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!contact.prenom.trim()) {
      setError("Indique ton prénom pour continuer.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
      setError("Indique une adresse email valide.");
      return;
    }

    setIsSaving(true);
    try {
      await saveLead({ status: "qualified", answers, contact });
    } catch {
      setError("Tes réponses sont gardées pour l'appel. Tu peux quand même choisir ton créneau.");
    } finally {
      setIsSaving(false);
      setScreen("calendly");
    }
  }

  return (
    <div
      style={{
        background: "var(--mc-paper)",
        border: "1px solid var(--mc-line)",
        borderRadius: "var(--r-xl)",
        overflow: "hidden",
        boxShadow: "0 28px 70px -48px rgba(5,10,24,0.35)",
      }}
    >
      <div style={{ height: 5, background: "rgba(5,10,24,0.08)" }} aria-hidden="true">
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "var(--mc-accent)",
            transition: "width .28s ease",
          }}
        />
      </div>

      <div style={{ padding: "clamp(24px, 5vw, 42px)" }}>
        {screen === "questions" && (
          <>
            <div className="eyebrow" style={{ color: "var(--mc-accent)", marginBottom: 18 }}>
              Question {step + 1} / {QUESTIONS.length}
            </div>
            <h3
              style={{
                fontFamily: "var(--mc-display)",
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 600,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                color: "var(--mc-ink)",
                marginBottom: 28,
              }}
            >
              {current.question}
            </h3>
            <div style={{ display: "grid", gap: 12 }}>
              {current.options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => chooseAnswer(current.key, option.value)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 18,
                    width: "100%",
                    padding: "18px 20px",
                    borderRadius: 16,
                    border: "1px solid var(--mc-line)",
                    background: "#fff",
                    color: "var(--mc-ink)",
                    textAlign: "left",
                    fontSize: 16,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <span>{option.label}</span>
                  <span aria-hidden="true" style={{ color: "var(--mc-accent)" }}>
                    →
                  </span>
                </button>
              ))}
            </div>
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep((value) => Math.max(0, value - 1))}
                style={{
                  marginTop: 22,
                  color: "var(--mc-mute)",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                ← Retour
              </button>
            )}
          </>
        )}

        {screen === "redirect" && (
          <div style={{ textAlign: "center", padding: "28px 0" }}>
            <h3
              style={{
                fontFamily: "var(--mc-display)",
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 600,
                letterSpacing: "-0.035em",
                color: "var(--mc-ink)",
                marginBottom: 16,
              }}
            >
              Pas de problème.
            </h3>
            <p style={{ color: "var(--mc-soft)", fontSize: 16, lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
              La plupart de nos clients nous contactent avant même d&apos;avoir leur lettre.
              On va te rediriger vers une page pour qu&apos;on reste en contact. On te recontacte dès que tu es prêt.
            </p>
            <p className="eyebrow" style={{ color: "var(--mc-mute)", marginTop: 24 }}>
              {isSaving ? "Enregistrement..." : "Redirection..."}
            </p>
          </div>
        )}

        {screen === "contact" && (
          <form onSubmit={submitContact}>
            <div className="eyebrow" style={{ color: "var(--mc-accent)", marginBottom: 18 }}>
              Presque terminé
            </div>
            <h3
              style={{
                fontFamily: "var(--mc-display)",
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 600,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                color: "var(--mc-ink)",
                marginBottom: 10,
              }}
            >
              Dis-nous comment te joindre.
            </h3>
            <p style={{ color: "var(--mc-mute)", fontSize: 15, marginBottom: 28 }}>
              Pour que ton créneau soit bien à toi.
            </p>

            <div style={{ display: "grid", gap: 14 }}>
              <input
                value={contact.prenom}
                onChange={(event) => setContact({ ...contact, prenom: event.target.value })}
                placeholder="Ton prénom"
                autoComplete="given-name"
                style={inputStyle}
              />
              <input
                value={contact.email}
                onChange={(event) => setContact({ ...contact, email: event.target.value })}
                placeholder="ton@email.fr"
                type="email"
                autoComplete="email"
                style={inputStyle}
              />
              <input
                value={contact.whatsapp}
                onChange={(event) => setContact({ ...contact, whatsapp: event.target.value })}
                placeholder="+596 6XX XX XX XX"
                type="tel"
                autoComplete="tel"
                style={inputStyle}
              />
            </div>

            <p style={{ color: "var(--mc-mute)", fontSize: 13, lineHeight: 1.55, marginTop: 16 }}>
              Tes données sont utilisées uniquement pour préparer ton appel. Conformité RGPD & Loi 25.
              Désabonnement en 1 clic.
            </p>

            {error && (
              <p role="alert" style={{ color: "var(--mc-accent)", fontSize: 14, marginTop: 16 }}>
                {error}
              </p>
            )}

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
              <button type="submit" className="btn btn-primary btn-arrow" disabled={isSaving}>
                {isSaving ? "Enregistrement..." : "Choisir mon créneau"}
              </button>
              <button
                type="button"
                onClick={() => setScreen("questions")}
                style={{ color: "var(--mc-mute)", fontSize: 14, fontWeight: 600 }}
              >
                Modifier mes réponses
              </button>
            </div>
          </form>
        )}

        {screen === "calendly" && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div className="eyebrow" style={{ color: "var(--mc-accent)", marginBottom: 14 }}>
                Dernière étape
              </div>
              <h3
                style={{
                  fontFamily: "var(--mc-display)",
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 600,
                  letterSpacing: "-0.035em",
                  color: "var(--mc-ink)",
                  marginBottom: 10,
                }}
              >
                Parfait ! Choisis ton créneau.
              </h3>
              <p style={{ color: "var(--mc-mute)", fontSize: 15 }}>
                L&apos;appel dure 15 minutes. Tu recevras une confirmation par email.
              </p>
            </div>
            <iframe
              src={calendlySrc}
              width="100%"
              height="700"
              title="Choisir un créneau d'appel avec Mobility Canada"
              style={{ border: "none", borderRadius: 16, background: "#fff" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "16px 18px",
  borderRadius: 14,
  border: "1px solid var(--mc-line)",
  background: "#fff",
  color: "var(--mc-ink)",
  fontSize: 16,
  outline: "none",
} satisfies React.CSSProperties;
