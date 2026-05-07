import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";

export const metadata: Metadata = {
  title: "Prendre Rendez-vous — Consultation Gratuite en Immigration Canada",
  description:
    "Réservez votre consultation gratuite avec un expert en immigration Canada. Visa étudiant, résidence permanente, permis de travail — nous analysons votre profil en 15 minutes.",
  openGraph: {
    title: "Consultation gratuite — Mobility Canada | Experts Immigration Canada",
    description:
      "15 minutes avec un expert pour définir votre feuille de route vers le Canada. Gratuit, sans engagement.",
  },
};

export default function RendezVousPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <section className="rdv" aria-labelledby="rdv-h1">
          <div className="mc-container">
            <div className="rdv-grid">

              {/* Left — sticky info */}
              <div className="rdv-left">
                <div className="eyebrow-row">
                  <span className="dot" aria-hidden="true" />
                  <span className="eyebrow">Consultation gratuite · Sans engagement</span>
                </div>
                <h1 id="rdv-h1">
                  Parlez à<br />
                  un <em>expert.</em>
                </h1>
                <p>
                  15 minutes avec un expert en immigration pour analyser votre profil,
                  répondre à vos questions et vous proposer la meilleure feuille de route
                  vers le Canada.
                </p>

                <div className="rdv-promo">
                  <span className="eyebrow">Ce que vous obtenez</span>
                  <h3>Un plan d&apos;action clair en 15 min</h3>
                  <p>Gratuit, sans engagement, avec un vrai conseiller — pas un chatbot.</p>
                  <ul>
                    <li>Analyse de votre profil d&apos;éligibilité</li>
                    <li>Programme d&apos;immigration recommandé</li>
                    <li>Estimation du calendrier et des délais</li>
                    <li>Liste des documents à préparer</li>
                    <li>Réponse à toutes vos questions</li>
                  </ul>
                </div>

                {/* Trust badges */}
                <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { emoji: "🔒", text: "Données protégées — RGPD & Loi 25" },
                    { emoji: "✅", text: "Experts en immigration canadienne" },
                    { emoji: "⭐", text: "4,9 / 5 — 1 200+ avis vérifiés" },
                    { emoji: "⏱",  text: "Réponse garantie sous 24h ouvrées" },
                  ].map(({ emoji, text }) => (
                    <div key={text} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "var(--mc-soft)" }}>
                      <span aria-hidden="true">{emoji}</span>
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Calendly embed */}
              <div>
                <iframe
                  src="https://calendly.com/COMPTE_A_CONFIGURER/appel-faisabilite-15min"
                  width="100%"
                  height="700"
                  style={{ border: "none" }}
                  title="Réserver un appel de 15 minutes"
                />
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
