import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";

export const metadata: Metadata = {
  title: "Conformité Loi 25 (Québec) | Mobility Canada",
  description:
    "Mobility Canada et la Loi 25 du Québec — comment nous protégeons les données personnelles de nos clients québécois et internationaux.",
  robots: { index: false },
};

export default function Loi25Page() {
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
            Conformité Loi 25
          </h1>
          <p style={{ color: "var(--mc-mute)", fontSize: 14, marginBottom: 16 }}>
            Loi modernisant des dispositions législatives en matière de protection des renseignements personnels (Québec)
          </p>
          <p style={{ color: "var(--mc-mute)", fontSize: 14, marginBottom: 56 }}>
            Dernière mise à jour : juin 2025
          </p>

          <Section title="Qu'est-ce que la Loi 25 ?">
            <p>
              La Loi 25 (anciennement Projet de loi 64) est la loi québécoise sur la protection des
              renseignements personnels. Entrée en vigueur progressivement depuis septembre 2022, elle
              renforce les droits des individus sur leurs données et impose des obligations strictes
              aux entreprises qui collectent des renseignements personnels de résidents du Québec.
            </p>
          </Section>

          <Section title="Notre engagement">
            <p>
              Mobility Canada accompagne des personnes qui s&apos;installent au Québec. À ce titre,
              nous collectons des renseignements personnels de résidents ou futurs résidents québécois
              et nous nous engageons à respecter pleinement la Loi 25.
            </p>
          </Section>

          <Section title="Responsable de la protection des renseignements personnels">
            <p>
              Conformément à la Loi 25, un responsable de la protection des renseignements personnels
              a été désigné au sein de Mobility Canada. Vous pouvez le contacter à :{" "}
              <a href="mailto:contact@mobilitycanada.fr" style={{ color: "var(--mc-ink)" }}>
                contact@mobilitycanada.fr
              </a>
            </p>
          </Section>

          <Section title="Vos droits en vertu de la Loi 25">
            <ul style={{ paddingLeft: 20, display: "grid", gap: 10 }}>
              <li>
                <strong>Droit d&apos;accès :</strong> vous pouvez demander l&apos;accès à vos
                renseignements personnels détenus par Mobility Canada.
              </li>
              <li>
                <strong>Droit de rectification :</strong> vous pouvez demander la correction
                de renseignements inexacts ou incomplets.
              </li>
              <li>
                <strong>Droit à la portabilité :</strong> vous pouvez demander que vos
                renseignements vous soient communiqués dans un format technologique usuel.
              </li>
              <li>
                <strong>Droit à la désinscription :</strong> vous pouvez vous désabonner
                de toute communication commerciale en un clic.
              </li>
              <li>
                <strong>Droit à la suppression :</strong> sous certaines conditions, vous pouvez
                demander l&apos;effacement de vos renseignements.
              </li>
            </ul>
          </Section>

          <Section title="Consentement et finalités">
            <p>
              Nous collectons uniquement les renseignements personnels nécessaires à la fourniture
              de nos services. Le consentement est recueilli de manière explicite via nos formulaires.
              Vous pouvez retirer votre consentement à tout moment.
            </p>
          </Section>

          <Section title="Incidents de confidentialité">
            <p>
              En cas d&apos;incident de confidentialité présentant un risque sérieux de préjudice,
              nous nous engageons à vous en informer et à aviser la Commission d&apos;accès à
              l&apos;information (CAI) du Québec dans les délais prévus par la loi.
            </p>
          </Section>

          <Section title="Exercer vos droits">
            <p>
              Pour exercer l&apos;un de vos droits ou pour toute question relative à la protection
              de vos renseignements personnels :{" "}
              <a href="mailto:contact@mobilitycanada.fr" style={{ color: "var(--mc-ink)" }}>
                contact@mobilitycanada.fr
              </a>
              <br />
              Nous nous engageons à répondre dans un délai de 30 jours.
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
