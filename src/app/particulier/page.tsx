import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "S'installer au Canada — Guichet Unique, Zéro Démarche | Mobility Canada",
  description:
    "Un seul interlocuteur coordonne votre installation au Canada : logement, école, banque, santé et démarches administratives avec des professionnels habilités.",
  keywords: [
    "relocalisation famille Canada", "installation famille Montréal",
    "relocalisation Montréal", "guichet unique relocalisation",
    "s'installer au Canada", "accompagnement installation Canada",
  ],
  openGraph: {
    title: "Zéro Démarche. Un Seul Interlocuteur. | Mobility Canada",
    description: "Logement, école, banque, santé et coordination administrative — votre conseiller dédié porte la charge mentale à votre place.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Pouvez-vous coordonner les démarches administratives d'installation ?",
      acceptedAnswer: { "@type": "Answer", text: "Oui. Mobility Canada coordonne les étapes de relocalisation et peut vous orienter vers des professionnels habilités pour les volets réglementés. Nous ne faisons pas de représentation légale directe." },
    },
    {
      "@type": "Question",
      name: "Peut-on s'installer au Canada sans avoir d'emploi au préalable ?",
      acceptedAnswer: { "@type": "Answer", text: "Selon votre situation, plusieurs parcours peuvent exister. Nous aidons à cadrer le projet d'installation et à identifier les bons interlocuteurs pour les démarches réglementées." },
    },
    {
      "@type": "Question",
      name: "Le conjoint peut-il travailler dès l'arrivée ?",
      acceptedAnswer: { "@type": "Answer", text: "Cela dépend du statut et du dossier familial. Nous clarifions les étapes avec vous et coordonnons, si nécessaire, avec des professionnels habilités." },
    },
  ],
};

