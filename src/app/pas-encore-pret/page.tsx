"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import ScrollReveal from "@/components/ui/ScrollReveal";

type FormState = "idle" | "loading" | "success" | "error";

export default function PasEncorePretPage() {
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");

    try {
      // Brevo — liste "En attente admission"
      // Remplacer l'URL par l'endpoint Brevo (API ou webhook n8n)
      const res = await fetch("/api/brevo-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prenom, email }),
      });

      if (!res.ok) throw new Error("Erreur serveur");
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <>
      <Navbar />
      <ScrollReveal />

      <main
        id="main-content"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px 80px",
          background: "var(--mc-white)",
        }}
      >
        <div
          className="mc-reveal"
          style={{ maxWidth: 560, width: "100%", textAlign: "center" }}
        >
          {/* Eyebrow */}
          <div
            className="eyebrow-row"
            style={{ justifyContent: "center", marginBottom: 24 }}
          >
            <span className="dot" aria-hidden />
            <span className="eyebrow" style={{ color: "var(--mc-mute)" }}>
              Ton projet · En bonne voie
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "var(--mc-display)",
              fontWeight: 600,
              fontSize: "clamp(30px, 5vw, 52px)",
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              color: "var(--mc-ink)",
              marginBottom: 20,
            }}
          >
            Ton projet est en bonne voie 💪
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              color: "var(--mc-soft)",
              lineHeight: 1.65,
              marginBottom: 48,
            }}
          >
            Tu n&apos;as pas encore ta lettre d&apos;admission — pas de problème.
            Laisse-nous ton email et on te contacte dès que tu es prêt à passer
            à l&apos;étape suivante.
          </p>

          {/* Formulaire */}
          {state === "success" ? (
            <div
              style={{
                background: "var(--mc-stone)",
                borderRadius: "var(--r-lg)",
                padding: "40px 32px",
                border: "1px solid var(--mc-line)",
              }}
            >
              <p style={{ fontSize: 32, marginBottom: 16 }}>✅</p>
              <p
                style={{
                  fontFamily: "var(--mc-display)",
                  fontWeight: 600,
                  fontSize: 20,
                  color: "var(--mc-ink)",
                  marginBottom: 8,
                }}
              >
                C&apos;est noté, {prenom} !
              </p>
              <p style={{ fontSize: 15, color: "var(--mc-soft)", lineHeight: 1.6 }}>
                On te recontacte dès que ton profil est prêt. En attendant,
                suis-nous sur Instagram pour les conseils et témoignages.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                background: "var(--mc-stone)",
                borderRadius: "var(--r-xl)",
                padding: "40px 36px",
                border: "1px solid var(--mc-line)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                textAlign: "left",
              }}
              aria-label="Formulaire de contact — en attente d'admission"
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label
                  htmlFor="prenom"
                  style={{
                    fontFamily: "var(--mc-mono)",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--mc-mute)",
                  }}
                >
                  Prénom
                </label>
                <input
                  id="prenom"
                  type="text"
                  required
                  autoComplete="given-name"
                  placeholder="Ex. Léo"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  style={{
                    padding: "14px 16px",
                    borderRadius: "var(--r-md)",
                    border: "1px solid var(--mc-line)",
                    background: "var(--mc-white)",
                    fontSize: 15,
                    color: "var(--mc-ink)",
                    fontFamily: "var(--mc-body)",
                    outline: "none",
                    transition: "border-color .2s ease",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--mc-ink)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--mc-line)")
                  }
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label
                  htmlFor="email"
                  style={{
                    fontFamily: "var(--mc-mono)",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--mc-mute)",
                  }}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="ton@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    padding: "14px 16px",
                    borderRadius: "var(--r-md)",
                    border: "1px solid var(--mc-line)",
                    background: "var(--mc-white)",
                    fontSize: 15,
                    color: "var(--mc-ink)",
                    fontFamily: "var(--mc-body)",
                    outline: "none",
                    transition: "border-color .2s ease",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--mc-ink)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--mc-line)")
                  }
                />
              </div>

              {state === "error" && (
                <p
                  role="alert"
                  style={{ fontSize: 14, color: "var(--mc-red)", margin: 0 }}
                >
                  Une erreur est survenue. Réessaie ou écris-nous directement.
                </p>
              )}

              <button
                type="submit"
                disabled={state === "loading"}
                className="btn btn-primary btn-arrow"
                style={{ marginTop: 8, justifyContent: "center" }}
                aria-busy={state === "loading"}
              >
                {state === "loading" ? "Envoi…" : "Me tenir informé"}
              </button>

              <p style={{ fontSize: 12, color: "var(--mc-mute)", textAlign: "center" }}>
                Pas de spam. Juste un message quand c&apos;est le bon moment.
              </p>
            </form>
          )}

          {/* CTA secondaire Instagram */}
          <div style={{ marginTop: 32 }}>
            <a
              href="https://www.instagram.com/mobility.canada?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 24px",
                borderRadius: 999,
                border: "1px solid var(--mc-line)",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--mc-ink)",
                transition: "border-color .2s ease, background .2s ease",
              }}
              aria-label="Suivre Mobility Canada sur Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
              Suivre sur Instagram
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}
