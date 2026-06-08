import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";

export const metadata: Metadata = {
  title: "Mentions légales | Mobility Canada",
  description: "Mentions légales de Mobility Canada — éditeur, hébergeur et conditions d'utilisation du site mobilitycanada.fr.",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
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
            Mentions légales
          </h1>
          <p style={{ color: "var(--mc-mute)", fontSize: 14, marginBottom: 56 }}>
            Dernière mise à jour : juin 2025
          </p>

          <Section title="1. Éditeur du site">
            <p>
              Le site <strong>mobilitycanada.fr</strong> est édité par la société Mobility Canada,
              dont le siège social est établi en France métropolitaine.
            </p>
            <p style={{ marginTop: 12 }}>
              <strong>Email :</strong>{" "}
              <a href="mailto:contact@mobilitycanada.fr" style={{ color: "var(--mc-ink)" }}>
                contact@mobilitycanada.fr
              </a>
              <br />
              <strong>Téléphone :</strong>{" "}
              <a href="tel:+15143770857" style={{ color: "var(--mc-ink)" }}>
                +1 (514) 377-0857
              </a>
            </p>
          </Section>

          <Section title="2. Directeur de la publication">
            <p>
              Le directeur de la publication est le représentant légal de Mobility Canada.
            </p>
          </Section>

          <Section title="3. Hébergement">
            <p>
              Le site est hébergé par <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133,
              Covina, CA 91723, États-Unis.
              Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--mc-ink)" }}>vercel.com</a>
            </p>
          </Section>

          <Section title="4. Propriété intellectuelle">
            <p>
              L&apos;ensemble du contenu de ce site (textes, visuels, logos, structure) est la propriété
              exclusive de Mobility Canada. Toute reproduction, représentation ou diffusion, même
              partielle, est interdite sans autorisation écrite préalable.
            </p>
          </Section>

          <Section title="5. Responsabilité">
            <p>
              Mobility Canada s&apos;efforce de maintenir les informations de ce site à jour et exactes.
              Toutefois, la société ne peut garantir l&apos;exactitude, la complétude ou l&apos;actualité
              des informations diffusées. Les informations présentées ne constituent pas un conseil
              juridique en matière d&apos;immigration.
            </p>
            <p style={{ marginTop: 12 }}>
              Mobility Canada coordonne les démarches avec des consultants en immigration
              réglementés (CICC) et ne soumet pas directement de dossiers auprès de l&apos;IRCC.
            </p>
          </Section>

          <Section title="6. Liens hypertextes">
            <p>
              Le site peut contenir des liens vers des sites tiers. Mobility Canada n&apos;est pas
              responsable du contenu de ces sites et ne peut être tenu pour responsable
              des dommages résultant de leur consultation.
            </p>
          </Section>

          <Section title="7. Droit applicable">
            <p>
              Les présentes mentions légales sont soumises au droit français. Tout litige
              sera soumis à la juridiction compétente conformément aux règles en vigueur.
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
