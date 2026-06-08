import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CookieBanner from "@/components/layout/CookieBanner";
import UtmCapture from "@/components/analytics/UtmCapture";
import QualificationQuestionnaire from "@/components/forms/QualificationQuestionnaire";

export const metadata: Metadata = {
  title: "Réserve ton appel gratuit — Mobility Canada",
  description:
    "De ta lettre d'admission aux clés de ton appart — on s'occupe de tout. Réserve un appel gratuit de 15 min pour savoir si ton profil est éligible.",
  robots: { index: false, follow: false },
};

const REASSURANCE = [
  {
    num: "01",
    title: "15 min, sans engagement",
    desc: "Un appel de faisabilité court et direct. Tu repars avec une réponse claire sur ton projet.",
  },
  {
    num: "02",
    title: "Logement + immigration",
    desc: "On coordonne les deux depuis un seul endroit — logement à Montréal et partenaire immigration agréé CICC.",
  },
  {
    num: "03",
    title: "Départements Ultramarins & France métropolitaine",
    desc: "On accompagne les étudiants des Départements Ultramarins (Antilles, La Réunion, Guyane, Mayotte, Polynésie…) et de France métropolitaine.",
  },
];

const AVIS = [
  {
    nom: "DORIAC Delphine",
    texte:
      "Indispensable ! Avec Mobility, nous avons eu un accompagnement sur mesure, une écoute totale. Diana fut une aide précieuse pour la recherche du logement à Montréal. Une prestation de qualité conforme à ses promesses. Je recommande Mobility Canada à toutes les personnes qui s'installent au Canada.",
  },
  {
    nom: "Marc-Anthony S.",
    texte:
      "Superbe service, à l'écoute des demandes, très réactif sur les propositions. Un travail vraiment bien fait. Je me suis vraiment senti épaulé ! Malgré un délai d'une semaine, les résultats ont été probants dès le deuxième jour.",
  },
  {
    nom: "David BARNY",
    texte:
      "Merci à l'équipe de Mobility Canada de nous avoir accompagnés dans toutes les étapes de l'installation de notre fils au Canada pour ses études. Cela nous a permis d'éviter des dépenses superflues, de trouver un logement adapté et de sécuriser la signature du bail.",
  },
  {
    nom: "Becca2015 J-I",
    texte:
      "Une superbe agence ! On peut vraiment leur faire confiance. Merci à Diana pour sa patience et son professionnalisme ! Je recommande fortement cette agence.",
  },
  {
    nom: "Nicaise Volberg",
    texte:
      "Un service 5 étoiles. Diana est à l'écoute et elle sait rapidement comprendre les besoins. Malgré le court délai elle a su relever le défi. Je recommande +++",
  },
  {
    nom: "Chana CIRANY",
    texte:
      "Mobility Canada : un accompagnement personnalisé au-delà de mes espérances. Très satisfaite des prestations et un suivi même après l'installation. Je vous le recommande à 100%.",
  },
  {
    nom: "GAMSYE",
    texte:
      "Accompagnement impeccable, j'ai pu trouver mon logement en 3 mois. Un logement très bien situé et en dessous du prix du marché. Le suivi est surtout humain et régulier. Merci !",
  },
];

