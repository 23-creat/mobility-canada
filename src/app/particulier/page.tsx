import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight, Home, Users, ShieldCheck, GraduationCap,
  CreditCard, Heart, Clock, CheckCircle2, Star, ArrowRight,
  MapPin, Briefcase, FileText, Phone, Inbox,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FaqAccordion, { type FaqItem } from "@/components/ui/FaqAccordion";
import LogoMark from "@/components/ui/LogoMark";

/* ─── SEO ─── */

export const metadata: Metadata = {
  title: "S'installer au Canada — Guichet Unique, Zéro Démarche | Mobility Canada",
  description:
    "Un seul interlocuteur gère tout : résidence permanente, logement, école, banque, santé. Supprimez totalement la charge mentale de votre installation au Canada. Consultants agréés CRIC.",
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

/* ─── Données ─── */

const PACK_ITEMS = [
  {
    icon: FileText,
    label: "Vous n'analysez plus aucun programme",
    desc: "Nous identifions votre chemin le plus rapide vers la résidence permanente (Express Entry, PEQ, RNIP…) et déposons tout en votre nom. Vous validez. On exécute.",
    tag: "Fondamental",
  },
  {
    icon: Home,
    label: "Vous n'avez plus à chercher un logement",
    desc: "Quartier, budget, bail négocié à distance — votre adresse canadienne est confirmée avant votre départ. Pas de recherche stressante depuis l'autre côté de l'Atlantique.",
    tag: "Confort",
  },
  {
    icon: GraduationCap,
    label: "Vos enfants ont une école avant d'atterrir",
    desc: "Inscriptions, dossiers, choix du quartier scolaire — tout est bouclé avant l'arrivée. Vos enfants commencent leur nouvelle vie sereinement, dès le premier jour.",
    tag: "Famille",
  },
  {
    icon: CreditCard,
    label: "Plus jamais à chercher comment ouvrir un compte",
    desc: "Nous gérons les démarches à distance auprès des grandes banques canadiennes. Votre compte est prêt avant votre atterrissage. Aucune file d'attente en agence.",
    tag: "Pratique",
  },
  {
    icon: Heart,
    label: "Votre famille est couverte dès J+1",
    desc: "Inscription à la RAMQ, médecin de famille, assurance de transition pour les 3 premiers mois — votre couverture santé est activée avant même que vous posiez vos valises.",
    tag: "Sécurité",
  },
  {
    icon: Briefcase,
    label: "Le droit de travailler de votre conjoint, déjà dans le dossier",
    desc: "Permis de travail ouvert, reconnaissance des diplômes, accès aux ordres professionnels — nous anticipons ce besoin dès la constitution du dossier principal.",
    tag: "Carrière",
  },
] as const;

const STATS = [
  { value: "4,9 / 5", label: "Satisfaction familles", note: "1 200+ avis vérifiés"     },
  { value: "98 %",    label: "Dossiers acceptés",     note: "En résidence permanente"   },
  { value: "12 ans",  label: "D'expertise Canada",    note: "Depuis 2013"               },
  { value: "< 24 h",  label: "Délai de réponse",      note: "Garantie contractuelle"    },
] as const;

const REASONS = [
  { icon: Inbox,    title: "Un seul interlocuteur pour tout",       body: "Pas un centre d'appels. Pas des services dispersés. Un conseiller nommément dédié à votre famille qui connaît chaque détail de votre dossier et répond en moins de 4 heures." },
  { icon: ShieldCheck, title: "Zéro formulaire à remplir",         body: "Nous collectons, complétons et déposons chaque document en votre nom. IRCC, RAMQ, mairie, banque — vous ne voyez plus passer aucune paperasse." },
  { icon: Clock,    title: "Vous savez toujours où vous en êtes",   body: "Un tableau de bord simple : statut de chaque démarche, prochaine étape, délai estimé. La charge mentale de la gestion administrative disparaît complètement." },
  { icon: MapPin,   title: "Notre réseau s'active pour vous",       body: "Agents immobiliers, courtiers hypothécaires, notaires, pédiatres — notre réseau de partenaires locaux à Montréal est mobilisé dès le premier jour." },
] as const;

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Combien de temps faut-il pour obtenir la résidence permanente au Canada ?",
    answer: "Le délai varie selon le programme : Express Entry traite les dossiers en 6 à 8 mois en moyenne. Le Programme de l'expérience québécoise (PEQ) peut être plus rapide (4 à 6 mois) si vous êtes déjà sur place. Nos consultants analysent votre profil pour identifier le chemin le plus court — vous n'avez pas à comparer les programmes vous-même.",
  },
  {
    question: "Peut-on s'installer au Canada sans avoir d'emploi au préalable ?",
    answer: "Oui, absolument. La majorité de nos clients arrivent sans offre d'emploi. Des programmes comme Express Entry évaluent votre potentiel sur la base de vos compétences et de votre formation. Nous optimisons votre score CRS pour maximiser vos chances d'invitation — sans que vous ayez à comprendre le système de points.",
  },
  {
    question: "Nos enfants peuvent-ils aller à l'école francophone ?",
    answer: "Au Québec, les enfants dont au moins un parent est citoyen canadien ou détenteur d'un certificat de sélection accèdent à l'école francophone publique. Nous gérons l'ensemble des inscriptions avant votre arrivée. Vos enfants ont une place confirmée avant que vous n'embarquiez.",
  },
  {
    question: "Le conjoint peut-il travailler dès l'arrivée ?",
    answer: "Oui. Dans le cadre des demandes de résidence permanente, le conjoint reçoit un permis de travail ouvert (PTO) lui permettant d'exercer toute activité professionnelle sans restriction. Nous intégrons cette démarche dans votre dossier familial dès le départ — zéro démarche supplémentaire de votre côté.",
  },
  {
    question: "Comment se passe la couverture médicale à l'arrivée ?",
    answer: "La RAMQ démarre après un délai de carence de 3 mois. Nous vous préparons une assurance privée de transition pour couvrir cette période — famille entière incluse. L'inscription à la RAMQ est gérée dans les premiers jours suivant votre arrivée, sans que vous ayez à vous en occuper.",
  },
  {
    question: "Puis-je acheter un bien immobilier en tant que non-résident ?",
    answer: "En tant que résident permanent ou titulaire d'un permis de travail valide d'au moins 183 jours, vous pouvez acheter librement. Notre partenaire courtier hypothécaire spécialisé en primo-accédants immigrants vous accompagnera pour l'obtention d'un prêt — sans jargon bancaire, sans stress.",
  },
];

