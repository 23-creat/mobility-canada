import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog — Conseils Immigration & Relocalisation au Canada | Mobility Canada",
  description:
    "Guides pratiques, témoignages et conseils d'experts pour réussir votre installation au Québec. CAQ, permis d'études, logement à Montréal.",
};

const UPCOMING_ARTICLES = [
  {
    tag: "Immigration",
    title: "CAQ, permis d'études, visa : dans quel ordre faire ses démarches ?",
    description:
      "Le guide complet pour ne pas se perdre dans les étapes administratives et arriver à Montréal sereinement.",
  },
  {
    tag: "Logement",
    title: "Trouver un appartement à Montréal depuis la France : la méthode complète",
    description:
      "Quartiers, budget, pièges à éviter et outils pour sécuriser un logement avant même d'atterrir.",
  },
  {
    tag: "Témoignage",
    title: "\"Je suis parti de Martinique sans lettre d'admission\" — L'histoire d'Alex",
    description:
      "Comment préparer son projet d'études canadiennes quand on part de zéro, en 8 mois.",
  },
  {
    tag: "Pratique",
    title: "Ouvrir un compte bancaire au Canada en tant qu'étudiant international",
    description:
      "Quelle banque choisir, quels documents apporter le jour J et comment gérer la période de transition.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <ScrollReveal />

      <main id="main-content">
        {/* Hero */}
        <section
          style={{
            paddingTop: "clamp(100px, 14vw, 160px)",
            paddingBottom: "clamp(60px, 8vw, 100px)",
            background: "var(--mc-white)",
          }}
        >
          <div className="mc-container" style={{ maxWidth: 720 }}>
            <div className="eyebrow-row" style={{ marginBottom: 24 }}>
              <span className="dot" aria-hidden="true" />
              <span className="eyebrow">Ressources &amp; Guides</span>
            </div>

            <h1
              style={{
                fontFamily: "var(--mc-display)",
                fontSize: "clamp(36px, 6vw, 72px)",
                fontWeight: 600,
                letterSpacing: "-0.04em",
                lineHeight: 1.0,
                color: "var(--mc-ink)",
                marginBottom: 24,
              }}
            >
              Le blog<br />Mobility Canada
            </h1>
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 19px)",
                color: "var(--mc-soft)",
                lineHeight: 1.65,
                maxWidth: 560,
              }}
            >
              Des conseils concrets pour les étudiant·e·s et familles qui préparent
              leur installation au Québec. Aucun jargon, juste ce qui compte vraiment.
            </p>
          </div>
        </section>

        {/* Coming soon */}
        <section
          style={{
            paddingBottom: "clamp(80px, 12vw, 140px)",
            background: "var(--mc-white)",
          }}
        >
          <div className="mc-container" style={{ maxWidth: 720 }}>
            {/* Banner */}
            <div
              className="mc-reveal"
              style={{
                background: "var(--mc-stone)",
                border: "1px solid var(--mc-line)",
                borderRadius: "var(--r-xl)",
                padding: "clamp(32px, 5vw, 56px)",
                marginBottom: 56,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "var(--mc-ink)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h2
                style={{
                  fontFamily: "var(--mc-display)",
                  fontSize: "clamp(22px, 3vw, 30px)",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  color: "var(--mc-ink)",
                  marginBottom: 12,
                }}
              >
                Contenu en cours de rédaction
              </h2>
              <p style={{ color: "var(--mc-soft)", fontSize: 16, lineHeight: 1.65, marginBottom: 28, maxWidth: 460, margin: "0 auto 28px" }}>
                Nos premiers articles arrivent prochainement. En attendant, réserve
                un appel gratuit pour répondre à toutes tes questions.
              </p>
              <Link href="/rendez-vous" className="btn btn-primary btn-arrow">
                Réserver un appel gratuit
              </Link>
            </div>

            {/* Upcoming articles */}
            <div className="mc-reveal">
              <p
                style={{
                  fontFamily: "var(--mc-mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--mc-mute)",
                  marginBottom: 24,
                }}
              >
                Articles à venir
              </p>
              <div style={{ display: "grid", gap: 16 }}>
                {UPCOMING_ARTICLES.map((article) => (
                  <div
                    key={article.title}
                    style={{
                      border: "1px solid var(--mc-line)",
                      borderRadius: "var(--r-lg)",
                      padding: "24px 28px",
                      background: "#fff",
                      opacity: 0.7,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--mc-mono)",
                        fontSize: 11,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--mc-accent)",
                        display: "block",
                        marginBottom: 8,
                      }}
                    >
                      {article.tag}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--mc-display)",
                        fontSize: "clamp(16px, 2vw, 19px)",
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        color: "var(--mc-ink)",
                        marginBottom: 8,
                        lineHeight: 1.3,
                      }}
                    >
                      {article.title}
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--mc-soft)", lineHeight: 1.6, margin: 0 }}>
                      {article.description}
                    </p>
                  </div>
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
