import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Études au Canada — Accompagnement étudiant à partir de 1 100€, Logement Sécurisé | Mobility Canada",
  description:
    "Accompagnement sur mesure pour étudier au Canada : validation programme, assistance immigration via avocats partenaires, logement sécurisé avant l'arrivée, accueil aéroport. Services à la carte dès 1 100€.",
  keywords: [
    "visa étudiant Canada", "CAQ Québec", "permis d'études Canada",
    "logement étudiant Montréal", "étudier au Canada depuis France",
    "accompagnement étudiant Canada", "parents étudiant Canada",
  ],
  openGraph: {
    title: "Étudier au Canada | Accompagnement à la carte dès 1 100€ — Mobility Canada",
    description: "Validation programme, assistance immigration, logement, accueil aéroport, installation. Services à la carte adaptés à votre projet.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quel est le calendrier idéal pour un départ à la prochaine rentrée ?",
      acceptedAnswer: { "@type": "Answer", text: "Nous recommandons de démarrer 6 mois avant la rentrée (M-6). À M-4, la lettre d'admission est obtenue et les frais immigration sont payés. À M-2, le permis d'études est validé et le volet logement est activé. Le jour J, un référent vous attend à l'aéroport." },
    },
    {
      "@type": "Question",
      name: "Gérez-vous directement les dossiers CAQ et permis d'études ?",
      acceptedAnswer: { "@type": "Answer", text: "Nous vous orientons, préparons et vérifions chaque document, mais les dossiers d'immigration sont soumis via nos avocats et para-juristes partenaires agréés. Vous bénéficiez d'un encadrement légal rigoureux tout au long du processus." },
    },
    {
      "@type": "Question",
      name: "Comment le logement est-il sécurisé avant le départ ?",
      acceptedAnswer: { "@type": "Answer", text: "Nous utilisons Kijiji, Centris et notre réseau de courtiers locaux pour trouver le logement adapté. Une confirmation écrite est remise avant l'embarquement." },
    },
    {
      "@type": "Question",
      name: "Mon enfant peut-il travailler pendant ses études ?",
      acceptedAnswer: { "@type": "Answer", text: "Oui. Les étudiants titulaires d'un permis valide peuvent travailler jusqu'à 24h/semaine hors campus durant les sessions et sans limite pendant les vacances. Ce droit est intégré dans le permis d'études." },
    },
    {
      "@type": "Question",
      name: "Combien coûte l'accompagnement complet ?",
      acceptedAnswer: { "@type": "Answer", text: "Nos services sont facturés à la carte, dès 1 100€ pour la recherche de logement. Chaque prestation est indépendante : accueil aéroport (300€), journée d'installation (500€), HELP LINE 1 an (180€)… Facturation en euros ou en dollars canadiens." },
    },
  ],
};