export default function ReserverTonAppelPage() {
  return (
    <>
      <UtmCapture />
      <ScrollReveal />

      {/* ── HEADER MINIMAL ── */}
      <header style={{
        background: "var(--mc-ink)",
        padding: "28px var(--mc-gutter) 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <div
          aria-label="Mobility Canada"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 82,
            height: 82,
            padding: 10,
            background: "rgba(255,255,255,0.94)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 18,
            boxShadow: "0 18px 50px -28px rgba(0,0,0,0.8)",
          }}
        >
          <Image
            src="/logo.png"
            alt="Mobility Canada"
            width={56}
            height={70}
            style={{ display: "block", width: 56, height: "auto", borderRadius: 8 }}
            priority
          />
        </div>
      </header>

      <main id="main-content" style={{ minHeight: "100vh", background: "var(--mc-white)" }}>

        {/* ── HERO ── */}
        <section style={{
          background: "var(--mc-ink)",
          color: "#fff",
          padding: "32px 0 80px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Glow subtil */}
          <div aria-hidden style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(55% 55% at 85% 15%, rgba(216,6,33,0.22) 0%, transparent 60%)",
            pointerEvents: "none",
          }} />

          <div className="mc-container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>

            <div className="mc-reveal" style={{ maxWidth: 740, margin: "0 auto" }}>
              <div className="eyebrow-row" style={{ marginBottom: 28, justifyContent: "center" }}>
                <span className="dot" aria-hidden />
                <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Appel gratuit · 15 min · Sans engagement
                </span>
              </div>

              <h1 style={{
                fontFamily: "var(--mc-display)",
                fontWeight: 600,
                fontSize: "clamp(36px, 6vw, 76px)",
                lineHeight: 1.0,
                letterSpacing: "-0.04em",
                color: "#fff",
                marginBottom: 28,
              }}>
                De ta lettre d&apos;admission<br />
                aux clés de ton appart —{" "}
                <em style={{ color: "var(--mc-red)", fontStyle: "normal" }}>
                  on s&apos;occupe de tout.
                </em>
              </h1>

              <p style={{
                fontSize: "clamp(16px, 1.8vw, 19px)",
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.65,
                maxWidth: 580,
                margin: "0 auto",
              }}>
                Réserve un appel de 15 min pour savoir si ton profil est éligible
                et découvrir comment on t&apos;accompagne de A à Z.
              </p>
            </div>
          </div>
        </section>

        {/* ── VIDEO CEO (AUTHORITÉ & CONFIANCE) ── */}
        <section style={{ padding: "64px 0", background: "var(--mc-paper)" }}>
          <div className="mc-container" style={{ maxWidth: 800 }}>
            <div className="mc-reveal" style={{ textAlign: "center", marginBottom: 32 }}>
              <h2 style={{
                fontFamily: "var(--mc-display)",
                fontWeight: 600,
                fontSize: "clamp(24px, 4vw, 36px)",
                letterSpacing: "-0.03em",
                color: "var(--mc-ink)",
              }}>
                Le mot de la fondatrice
              </h2>
              <p style={{ fontSize: 16, color: "var(--mc-soft)", marginTop: 8 }}>
                Découvre notre mission et comment on sécurise ton projet d&apos;études.
              </p>
            </div>
            
            <div className="mc-reveal" style={{ 
              aspectRatio: "16/9", 
              background: "var(--mc-line)", 
              borderRadius: 16, 
              overflow: "hidden", 
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <p style={{ color: "var(--mc-soft)", fontFamily: "var(--mc-mono)", fontSize: 13, textAlign: "center" }}>
                [Emplacement Vidéo CEO]<br/>(Intégrer ici l&apos;iframe YouTube ou Vimeo)
              </p>
            </div>
          </div>
        </section>

        {/* ── RÉASSURANCE ── */}
        <section style={{
          background: "var(--mc-white)",
          borderBottom: "1px solid var(--mc-line)",
          padding: "56px 0",
        }}>
          <div className="mc-container">
            <ul style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1px",
              listStyle: "none",
              background: "var(--mc-line)",
              borderRadius: "var(--r-lg)",
              overflow: "hidden",
            }}>
              {REASSURANCE.map((item) => (
                <li key={item.num} className="mc-reveal" style={{
                  background: "var(--mc-paper)",
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}>
                  <span style={{
                    fontFamily: "var(--mc-mono)",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    color: "var(--mc-accent)",
                    textTransform: "uppercase",
                  }}>
                    {item.num}
                  </span>
                  <strong style={{
                    fontFamily: "var(--mc-display)",
                    fontWeight: 600,
                    fontSize: 18,
                    color: "var(--mc-ink)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}>
                    {item.title}
                  </strong>
                  <span style={{
                    fontSize: 14.5,
                    color: "var(--mc-soft)",
                    lineHeight: 1.6,
                  }}>
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── QUESTIONNAIRE ── */}
        <section style={{ padding: "72px 0 48px", background: "var(--mc-white)" }} aria-label="Formulaire de réservation">
          <div className="mc-container" style={{ maxWidth: 780 }}>
            <div className="mc-reveal" style={{ textAlign: "center", marginBottom: 40 }}>
              <h2 style={{
                fontFamily: "var(--mc-display)",
                fontWeight: 600,
                fontSize: "clamp(24px, 3vw, 36px)",
                letterSpacing: "-0.03em",
                color: "var(--mc-ink)",
                marginBottom: 10,
              }}>
                Réserve ton appel gratuit
              </h2>
              <p style={{ fontSize: 15, color: "var(--mc-mute)" }}>
                2 minutes, 4 questions, puis tu choisis ton créneau.
              </p>
            </div>
            <div className="mc-reveal">
              <QualificationQuestionnaire />
            </div>
          </div>
        </section>

        {/* ── PREUVE SOCIALE : VIDEOS CLIENTS ── */}
        <section style={{ padding: "64px 0", background: "var(--mc-paper)" }} aria-label="Témoignages vidéos">
          <div className="mc-container">
            <div className="mc-reveal" style={{ textAlign: "center", marginBottom: 40 }}>
              <h2 style={{
                fontFamily: "var(--mc-display)",
                fontWeight: 600,
                fontSize: "clamp(24px, 3vw, 36px)",
                letterSpacing: "-0.03em",
                color: "var(--mc-ink)",
              }}>
                Ils l&apos;ont fait avant toi
              </h2>
              <p style={{ fontSize: 16, color: "var(--mc-soft)", marginTop: 8 }}>
                Découvre l&apos;expérience des étudiants que nous avons accompagnés.
              </p>
            </div>

            <div className="mc-reveal">
              {/* Carousel Vidéos Clients */}
              <div style={{
                display: "flex",
                gap: 24,
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                paddingBottom: 24,
                scrollbarWidth: "none",
              }}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} style={{
                    flex: "0 0 260px",
                    scrollSnapAlign: "start",
                    aspectRatio: "9/16",
                    background: "var(--mc-line)",
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: 20
                  }}>
                    <p style={{ color: "var(--mc-soft)", fontFamily: "var(--mc-mono)", fontSize: 13 }}>
                      [Vidéo Client {i}]<br/><br/>Format vertical<br/>(ex: Reel / TikTok)
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── AVIS GOOGLE ── */}
        <section style={{ padding: "64px 0 96px", background: "var(--mc-white)" }} aria-label="Avis de nos clients">
          <div className="mc-container">

            {/* Header */}
            <div className="mc-reveal" style={{ textAlign: "center", marginBottom: 40 }}>
              <div className="eyebrow-row" style={{ justifyContent: "center", marginBottom: 12 }}>
                <span className="dot" aria-hidden />
                <span className="eyebrow">Avis vérifiés Google</span>
              </div>
              <p style={{
                fontFamily: "var(--mc-display)",
                fontWeight: 600,
                fontSize: "clamp(22px, 3vw, 32px)",
                letterSpacing: "-0.03em",
                color: "var(--mc-ink)",
              }}>
                5,0 / 5 — 17 avis
              </p>
              <p style={{ fontSize: 22, marginTop: 4 }} aria-hidden>★★★★★</p>
            </div>

            {/* Carousel d'avis */}
            <ul style={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              gap: 20,
              listStyle: "none",
              paddingBottom: 24,
              scrollbarWidth: "none",
            }}>
              {AVIS.map((avis) => (
                <li key={avis.nom} className="mc-reveal" style={{
                  flex: "0 0 320px",
                  scrollSnapAlign: "start",
                  background: "var(--mc-paper)",
                  borderRadius: "var(--r-lg)",
                  padding: "28px 26px",
                  borderTop: "3px solid var(--mc-accent)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}>
                  <p style={{ fontSize: 16, color: "#F4B400", letterSpacing: 2 }} aria-label="5 étoiles">
                    ★★★★★
                  </p>
                  <p style={{
                    fontSize: 14.5,
                    color: "var(--mc-soft)",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    flexGrow: 1,
                  }}>
                    &ldquo;{avis.texte}&rdquo;
                  </p>
                  <strong style={{
                    fontFamily: "var(--mc-mono)",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--mc-ink)",
                  }}>
                    {avis.nom}
                  </strong>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* ── FOOTER MINIMAL ── */}
      <footer style={{
        background: "var(--mc-ink)",
        color: "#fff",
        padding: "36px 0",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}>
        <div className="mc-container" style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}>
          <div aria-label="Mobility Canada">
            <Image src="/logo.png" alt="Mobility Canada" width={52} height={64} style={{ borderRadius: 6 }} />
          </div>

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center" }}>
            <a href="mailto:contact@mobilitycanada.fr" style={{
              fontFamily: "var(--mc-mono)",
              fontSize: 13,
              color: "rgba(255,255,255,0.65)",
            }}>
              contact@mobilitycanada.fr
            </a>
            <a
              href="https://wa.me/33000000000"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#25D366", color: "#fff",
                padding: "9px 18px", borderRadius: 999,
                fontSize: 13, fontWeight: 600,
              }}
              aria-label="Nous contacter sur WhatsApp"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      <CookieBanner />
    </>
  );
}
