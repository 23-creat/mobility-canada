import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation | Mobility Canada",
  description:
    "Conditions Générales d'Utilisation du site mobilitycanada.fr et des services de relocalisation et d'accompagnement immigration proposés par Mobility Canada.",
  robots: { index: false },
};

export default function CguPage() {
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
            Conditions Générales d&apos;Utilisation
          </h1>
          <p style={{ color: "var(--mc-mute)", fontSize: 14, marginBottom: 56 }}>
            Dernière mise à jour : juin 2025
          </p>

          <Section title="1. Objet">
            <p>
              Les présentes Conditions Générales d&apos;Utilisation (CGU) ont pour objet de définir les
              modalités d&apos;accès et d&apos;utilisation du site <strong>mobilitycanada.fr</strong> et
              des services proposés par Mobility Canada.
            </p>
          </Section>

          <Section title="2. Acceptation des CGU">
            <p>
              L&apos;accès et l&apos;utilisation du site impliquent l&apos;acceptation pleine et entière
              des présentes CGU. Si vous n&apos;acceptez pas ces conditions, nous vous invitons à ne pas
              utiliser le site.
            </p>
          </Section>

          <Section title="3. Description des services">
            <p>
              Mobility Canada propose des services de coordination et d&apos;accompagnement pour
              les personnes souhaitant s&apos;installer au Canada (Québec), notamment :
            </p>
            <ul style={{ marginTop: 10, paddingLeft: 20, display: "grid", gap: 6 }}>
              <li>Accompagnement dans les démarches d&apos;immigration (coordination avec des consultants agréés CICC)</li>
              <li>Recherche et sécurisation de logement à Montréal</li>
              <li>Accompagnement administratif à l&apos;installation</li>
              <li>Conseil et orientation pour les étudiants et familles</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              Mobility Canada n&apos;est pas un cabinet d&apos;avocats en immigration et ne soumet pas
              directement de dossiers auprès de l&apos;IRCC. Les démarches d&apos;immigration sont
              réalisées en coordination avec des Consultants en Immigration du Canada (CIC) réglementés
              par le Collège des consultants en immigration et en citoyenneté (CICC).
            </p>
          </Section>

          <Section title="4. Accès au site">
            <p>
              Le site est accessible 24h/24 et 7j/7, sauf interruption pour maintenance ou cas de
              force majeure. Mobility Canada ne peut être tenu responsable des interruptions de service
              liées à l&apos;hébergeur ou à des événements hors de son contrôle.
            </p>
          </Section>

          <Section title="5. Propriété intellectuelle">
            <p>
              Tous les éléments du site (textes, images, logos, code source) sont protégés par le
              droit de la propriété intellectuelle. Toute reproduction ou utilisation sans autorisation
              écrite préalable est interdite.
            </p>
          </Section>

          <Section title="6. Limitation de responsabilité">
            <p>
              Les informations présentes sur ce site sont fournies à titre indicatif et ne constituent
              pas un conseil juridique en matière d&apos;immigration. Mobility Canada ne peut être tenu
              responsable des décisions prises sur la base de ces informations.
            </p>
            <p style={{ marginTop: 12 }}>
              Les délais de traitement des dossiers d&apos;immigration dépendent des autorités
              compétentes (IRCC, gouvernement du Québec) et ne peuvent être garantis par Mobility Canada.
            </p>
          </Section>

          <Section title="7. Liens externes">
            <p>
              Le site peut contenir des liens vers des sites tiers (Calendly, Instagram, etc.).
              Mobility Canada n&apos;est pas responsable du contenu de ces sites externes.
            </p>
          </Section>

          <Section title="8. Modification des CGU">
            <p>
              Mobility Canada se réserve le droit de modifier les présentes CGU à tout moment.
              Les modifications entrent en vigueur dès leur publication sur le site.
              La date de dernière mise à jour est indiquée en haut de cette page.
            </p>
          </Section>

          <Section title="9. Droit applicable et juridiction">
            <p>
              Les présentes CGU sont soumises au droit français. Tout litige sera soumis à la
              juridiction des tribunaux compétents conformément aux règles de droit commun.
            </p>
          </Section>

          <Section title="10. Contact">
            <p>
              Pour toute question relative aux présentes CGU :{" "}
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