export default function EtudiantPage() {
  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ScrollReveal />

      <main id="main-content">

        {/* ══════════════════════════════════════════════
            1. E-HERO  — fond blanc, ton campus
        ══════════════════════════════════════════════ */}
        <section className="e-hero" aria-labelledby="etudiant-h1">
          <div className="mc-container">
            <div className="e-hero-grid">
              <div>
                <div className="eyebrow-row">
                  <span className="dot" aria-hidden="true" />
                  <span className="eyebrow">Étudiants &amp; familles — France métropolitaine &amp; DOM-TOM</span>
                </div>
                <h1 id="etudiant-h1">
                  Vos études<br />
                  au Canada.<br />
                  <em>Leur sérénité.</em>
                </h1>
                <p>
                  De la Martinique à Paris, nos étudiants arrivent au Canada avec tout en ordre.
                  Validation du programme, orientation immigration, logement sécurisé avant le départ,
                  accueil aéroport et 2 jours d&apos;installation sur place — le tout pour <strong>2 500€ HT</strong>.
                </p>
                <div className="e-hero-ctas">
                  <Link href="/rendez-vous" className="btn btn-primary btn-arrow">
                    Préparer mon dossier
                  </Link>
                  <a href="#logement" className="btn btn-ghost">
                    Question du logement
                  </a>
                </div>
              </div>

              <aside className="e-hero-aside">
                <span className="eyebrow">La promesse parents</span>
                <h3>Votre enfant arrive avec tout en ordre.</h3>
                <ul className="e-hero-checklist">
                  <li>Logement confirmé avant l&apos;embarquement</li>
                  <li>Référent présent à l&apos;aéroport</li>
                  <li>Rapport d&apos;étape à chaque validation</li>
                  <li>Check-in hebdomadaire — 4 premières semaines</li>
                  <li>Numéro direct pour les parents</li>
                </ul>
              </aside>
            </div>
          </div>

          <div className="mc-container">
            <div className="e-hero-footer" role="list" aria-label="Chiffres clés">
              {[
                { n: "1 100€", l: "À partir de" },
                { n: "6",      l: "Services disponibles" },
                { n: "M-6",    l: "Délai recommandé" },
                { n: "100 %",  l: "Paiement sécurisé avant départ" },
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
            1b. STRIP UNIVERSITÉS PARTENAIRES
        ══════════════════════════════════════════════ */}
        <div className="e-uni-strip" aria-hidden="true">
          <div className="mc-marquee">
            <div className="e-uni-track">
              {[
                "McGill University", "Université de Montréal", "Concordia University",
                "UQAM", "HEC Montréal", "Université Laval", "Simon Fraser University",
                "UBC Vancouver", "Université d'Ottawa", "UQAC",
                "McGill University", "Université de Montréal", "Concordia University",
                "UQAM", "HEC Montréal", "Université Laval", "Simon Fraser University",
                "UBC Vancouver", "Université d'Ottawa", "UQAC",
              ].map((name, i) => (
                <span key={i}>{name}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            2. LOGEMENT
        ══════════════════════════════════════════════ */}
        <section id="logement" className="log" aria-labelledby="log-heading">
          <div className="mc-container">
            <div className="log-grid">
              <div>
                <div className="eyebrow-row">
                  <span className="dot" aria-hidden="true" />
                  <span className="eyebrow">La question n°1 des parents</span>
                </div>
                <h2 id="log-heading" className="big-heading mc-reveal">
                  &ldquo;Il/Elle sera<br />
                  <span className="muted">bien logé(e) ?&rdquo;</span>
                </h2>
                <div className="log-pain">
                  Se retrouver sans logement à Montréal en août : une réalité pour des milliers
                  d&apos;étudiants chaque année. Nous avons bâti un réseau pour que ce ne soit jamais
                  le cas de vos enfants.
                </div>
                <p>
                  Nous travaillons avec un réseau de propriétaires et résidences étudiantes vérifiés.
                  Confirmation écrite avant l&apos;embarquement — aucune galère d&apos;hôtel à l&apos;arrivée.
                </p>
                <Link href="/rendez-vous" className="btn btn-primary btn-arrow mc-reveal" style={{ marginTop: 32 }}>
                  Sécuriser le logement
                </Link>
              </div>

              <div>
                <ul className="log-steps mc-reveal">
                  <li>
                    <div>
                      <h4>Définition des critères</h4>
                      <p>Budget, proximité campus, type de logement — nous cadrons ensemble avant de chercher.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Sélection &amp; visite virtuelle</h4>
                      <p>Notre équipe locale visite les logements présélectionnés et vous envoie un compte-rendu détaillé.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Réservation &amp; contrat</h4>
                      <p>Nous négocions et signons le bail. Confirmation écrite remise avant le départ de France.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Accueil J+1</h4>
                      <p>Remise des clés, installation, tour du quartier. Votre enfant est chez lui/elle dès le premier soir.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            2b. TIMELINE ACADÉMIQUE
        ══════════════════════════════════════════════ */}
        <section className="e-acadtimeline" aria-labelledby="acadtl-heading">
          <div className="mc-container">
            <div className="e-acadtimeline-head mc-reveal">
              <div className="eyebrow-row" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span className="dot" aria-hidden="true" />
                <span className="eyebrow">Votre calendrier rentrée</span>
              </div>
              <h2 id="acadtl-heading" className="big-heading">
                M-6 à J+0.<br />
                <span className="muted">On gère tout.</span>
              </h2>
            </div>
            <div className="e-acad-steps">
              {[
                {
                  label: "M-6",
                  title: "Lancement du dossier",
                  desc: "Analyse du profil, sélection du programme et de l'établissement. Lancement des démarches d'admission.",
                  tag: "Aujourd'hui",
                },
                {
                  label: "M-4",
                  title: "Admission & immigration",
                  desc: "Lettre d'admission obtenue. CAQ et permis d'études déposés via nos partenaires agréés.",
                  tag: "Frais payés",
                },
                {
                  label: "M-2",
                  title: "Logement sécurisé",
                  desc: "Permis validé. Logement trouvé, bail signé. Confirmation écrite remise avant le départ.",
                  tag: "Avant l'embarquement",
                },
                {
                  label: "J+0",
                  title: "Accueil & installation",
                  desc: "Référent à l'aéroport. Clés remises, compte bancaire, RAMQ, NAS — opérationnel en 48h.",
                  tag: "Jour J",
                },
              ].map(({ label, title, desc, tag }) => (
                <div key={label} className="e-acad-step mc-reveal">
                  <div className="e-acad-step-marker">
                    <div className="e-acad-step-bubble">{label}</div>
                    <div className="e-acad-step-line" aria-hidden="true" />
                  </div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                  <div className="acad-tag">{tag}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            3. SERVICES GRID
        ══════════════════════════════════════════════ */}
        <section className="svc" aria-labelledby="svc-heading">
          <div className="mc-container">
            <div className="svc-head mc-reveal">
              <div className="eyebrow-row">
                <span className="dot" aria-hidden="true" />
                <span className="eyebrow">Nos services</span>
              </div>
              <h2 id="svc-heading" className="big-heading">
                Tout ce dont<br />
                <span className="muted">un étudiant a besoin.</span>
              </h2>
            </div>
            <div className="svc-grid">
              {[
                { n: "01", title: "Validation du programme",     desc: "Analyse du profil académique, sélection du programme et de l&apos;établissement le mieux adapté à votre projet. Le bon choix dès le départ évite des mois de retard.", tag: "Inclus dans le pack" },
                { n: "02", title: "Assistance immigration",      desc: "Nous vous orientons et vous accompagnons dans vos démarches : CAQ, permis d&apos;études, traduction de documents. Les dossiers sont déposés via nos avocats et para-juristes partenaires agréés.", tag: "Via partenaires agréés" },
                { n: "03", title: "Accueil aéroport",            desc: "Un référent vous attend à l&apos;aéroport à votre atterrissage, vous accompagne à votre logement et vous remet les clés. Aucun taxi à chercher, aucune galère le jour J.", tag: "Inclus dans le pack" },
                { n: "04", title: "Logement sécurisé",           desc: "Recherche via Kijiji, Centris et courtiers locaux selon vos critères et votre budget. Confirmation écrite avant l&apos;embarquement — vous partez en sachant où vous dormez.", tag: "Avant le départ" },
                { n: "05", title: "Facilitateur d&apos;installation", desc: "2 jours sur place (16h) à vos côtés : ouverture de compte bancaire, RAMQ, NAS, repérage du quartier. Un accompagnement terrain pour que tout soit opérationnel en 48h.", tag: "2 jours / 16h inclus" },
                { n: "06", title: "Relais famille",              desc: "Un numéro direct dédié aux parents. Rapport d&apos;étape à chaque validation, check-in hebdomadaire les 4 premières semaines. Vous êtes informés, quoi qu&apos;il arrive.", tag: "Numéro dédié parents" },
              ].map(({ n, title, desc, tag }) => (
                <div key={n} className="svc-card mc-reveal">
                  <div className="n">{n}</div>
                  <h3 dangerouslySetInnerHTML={{ __html: title }} />
                  <p dangerouslySetInnerHTML={{ __html: desc }} />
                  <div className="tag">{tag}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 48, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/rendez-vous" className="btn btn-primary btn-arrow">
                Démarrer mon dossier étudiant
              </Link>
              <p style={{ fontSize: 14, color: "var(--mc-mute)", alignSelf: "center" }}>
                Consultation gratuite · Réponse sous 24h
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            3b. TARIFS
        ══════════════════════════════════════════════ */}
        <section className="pricing" aria-labelledby="pricing-heading">
          <div className="mc-container">
            <div className="mc-reveal" style={{ marginBottom: 40 }}>
              <div className="eyebrow-row">
                <span className="dot" aria-hidden="true" />
                <span className="eyebrow">Tarification transparente</span>
              </div>
              <h2 id="pricing-heading" className="big-heading">
                À la carte.<br />
                <span className="muted">Aucune surprise.</span>
              </h2>
            </div>

            <div className="pricing-grid">
              <div className="pricing-pack mc-reveal">
                <div className="pack-label eyebrow">Services à la carte</div>
                <div className="pack-price">1 100<span>€</span></div>
                <p className="pack-note">À partir de — chaque prestation est sélectionnable indépendamment. Facturation en euros (France &amp; DOM-TOM) ou en dollars canadiens.</p>
                <ul className="pack-includes">
                  <li>✓ Recherche de logement</li>
                  <li>✓ Logement temporaire</li>
                  <li>✓ Accueil aéroport</li>
                  <li>✓ Journée d'installation sur place</li>
                  <li>✓ Aide à l'ameublement</li>
                  <li>✓ HELP LINE — assistance 1 an</li>
                </ul>
                <Link href="/rendez-vous" className="btn btn-primary btn-arrow" style={{ marginTop: 32 }}>
                  Construire mon accompagnement
                </Link>
              </div>

              <div className="pricing-extras mc-reveal">
                <div className="pack-label eyebrow">Tarifs détaillés</div>
                <table className="extras-table">
                  <tbody>
                    {[
                      { label: "Recherche de logement",                          eur: "1 100€", cad: "1 600 CAD" },
                      { label: "Logement temporaire",                            eur: "200€",   cad: "300 CAD" },
                      { label: "Accueil aéroport",                               eur: "300€",   cad: "440 CAD" },
                      { label: "Journée d'installation",                         eur: "500€",   cad: "750 CAD" },
                      { label: "Orientation ville (4h)",                         eur: "250€",   cad: "—" },
                      { label: "Démarches RAMQ + NAS",                           eur: "100€",   cad: "—" },
                      { label: "Ouverture compte banque / tél / internet",       eur: "150€",   cad: "—" },
                      { label: "Course IKEA + livraison logement",               eur: "—",      cad: "150 CAD" },
                      { label: "Pack mobilier (lit/canapé/bureau/table/chaises)", eur: "—",     cad: "150 CAD" },
                      { label: "HELP LINE — assistance mail & tél (1 an)",       eur: "180€",   cad: "260 CAD" },
                    ].map(({ label, eur, cad }) => (
                      <tr key={label}>
                        <td>{label}</td>
                        <td>{eur}</td>
                        <td style={{ color: "var(--mc-mute)" }}>{cad}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            4. WHY CANADA
        ══════════════════════════════════════════════ */}
        <section className="why" data-hero-dark aria-labelledby="why-heading">
          <div className="mc-container">
            <div className="why-head mc-reveal">
              <div className="eyebrow-row" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span className="dot" aria-hidden="true" />
                <span className="eyebrow">Pourquoi le Canada</span>
              </div>
              <h2 id="why-heading" className="big-heading" style={{ color: "var(--mc-white)" }}>
                Pas juste une université.<br />
                <span style={{ color: "rgba(255,255,255,0.35)" }}>Un tremplin mondial.</span>
              </h2>
            </div>
            <div className="why-grid">
              {[
                { k: "30+",    title: "Universités Top 500 mondial",    desc: "McGill, UBC, U de Montréal, Concordia — des diplômes reconnus dans 190 pays." },
                { k: "−60 %",  title: "vs. le Royaume-Uni ou les USA",  desc: "40 à 60% moins cher pour un niveau de formation équivalent voire supérieur." },
                { k: "24h",    title: "Par semaine de travail autorisé", desc: "Hors campus pendant les sessions, sans limite pendant les vacances." },
                { k: "3 ans",  title: "PGWP après l&apos;obtention",    desc: "Permis de travail ouvert vers Express Entry et la résidence permanente." },
                { k: "2ème",   title: "Ville francophone mondiale",      desc: "Montréal : l&apos;immersion en français qui booste l&apos;employabilité internationale." },
                { k: "Top 10", title: "QS Best Student Cities",          desc: "Sécurité, qualité de vie, réseau alumni — Montréal et Vancouver au sommet." },
              ].map(({ k, title, desc }) => (
                <div key={k} className="why-item mc-reveal">
                  <div className="k">{k}</div>
                  <h3 dangerouslySetInnerHTML={{ __html: title }} />
                  <p dangerouslySetInnerHTML={{ __html: desc }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            5. SPLIT — Étudiant / Parents
        ══════════════════════════════════════════════ */}
        <section className="split" aria-labelledby="split-heading">
          <div className="mc-container">
            <div className="eyebrow-row mc-reveal">
              <span className="dot" aria-hidden="true" />
              <span className="eyebrow">Deux perspectives, une seule solution</span>
            </div>
            <h2 id="split-heading" className="big-heading mc-reveal" style={{ marginBottom: 48 }}>
              Pour vous.<br />
              <span className="muted">Pour eux.</span>
            </h2>
            <div className="split-grid">
              <div className="split-card to-you">
                <div>
                  <div className="label">Pour l&apos;étudiant</div>
                  <h3>Concentrez-vous sur votre avenir.</h3>
                  <p>Tout ce que vous n&apos;avez pas à gérer — pour que vous puissiez vous concentrer sur l&apos;essentiel : réussir vos études.</p>
                  <ul>
                    <li>✓ Dossier complet constitué à votre place</li>
                    <li>✓ Logement trouvé avant votre arrivée</li>
                    <li>✓ Accueil aéroport &amp; installation J+1</li>
                    <li>✓ Compte bancaire &amp; RAMQ gérés</li>
                    <li>✓ Référent disponible 90 jours</li>
                  </ul>
                </div>
                <Link href="/rendez-vous" className="btn btn-light btn-arrow" style={{ marginTop: 32, alignSelf: "flex-start" }}>
                  Démarrer mon dossier
                </Link>
              </div>
              <div className="split-card to-parents">
                <div>
                  <div className="label">Pour les parents</div>
                  <h3>Dormez sur vos deux oreilles.</h3>
                  <p>Vous êtes en France. Votre enfant est au Canada. Vous méritez de savoir exactement ce qui se passe.</p>
                  <ul>
                    <li>→ Rapport d&apos;étape à chaque validation</li>
                    <li>→ Logement confirmé avant l&apos;embarquement</li>
                    <li>→ Check-in hebdomadaire — 4 premières semaines</li>
                    <li>→ Numéro direct pour vous contacter</li>
                    <li>→ Tableau de bord partagé en temps réel</li>
                  </ul>
                </div>
                <Link href="/rendez-vous" className="btn btn-primary btn-arrow" style={{ marginTop: 32, alignSelf: "flex-start" }}>
                  Parler à un conseiller
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            6. FAQ
        ══════════════════════════════════════════════ */}
        <section id="faq-etudiant" className="faq" aria-labelledby="faq-heading">
          <div className="mc-container">
            <div className="faq-wrap">
              <div className="faq-head mc-reveal">
                <div className="eyebrow-row">
                  <span className="dot" aria-hidden="true" />
                  <span className="eyebrow">Questions fréquentes</span>
                </div>
                <h2 id="faq-heading" className="big-heading">
                  Les vraies<br />
                  <span className="muted">questions.</span>
                </h2>
              </div>

              {[
                {
                  q: "Quel est le calendrier idéal pour un départ à la prochaine rentrée ?",
                  a: "Nous recommandons de démarrer 6 mois avant la rentrée (M-6). À M-4, la lettre d&apos;admission est obtenue et les frais immigration sont payés. À M-2, le permis d&apos;études est validé et le volet logement est activé. Le jour J, un référent vous attend à l&apos;aéroport.",
                },
                {
                  q: "Gérez-vous directement les dossiers CAQ et permis d&apos;études ?",
                  a: "Nous vous orientons, préparons et vérifions chaque document, mais les dossiers d&apos;immigration sont soumis via nos avocats et para-juristes partenaires agréés. Cette distinction est importante : vous bénéficiez d&apos;un encadrement légal rigoureux tout au long du processus.",
                },
                {
                  q: "Quelle est la différence entre le CAQ et le permis d&apos;études ?",
                  a: "Le CAQ est un document provincial (Québec uniquement), délivré par le Ministère de l&apos;Immigration du Québec. Le permis d&apos;études est un document fédéral délivré par IRCC. Pour étudier au Québec, les deux sont obligatoires. Nos partenaires les traitent simultanément.",
                },
                {
                  q: "Comment le logement est-il sécurisé avant le départ ?",
                  a: "Nous utilisons les plateformes locales (Kijiji, Centris) et notre réseau de courtiers pour trouver le logement adapté à votre budget et à votre campus. Une confirmation écrite est remise avant l&apos;embarquement — votre enfant sait où il dort dès son arrivée.",
                },
                {
                  q: "Mon enfant peut-il travailler pendant ses études ?",
                  a: "Oui. Les étudiants titulaires d&apos;un permis valide peuvent travailler jusqu&apos;à 24h/semaine hors campus durant les sessions et sans limite pendant les vacances. Ce droit est intégré dans le permis d&apos;études — aucune démarche supplémentaire.",
                },
                {
                  q: "Combien coûte l&apos;accompagnement complet ?",
                  a: "Nos services sont facturés à la carte, dès 1 100€ pour la recherche de logement. Chaque prestation est sélectionnable indépendamment : logement temporaire (200€), accueil aéroport (300€), journée d&apos;installation (500€), HELP LINE 1 an (180€)… Facturation en euros ou en dollars canadiens.",
                },
              ].map(({ q, a }) => (
                <details key={q} className="faq-item">
                  <summary dangerouslySetInnerHTML={{ __html: q }} />
                  <p dangerouslySetInnerHTML={{ __html: a }} />
                </details>
              ))}

              <p style={{ marginTop: 32, fontSize: 14, color: "var(--mc-mute)" }}>
                Votre situation est unique ?{" "}
                <Link href="/rendez-vous" style={{ color: "var(--mc-ink)", fontWeight: 600, textDecoration: "underline" }}>
                  Parlez à un conseiller.
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            7. CTA BAR
        ══════════════════════════════════════════════ */}
        <section className="cta-bar" data-hero-dark aria-labelledby="cta-etudiant-heading">
          <div className="mc-container">
            <div className="cta-bar-grid">
              <div>
                <div className="eyebrow-row" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <span className="dot" aria-hidden="true" />
                  <span className="eyebrow">Consultation 100% gratuite</span>
                </div>
                <h2 id="cta-etudiant-heading">
                  L&apos;aventure commence.<br />
                  <em>L&apos;inquiétude s&apos;arrête.</em>
                </h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <Link href="/rendez-vous" className="btn btn-light btn-arrow">
                  Prendre rendez-vous
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
