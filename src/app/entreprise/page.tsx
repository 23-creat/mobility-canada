import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3, FileCheck, ArrowLeftRight, ShieldCheck,
  Users, TrendingUp, CheckCircle2, ChevronRight,
  Building2, Phone, Briefcase, Scale, Star,
  ClipboardList, UserCheck, Globe,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* ─── SEO ─── */

export const metadata: Metadata = {
  title: "Immigration Professionnelle Canada — EIMT, Permis de Travail & Mobilité RH",
  description:
    "Solutions B2B d'immigration professionnelle au Canada : EIMT, permis de travail fermés, transferts intra-compagnie, audit de conformité employeur. Consultants agréés CRIC/CICC. Réponse sous 48h.",
  keywords: [
    "immigration professionnelle Canada",
    "recrutement travailleurs étrangers",
    "EIMT Canada service",
    "permis de travail employeur",
    "transfert intra-compagnie Canada",
    "mobilité RH internationale",
    "conformité employeur immigration",
  ],
  openGraph: {
    title: "Mobilité RH & Immigration Professionnelle Canada | Mobility Canada",
    description:
      "EIMT, permis de travail fermés, transferts ICT, audit de conformité. Mobility Canada gère 100% de la mobilité internationale de vos équipes.",
  },
};

/* ─── Données ─── */

interface ServiceCard {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;
  tag: string;
  label: string;
  desc: string;
  highlight?: string;
}

const SERVICES: ServiceCard[] = [
  {
    icon: BarChart3,
    tag: "Recrutement international",
    label: "Étude d'Impact sur le Marché du Travail (EIMT)",
    desc: "Obtention du Labour Market Impact Assessment requis pour recruter hors exemptions. Dossier complet, justification économique, coordination avec Service Canada.",
    highlight: "Délai moyen : 3–4 semaines",
  },
  {
    icon: FileCheck,
    tag: "Permis nominatif",
    label: "Permis de travail fermé",
    desc: "Permis directement liés à votre offre d'emploi. Documentation irréprochable, suivi en temps réel, taux d'acceptation supérieur à la moyenne nationale.",
    highlight: "Traitement prioritaire disponible",
  },
  {
    icon: ArrowLeftRight,
    tag: "Mobilité interne",
    label: "Transfert intra-compagnie (ICT)",
    desc: "Déplacez cadres, spécialistes ou stagiaires entre filiales multinationales. Programme exempt d'EIMT, pré-qualification rapide, extension facilitée.",
    highlight: "Exempt d'EIMT",
  },
  {
    icon: Scale,
    tag: "Conformité légale",
    label: "Audit de conformité employeur",
    desc: "Revue complète de vos obligations vis-à-vis d'IRCC. Prévention des sanctions, audit des contrats, mise en conformité des procédures internes RH.",
    highlight: "Rapport livré sous 5 jours",
  },
  {
    icon: Users,
    tag: "Onboarding",
    label: "Programme d'intégration RH",
    desc: "Logement, NAS, permis de conduire, ouverture de compte, RAMQ — nos conseillers accompagnent chaque recrue dans son installation pour une prise de poste immédiate.",
    highlight: "Suivi 90 jours post-arrivée",
  },
  {
    icon: TrendingUp,
    tag: "Stratégie",
    label: "Conseil en immigration d'entreprise",
    desc: "Anticipez vos besoins en recrutement international. Cartographie de vos flux de mobilité, optimisation des voies d'entrée et planification pluriannuelle.",
    highlight: "Sur mesure, senior advisor dédié",
  },
];

const STATS = [
  { value: "120+", label: "Entreprises partenaires",  note: "PME, ETI, multinationales" },
  { value: "48 h", label: "Délai de réponse garanti", note: "Réponse contractuelle" },
  { value: "98 %", label: "Permis accordés",          note: "Sur 5 ans de données" },
  { value: "12 ans", label: "D'expertise Canada",     note: "Depuis 2013" },
] as const;

