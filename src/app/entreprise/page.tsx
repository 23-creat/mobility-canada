import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3, FileCheck, ArrowLeftRight, ShieldCheck,
  Users, TrendingUp, CheckCircle2, ChevronRight,
  Building2, Phone, Scale, Star,
  ClipboardList, UserCheck, Globe, AlertTriangle, Zap,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LogoMark from "@/components/ui/LogoMark";

/* ─── SEO ─── */

export const metadata: Metadata = {
  title: "Immigration Professionnelle Canada — EIMT, Permis de Travail, ROI RH | Mobility Canada",
  description:
    "Réduisez votre time-to-hire, éliminez votre risque IRCC. EIMT, permis de travail fermés, transferts intra-compagnie. Senior Advisor dédié. Devis B2B sous 48h. Consultants agréés CRIC.",
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
    icon: BarChart3,
    tag: "Recrutement international",
    label: "EIMT — Zéro risque de refus",
    desc: "Nous construisons un dossier EIMT qui résiste à l'analyse de Service Canada : justification économique béton, annonces conformes, délais maîtrisés. Votre recrutement n'est pas bloqué.",
    highlight: "Délai moyen : 3–4 semaines",
  },
  {
    icon: FileCheck,
    tag: "Time-to-hire",
    label: "Permis de travail en semaines",
    desc: "Permis nominatifs traités avec le taux d'acceptation le plus élevé du secteur. Chaque semaine gagnée sur le time-to-hire est une semaine de productivité récupérée.",
    highlight: "Traitement prioritaire disponible",
  },
  {
    icon: ArrowLeftRight,
    tag: "Mobilité interne",
    label: "Transfert intra-compagnie (ICT) accéléré",
    desc: "Déplacez vos talents stratégiques entre filiales sans passer par l'EIMT. Programme ICT : pré-qualification en 48h, dépôt rapide, votre cadre opérationnel au Canada en 6 semaines.",
    highlight: "Exempt d'EIMT — ROI immédiat",
  },
  {
    icon: Scale,
    tag: "Conformité",
    label: "Audit — Éliminez votre risque IRCC",
    desc: "Un contrôle IRCC non anticipé peut coûter des dizaines de milliers d'euros en sanctions et suspensions de permis. Nous auditez vos processus avant qu'IRCC ne le fasse.",
    highlight: "Rapport livré sous 5 jours",
  },
  {
    icon: Users,
    tag: "Productivité J+1",
    label: "Onboarding — Opérationnel dès l'arrivée",
    desc: "Logement, NAS, permis de conduire, compte bancaire, RAMQ — votre recrue est opérationnelle dès son premier jour. Pas de jours perdus en démarches administratives.",
    highlight: "Suivi 90 jours post-arrivée",
  },
  {
    icon: TrendingUp,
    tag: "Stratégie",
    label: "Plan de mobilité pluriannuel",
    desc: "Anticipez vos besoins en talents internationaux sur 12 à 36 mois. Cartographie des voies d'entrée, optimisation budgétaire, reporting KPI trimestriel.",
    highlight: "Senior Advisor dédié",
  },
];

const STATS = [
  { value: "120+",  label: "Entreprises partenaires",   note: "PME, ETI, multinationales" },
  { value: "9 sem", label: "De l'EIMT à la prise de poste", note: "Moyenne 2024–2025"    },
  { value: "98 %",  label: "Permis accordés",            note: "Sur 5 ans de données"    },
  { value: "0",     label: "Sanctions IRCC",             note: "Pour nos clients actifs"  },
] as const;

/* ─── Composant carte service ─── */

