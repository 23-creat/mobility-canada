import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "S'installer au Canada — Guichet Unique, Zéro Démarche | Mobility Canada",
  description:
    "Un seul interlocuteur gère tout : résidence permanente, logement, école, banque, santé. Supprimez totalement la charge mentale de votre installation au Canada.",
  keywords: [
    "immigration Canada famille", "résidence permanente Canada",
    "relocalisation Montréal", "guichet unique immigration",
    "s'installer au Canada", "accompagnement installation Canada",
  ],
  openGraph: {
    title: "Zéro Démarche. Un Seul Interlocuteur. | Mobility Canada",
    description: "Résidence permanente, logement, école, banque — votre conseiller dédié porte la charge mentale à votre place.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de temps faut-il pour obtenir la résidence permanente au Canada ?",
      acceptedAnswer: { "@type": "Answer", text: "Le délai varie selon le programme : Express Entry traite les dossiers en 6 à 8 mois en moyenne. Le Programme de l'expérience québécoise (PEQ) peut être plus rapide (4 à 6 mois) si vous êtes déjà sur place." },
    },
    {
      "@type": "Question",
      name: "Peut-on s'installer au Canada sans avoir d'emploi au préalable ?",
      acceptedAnswer: { "@type": "Answer", text: "Oui, absolument. La majorité de nos clients arrivent sans offre d'emploi. Des programmes comme Express Entry évaluent votre potentiel sur la base de vos compétences et de votre formation." },
    },
    {
      "@type": "Question",
      name: "Le conjoint peut-il travailler dès l'arrivée ?",
      acceptedAnswer: { "@type": "Answer", text: "Oui. Dans le cadre des demandes de résidence permanente, le conjoint reçoit un permis de travail ouvert (PTO) lui permettant d'exercer toute activité professionnelle sans restriction." },
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
                  Résidence permanente, logement, école, banque, santé, permis de travail du conjoint —
                  votre conseiller dédié porte l&apos;intégralité de la charge administrative à votre place.
                  Vous n&apos;ouvrez plus jamais un formulaire IRCC.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link href="/rendez-vous" className="btn btn-primary btn-arrow">
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
                  <li><span>Résidence permanente</span><span>Express Entry</span></li>
                  <li><span>Logement sécurisé</span><span>Avant l&apos;arrivée</span></li>
                  <li><span>École des enfants</span><span>Confirmée J-0</span></li>
                  <li><span>Compte bancaire</span><span>À distance</span></li>
                  <li><span>Couverture santé</span><span>Dès J+1</span></li>
                  <li><span>Permis conjoint</span><span>Inclus dans le dossier</span></li>
                </ul>
              </aside>
            </div>
          </div>

          {/* Stats footer */}
          <div className="mc-container">
            <div className="p-hero-footer" role="list" aria-label="Chiffres clés">
              {[
                { n: "6 mois", l: "Express Entry moyen" },
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
            2. PATHWAYS — programmes d'immigration
        ══════════════════════════════════════════════ */}
        <section id="pathways" className="pathways" aria-labelledby="pathways-heading">
          <div className="mc-container">
            <div className="pathways-head mc-reveal">
              <div className="eyebrow-row">
                <span className="dot" aria-hidden="true" />
                <span className="eyebrow">Programmes d&apos;immigration</span>
              </div>
              <h2 id="pathways-heading" className="big-heading">
                Votre chemin<br />
                <span className="muted">vers la résidence permanente.</span>
              </h2>
            </div>

            {[
              {
                tag: "Fédéral",
                title: "Express Entry",
                desc: "Système de points basé sur le profil (âge, diplôme, expérience, langue). La voie la plus rapide pour les profils qualifiés.",
                dur: "6–8 mois",
              },
              {
                tag: "Québec",
                title: "Programme de l&apos;Expérience Québécoise (PEQ)",
                desc: "Conçu pour les travailleurs qualifiés et diplômés d&apos;un établissement québécois déjà présents au Québec.",
                dur: "4–6 mois",
              },
              {
                tag: "Québec",
                title: "Programme Régulier des Travailleurs Qualifiés",
                desc: "Pour les profils avec une offre d&apos;emploi validée ou une expérience professionnelle reconnue au Québec.",
                dur: "12–18 mois",
              },
              {
                tag: "Fédéral",
                title: "Regroupement familial",
                desc: "Rejoindre un membre de sa famille déjà résident permanent ou citoyen canadien.",
                dur: "12–24 mois",
              },
              {
                tag: "Stratégique",
                title: "Visa de startup &amp; entrepreneur",
                desc: "Pour les entrepreneurs avec un projet d&apos;entreprise innovant soutenu par un organisme désigné canadien.",
                dur: "Variable",
              },
            ].map(({ tag, title, desc, dur }) => (
              <div key={title} className="path-row mc-reveal">
                <div className="tag">{tag}</div>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: title }} />
                  <p>{desc}</p>
                </div>
                <div className="dur">{dur}</div>
                <Link href="/rendez-vous" className="arrow" aria-label={`En savoir plus sur ${title}`}>→</Link>
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
                { n: "01", title: "Logement sécurisé",    desc: "Bail négocié et signé depuis la France. Adresse confirmée avant l&apos;arrivée.", tag: "Avant le départ" },
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
                  q: "Combien de temps faut-il pour obtenir la résidence permanente ?",
                  a: "Le délai varie selon le programme : Express Entry traite les dossiers en 6 à 8 mois en moyenne. Le PEQ peut être plus rapide (4 à 6 mois) si vous êtes déjà au Québec. Nos consultants analysent votre profil pour identifier le chemin le plus court.",
                },
                {
                  q: "Peut-on s&apos;installer au Canada sans avoir d&apos;emploi au préalable ?",
                  a: "Oui, absolument. La majorité de nos clients arrivent sans offre d&apos;emploi. Des programmes comme Express Entry évaluent votre potentiel sur la base de vos compétences et de votre formation. Nous optimisons votre score CRS.",
                },
                {
                  q: "Nos enfants peuvent-ils aller à l&apos;école francophone ?",
                  a: "Au Québec, les enfants dont au moins un parent est citoyen canadien ou détenteur d&apos;un certificat de sélection accèdent à l&apos;école francophone publique. Nous gérons l&apos;ensemble des inscriptions avant votre arrivée.",
                },
                {
                  q: "Le conjoint peut-il travailler dès l&apos;arrivée ?",
                  a: "Oui. Dans le cadre des demandes de résidence permanente, le conjoint reçoit un permis de travail ouvert (PTO) lui permettant d&apos;exercer toute activité professionnelle sans restriction. Nous intégrons cette démarche dans votre dossier dès le départ.",
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
                <Link href="/rendez-vous" className="btn btn-light btn-arrow">
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
