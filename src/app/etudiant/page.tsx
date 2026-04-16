import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap, FileText, Shield, Home, Briefcase, Award,
  MapPin, Globe, TrendingUp, CheckCircle2, ChevronRight,
  ShieldCheck, Languages, Coins, Star, Phone, ArrowRight,
  Heart, Lock, Users,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FaqAccordion, { type FaqItem } from "@/components/ui/FaqAccordion";
import LogoMark from "@/components/ui/LogoMark";

/* ─── SEO ─── */

export const metadata: Metadata = {
  title: "Études au Canada — Visa Étudiant, CAQ, Logement Sécurisé | Mobility Canada",
  description:
    "Accompagnement complet pour étudier au Canada : admission dans 50+ universités, CAQ, permis d'études et logement sécurisé avant l'arrivée. Votre enfant sera encadré de A à Z. Consultants agréés CRIC.",
  keywords: [
    "visa étudiant Canada", "CAQ Québec", "permis d'études Canada",
    "logement étudiant Montréal", "étudier au Canada depuis France",
    "accompagnement étudiant Canada", "parents étudiant Canada",
  ],
  openGraph: {
    title: "Étudier au Canada | Logement, Visa, CAQ — Mobility Canada",
    description: "De l'admission au logement sécurisé : votre enfant encadré de A à Z. Taux de succès 98%.",
  },
};

/* ─── Types ─── */

interface ServiceCard {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;
  tag: string;
  label: string;
  desc: string;
  highlight?: string;
}

/* ─── Données ─── */

const SERVICES: ServiceCard[] = [
  {
    icon: Home,
    tag: "Logement",
    label: "Logement sécurisé avant le départ",
    desc: "Studio meublé, colocation ou résidence étudiante — votre enfant a une adresse confirmée avant d'embarquer. Nous négocions et réservons à distance, pour votre tranquillité.",
    highlight: "Confirmation écrite avant l'arrivée",
  },
  {
    icon: GraduationCap,
    tag: "Admission",
    label: "Dossier d'admission universitaire",
    desc: "Sélection des établissements selon le profil, rédaction de la lettre de motivation, traduction des relevés de notes, suivi des candidatures jusqu'à l'offre d'admission.",
    highlight: "50+ universités partenaires",
  },
  {
    icon: FileText,
    tag: "Document officiel",
    label: "Certificat d'Acceptation du Québec (CAQ)",
    desc: "Obligatoire pour toute étude au Québec. Nous constituons et déposons le dossier complet en votre nom auprès du Ministère de l'Immigration du Québec.",
    highlight: "Délai moyen : 3–5 semaines",
  },
  {
    icon: Shield,
    tag: "Visa fédéral",
    label: "Permis d'études canadien",
    desc: "Dépôt auprès d'IRCC avec vérification de chaque pièce. Objectif : zéro motif de refus. Inclut l'autorisation de travailler pendant les études.",
    highlight: "Valable partout au Canada",
  },
  {
    icon: MapPin,
    tag: "Arrivée J+1",
    label: "Accueil et installation",
    desc: "Transfert aéroport, ouverture de compte bancaire, inscription à la RAMQ et obtention du NAS — tout est coordonné dès le premier jour pour une installation sans stress.",
    highlight: "Check-list administrative complète",
  },
  {
    icon: Award,
    tag: "Après études",
    label: "Post-Graduation Work Permit (PGWP)",
    desc: "À l'issue des études, nous accompagnons vers le PGWP — permis de travail ouvert jusqu'à 3 ans — et les démarches vers la résidence permanente si souhaité.",
    highlight: "Voie directe vers Express Entry",
  },
];

const STATS = [
  { value: "50+",    label: "Universités partenaires", note: "Canada & Québec"       },
  { value: "98 %",   label: "Dossiers acceptés",       note: "Sur 5 ans de données"  },
  { value: "4 mois", label: "Délai moyen installation",note: "Admission à J+1"       },
  { value: "12 ans", label: "D'expertise Canada",      note: "Depuis 2013"           },
] as const;