function ServiceCard({ icon: Icon, tag, label, desc, highlight }: ServiceCard) {
  const tagColors: Record<string, string> = {
    "Recrutement international": "bg-[#003366]/8 text-[#003366]",
    "Time-to-hire":              "bg-sky-50 text-sky-700",
    "Mobilité interne":          "bg-violet-50 text-violet-700",
    "Conformité":                "bg-amber-50 text-amber-700",
    "Productivité J+1":          "bg-emerald-50 text-emerald-700",
    "Stratégie":                 "bg-rose-50 text-rose-700",
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

export default function EntreprisePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ══════════════════════════════════════════════
            1. HERO B2B — ROI & performance
        ══════════════════════════════════════════════ */}
        <section
          aria-labelledby="entreprise-h1"
          className="relative overflow-hidden bg-[#003366] pb-0 pt-28 sm:pt-32 lg:pt-36"
        >
          {/* Filigrane M */}
          <LogoMark className="pointer-events-none absolute -right-16 -bottom-10 h-[520px] w-auto text-white opacity-[0.035] select-none" />

          {/* Fond décoratif */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute right-[-6%] top-[8%] h-[560px] w-[560px] rounded-full bg-[#D80621]/8 blur-[130px]" />
            <div className="absolute left-[-8%] bottom-[-10%] h-[440px] w-[440px] rounded-full bg-white/[0.03] blur-[90px]" />
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1.2px, transparent 0)", backgroundSize: "28px 28px" }} />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-end gap-12 pb-16 lg:grid-cols-[1fr_400px] lg:pb-0">

              <div className="pt-4">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2">
                  <Zap className="size-3.5 text-white/70" aria-hidden />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">
                    Solutions B2B — Performance &amp; Conformité
                  </span>
                </div>

                <h1 id="entreprise-h1" className="mb-6 font-display text-[2.6rem] font-bold leading-[1.08] tracking-tight text-white sm:text-[3.25rem] lg:text-[3.75rem]">
                  Recrutez en semaines,
                  <br />
                  <span className="text-white/65">pas en mois.</span>
                </h1>

                <p className="mb-8 max-w-[54ch] text-[1.0625rem] leading-[1.75] text-white/70">
                  Chaque semaine de blocage sur un recrutement international représente un coût direct
                  pour votre organisation. Mobility Canada réduit votre time-to-hire, élimine votre
                  risque de non-conformité IRCC et fait de la mobilité internationale
                  <strong className="text-white font-semibold"> un avantage compétitif, pas un frein opérationnel.</strong>
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/rendez-vous" className="btn-primary">
                    Demander une consultation B2B
                    <ChevronRight className="size-[15px]" aria-hidden />
                  </Link>
                  <a href="#processus-rh" className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-white/70 transition-colors hover:text-white">
                    De l&apos;EIMT à la prise de poste en 9 semaines
                    <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </a>
                </div>

                {/* KPIs hero */}
                <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8">
                  {[
                    { v: "9 sem",  l: "Time-to-hire moyen" },
                    { v: "98 %",   l: "Permis accordés" },
                    { v: "0",      l: "Sanctions IRCC client" },
                  ].map(({ v, l }) => (
                    <div key={l} className="flex flex-col">
                      <span className="font-display text-[1.5rem] font-bold text-white">{v}</span>
                      <span className="text-[11px] font-medium uppercase tracking-wider text-white/60">{l}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carte DRH */}
              <div className="hidden lg:block pb-12">
                <div className="rounded-3xl bg-white p-8 shadow-[0_24px_80px_rgba(0,0,0,0.2)]">
                  <div className="mb-4 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="mb-6 font-display text-[1rem] leading-relaxed text-[#003366]">
                    &ldquo;4 ingénieurs recrutés à l&apos;international en 3 mois. Le processus EIMT que
                    je redoutais a été géré intégralement. ROI immédiat : ces profils étaient
                    introuvables sur le marché local. Résultat zéro défaut.&rdquo;
                  </blockquote>
                  <footer className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-[#003366] font-display text-sm font-bold text-white">MF</div>
                    <div>
                      <p className="font-semibold text-[#003366] text-sm">Marie-France D.</p>
                      <p className="text-xs text-neutral-500">DRH — Scale-up technologique · Montréal</p>
                    </div>
                  </footer>
                  <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50/60 p-3">
                    <CheckCircle2 className="size-4 text-emerald-500 flex-shrink-0" strokeWidth={2} aria-hidden />
                    <p className="text-xs font-medium text-emerald-700">4 permis de travail obtenus en 11 semaines</p>
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
            2. RISQUES — Le coût de l'inaction
        ══════════════════════════════════════════════ */}
        <section aria-labelledby="risques-heading" className="bg-[#F8F9FA] py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                {
                  icon: AlertTriangle,
                  stat: "8 000 € / semaine",
                  label: "Coût moyen d'un poste vacant à haute valeur ajoutée",
                  note: "Source : Bersin by Deloitte",
                  color: "text-rose-600",
                  bg: "bg-rose-50 border-rose-100",
                },
                {
                  icon: Scale,
                  stat: "25 000 – 50 000 €",
                  label: "Sanction IRCC moyenne en cas de non-conformité employeur",
                  note: "+ suspension possible des permis",
                  color: "text-amber-600",
                  bg: "bg-amber-50 border-amber-100",
                },
                {
                  icon: TrendingUp,
                  stat: "6 semaines",
                  label: "Gagnées en moyenne sur le time-to-hire avec Mobility Canada",
                  note: "vs. gestion interne RH",
                  color: "text-emerald-600",
                  bg: "bg-emerald-50 border-emerald-100",
                },
              ].map(({ icon: Icon, stat, label, note, color, bg }) => (
                <div key={stat} className={`rounded-2xl border p-6 ${bg}`}>
                  <Icon className={`mb-4 size-7 ${color}`} strokeWidth={1.75} aria-hidden />
                  <p className={`font-display text-[1.5rem] font-bold ${color}`}>{stat}</p>
                  <p className="mt-2 text-[0.9rem] font-semibold text-neutral-700">{label}</p>
                  <p className="mt-1 text-[0.8125rem] text-neutral-500">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            3. SOLUTIONS
        ══════════════════════════════════════════════ */}
        <section id="services-entreprise" aria-labelledby="services-entreprise-heading" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-14 text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">Nos solutions B2B</p>
              <h2 id="services-entreprise-heading" className="mx-auto max-w-[32ch] font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.5rem]">
                Six leviers pour transformer
                <br />
                <span className="text-[#003366]/70">la mobilité en performance.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-[58ch] text-neutral-600">
                De l&apos;étude d&apos;impact à l&apos;onboarding complet, chaque étape est gérée
                par votre Senior Advisor dédié. Votre DRH recrute. Nous faisons le reste.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => <ServiceCard key={s.label} {...s} />)}
            </div>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/rendez-vous" className="btn-primary">
                Demander un devis B2B
                <ChevronRight className="size-[15px]" aria-hidden />
              </Link>
              <p className="text-sm text-neutral-600">Réponse garantie sous 48h · Sans engagement</p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            4. STATS
        ══════════════════════════════════════════════ */}
        <section aria-label="KPIs B2B Mobility Canada" className="border-y border-neutral-100 bg-[#F8F9FA] py-12">
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
            5. PROCESSUS — De la décision à la prise de poste
        ══════════════════════════════════════════════ */}
        <section id="processus-rh" aria-labelledby="processus-heading" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">Efficacité opérationnelle</p>
                <h2 id="processus-heading" className="mb-6 font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.5rem]">
                  Votre DRH recrute.
                  <br />
                  <span className="text-[#003366]/70">Nous faisons tout le reste.</span>
                </h2>
                <p className="mb-8 text-[1rem] leading-relaxed text-neutral-600">
                  La mobilité internationale mobilise en moyenne 40 heures de travail administratif
                  par dossier. Chaque heure passée sur des formulaires IRCC est une heure que votre
                  équipe RH n&apos;investit pas dans le recrutement stratégique. Nous absorbons cette
                  charge, entièrement, avec un reporting transparent à chaque étape.
                </p>

                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    { icon: ClipboardList, title: "Documentation centralisée",    body: "Plateforme sécurisée. Tous les documents en un endroit. Finis les échanges email interminables." },
                    { icon: UserCheck,     title: "Senior Advisor dédié",         body: "Un conseiller senior nommément attribué à votre compte. Disponible, réactif, expert en droit canadien de l'immigration." },
                    { icon: Globe,         title: "Réseau juridique partenaire",   body: "Pour les cas complexes, un réseau de juristes spécialisés mobilisé en 24h." },
                    { icon: BarChart3,     title: "Dashboard KPI en temps réel",  body: "Statut de chaque dossier, deadlines, alertes de renouvellement. Votre DG a la visibilité qu'il attend." },
                  ].map(({ icon: Icon, title, body }) => (
                    <div key={title} className="flex gap-4">
                      <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#003366]/8">
                        <Icon className="size-5 text-[#003366]" strokeWidth={1.75} aria-hidden />
                      </div>
                      <div>
                        <h3 className="mb-1 text-sm font-semibold text-[#003366]">{title}</h3>
                        <p className="text-[0.8125rem] leading-relaxed text-neutral-600">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link href="/rendez-vous" className="btn-primary">
                    Contacter un Senior Advisor
                    <ChevronRight className="size-[15px]" aria-hidden />
                  </Link>
                </div>
              </div>

              {/* Timeline 9 semaines */}
              <div className="relative">
                <div className="rounded-3xl bg-[#F8F9FA] p-8 lg:p-10">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">De l&apos;EIMT à la prise de poste</p>
                  <p className="mb-6 font-display text-[1.5rem] font-bold text-[#003366]">9 semaines en moyenne</p>
                  <ol className="space-y-5">
                    {[
                      { n: "S1", t: "Brief stratégique (48h)",          d: "Analyse du poste, profil candidat, voie d'entrée optimale. Plan d'action livré." },
                      { n: "S2–4", t: "EIMT ou pré-qualification ICT",  d: "Dossier complet déposé, coordination Service Canada, suivi quotidien." },
                      { n: "S5–7", t: "Permis de travail",               d: "Dépôt IRCC, vérification documentaire totale, relances proactives." },
                      { n: "S8–9", t: "Onboarding — Opérationnel J+1",  d: "Logement, NAS, compte bancaire, RAMQ. Votre recrue est productive dès son premier jour." },
                    ].map(({ n, t, d }) => (
                      <li key={n} className="flex gap-4">
                        <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#D80621] font-display text-[11px] font-bold text-white whitespace-nowrap px-2">{n}</div>
                        <div>
                          <p className="font-semibold text-[#003366] text-sm">{t}</p>
                          <p className="mt-0.5 text-[0.8125rem] text-neutral-600">{d}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-[#003366]/15 bg-white p-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] sm:block">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-5 text-emerald-500" strokeWidth={2} aria-hidden />
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
            6. TÉMOIGNAGE B2B
        ══════════════════════════════════════════════ */}
        <section aria-labelledby="temoignage-b2b-heading" className="relative overflow-hidden bg-[#003366] py-16 lg:py-20">
          <LogoMark className="pointer-events-none absolute -left-20 -bottom-8 h-[400px] w-auto text-white opacity-[0.04] select-none" />
          <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/65">Témoignage partenaire</p>
                <h2 id="temoignage-b2b-heading" className="sr-only">Témoignage partenaire entreprise</h2>
                <blockquote className="mb-6 font-display text-[1.25rem] leading-[1.65] text-white sm:text-[1.4rem]">
                  &ldquo;Nous avions une fenêtre de 6 semaines pour positionner deux cadres depuis
                  Paris vers Montréal. Mobility Canada a monté les dossiers ICT en un temps record,
                  zéro erreur de compliance. Le ROI est évident : ces deux profils ont généré plus
                  de valeur en 3 mois que nos recrutements locaux de l&apos;année. C&apos;est
                  devenu notre partenaire RH attitré pour toute l&apos;Amérique du Nord.&rdquo;
                </blockquote>
                <footer className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#D80621] font-display text-sm font-bold text-white">TL</div>
                  <div>
                    <p className="font-semibold text-white">Thomas L.</p>
                    <p className="text-sm text-white/70">VP People Operations · Groupe technologique international</p>
                  </div>
                </footer>
              </div>
              <div className="flex flex-col gap-3 lg:min-w-[220px]">
                {[
                  { label: "Permis traités",     value: "18 dossiers"  },
                  { label: "Time-to-hire moyen", value: "9 semaines"   },
                  { label: "Conformité IRCC",    value: "100 %"        },
                  { label: "Partenariat",        value: "Depuis 2021"  },
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
            7. CTA FINAL B2B
        ══════════════════════════════════════════════ */}
        <section aria-labelledby="cta-entreprise-heading" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#003366]/15 bg-[#003366]/5 px-4 py-2">
              <ShieldCheck className="size-4 text-[#003366]" strokeWidth={2} aria-hidden />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#003366]">
                Consultation B2B — Devis personnalisé sous 48h
              </span>
            </div>
            <h2 id="cta-entreprise-heading" className="mb-5 font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.75rem]">
              La mobilité internationale,
              <br />
              <span className="text-[#D80621]">un avantage compétitif.</span>
            </h2>
            <p className="mx-auto mb-10 max-w-[52ch] text-[1rem] leading-relaxed text-neutral-600">
              Votre Senior Advisor analyse vos besoins en recrutement international, identifie
              la stratégie d&apos;immigration optimale et vous remet une proposition chiffrée avec
              délais et ROI estimé. Sans jargon, sans engagement.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/rendez-vous" className="btn-primary text-base !px-8 !py-4">
                Demander une consultation B2B
                <ChevronRight className="size-4" aria-hidden />
              </Link>
              <a href="tel:+15143770857" className="btn-outline text-base !px-8 !py-4">
                <Phone className="size-4" aria-hidden />
                +1 (514) 377-0857
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-neutral-500">
              {["✓  Réponse garantie sous 48h", "✓  Devis ROI sans engagement", "✓  Senior Advisor dédié", "✓  Conformité IRCC garantie"].map((g) => (
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