/* ─── JSON-LD ─── */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

/* ─── Composant carte Guichet Unique ─── */

function PackCard({
  icon: Icon,
  label,
  desc,
  tag,
}: {
  icon: React.ElementType;
  label: string;
  desc: string;
  tag: string;
}) {
  const tagColors: Record<string, string> = {
    Fondamental: "bg-[#003366]/8 text-[#003366]",
    Confort:     "bg-emerald-50 text-emerald-700",
    Famille:     "bg-amber-50 text-amber-700",
    Pratique:    "bg-sky-50 text-sky-700",
    Sécurité:    "bg-rose-50 text-rose-700",
    Carrière:    "bg-violet-50 text-violet-700",
  };
  return (
    <article className="group relative flex flex-col rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,51,102,0.1)]">
      <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-[#003366]/8 transition-colors duration-300 group-hover:bg-[#003366]/15">
        <Icon className="size-5 text-[#003366]" strokeWidth={1.75} aria-hidden />
      </div>
      <span className={`mb-3 inline-flex w-fit rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${tagColors[tag] ?? "bg-neutral-100 text-neutral-600"}`}>
        {tag}
      </span>
      <h3 className="mb-2 font-display text-[1rem] font-bold leading-snug text-[#003366]">{label}</h3>
      <p className="flex-1 text-[0.875rem] leading-relaxed text-neutral-600">{desc}</p>
      <div className="absolute inset-x-0 bottom-0 h-[2px] rounded-b-2xl bg-[#D80621] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  );
}

/* ─── Page ─── */

export default function ParticulierPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ══════════════════════════════════════════════
            1. HERO — Guichet Unique / Charge mentale zéro
        ══════════════════════════════════════════════ */}
        <section
          aria-labelledby="particulier-h1"
          className="relative overflow-hidden bg-[#003366] pb-0 pt-28 sm:pt-32 lg:pt-36"
        >
          {/* Filigrane M */}
          <LogoMark className="pointer-events-none absolute -right-16 -bottom-10 h-[500px] w-auto text-white opacity-[0.035] select-none" />

          {/* Fond décoratif */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute right-[-8%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#D80621]/10 blur-[120px]" />
            <div className="absolute left-[-6%] bottom-[-5%] h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-[80px]" />
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1.2px, transparent 0)", backgroundSize: "28px 28px" }} />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-end gap-12 pb-16 lg:grid-cols-[1fr_420px] lg:pb-0">

              <div className="pt-4">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2">
                  <Users className="size-3.5 text-white/70" aria-hidden />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">
                    Particuliers &amp; Familles — Guichet Unique
                  </span>
                </div>

                <h1 id="particulier-h1" className="mb-6 font-display text-[2.6rem] font-bold leading-[1.08] tracking-tight text-white sm:text-[3.25rem] lg:text-[4rem]">
                  Un seul appel.
                  <br />
                  <span className="text-white/65">On s&apos;occupe du reste.</span>
                </h1>

                <p className="mb-8 max-w-[54ch] text-[1.0625rem] leading-[1.75] text-white/70">
                  Résidence permanente, logement, école, banque, santé, permis de travail du conjoint —
                  votre conseiller dédié porte l&apos;intégralité de la charge administrative à votre place.
                  <strong className="text-white font-semibold"> Vous n&apos;ouvrez plus jamais un formulaire IRCC.</strong>
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/rendez-vous" className="btn-primary">
                    Déléguer mon installation
                    <ChevronRight className="size-[15px]" aria-hidden />
                  </Link>
                  <a href="#guichet-unique" className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-white/70 transition-colors hover:text-white">
                    Voir le Guichet Unique
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-white/10 pt-8">
                  {[
                    { v: "98 %",    l: "Dossiers acceptés" },
                    { v: "1 200+",  l: "Familles installées" },
                    { v: "4,9 / 5", l: "Satisfaction" },
                  ].map(({ v, l }) => (
                    <div key={l} className="flex flex-col">
                      <span className="font-display text-[1.5rem] font-bold text-white">{v}</span>
                      <span className="text-[11px] font-medium uppercase tracking-wider text-white/60">{l}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carte Guichet Unique */}
              <div className="hidden lg:block pb-12">
                <div className="rounded-3xl bg-white p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-[#003366]">
                      <Inbox className="size-5 text-white" strokeWidth={1.75} aria-hidden />
                    </div>
                    <div>
                      <p className="font-bold text-[#003366] text-sm">Votre Guichet Unique</p>
                      <p className="text-[11px] text-neutral-500">1 conseiller → tout le reste</p>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {["Résidence permanente", "Logement sécurisé", "École des enfants", "Compte bancaire", "Couverture santé", "Permis travail conjoint"].map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <CheckCircle2 className="size-4 flex-shrink-0 text-emerald-500" strokeWidth={2} aria-hidden />
                        <span className="text-[0.875rem] text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-xl bg-[#003366]/5 px-4 py-3 text-center">
                    <p className="text-[0.8125rem] font-semibold text-[#003366]">Vous ne gérez qu&apos;une chose :</p>
                    <p className="text-[0.8125rem] text-neutral-600">votre nouvelle vie.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-16 overflow-hidden" aria-hidden>
            <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="none">
              <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="#F8F9FA" />
            </svg>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            2. GUICHET UNIQUE — 6 démarches, zéro effort
        ══════════════════════════════════════════════ */}
        <section
          id="guichet-unique"
          aria-labelledby="pack-heading"
          className="bg-[#F8F9FA] py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-14 text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
                Notre offre signature
              </p>
              <h2 id="pack-heading" className="mx-auto max-w-[28ch] font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.5rem]">
                Six démarches que vous
                <br />
                <span className="text-[#003366]/70">n&apos;aurez plus jamais à faire.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-[55ch] text-neutral-600">
                Chaque aspect de votre installation au Canada est pris en charge par votre conseiller dédié.
                De la première consultation jusqu&apos;à votre première nuit dans votre foyer canadien.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PACK_ITEMS.map((item) => (
                <PackCard key={item.label} {...item} />
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/rendez-vous" className="btn-primary">
                Déléguer mon installation
                <ChevronRight className="size-[15px]" aria-hidden />
              </Link>
              <p className="text-sm text-neutral-600">
                Consultation gratuite · Réponse sous 24h · Sans engagement
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            3. STATS
        ══════════════════════════════════════════════ */}
        <section aria-label="Chiffres clés Mobility Canada" className="border-y border-neutral-100 bg-white py-12">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {STATS.map(({ value, label, note }) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <dt className="font-display text-[2rem] font-bold text-[#003366]">{value}</dt>
                  <dd className="mt-1 text-sm font-semibold text-[#003366]/70">{label}</dd>
                  <dd className="mt-0.5 text-[11px] text-neutral-500">{note}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            4. POURQUOI NOUS — Charge mentale zéro
        ══════════════════════════════════════════════ */}
        <section id="pourquoi-nous" aria-labelledby="pourquoi-heading" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
                  Ce qui nous distingue
                </p>
                <h2 id="pourquoi-heading" className="mb-6 font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.5rem]">
                  Nous ne vendons pas des visas.
                  <br />
                  <span className="text-[#003366]/70">Nous vendons de la tranquillité d&apos;esprit.</span>
                </h2>
                <p className="mb-10 text-[1rem] leading-relaxed text-neutral-600">
                  Une installation au Canada, c&apos;est en moyenne 80 heures de démarches administratives,
                  des dizaines d&apos;interlocuteurs différents et six mois d&apos;incertitude. Nous avons tout
                  centralisé. Un seul numéro. Un seul email. Un seul conseiller qui porte tout.
                  Votre cerveau reste disponible pour ce qui compte : votre nouvelle vie.
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  {REASONS.map(({ icon: Icon, title, body }) => (
                    <div key={title} className="flex gap-4">
                      <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#003366]/8">
                        <Icon className="size-5 text-[#003366]" strokeWidth={1.75} aria-hidden />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-[#003366] text-sm">{title}</h3>
                        <p className="text-[0.8125rem] leading-relaxed text-neutral-600">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link href="/rendez-vous" className="btn-primary">
                    Rencontrer notre équipe
                    <ChevronRight className="size-[15px]" aria-hidden />
                  </Link>
                </div>
              </div>

              {/* Processus */}
              <div className="relative">
                <div className="rounded-3xl bg-[#F8F9FA] p-8 lg:p-10">
                  <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
                    Notre processus en 4 étapes
                  </p>
                  <ol className="space-y-6">
                    {[
                      { n: "01", t: "Consultation gratuite (30 min)", d: "Bilan de votre profil, objectifs, calendrier. Nous prenons la mesure de votre projet dans sa globalité." },
                      { n: "02", t: "Feuille de route personnalisée", d: "Programme d'immigration optimal, calendrier des démarches, liste fermée de documents à fournir. Rien d'autre." },
                      { n: "03", t: "Votre conseiller gère tout", d: "Collecte, traduction, dépôt, relances, suivi en temps réel — vous n'avez plus qu'à valider les étapes clés." },
                      { n: "04", t: "Installation clé en main", d: "Logement, école, banque, RAMQ — votre conciergerie d'arrivée est activée. Vous posez vos valises, c'est tout." },
                    ].map(({ n, t, d }) => (
                      <li key={n} className="flex gap-4">
                        <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-[#D80621] font-display text-xs font-bold text-white">{n}</div>
                        <div>
                          <p className="font-semibold text-[#003366] text-sm">{t}</p>
                          <p className="mt-0.5 text-[0.8125rem] text-neutral-600">{d}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-emerald-100 bg-white p-4 shadow-[0_8px_32px_rgba(0,0,0,0.1)] sm:block">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-5 text-emerald-500" strokeWidth={2} aria-hidden />
                    <div>
                      <p className="text-xs font-bold text-[#003366]">Agréés CRIC / CICC</p>
                      <p className="text-[10px] text-neutral-500">Consultants réglementés</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            5. TÉMOIGNAGE
        ══════════════════════════════════════════════ */}
        <section aria-labelledby="temoignage-famille-heading" className="relative overflow-hidden bg-[#003366] py-16 lg:py-20">
          <LogoMark className="pointer-events-none absolute -left-20 -bottom-8 h-[400px] w-auto text-white opacity-[0.04] select-none" />
          <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/65">Témoignage famille</p>
                <h2 id="temoignage-famille-heading" className="sr-only">Témoignage famille</h2>
                <blockquote className="mb-6 font-display text-[1.25rem] leading-[1.65] text-white sm:text-[1.4rem]">
                  &ldquo;Ce qui me stressait le plus, c&apos;était de ne pas savoir par où commencer. Mobility Canada nous a rendu l&apos;invisible visible : un plan clair, un conseiller joignable, et à chaque étape, la certitude que quelqu&apos;un s&apos;occupait de tout. Six mois après notre appel initial, nous étions résidents permanents. Sereinement.&rdquo;
                </blockquote>
                <footer className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#D80621] font-display text-sm font-bold text-white">SL</div>
                  <div>
                    <p className="font-semibold text-white">Sophie &amp; Laurent K.</p>
                    <p className="text-sm text-white/70">Famille de 4 · Paris → Montréal · 2024</p>
                  </div>
                </footer>
              </div>
              <div className="flex flex-col gap-3 lg:min-w-[220px]">
                {[
                  { label: "Dossier déposé en",  value: "6 semaines" },
                  { label: "RP obtenue en",       value: "5 mois" },
                  { label: "Logement trouvé",     value: "Avant l'arrivée" },
                  { label: "École inscrite",      value: "Jour J" },
                ].map(({ label, value }) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/6 px-4 py-3">
                    <p className="text-[11px] text-white/60 uppercase tracking-wider">{label}</p>
                    <p className="font-display font-bold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            6. FAQ
        ══════════════════════════════════════════════ */}
        <section id="faq-particulier" aria-labelledby="faq-particulier-heading" className="bg-[#F8F9FA] py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">Questions fréquentes</p>
              <h2 id="faq-particulier-heading" className="font-display text-[1.75rem] font-bold text-[#003366] sm:text-[2.25rem]">
                Les vraies questions, les vraies réponses.
                <br />
                <span className="text-[#003366]/70">Sans jargon administratif.</span>
              </h2>
            </div>
            <FaqAccordion items={FAQ_ITEMS} />
            <p className="mt-8 text-center text-sm text-neutral-600">
              Votre situation est unique ?{" "}
              <Link href="/rendez-vous" className="font-medium text-[#003366] underline underline-offset-2 hover:text-[#D80621]">
                Parlez directement à un conseiller.
              </Link>
            </p>
          </div>
        </section>

        {/* JSON-LD FAQ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        {/* ══════════════════════════════════════════════
            7. CTA FINAL
        ══════════════════════════════════════════════ */}
        <section aria-labelledby="cta-particulier-heading" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#003366]/15 bg-[#003366]/5 px-4 py-2">
              <ShieldCheck className="size-4 text-[#003366]" strokeWidth={2} aria-hidden />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#003366]">
                Consultation 100 % gratuite — Sans engagement
              </span>
            </div>
            <h2 id="cta-particulier-heading" className="mb-5 font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.75rem]">
              Votre nouvelle vie au Canada.
              <br />
              <span className="text-[#D80621]">Votre charge mentale, c&apos;est notre métier.</span>
            </h2>
            <p className="mx-auto mb-10 max-w-[52ch] text-[1rem] leading-relaxed text-neutral-600">
              En 30 minutes, nous prenons la mesure de votre projet et vous donnons une vision
              claire de chaque étape. Plus d&apos;incertitude. Plus de formulaires incompréhensibles.
              Juste un plan, et quelqu&apos;un pour l&apos;exécuter à votre place.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/rendez-vous" className="btn-primary text-base !px-8 !py-4">
                Déléguer mon installation
                <ChevronRight className="size-4" aria-hidden />
              </Link>
              <a href="tel:+15143770857" className="btn-outline text-base !px-8 !py-4">
                <Phone className="size-4" aria-hidden />
                +1 (514) 377-0857
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-neutral-500">
              {["✓  Réponse garantie sous 24h", "✓  Consultants agréés CRIC", "✓  Zéro frais cachés", "✓  98 % de dossiers acceptés"].map((g) => (
                <li key={g} className="font-medium">{g}</li>
              ))}
            </ul>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