const PROCESS_STEPS = [
  {
    n: "01",
    t: "Brief RH (30 min)",
    d: "Nous analysons le poste, le profil du candidat, l'urgence et la stratégie d'embauche.",
  },
  {
    n: "02",
    t: "Stratégie & éligibilité",
    d: "Identification du programme optimal (EIMT, ICT, LMIA-exempté) et présentation d'un plan d'action détaillé sous 48h.",
  },
  {
    n: "03",
    t: "Gestion documentaire complète",
    d: "Nous collectons, traduisons et déposons l'ensemble du dossier. Zéro charge administrative pour vos équipes.",
  },
  {
    n: "04",
    t: "Installation & suivi",
    d: "Onboarding du collaborateur, check-in à 30 et 90 jours, renouvellements anticipés.",
  },
];

/* ─── Composant carte service ─── */

function ServiceCard({ icon: Icon, tag, label, desc, highlight }: ServiceCard) {
  const tagColors: Record<string, string> = {
    "Recrutement international": "bg-[#003366]/8 text-[#003366]",
    "Permis nominatif":          "bg-sky-50 text-sky-700",
    "Mobilité interne":          "bg-violet-50 text-violet-700",
    "Conformité légale":         "bg-amber-50 text-amber-700",
    "Onboarding":                "bg-emerald-50 text-emerald-700",
    "Stratégie":                 "bg-rose-50 text-rose-700",
  };

  return (
    <article className="group relative flex flex-col rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,51,102,0.1)]">
      {/* Icône */}
      <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-[#003366]/8 transition-colors duration-300 group-hover:bg-[#003366]/15">
        <Icon className="size-5 text-[#003366]" strokeWidth={1.75} aria-hidden />
      </div>

      {/* Tag */}
      <span className={`mb-3 inline-flex w-fit rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${tagColors[tag] ?? "bg-neutral-100 text-neutral-600"}`}>
        {tag}
      </span>

      {/* Contenu */}
      <h3 className="mb-2 font-display text-[1rem] font-bold leading-snug text-[#003366]">
        {label}
      </h3>
      <p className="flex-1 text-[0.875rem] leading-relaxed text-neutral-600">{desc}</p>

      {/* Highlight */}
      {highlight && (
        <div className="mt-4 flex items-center gap-1.5">
          <CheckCircle2 className="size-3.5 flex-shrink-0 text-emerald-500" strokeWidth={2.5} aria-hidden />
          <span className="text-[0.8125rem] font-medium text-emerald-700">{highlight}</span>
        </div>
      )}

      {/* Accent rouge au hover */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] rounded-b-2xl bg-[#D80621] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  );
}

/* ─── Page principale ─── */

export default function EntreprisePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ══════════════════════════════════════════════
            1. HERO B2B
        ══════════════════════════════════════════════ */}
        <section
          aria-labelledby="entreprise-h1"
          className="relative overflow-hidden bg-[#003366] pb-0 pt-28 sm:pt-32 lg:pt-36"
        >
          {/* Fond décoratif */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute right-[-6%] top-[8%] h-[560px] w-[560px] rounded-full bg-[#D80621]/8 blur-[130px]" />
            <div className="absolute left-[-8%] bottom-[-10%] h-[440px] w-[440px] rounded-full bg-white/[0.03] blur-[90px]" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1.2px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-end gap-12 pb-16 lg:grid-cols-[1fr_400px] lg:pb-0">

              {/* Texte */}
              <div className="pt-4">
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2">
                  <Building2 className="size-3.5 text-white/70" aria-hidden />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">
                    Solutions Entreprises &amp; RH International
                  </span>
                </div>

                <h1
                  id="entreprise-h1"
                  className="mb-6 font-display text-[2.6rem] font-bold leading-[1.08] tracking-tight text-white sm:text-[3.25rem] lg:text-[3.75rem]"
                >
                  Recrutez les meilleurs
                  <br />
                  <span className="text-white/65">talents mondiaux.</span>
                  <br />
                  <span className="text-white/65">Sans friction.</span>
                </h1>

                <p className="mb-8 max-w-[54ch] text-[1.0625rem] leading-[1.75] text-white/70">
                  EIMT, permis de travail fermés, transferts intra-compagnie, audit de conformité —
                  Mobility Canada prend en charge l&apos;intégralité de votre mobilité RH internationale
                  pour que vos équipes se concentrent sur l&apos;essentiel : recruter.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/rendez-vous" className="btn-primary">
                    Demander une consultation B2B
                    <ChevronRight className="size-[15px]" aria-hidden />
                  </Link>
                  <a
                    href="#processus-rh"
                    className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-white/70 transition-colors hover:text-white"
                  >
                    Voir notre processus
                    <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </a>
                </div>

                {/* Preuves sociales */}
                <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8">
                  {[
                    { v: "120+",  l: "Entreprises partenaires" },
                    { v: "48 h",  l: "Délai de réponse" },
                    { v: "100 %", l: "Conformité garantie" },
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
                    &ldquo;En 3 mois, Mobility Canada nous a permis de recruter 4 ingénieurs
                    spécialisés hors UE. Le processus EIMT que je redoutais a été géré
                    intégralement par leur équipe. Résultat zéro défaut.&rdquo;
                  </blockquote>
                  <footer className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-[#003366] font-display text-sm font-bold text-white">
                      MF
                    </div>
                    <div>
                      <p className="font-semibold text-[#003366] text-sm">Marie-France D.</p>
                      <p className="text-xs text-neutral-500">DRH — Scale-up technologique · Montréal</p>
                    </div>
                  </footer>
                  <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50/60 p-3">
                    <CheckCircle2 className="size-4 text-emerald-500 flex-shrink-0" strokeWidth={2} aria-hidden />
                    <p className="text-xs font-medium text-emerald-700">
                      4 permis de travail obtenus en 11 semaines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vague */}
          <div className="relative h-16 overflow-hidden" aria-hidden>
            <svg
              viewBox="0 0 1440 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 w-full"
              preserveAspectRatio="none"
            >
              <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="#F8F9FA" />
            </svg>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            2. GRILLE DE SERVICES
        ══════════════════════════════════════════════ */}
        <section
          id="services-entreprise"
          aria-labelledby="services-entreprise-heading"
          className="bg-[#F8F9FA] py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

            <div className="mb-14 text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
                Nos solutions B2B
              </p>
              <h2
                id="services-entreprise-heading"
                className="mx-auto max-w-[32ch] font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.5rem]"
              >
                Un guichet unique pour toute
                <br />
                <span className="text-[#003366]/70">votre mobilité internationale.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-[58ch] text-neutral-600">
                De l&apos;étude d&apos;impact sur le marché du travail jusqu&apos;à l&apos;installation
                du collaborateur, chaque étape est gérée par un conseiller senior dédié.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <ServiceCard key={s.label} {...s} />
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/rendez-vous" className="btn-primary">
                Demander un devis B2B
                <ChevronRight className="size-[15px]" aria-hidden />
              </Link>
              <p className="text-sm text-neutral-600">
                Réponse garantie sous 48h · Sans engagement
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            3. STATS — Bande confiance B2B
        ══════════════════════════════════════════════ */}
        <section
          aria-label="Chiffres clés B2B Mobility Canada"
          className="border-y border-neutral-100 bg-white py-12"
        >
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
            4. PROCESSUS SIMPLIFIÉ — Décharge le DRH
        ══════════════════════════════════════════════ */}
        <section
          id="processus-rh"
          aria-labelledby="processus-heading"
          className="bg-white py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

              {/* Texte gauche */}
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
                  Processus simplifié
                </p>
                <h2
                  id="processus-heading"
                  className="mb-6 font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.5rem]"
                >
                  Votre DRH recrute.
                  <br />
                  <span className="text-[#003366]/70">Nous gérons le reste.</span>
                </h2>
                <p className="mb-8 text-[1rem] leading-relaxed text-neutral-600">
                  L&apos;immigration professionnelle mobilise en moyenne 40 heures de travail
                  administratif par dossier. Nous absorbons intégralement cette charge pour
                  vos équipes RH, avec un interlocuteur unique et un reporting transparent
                  à chaque étape.
                </p>

                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    { icon: ClipboardList, title: "Documentation centralisée", body: "Une plateforme sécurisée pour tous les documents. Finis les échanges d'emails interminables." },
                    { icon: UserCheck,    title: "Interlocuteur senior dédié", body: "Un conseiller nommément attribué à votre compte. Disponible, réactif, expert." },
                    { icon: Globe,        title: "Réseau d'avocats partenaires", body: "Pour les cas complexes, un réseau de juristes spécialisés en droit de l'immigration canadien." },
                    { icon: Briefcase,    title: "Reporting en temps réel", body: "Dashboard RH : statut de chaque dossier, deadlines, alertes de renouvellement automatiques." },
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
                    Contacter un expert mobilité RH
                    <ChevronRight className="size-[15px]" aria-hidden />
                  </Link>
                </div>
              </div>

              {/* Processus en 4 étapes */}
              <div className="relative">
                <div className="rounded-3xl bg-[#F8F9FA] p-8 lg:p-10">
                  <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
                    Notre méthode en 4 étapes
                  </p>
                  <ol className="space-y-6">
                    {PROCESS_STEPS.map(({ n, t, d }) => (
                      <li key={n} className="flex gap-4">
                        <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-[#D80621] font-display text-xs font-bold text-white">
                          {n}
                        </div>
                        <div>
                          <p className="font-semibold text-[#003366] text-sm">{t}</p>
                          <p className="mt-0.5 text-[0.8125rem] text-neutral-600">{d}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Badge flottant */}
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
            5. TÉMOIGNAGE B2B
        ══════════════════════════════════════════════ */}
        <section
          aria-labelledby="temoignage-b2b-heading"
          className="bg-[#003366] py-16 lg:py-20"
        >
          <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/65">
                  Témoignage partenaire
                </p>
                <h2 id="temoignage-b2b-heading" className="sr-only">Témoignage partenaire entreprise</h2>
                <blockquote className="mb-6 font-display text-[1.25rem] leading-[1.65] text-white sm:text-[1.4rem]">
                  &ldquo;Nous avions une fenêtre de 6 semaines pour positionner deux cadres
                  depuis notre bureau de Paris vers Montréal. Mobility Canada a monté les
                  dossiers ICT en un temps record, avec zéro erreur de compliance. C&apos;est
                  devenu notre partenaire RH attitré pour toute l&apos;Amérique du Nord.&rdquo;
                </blockquote>
                <footer className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#D80621] font-display text-sm font-bold text-white">
                    TL
                  </div>
                  <div>
                    <p className="font-semibold text-white">Thomas L.</p>
                    <p className="text-sm text-white/70">VP People Operations · Groupe technologique international</p>
                  </div>
                </footer>
              </div>

              <div className="flex flex-col gap-3 lg:min-w-[220px]">
                {[
                  { label: "Dossiers traités",    value: "18 permis" },
                  { label: "Délai moyen",          value: "9 semaines" },
                  { label: "Taux de succès",       value: "100 %" },
                  { label: "Collaboration",        value: "Depuis 2021" },
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
            6. CTA FINAL B2B
        ══════════════════════════════════════════════ */}
        <section
          aria-labelledby="cta-entreprise-heading"
          className="bg-white py-20 lg:py-24"
        >
          <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#003366]/15 bg-[#003366]/5 px-4 py-2">
              <ShieldCheck className="size-4 text-[#003366]" strokeWidth={2} aria-hidden />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#003366]">
                Consultation B2B — Devis personnalisé sous 48h
              </span>
            </div>

            <h2
              id="cta-entreprise-heading"
              className="mb-5 font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.75rem]"
            >
              Parlons de la mobilité
              <br />
              <span className="text-[#D80621]">de vos équipes.</span>
            </h2>

            <p className="mx-auto mb-10 max-w-[52ch] text-[1rem] leading-relaxed text-neutral-600">
              Un conseiller senior analyse votre situation, identifie la stratégie d&apos;immigration
              optimale et vous remet une proposition chiffrée. Sans jargon, sans engagement.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/rendez-vous" className="btn-primary text-base !px-8 !py-4">
                Demander une consultation B2B
                <ChevronRight className="size-4" aria-hidden />
              </Link>
              <a
                href="tel:+15143770857"
                className="btn-outline text-base !px-8 !py-4"
              >
                <Phone className="size-4" aria-hidden />
                +1 (514) 377-0857
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-neutral-500">
              {[
                "✓  Réponse garantie sous 48h",
                "✓  Devis sans engagement",
                "✓  Consultants agréés CRIC",
                "✓  Conformité IRCC garantie",
              ].map((g) => (
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
