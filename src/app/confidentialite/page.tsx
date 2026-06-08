import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Mobility Canada",
  description:
    "Politique de confidentialité et traitement des données personnelles de Mobility Canada. Conformité RGPD et Loi 25 du Québec.",
  robots: { index: false },
};

export default function ConfidentialitePage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <article
          style={{
            maxWidth: 720,
            margin: "0 auto",
            padding: "clamp(100px, 14vw, 160px) clamp(20px, 5vw, 40px) clamp(80px, 10vw, 120px)",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--mc-display)",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              color: "var(--mc-ink)",
              marginBottom: 12,
            }}
          >
            Politique de confidentialité
          </h1>
          <p style={{ color: "var(--mc-mute)", fontSize: 14, marginBottom: 56 }}>
            Dernière mise à jour : juin 2025
          </p>

          <Section title="1. Responsable du traitement">
            <p>
              Le responsable du traitement des données personnelles collectées sur ce site est
              <strong> Mobility Canada</strong>.
              Contact : <a href="mailto:contact@mobilitycanada.fr" style={{ color: "var(--mc-ink)" }}>contact@mobilitycanada.fr</a>
            </p>
          </Section>

          <Section title="2. Données collectées">
            <p>Nous collectons les données suivantes :</p>
            <ul style={{ marginTop: 10, paddingLeft: 20, display: "grid", gap: 6 }}>
              <li>Prénom, adresse email, numéro de téléphone (WhatsApp)</li>
              <li>Réponses au questionnaire de qualification (situation, projet d&apos;études)</li>
              <li>Données de navigation (cookies analytiques, si consentis)</li>
              <li>Données UTM pour mesurer l&apos;efficacité de nos campagnes</li>
            </ul>
          </Section>

          <Section title="3. Finalités du traitement">
            <p>Vos données sont utilisées pour :</p>
            <ul style={{ marginTop: 10, paddingLeft: 20, display: "grid", gap: 6 }}>
              <li>Préparer et personnaliser votre appel de découverte</li>
              <li>Vous envoyer des informations utiles sur votre projet (si consentement)</li>
              <li>Améliorer nos services et notre expérience utilisateur</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </Section>

          <Section title="4. Base légale">
            <p>
              Le traitement est fondé sur votre consentement (formulaires, cookies) et sur
              l&apos;exécution d&apos;un contrat ou de mesures précontractuelles (préparation de l&apos;appel,
              suivi de votre dossier).
            </p>
          </Section>

          <Section title="5. Durée de conservation">
            <p>
              Vos données sont conservées pendant <strong>24 mois</strong> à compter de votre
              dernier contact avec nous, sauf obligation légale de conservation plus longue.
              Les données de prospects non qualifiés sont supprimées au bout de 6 mois.
            </p>
          </Section>

          <Section title="6. Destinataires des données">
            <p>
              Vos données peuvent être partagées avec :
            </p>
            <ul style={{ marginTop: 10, paddingLeft: 20, display: "grid", gap: 6 }}>
              <li>Nos outils CRM et d&apos;emailing (Brevo — hébergé en Europe)</li>
              <li>Notre outil de prise de rendez-vous (Calendly — États-Unis, transfert encadré)</li>
              <li>Les consultants en immigration réglementés (CICC) avec qui nous collaborons</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              Aucune donnée n&apos;est vendue à des tiers.
            </p>
          </Section>

          <Section title="7. Vos droits">
            <p>
              Conformément au RGPD (UE 2016/679) et à la Loi 25 du Québec, vous disposez des droits
              suivants : accès, rectification, effacement, limitation du traitement, portabilité
              et opposition. Pour exercer ces droits, écrivez à{" "}
              <a href="mailto:contact@mobilitycanada.fr" style={{ color: "var(--mc-ink)" }}>
                contact@mobilitycanada.fr
              </a>. Nous répondons sous 30 jours.
            </p>
          </Section>

          <Section title="8. Cookies">
            <p>
              Nous utilisons des cookies analytiques (mesure d&apos;audience) et fonctionnels
              (mémorisation de vos préférences). Aucun cookie publicitaire tiers n&apos;est déposé
              sans votre consentement explicite. Vous pouvez gérer vos préférences via la
              bannière de consentement présente sur le site.
            </p>
          </Section>

          <Section title="9. Contact DPO">
            <p>
              Pour toute question relative à vos données personnelles :{" "}
              <a href="mailto:contact@mobilitycanada.fr" style={{ color: "var(--mc-ink)" }}>
                contact@mobilitycanada.fr
              </a>
            </p>
          </Section>
        </article>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2
        style={{
          fontFamily: "var(--mc-display)",
          fontSize: "clamp(18px, 2.2vw, 22px)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "var(--mc-ink)",
          marginBottom: 14,
          paddingBottom: 10,
          borderBottom: "1px solid var(--mc-line)",
        }}
      >
        {title}
      </h2>
      <div style={{ fontSize: 15, color: "var(--mc-soft)", lineHeight: 1.7 }}>
        {children}
      </div>
    </section>
  );
}