const WHY_CANADA = [
  { icon: GraduationCap, title: "Universités de rang mondial",      description: "McGill, UBC, U de Montréal, Concordia — des diplômes reconnus dans 190 pays.",                                          stat: "30+ universités Top 500 mondial"          },
  { icon: Coins,         title: "Coût des études accessible",        description: "40 à 60 % moins cher que le Royaume-Uni ou les États-Unis, pour un niveau équivalent.",                                  stat: "De 8 000 à 25 000 CAD / an"               },
  { icon: Briefcase,     title: "Travailler pendant les études",     description: "Jusqu'à 24h/semaine hors campus, sans limite pendant les vacances — revenus et expérience.",                              stat: "Permis de travail inclus dans le visa"    },
  { icon: TrendingUp,    title: "Voie directe vers la résidence",    description: "Le PGWP et Express Entry ouvrent une voie privilégiée vers la résidence permanente.",                                     stat: "PGWP jusqu'à 3 ans après l'obtention"    },
  { icon: Languages,     title: "Environnement bilingue",            description: "Québec en français, reste du Canada en anglais — une immersion qui booste l'employabilité internationale.",               stat: "Montréal : 2ᵉ ville francophone mondiale" },
  { icon: ShieldCheck,   title: "Sécurité et qualité de vie",        description: "Le Canada se classe parmi les pays les plus sûrs au monde. Montréal et Vancouver : Top 10 mondial étudiant.",            stat: "Top 10 QS Best Student Cities"            },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Mon enfant n'a jamais vécu seul — comment gérez-vous son arrivée ?",
    answer: "C'est précisément pour ça que nous existons. Notre service d'accueil débute dès l'atterrissage : un référent l'attend à l'aéroport, l'accompagne à son logement, l'aide à ouvrir son compte bancaire et à s'inscrire à la RAMQ le jour même. Un check-in hebdomadaire est prévu durant les 4 premières semaines. Vous avez un numéro direct pour suivre l'évolution à tout moment.",
  },
  {
    question: "Comment le logement est-il sécurisé avant le départ ?",
    answer: "Nous travaillons avec un réseau de propriétaires et résidences étudiantes vérifiés à Montréal, Québec, Toronto et Vancouver. Après avoir défini le budget et les critères, nous réservons et obtenons une confirmation écrite avant que votre enfant embarque. Il/elle arrive avec une adresse, des clés et un logement prêt à vivre. Aucune galère d'hôtel à l'arrivée.",
  },
  {
    question: "Quelle est la différence entre le CAQ et le permis d'études ?",
    answer: "Le CAQ est un document provincial (Québec uniquement), délivré par le Ministère de l'Immigration du Québec. Le permis d'études est un document fédéral délivré par IRCC, obligatoire dans toutes les provinces. Pour étudier au Québec, les deux sont requis. Nous gérons les deux simultanément pour réduire les délais.",
  },
  {
    question: "Mon enfant peut-il travailler pendant ses études ?",
    answer: "Oui. Les étudiants titulaires d'un permis valide peuvent travailler jusqu'à 24h/semaine hors campus durant les sessions et sans limite pendant les vacances. Ce droit est intégré dans le permis d'études — aucune démarche supplémentaire.",
  },
  {
    question: "Combien de temps à l'avance faut-il commencer ?",
    answer: "Nous recommandons de commencer 12 à 18 mois avant la rentrée souhaitée. Les dossiers d'admission ont des délais stricts (souvent septembre à janvier pour une rentrée en septembre), et les traitements CAQ + permis d'études peuvent prendre 6 à 16 semaines. Plus tôt on commence, plus on a de marge pour le logement aussi.",
  },
  {
    question: "Puis-je rester en contact avec un conseiller si j'ai des inquiétudes ?",
    answer: "Absolument. En tant que parent, vous avez accès à notre équipe par email et téléphone pendant toute la durée du dossier. Nous vous envoyons un rapport d'étape à chaque validation importante (admission, CAQ, permis, logement confirmé). Vous n'êtes jamais dans le flou.",
  },
  {
    question: "Mon diplôme français sera-t-il reconnu au Canada ?",
    answer: "En règle générale, oui. Les universités canadiennes reconnaissent les diplômes du baccalauréat, BTS, BUT et licences françaises. Une évaluation d'équivalence est parfois requise selon le programme. Nos conseillers vous guident sur les équivalences spécifiques à chaque situation.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

/* ─── Composants ─── */

function ServiceCard({ icon: Icon, tag, label, desc, highlight }: ServiceCard) {
  const tagColors: Record<string, string> = {
    "Logement":         "bg-emerald-50 text-emerald-700",
    "Admission":        "bg-[#003366]/8 text-[#003366]",
    "Document officiel": "bg-amber-50 text-amber-700",
    "Visa fédéral":     "bg-sky-50 text-sky-700",
    "Arrivée J+1":      "bg-violet-50 text-violet-700",
    "Après études":     "bg-rose-50 text-rose-700",
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
      {highlight && (
        <div className="mt-4 flex items-center gap-1.5">
          <CheckCircle2 className="size-3.5 flex-shrink-0 text-emerald-500" strokeWidth={2.5} aria-hidden />
          <span className="text-[0.8125rem] font-medium text-emerald-700">{highlight}</span>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 h-[2px] rounded-b-2xl bg-[#D80621] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  );
}

/* ─── Page ─── */

export default function EtudiantPage() {
  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main id="main-content">

        {/* ══════════════════════════════════════════════
            1. HERO — Dual persona étudiant + parents
        ══════════════════════════════════════════════ */}
        <section
          aria-labelledby="etudiant-h1"
          className="relative overflow-hidden bg-[#003366] pb-0 pt-28 sm:pt-32 lg:pt-36"
        >
          {/* Filigrane M */}
          <LogoMark className="pointer-events-none absolute -right-20 -bottom-16 h-[520px] w-auto text-white opacity-[0.035] select-none" />

          {/* Fond décoratif */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute right-[-6%] top-[5%] h-[520px] w-[520px] rounded-full bg-[#D80621]/9 blur-[120px]" />
            <div className="absolute left-[-8%] bottom-[-8%] h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-[80px]" />
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1.2px, transparent 0)", backgroundSize: "28px 28px" }} />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-end gap-12 pb-16 lg:grid-cols-[1fr_440px] lg:pb-0">

              <div className="pt-4">
                {/* Badge dual persona */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2">
                  <Users className="size-3.5 text-white/70" aria-hidden />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">
                    Pour l&apos;étudiant &amp; ses parents
                  </span>
                </div>

                <h1 id="etudiant-h1" className="mb-6 font-display text-[2.5rem] font-bold leading-[1.08] tracking-tight text-white sm:text-[3.1rem] lg:text-[3.75rem]">
                  Vos études au Canada.
                  <br />
                  <span className="text-white/65">Leur tranquillité à eux.</span>
                </h1>

                <p className="mb-8 max-w-[54ch] text-[1.0625rem] leading-[1.75] text-white/70">
                  Un projet ambitieux qui mérite un encadrement solide. Admission, logement
                  sécurisé avant le départ, visa, accueil à l&apos;arrivée — Mobility Canada
                  gère tout pour que <em>vous</em> vous concentriez sur votre avenir,
                  et que <em>vos parents</em> dorment sur leurs deux oreilles.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/rendez-vous" className="btn-primary">
                    Préparer mon dossier gratuitement
                    <ChevronRight className="size-[15px]" aria-hidden />
                  </Link>
                  <a href="#logement-etudiant" className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-white/70 transition-colors hover:text-white">
                    La question du logement
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </a>
                </div>

                {/* Stats */}
                <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8">
                  {[
                    { v: "50+",    l: "Universités partenaires" },
                    { v: "98 %",   l: "Dossiers acceptés" },
                    { v: "4 mois", l: "Délai moyen installation" },
                  ].map(({ v, l }) => (
                    <div key={l} className="flex flex-col">
                      <span className="font-display text-[1.5rem] font-bold text-white">{v}</span>
                      <span className="text-[11px] font-medium uppercase tracking-wider text-white/60">{l}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Double carte étudiant + parent */}
              <div className="hidden lg:flex flex-col gap-4 pb-12">
                {/* Carte étudiant */}
                <div className="rounded-3xl bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
                  <div className="mb-4 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="mb-5 font-display text-[0.9875rem] leading-relaxed text-[#003366]">
                    &ldquo;En 4 mois, admission à McGill, CAQ, permis d&apos;études et appartement
                    à Montréal. Je n&apos;avais qu&apos;à me présenter le jour J.&rdquo;
                  </blockquote>
                  <footer className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-full bg-[#D80621] font-display text-xs font-bold text-white">CR</div>
                    <div>
                      <p className="font-semibold text-[#003366] text-sm">Camille R.</p>
                      <p className="text-xs text-neutral-500">Licence Lyon 3 → Master McGill</p>
                    </div>
                  </footer>
                </div>

                {/* Carte parent */}
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex size-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                      <Heart className="size-4 text-emerald-300" strokeWidth={2} aria-hidden />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Ce que voient les parents</p>
                      <ul className="mt-2 space-y-1.5 text-[0.8125rem] text-white/70">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="size-3 flex-shrink-0 text-emerald-400" strokeWidth={2.5} aria-hidden />
                          Logement confirmé avant l&apos;embarquement
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="size-3 flex-shrink-0 text-emerald-400" strokeWidth={2.5} aria-hidden />
                          Rapport d&apos;étape à chaque validation
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="size-3 flex-shrink-0 text-emerald-400" strokeWidth={2.5} aria-hidden />
                          Référent joignable pendant 90 jours
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-16 overflow-hidden" aria-hidden>
            <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="none">
              <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            2. LOGEMENT — La douleur principale
        ══════════════════════════════════════════════ */}
        <section
          id="logement-etudiant"
          aria-labelledby="logement-heading"
          className="bg-white py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
                  La question n°1 des parents
                </p>
                <h2 id="logement-heading" className="mb-6 font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.5rem]">
                  &ldquo;Il/Elle sera
                  <br />
                  <span className="text-[#003366]/70">bien logé(e) ?&rdquo;</span>
                </h2>
                <p className="mb-8 text-[1rem] leading-relaxed text-neutral-600">
                  C&apos;est la première question que nous posent les parents — et la bonne. Se retrouver
                  sans logement à Montréal en août, c&apos;est une réalité que des milliers d&apos;étudiants
                  vivent chaque année. Nous avons bâti un réseau pour que ce ne soit jamais le cas de
                  vos enfants.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: Lock,    title: "Réservation sécurisée",   body: "Contrat signé et confirmé avant l'embarquement. Pas de surprise à l'arrivée." },
                    { icon: Home,    title: "Logements vérifiés",      body: "Résidences, studios meublés, colocations — visités et validés par notre équipe locale." },
                    { icon: MapPin,  title: "Proche de l'université",  body: "Nous priorisons les adresses à 20 min maximum du campus par les transports en commun." },
                    { icon: Heart,   title: "Budget maîtrisé",         body: "Nous négocions directement avec les propriétaires pour obtenir les meilleurs tarifs." },
                  ].map(({ icon: Icon, title, body }) => (
                    <div key={title} className="flex gap-3">
                      <div className="flex size-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#003366]/8">
                        <Icon className="size-4 text-[#003366]" strokeWidth={1.75} aria-hidden />
                      </div>
                      <div>
                        <p className="font-semibold text-[#003366] text-sm">{title}</p>
                        <p className="mt-0.5 text-[0.8125rem] text-neutral-600">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/rendez-vous" className="btn-primary">
                    Sécuriser le logement de mon enfant
                    <ChevronRight className="size-[15px]" aria-hidden />
                  </Link>
                </div>
              </div>

              {/* Encart parent */}
              <div className="rounded-3xl bg-[#F8F9FA] p-8 lg:p-10">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#003366]">
                    <ShieldCheck className="size-5 text-white" strokeWidth={2} aria-hidden />
                  </div>
                  <div>
                    <p className="font-bold text-[#003366]">La promesse Mobility Canada</p>
                    <p className="text-xs text-neutral-500">Pour chaque étudiant accompagné</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    { n: "01", t: "Logement confirmé avant l'envol",          d: "Adresse, clés, contrat signé — avant que votre enfant prenne l'avion." },
                    { n: "02", t: "Référent présent à l'aéroport",             d: "Quelqu'un que votre enfant connaît l'attend à l'arrivée. Jamais seul/e le Jour J." },
                    { n: "03", t: "Rapport d'étape pour les parents",          d: "Email de confirmation à chaque étape clé : admission, visa, logement, arrivée." },
                    { n: "04", t: "Check-in hebdomadaire — 4 premières semaines", d: "Notre équipe locale suit l'intégration et remonte les points de blocage." },
                  ].map(({ n, t, d }) => (
                    <li key={n} className="flex gap-4">
                      <div className="flex size-7 flex-shrink-0 items-center justify-center rounded-full bg-[#D80621] font-display text-[11px] font-bold text-white">{n}</div>
                      <div>
                        <p className="font-semibold text-[#003366] text-sm">{t}</p>
                        <p className="mt-0.5 text-[0.8125rem] text-neutral-600">{d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            3. SERVICES
        ══════════════════════════════════════════════ */}
        <section id="services-etudiant" aria-labelledby="services-etudiant-heading" className="bg-[#F8F9FA] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-14 text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">Nos services</p>
              <h2 id="services-etudiant-heading" className="mx-auto max-w-[30ch] font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.5rem]">
                Tout ce dont un étudiant a besoin.
                <br />
                <span className="text-[#003366]/70">Géré à sa place.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-[55ch] text-neutral-600">
                De l&apos;admission au diplôme, chaque démarche est prise en charge par un conseiller dédié.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => <ServiceCard key={s.label} {...s} />)}
            </div>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/rendez-vous" className="btn-primary">
                Démarrer mon dossier étudiant
                <ChevronRight className="size-[15px]" aria-hidden />
              </Link>
              <p className="text-sm text-neutral-600">Consultation gratuite · Réponse sous 24h</p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            4. STATS
        ══════════════════════════════════════════════ */}
        <section aria-label="Chiffres clés" className="border-y border-neutral-100 bg-white py-12">
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
            5. POURQUOI LE CANADA
        ══════════════════════════════════════════════ */}
        <section id="pourquoi-canada" aria-labelledby="why-canada-heading" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">Pourquoi choisir le Canada</p>
              <h2 id="why-canada-heading" className="mb-4 font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.5rem]">
                Pas juste une université.
                <br />
                <span className="text-[#003366]/70">Un tremplin vers une carrière internationale.</span>
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_CANADA.map(({ icon: Icon, title, description, stat }) => (
                <article key={title} className="rounded-2xl border border-neutral-100 bg-[#F8F9FA] p-6 transition-shadow duration-200 hover:shadow-md">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-[#003366]/8">
                    <Icon className="size-5 text-[#003366]" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="mb-2 font-display text-[0.9375rem] font-bold text-[#003366]">{title}</h3>
                  <p className="mb-3 text-[0.875rem] leading-relaxed text-neutral-600">{description}</p>
                  <div className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-[#D80621] flex-shrink-0" aria-hidden />
                    <span className="text-[11px] font-semibold text-[#003366]/70">{stat}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            6. TÉMOIGNAGE
        ══════════════════════════════════════════════ */}
        <section aria-labelledby="temoignage-etudiant-heading" className="relative overflow-hidden bg-[#003366] py-16 lg:py-20">
          <LogoMark className="pointer-events-none absolute -left-24 -bottom-10 h-[400px] w-auto text-white opacity-[0.04] select-none" />
          <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/65">Témoignage étudiant</p>
                <h2 id="temoignage-etudiant-heading" className="sr-only">Témoignage</h2>
                <blockquote className="mb-6 font-display text-[1.25rem] leading-[1.65] text-white sm:text-[1.4rem]">
                  &ldquo;Je n&apos;aurais jamais cru que tout pouvait aller aussi vite. En moins de
                  5 mois après mon premier appel, j&apos;étais dans mon appartement à Montréal,
                  inscrite à Concordia. Ce qui me stressait le plus — trouver un logement avant
                  d&apos;arriver — a été réglé en 10 jours.&rdquo;
                </blockquote>
                <footer className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#D80621] font-display text-sm font-bold text-white">AL</div>
                  <div>
                    <p className="font-semibold text-white">Anaïs L.</p>
                    <p className="text-sm text-white/70">BTS → Bachelor Concordia · Bordeaux → Montréal · 2023</p>
                  </div>
                </footer>
              </div>
              <div className="flex flex-col gap-3 lg:min-w-[220px]">
                {[
                  { label: "Logement confirmé", value: "10 jours" },
                  { label: "CAQ + permis",       value: "5 semaines" },
                  { label: "Admission obtenue",  value: "Janvier 2023" },
                  { label: "Arrivée Montréal",   value: "Août 2023" },
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
            7. FAQ
        ══════════════════════════════════════════════ */}
        <section id="faq-etudiant" aria-labelledby="faq-etudiant-heading" className="bg-[#F8F9FA] py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">Questions fréquentes</p>
              <h2 id="faq-etudiant-heading" className="font-display text-[1.75rem] font-bold text-[#003366] sm:text-[2.25rem]">
                Les vraies questions
                <br />
                <span className="text-[#003366]/70">des étudiants et de leurs parents.</span>
              </h2>
            </div>
            <FaqAccordion items={FAQ_ITEMS} />
            <p className="mt-8 text-center text-sm text-neutral-600">
              Votre situation est unique ?{" "}
              <Link href="/rendez-vous" className="font-medium text-[#003366] underline underline-offset-2 hover:text-[#D80621]">
                Parlez à un conseiller.
              </Link>
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            8. CTA FINAL
        ══════════════════════════════════════════════ */}
        <section aria-labelledby="cta-etudiant-heading" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#003366]/15 bg-[#003366]/5 px-4 py-2">
              <Globe className="size-4 text-[#003366]" strokeWidth={2} aria-hidden />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#003366]">Consultation 100 % gratuite — Sans engagement</span>
            </div>
            <h2 id="cta-etudiant-heading" className="mb-5 font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.75rem]">
              L&apos;aventure canadienne commence.
              <br />
              <span className="text-[#D80621]">L&apos;inquiétude, elle, s&apos;arrête.</span>
            </h2>
            <p className="mx-auto mb-10 max-w-[52ch] text-[1rem] leading-relaxed text-neutral-600">
              En 30 minutes, nous analysons le profil, identifions les meilleures universités
              et planifions le logement. Un plan d&apos;action clair pour l&apos;étudiant —
              et une sérénité totale pour les parents.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/rendez-vous" className="btn-primary text-base !px-8 !py-4">
                Prendre rendez-vous gratuitement
                <ChevronRight className="size-4" aria-hidden />
              </Link>
              <a href="tel:+15143770857" className="btn-outline text-base !px-8 !py-4">
                <Phone className="size-4" aria-hidden />
                +1 (514) 377-0857
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-neutral-500">
              {["✓  Logement sécurisé avant le départ", "✓  Réponse sous 24h", "✓  Consultants agréés CRIC", "✓  98 % de dossiers acceptés"].map((g) => (
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
