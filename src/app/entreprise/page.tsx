import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Immigration Professionnelle Canada — EIMT, Permis de Travail, ROI RH | Mobility Canada",
  description:
    "Réduisez votre time-to-hire, éliminez votre risque IRCC. EIMT, permis de travail fermés, transferts intra-compagnie. Senior Advisor dédié. Devis B2B sous 48h.",
  keywords: [
    "immigration professionnelle Canada", "recrutement travailleurs étrangers",
    "EIMT Canada service", "permis de travail employeur", "transfert intra-compagnie Canada",
    "mobilité RH internationale", "conformité employeur immigration",
  ],
  openGraph: {
    title: "Recrutez en semaines, pas en mois | Mobility Canada B2B",
    description: "EIMT, permis de travail, conformité IRCC. De la décision à la prise de poste en 9 semaines.",
  },
};

export default function EntreprisePage() {
  return (
    <>
      <Navbar />
      <ScrollReveal />

      <main id="main-content">

        {/* ══════════════════════════════════════════════
            1. B-HERO — Charcoal corporate, grille + KPI panel
        ══════════════════════════════════════════════ */}
        <section className="b-hero" aria-labelledby="entreprise-h1">
          <div className="b-hero-inner mc-container">
            <div className="b-hero-grid">
              <div>
                <div className="eyebrow-row" style={{ color: "rgba(255,255,255,0.42)" }}>
                  <span className="dot" aria-hidden="true" />
                  <span className="eyebrow">Solutions B2B — Performance &amp; Conformité</span>
                </div>
                <h1 id="entreprise-h1">
                  Recrutez en semaines,<br />
                  <em>pas en mois.</em>
                </h1>
                <p className="b-hero-desc">
                  Chaque semaine de blocage sur un recrutement international représente un coût direct
                  pour votre organisation. Mobility Canada réduit votre time-to-hire, élimine votre
                  risque de non-conformité IRCC et fait de la mobilité internationale un avantage
                  compétitif, pas un frein opérationnel.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link href="/rendez-vous" className="btn btn-light btn-arrow">
                    Consultation B2B
                  </Link>
                  <a href="#process-b" className="btn btn-ghost-dark">
                    EIMT → 9 semaines
                  </a>
                </div>
              </div>

              <aside className="b-hero-kpi">
                <div className="b-kpi-header">
                  <span className="b-kpi-live" aria-hidden="true" />
                  <span className="b-kpi-header-label">SLA Garanti — Mobility Canada</span>
                </div>
                <div className="b-kpi-grid" role="list" aria-label="Indicateurs clés">
                  {[
                    { metric: "9", u: " sem", label: "EIMT → prise de poste" },
                    { metric: "48h", u: "", label: "Pré-qualification ICT" },
                    { metric: "5j", u: "", label: "Audit IRCC livré" },
                    { metric: "0h", u: "", label: "Démarche pour votre DRH" },
                  ].map(({ metric, u, label }) => (
                    <div key={label} className="b-kpi-cell" role="listitem">
                      <div className="metric">{metric}<span className="u">{u}</span></div>
                      <div className="kpi-label">{label}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/rendez-vous"
                  className="btn btn-accent btn-arrow"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Demander un devis B2B
                </Link>
              </aside>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════
            3. OFFER GRID
        ══════════════════════════════════════════════ */}
        <section className="offer" aria-labelledby="offer-heading">
          <div className="mc-container">
            <div className="offer-head mc-reveal">
              <div>
                <div className="eyebrow-row">
                  <span className="dot" aria-hidden="true" />
                  <span className="eyebrow">Nos solutions B2B</span>
                </div>
                <h2 id="offer-heading" className="big-heading">
                  Six leviers.<br />
                  <span className="muted">Une mobilité performante.</span>
                </h2>
              </div>
              <p>
                De l&apos;étude d&apos;impact à l&apos;onboarding complet, chaque étape est gérée
                par votre Senior Advisor dédié. Votre DRH recrute. Nous faisons le reste.
              </p>
            </div>
            <div className="offer-grid">
              {[
                {
                  label: "Recrutement international",
                  title: "EIMT — Zéro risque de refus",
                  desc: "Nous construisons un dossier EIMT qui résiste à l&apos;analyse de Service Canada : justification économique béton, annonces conformes, délais maîtrisés.",
                  items: ["Analyse du poste &amp; justification", "Annonces conformes rédigées", "Dépôt &amp; suivi quotidien", "Délai moyen : 3–4 semaines"],
                },
                {
                  label: "Time-to-hire",
                  title: "Permis de travail en semaines",
                  desc: "Permis nominatifs traités avec le taux d&apos;acceptation le plus élevé du secteur. Chaque semaine gagnée est une semaine de productivité récupérée.",
                  items: ["Vérification documentaire totale", "Traitement prioritaire disponible", "Relances IRCC proactives", "Reporting hebdomadaire DRH"],
                },
                {
                  label: "Mobilité interne",
                  title: "Transfert intra-compagnie (ICT)",
                  desc: "Déplacez vos talents stratégiques entre filiales sans passer par l&apos;EIMT. Pré-qualification en 48h, votre cadre opérationnel en 6 semaines.",
                  items: ["Exempt d&apos;EIMT", "Pré-qualification 48h", "Dépôt prioritaire", "ROI immédiat"],
                },
                {
                  label: "Conformité",
                  title: "Audit IRCC",
                  desc: "Un contrôle IRCC non anticipé peut coûter des dizaines de milliers d&apos;euros. Nous auditons vos processus avant qu&apos;IRCC ne le fasse.",
                  items: ["Revue des dossiers actifs", "Identification des risques", "Plan de remédiation", "Rapport sous 5 jours"],
                },
                {
                  label: "Productivité J+1",
                  title: "Onboarding complet",
                  desc: "Logement, NAS, permis de conduire, compte bancaire, RAMQ — votre recrue est opérationnelle dès son premier jour.",
                  items: ["Logement sécurisé avant l&apos;arrivée", "NAS &amp; compte bancaire", "RAMQ &amp; médecin", "Suivi 90 jours post-arrivée"],
                },
                {
                  label: "Stratégie",
                  title: "Plan de mobilité pluriannuel",
                  desc: "Anticipez vos besoins en talents internationaux sur 12 à 36 mois. Cartographie des voies d&apos;entrée, optimisation budgétaire, KPI trimestriel.",
                  items: ["Cartographie 12–36 mois", "Optimisation budgétaire", "Dashboard KPI temps réel", "Senior Advisor dédié"],
                },
              ].map(({ label, title, desc, items }) => (
                <div key={title} className="offer-card mc-reveal">
                  <div className="label">{label}</div>
                  <h3 dangerouslySetInnerHTML={{ __html: title }} />
                  <p dangerouslySetInnerHTML={{ __html: desc }} />
                  <ul>
                    {items.map((item) => (
                      <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 48, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/rendez-vous" className="btn btn-primary btn-arrow">
                Demander un devis B2B
              </Link>
              <p style={{ fontSize: 14, color: "var(--mc-mute)", alignSelf: "center" }}>
                Réponse garantie sous 48h · Sans engagement
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            4. PROCESS-B — De l'EIMT à la prise de poste
        ══════════════════════════════════════════════ */}
        <section id="process-b" className="process-b" aria-labelledby="process-b-heading">
          <div className="mc-container">
            <div className="process-b-head mc-reveal">
              <div className="eyebrow-row">
                <span className="dot" aria-hidden="true" />
                <span className="eyebrow">Efficacité opérationnelle</span>
              </div>
              <h2 id="process-b-heading" className="big-heading">
                De la décision<br />
                <span className="muted">à la prise de poste.</span>
              </h2>
              <p style={{ fontSize: 17, color: "var(--mc-mute)", lineHeight: 1.6, maxWidth: "54ch", marginTop: 20 }}>
                La mobilité internationale mobilise en moyenne 40 heures de travail administratif par
                dossier. Nous absorbons cette charge entièrement, avec un reporting transparent à chaque étape.
              </p>
            </div>
            <div className="process-b-list">
              {[
                { n: "S1",    title: "Brief stratégique",         desc: "Analyse du poste, profil candidat, voie d&apos;entrée optimale. Plan d&apos;action livré en 48h." },
                { n: "S2–4",  title: "EIMT ou pré-qualification", desc: "Dossier complet déposé, coordination Service Canada, suivi quotidien." },
                { n: "S5–7",  title: "Permis de travail",         desc: "Dépôt IRCC, vérification documentaire totale, relances proactives." },
                { n: "S8–9",  title: "Onboarding J+1",            desc: "Logement, NAS, compte bancaire, RAMQ. Opérationnel dès le premier jour." },
                { n: "S10+",  title: "Suivi &amp; renouvellement", desc: "Dashboard KPI, alertes de renouvellement, accompagnement vers la RP si souhaité." },
              ].map(({ n, title, desc }) => (
                <div key={n} className="process-b-item mc-reveal">
                  <div className="n">{n}</div>
                  <h4 dangerouslySetInnerHTML={{ __html: title }} />
                  <p dangerouslySetInnerHTML={{ __html: desc }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            4b. ROI — Ce que coûte le statu quo
        ══════════════════════════════════════════════ */}
        <section className="b-roi" aria-labelledby="roi-heading">
          <div className="mc-container">
            <div className="b-roi-head mc-reveal">
              <div className="eyebrow-row">
                <span className="dot" aria-hidden="true" />
                <span className="eyebrow">ROI calculé</span>
              </div>
              <h2 id="roi-heading" className="big-heading">
                Ce que coûte<br />
                <span className="muted">le statu quo.</span>
              </h2>
            </div>
            <div className="b-roi-table mc-reveal">
              <div className="b-roi-col">
                <div className="b-roi-col-label">Sans Mobility Canada</div>
                {[
                  { criteria: "Charge admin. par dossier", value: "~40h" },
                  { criteria: "Time-to-hire moyen", value: "9 mois" },
                  { criteria: "Risque de refus IRCC", value: "Élevé" },
                  { criteria: "Visibilité DRH", value: "Nulle" },
                  { criteria: "Coût d'une erreur de conformité", value: "> 20 000€" },
                ].map(({ criteria, value }) => (
                  <div key={criteria} className="b-roi-item">
                    <span className="roi-criteria">{criteria}</span>
                    <span className="roi-value">{value}</span>
                  </div>
                ))}
              </div>
              <div className="b-roi-col b-roi-after">
                <div className="b-roi-col-label">Avec Mobility Canada</div>
                {[
                  { criteria: "Charge admin. pour votre DRH", value: "0h" },
                  { criteria: "De la décision à la prise de poste", value: "9 sem." },
                  { criteria: "Taux de refus sur dossiers traités", value: "0 %" },
                  { criteria: "Reporting", value: "Temps réel" },
                  { criteria: "Garantie conformité IRCC", value: "Incluse" },
                ].map(({ criteria, value }) => (
                  <div key={criteria} className="b-roi-item">
                    <span className="roi-criteria">{criteria}</span>
                    <span className="roi-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/rendez-vous" className="btn btn-primary btn-arrow">
                Calculer mon ROI — Consultation gratuite
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            5. CLIENTS
        ══════════════════════════════════════════════ */}
        <section className="clients-section" aria-label="Profils clients accompagnés">
          <div className="mc-container">
            <div className="eyebrow-row mc-reveal" style={{ justifyContent: "center", marginBottom: 40 }}>
              <span className="dot" aria-hidden="true" />
              <span className="eyebrow">Nos partenaires</span>
            </div>
            <div className="clients-row mc-reveal" role="list">
              {["PME Tech", "ETI Industrielle", "Scale-up SaaS", "Cabinet Conseil", "Groupe International", "Startup Deep Tech"].map((name) => (
                <span key={name} role="listitem">{name}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            6. CTA BAR
        ══════════════════════════════════════════════ */}
        <section className="cta-bar" data-hero-dark aria-labelledby="cta-b-heading">
          <div className="mc-container">
            <div className="cta-bar-grid">
              <div>
                <div className="eyebrow-row" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <span className="dot" aria-hidden="true" />
                  <span className="eyebrow">Consultation B2B — Devis sous 48h</span>
                </div>
                <h2 id="cta-b-heading">
                  La mobilité internationale,<br />
                  <em>un avantage compétitif.</em>
                </h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <Link href="/rendez-vous" className="btn btn-light btn-arrow">
                  Demander une consultation B2B
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
