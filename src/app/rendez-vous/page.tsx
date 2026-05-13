import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";

export const metadata: Metadata = {
  title: "Prendre Rendez-vous — Choisir votre Parcours",
  description:
    "Choisissez le bon parcours de rendez-vous Mobility Canada : étudiant au Québec, relocalisation familiale ou mobilité RH B2B.",
  openGraph: {
    title: "Prendre rendez-vous — Mobility Canada",
    description:
      "Sélectionnez votre profil pour accéder à l'appel adapté à votre projet de relocalisation.",
  },
};

const PATHS = [
  {
    href: "/rendez-vous/etudiant",
    eyebrow: "Étudiant",
    title: "Études au Québec",
    desc: "Lettre d'admission, logement à Montréal, installation et coordination CAQ/permis d'études avec Soleil Immigration.",
    meta: "15 min · DOM-TOM & France métropolitaine",
  },
  {
    href: "/rendez-vous/particulier",
    eyebrow: "Particulier",
    title: "Installation famille",
    desc: "Logement, école, banque, santé et coordination administrative avec les bons interlocuteurs.",
    meta: "15 min · Relocalisation",
  },
  {
    href: "/rendez-vous/entreprise",
    eyebrow: "Entreprise",
    title: "Mobilité RH",
    desc: "Relocalisation de talents, préparation documentaire, onboarding et reporting B2B.",
    meta: "Cadrage · Devis B2B",
  },
];

export default function RendezVousPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <section
          className="rdv"
          aria-labelledby="rdv-h1"
          style={{ minHeight: "auto", padding: "clamp(96px, 10vw, 128px) 0 clamp(64px, 8vw, 96px)" }}
        >
          <div className="mc-container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 0.9fr) minmax(360px, 1.1fr)",
                gap: "clamp(32px, 6vw, 72px)",
                alignItems: "center",
              }}
              className="rdv-choice-layout"
            >
              <div>
                <div className="eyebrow-row">
                  <span className="dot" aria-hidden="true" />
                  <span className="eyebrow">Rendez-vous · Orientation rapide</span>
                </div>
                <h1
                  id="rdv-h1"
                  style={{
                    fontFamily: "var(--mc-display)",
                    fontSize: "clamp(42px, 6.4vw, 88px)",
                    fontWeight: 600,
                    letterSpacing: "-0.045em",
                    lineHeight: 0.95,
                    marginBottom: 28,
                    color: "var(--mc-ink)",
                  }}
                >
                  Quel projet<br />
                  <em style={{ color: "var(--mc-accent)", fontStyle: "italic", fontWeight: 400 }}>
                    voulez-vous cadrer ?
                  </em>
                </h1>
                <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--mc-soft)", maxWidth: "52ch" }}>
                  Choisissez le parcours qui correspond à votre situation. Vous arriverez directement
                  sur la page de rendez-vous adaptée, avec le bon contexte et les bonnes informations.
                </p>
              </div>

              <div style={{ display: "grid", gap: 14 }}>
                {PATHS.map((path) => (
                  <Link
                    key={path.href}
                    href={path.href}
                    className="path-card"
                    style={{
                      minHeight: 0,
                      padding: "24px",
                      border: "1px solid var(--mc-line)",
                      boxShadow: "0 18px 45px rgba(5,10,24,0.04)",
                    }}
                  >
                    <div className="path-num" style={{ marginBottom: 12 }}>{path.eyebrow}</div>
                    <h2 className="path-title" style={{ fontSize: 30, marginBottom: 10 }}>{path.title}</h2>
                    <p className="path-desc" style={{ marginBottom: 18 }}>{path.desc}</p>
                    <div className="path-list" aria-label={`Repères ${path.title}`} style={{ marginBottom: 18 }}>
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 12,
                        paddingTop: 14,
                        borderTop: "1px solid var(--mc-line)",
                        fontSize: 14,
                      }}>
                        <span>Format</span>
                        <span style={{ fontFamily: "var(--mc-mono)", fontSize: 11, opacity: 0.48 }}>
                          {path.meta}
                        </span>
                      </div>
                    </div>
                    <span className="path-cta">Choisir ce rendez-vous</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}