export default function ParticulierPage() {
  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ScrollReveal />

      <main id="main-content">

        {/* ══════════════════════════════════════════════
            1. P-HERO — Crème, conciergerie famille
        ══════════════════════════════════════════════ */}
        <section className="p-hero" aria-labelledby="particulier-h1">
          <div className="mc-container">
            <div className="p-hero-inner">
              <div>
                <div className="eyebrow-row">
                  <span className="dot" aria-hidden="true" />
                  <span className="eyebrow">Particuliers &amp; Familles — Guichet Unique</span>
                </div>
                <h1 id="particulier-h1">
                  Un seul appel.<br />
                  <em>On s&apos;occupe du reste.</em>
                </h1>
                <p>
                  Logement, école, banque, santé et coordination administrative —
                  votre conseiller dédié porte la charge mentale de l&apos;installation à votre place.
                  Pour les démarches réglementées, nous coordonnons avec des professionnels habilités.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link href="/rendez-vous/particulier" className="btn btn-primary btn-arrow">
                    Déléguer mon installation
                  </Link>
                  <a href="#pathways" className="btn btn-ghost">
                    Voir les programmes
                  </a>
                </div>
              </div>

              <aside className="p-hero-aside">
                <div className="n">M-6</div>
                <p>Délai recommandé pour démarrer votre accompagnement avant la date d&apos;installation visée.</p>
                <ul>
                  <li><span>Projet d&apos;installation</span><span>Cadrage</span></li>
                  <li><span>Logement sécurisé</span><span>Avant l&apos;arrivée</span></li>
                  <li><span>École des enfants</span><span>Confirmée J-0</span></li>
                  <li><span>Compte bancaire</span><span>À distance</span></li>
                  <li><span>Couverture santé</span><span>Dès J+1</span></li>
                  <li><span>Démarches réglementées</span><span>Coordonnées</span></li>
                </ul>
              </aside>
            </div>
          </div>

          {/* Stats footer */}
          <div className="mc-container">
            <div className="p-hero-footer" role="list" aria-label="Chiffres clés">
              {[
                { n: "M-6", l: "Délai recommandé" },
                { n: "0",      l: "Formulaire à remplir" },
                { n: "100 %",  l: "Charge déléguée" },
                { n: "J+1",    l: "Opérationnel à l'arrivée" },
              ].map(({ n, l }) => (
                <div key={l} role="listitem">
                  <div className="n">{n}</div>
                  <div className="l">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════
            2. PATHWAYS — coordination administrative
        ══════════════════════════════════════════════ */}
        <section id="pathways" className="pathways" aria-labelledby="pathways-heading">
          <div className="mc-container">
            <div className="pathways-head mc-reveal">
              <div className="eyebrow-row">
                <span className="dot" aria-hidden="true" />
                <span className="eyebrow">Coordination administrative</span>
              </div>
              <h2 id="pathways-heading" className="big-heading">
                Votre arrivée<br />
                <span className="muted">sans charge mentale.</span>
              </h2>
            </div>

            {[
              {
                tag: "Cadrage",
                title: "Audit du projet",
                desc: "Objectif d'installation, calendrier, composition familiale, budget et étapes prioritaires.",
                dur: "M-6",
              },
              {
                tag: "Coordination",
                title: "Démarches réglementées",
                desc: "Mise en relation et coordination avec les professionnels habilités lorsque votre dossier le nécessite.",
                dur: "Selon dossier",
              },
              {
                tag: "Terrain",
                title: "Logement familial",
                desc: "Recherche de logement adaptée au quartier, à l'école, au budget et au calendrier d'arrivée.",
                dur: "Avant départ",
              },
              {
                tag: "Famille",
                title: "École et santé",
                desc: "Préparation des inscriptions, assurances de transition et repères administratifs des premiers jours.",
                dur: "J-0 / J+1",
              },
              {
                tag: "Installation",
                title: "Banque et quotidien",
                desc: "Ouverture de compte, téléphone, NAS, repérage du quartier et organisation de l'arrivée.",
                dur: "J+1",
              },
            ].map(({ tag, title, desc, dur }) => (
              <div key={title} className="path-row mc-reveal">
                <div className="tag">{tag}</div>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: title }} />
                  <p>{desc}</p>
                </div>
                <div className="dur">{dur}</div>
                <Link href="/rendez-vous/particulier" className="arrow" aria-label={`En savoir plus sur ${title}`}>→</Link>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            3. FAMILY — accompagnement famille
        ══════════════════════════════════════════════ */}
        <section className="family" data-hero-dark aria-labelledby="family-heading">
          <div className="mc-container">
            <div className="family-head mc-reveal">
              <div className="eyebrow-row" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span className="dot" aria-hidden="true" />
                <span className="eyebrow">Installation familiale complète</span>
              </div>
              <h2 id="family-heading" className="big-heading" style={{ color: "var(--mc-white)" }}>
                Chaque membre de<br />
                <span style={{ color: "rgba(255,255,255,0.35)" }}>votre famille est pris en charge.</span>
              </h2>
            </div>
            <div className="family-grid">
              {[
                { n: "01", title: "Logement sécurisé",    desc: "Bail négocié et signé depuis la France métropolitaine ou les DOM-TOM. Adresse confirmée avant l&apos;arrivée.", tag: "Avant le départ" },
                { n: "02", title: "École des enfants",     desc: "Inscriptions, choix du quartier scolaire, démarches administratives — bouclés avant l&apos;arrivée.", tag: "Francophone ou anglophone" },
                { n: "03", title: "Compte bancaire",       desc: "Ouverture à distance auprès des grandes banques canadiennes. Votre carte arrive avant vous.", tag: "Grandes banques partenaires" },
                { n: "04", title: "Couverture santé",      desc: "RAMQ + assurance de transition pour les 3 premiers mois. Famille entière couverte dès J+1.", tag: "Zéro rupture de couverture" },
              ].map(({ n, title, desc, tag }) => (
                <div key={title} className="family-card mc-reveal">
                  <div className="fc-num">{n}</div>
                  <h3>{title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: desc }} />
                  <div className="tag">{tag}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            4. QUOTE — témoignage
        ══════════════════════════════════════════════ */}
        <section className="quote-section" aria-labelledby="quote-heading">
          <div className="mc-container">
            <div className="quote-wrap">
              <h2 id="quote-heading" className="sr-only">Témoignage famille</h2>
              <div className="eyebrow-row mc-reveal">
                <span className="dot" aria-hidden="true" />
                <span className="eyebrow">Témoignage famille</span>
              </div>
              <blockquote className="q mc-reveal">
                &ldquo;Mobility Canada, un accompagnement personnalisé au delà de mes espérances.
                Très satisfaite des prestations et un suivi même après l&apos;installation.
                Je vous le recommande à <em>100&nbsp;%.</em>&rdquo;
              </blockquote>
              <div className="quote-who mc-reveal">
                <div className="av" aria-hidden="true">CC</div>
                <div>
                  <div className="name">Chana C.</div>
                  <div className="role">Particulier · Montréal — Avis Google ★★★★★</div>
                </div>
              </div>
              <div className="mc-reveal" style={{ marginTop: 24 }}>
                <a
                  href="https://share.google/jkxzEavPE2aBmKPKV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ fontSize: 13 }}
                >
                  Voir tous les avis Google →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            5. FAQ
        ══════════════════════════════════════════════ */}
        <section id="faq-particulier" className="faq" aria-labelledby="faq-p-heading">
          <div className="mc-container">
            <div className="faq-wrap">
              <div className="faq-head mc-reveal">
                <div className="eyebrow-row">
                  <span className="dot" aria-hidden="true" />
                  <span className="eyebrow">Questions fréquentes</span>
                </div>
                <h2 id="faq-p-heading" className="big-heading">
                  Les vraies réponses.<br />
                  <span className="muted">Sans jargon.</span>
                </h2>
              </div>
              {[
                {
                  q: "Pouvez-vous coordonner les démarches administratives d&apos;installation ?",
                  a: "Oui. Mobility Canada coordonne les étapes de relocalisation et peut vous orienter vers des professionnels habilités pour les volets réglementés. Nous ne faisons pas de représentation légale directe.",
                },
                {
                  q: "Peut-on s&apos;installer au Canada sans avoir d&apos;emploi au préalable ?",
                  a: "Selon votre situation, plusieurs parcours peuvent exister. Nous aidons à cadrer le projet d&apos;installation et à identifier les bons interlocuteurs pour les démarches réglementées.",
                },
                {
                  q: "Nos enfants peuvent-ils aller à l&apos;école francophone ?",
                  a: "Au Québec, les enfants dont au moins un parent est citoyen canadien ou détenteur d&apos;un certificat de sélection accèdent à l&apos;école francophone publique. Nous gérons l&apos;ensemble des inscriptions avant votre arrivée.",
                },
                {
                  q: "Le conjoint peut-il travailler dès l&apos;arrivée ?",
                  a: "Cela dépend du statut et du dossier familial. Nous clarifions les étapes avec vous et coordonnons, si nécessaire, avec des professionnels habilités.",
                },
                {
                  q: "Comment se passe la couverture médicale à l&apos;arrivée ?",
                  a: "La RAMQ démarre après un délai de carence de 3 mois. Nous vous préparons une assurance privée de transition pour couvrir cette période — famille entière incluse. L&apos;inscription à la RAMQ est gérée dans les premiers jours suivant votre arrivée.",
                },
              ].map(({ q, a }) => (
                <details key={q} className="faq-item">
                  <summary dangerouslySetInnerHTML={{ __html: q }} />
                  <p dangerouslySetInnerHTML={{ __html: a }} />
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            6. CTA BAR RED
        ══════════════════════════════════════════════ */}
        <section className="cta-bar-red" aria-labelledby="cta-p-heading">
          <div className="mc-container">
            <div className="cta-bar-grid">
              <div>
                <div className="eyebrow-row" style={{ color: "rgba(255,255,255,0.6)" }}>
                  <span className="dot" style={{ background: "rgba(255,255,255,0.4)" }} aria-hidden="true" />
                  <span className="eyebrow">Consultation 100% gratuite</span>
                </div>
                <h2 id="cta-p-heading" style={{ fontFamily: "var(--mc-display)", fontSize: "clamp(32px,5vw,64px)", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1, color: "var(--mc-white)" }}>
                  Votre nouvelle vie au Canada.<br />
                  Votre charge mentale, c&apos;est notre métier.
                </h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <Link href="/rendez-vous/particulier" className="btn btn-light btn-arrow">
                  Déléguer mon installation
                </Link>
                <a href="tel:+15143770857" className="btn btn-ghost-dark">
                  +1 (514) 377-0857
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
