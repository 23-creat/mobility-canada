import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight, Home, Users, ShieldCheck, GraduationCap,
  CreditCard, Heart, Clock, CheckCircle2, Star, ArrowRight,
  MapPin, Briefcase, FileText, Phone,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FaqAccordion, { type FaqItem } from "@/components/ui/FaqAccordion";

/* ─── SEO ─── */

export const metadata: Metadata = {
  title: "S'installer au Canada en Famille — Résidence Permanente & Relocalisation",
  description:
    "Accompagnement complet pour votre projet de vie au Canada : visa de résident permanent, relocalisation famille, recherche de logement, inscription scolaire. Consultants agréés CRIC. Devis gratuit.",
  keywords: [
    "immigration Canada famille",
    "résidence permanente Canada",
    "relocalisation Montréal",
    "s'installer au Canada",
    "visa famille Canada",
    "relocalisation famille France Canada",
  ],
  openGraph: {
    title: "S'installer au Canada | Accompagnement Famille Premium — Mobility Canada",
    description:
      "Votre projet de vie au Canada, géré de A à Z. Résidence permanente, logement, école, banque. Un conseiller dédié, zéro stress administratif.",
  },
};

/* ─── Données ─── */

const PACK_ITEMS = [
  {
    icon: FileText,
    label: "Dossier de résidence permanente",
    desc: "Analyse d'éligibilité (Express Entry, PEQ, RNIP…), constitution et dépôt de votre dossier complet.",
    tag: "Fondamental",
  },
  {
    icon: Home,
    label: "Recherche de logement",
    desc: "Sélection de quartiers, visite virtuelle ou physique, négociation du bail avant votre arrivée.",
    tag: "Confort",
  },
  {
    icon: GraduationCap,
    label: "Scolarisation des enfants",
    desc: "Inscription dans les meilleures écoles publiques ou privées, selon votre commune et vos préférences.",
    tag: "Famille",
  },
  {
    icon: CreditCard,
    label: "Ouverture de comptes bancaires",
    desc: "Démarches à distance auprès des grandes banques canadiennes, avant même votre atterrissage.",
    tag: "Pratique",
  },
  {
    icon: Heart,
    label: "Accès au système de santé",
    desc: "Inscription à la RAMQ, médecin de famille, cliniques — vos enfants couverts dès J+1.",
    tag: "Sécurité",
  },
  {
    icon: Briefcase,
    label: "Permis de travail & reconnaissance",
    desc: "Traitement du permis de travail de votre conjoint(e), équivalence des diplômes et accès aux ordres professionnels.",
    tag: "Carrière",
  },
] as const;

const REASONS = [
  {
    icon: Users,
    title: "Un conseiller dédié à votre famille",
    body: "Pas un centre d'appels. Un interlocuteur unique qui connaît chaque détail de votre dossier et répond en moins de 4 heures.",
  },
  {
    icon: ShieldCheck,
    title: "Zéro bureaucratie pour vous",
    body: "Nous collectons, complétons et déposons chaque formulaire en votre nom. Vous validez, on exécute.",
  },
  {
    icon: Clock,
    title: "Délais optimisés, sans surprise",
    body: "Notre connaissance des procédures IRCC nous permet d'anticiper les demandes de pièces et de réduire les délais de 20 à 40 %.",
  },
  {
    icon: MapPin,
    title: "Réseau local à Montréal",
    body: "Agents immobiliers, courtiers hypothécaires, notaires — notre réseau de partenaires vous est accessible dès le premier jour.",
  },
] as const;

const STATS = [
  { value: "4,9 / 5", label: "Satisfaction familles", note: "1 200+ avis vérifiés" },
  { value: "98 %",    label: "Dossiers acceptés",    note: "En résidence permanente" },
  { value: "12 ans",  label: "D'expertise Canada",   note: "Depuis 2013" },
  { value: "< 24 h",  label: "Délai de réponse",     note: "Garantie contractuelle" },
] as const;

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Combien de temps faut-il pour obtenir la résidence permanente au Canada ?",
    answer:
      "Le délai varie selon le programme : Express Entry (Entrée express) traite les dossiers complets en 6 à 8 mois en moyenne. Le Programme de l'expérience québécoise (PEQ) peut être plus rapide (4 à 6 mois) pour les étudiants diplômés au Québec ou les travailleurs qualifiés déjà sur place. Nos consultants analysent votre profil pour identifier le chemin le plus rapide.",
  },
  {
    question: "Peut-on s'installer au Canada sans avoir d'emploi au préalable ?",
    answer:
      "Oui, tout à fait. La majorité de nos clients entrent au Canada sans offre d'emploi préalable. Des programmes comme Express Entry évaluent votre potentiel sur la base de vos compétences, de votre formation et de votre expérience. Nous vous préparons à optimiser votre score CRS pour maximiser vos chances d'invitation.",
  },
  {
    question: "Nos enfants peuvent-ils aller à l'école francophone ?",
    answer:
      "Au Québec, les enfants dont au moins un parent est citoyen canadien ou détenteur d'un certificat de sélection peuvent accéder à l'école francophone publique. Pour les écoles anglophones ou les résidents permanents, la scolarisation se fait en français dans les commissions scolaires locales. Nous gérons l'ensemble des inscriptions avant votre arrivée.",
  },
  {
    question: "Le conjoint qui ne travaille pas peut-il obtenir le droit de travailler ?",
    answer:
      "Oui. Dans le cadre de la majorité des demandes de résidence permanente, le conjoint ou la conjointe reçoit un permis de travail ouvert (PTO) qui lui permet d'exercer n'importe quelle activité professionnelle au Canada sans restriction d'employeur. Nous incluons cette démarche dans votre dossier familial.",
  },
  {
    question: "Comment se passe la couverture médicale à l'arrivée ?",
    answer:
      "Dès votre arrivée au Québec avec votre statut de résident permanent, vous pouvez vous inscrire à la RAMQ (Régie de l'assurance maladie du Québec). La couverture démarre généralement après un délai de carence de 3 mois. Nous vous conseillons une assurance privée de transition pour couvrir ce délai. Tous les membres de la famille, enfants inclus, sont pris en charge.",
  },
  {
    question: "Puis-je acheter un bien immobilier en tant que non-résident ?",
    answer:
      "Oui, sous réserve de la Loi sur l'interdiction d'achat d'immeubles résidentiels par des non-Canadiens (applicable depuis 2023 aux étrangers hors statut). En tant que résident permanent ou titulaire d'un permis de travail valide d'au moins 183 jours, vous pouvez acheter librement. Notre partenaire courtier hypothécaire spécialisé en primo-accédants immigrants vous accompagnera pour l'obtention d'un prêt.",
  },
] as const;

/* ─── Composant interne : Carte service ─── */

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
      <p className="text-[0.875rem] leading-relaxed text-neutral-500">{desc}</p>

      {/* Accent rouge au hover */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] rounded-b-2xl bg-[#D80621] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  );
}

/* ─── Page principale ─── */

export default function ParticulierPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ══════════════════════════════════════════════
            1. HERO — Projet de vie & sérénité
        ══════════════════════════════════════════════ */}
        <section
          aria-labelledby="particulier-h1"
          className="relative overflow-hidden bg-[#003366] pb-0 pt-28 sm:pt-32 lg:pt-36"
        >
          {/* Fond décoratif */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute right-[-8%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#D80621]/10 blur-[120px]" />
            <div className="absolute left-[-6%] bottom-[-5%] h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-[80px]" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1.2px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-end gap-12 pb-16 lg:grid-cols-[1fr_420px] lg:pb-0">

              {/* Texte */}
              <div className="pt-4">
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2">
                  <Users className="size-3.5 text-white/70" aria-hidden />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">
                    Parcours Particuliers & Familles
                  </span>
                </div>

                <h1
                  id="particulier-h1"
                  className="mb-6 font-display text-[2.6rem] font-bold leading-[1.08] tracking-tight text-white sm:text-[3.25rem] lg:text-[4rem]"
                >
                  Votre projet de vie
                  <br />
                  <span className="text-white/60">mérite une expertise&nbsp;au&nbsp;niveau.</span>
                </h1>

                <p className="mb-8 max-w-[54ch] text-[1.0625rem] leading-[1.75] text-white/60">
                  Visa de résident permanent, logement, école, médecin, banque — nous orchestrons
                  l&apos;intégralité de votre installation au Canada. Vous vivez votre déménagement,
                  nous gérons la paperasse.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/rendez-vous" className="btn-primary">
                    Évaluer mon éligibilité gratuitement
                    <ChevronRight className="size-[15px]" aria-hidden />
                  </Link>
                  <a
                    href="#pack-relocalisation"
                    className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-white/60 transition-colors hover:text-white"
                  >
                    Voir notre Pack Relocalisation
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </a>
                </div>

                {/* Preuves sociales */}
                <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-white/10 pt-8">
                  {[
                    { v: "98 %", l: "Dossiers acceptés" },
                    { v: "1 200+", l: "Familles installées" },
                    { v: "4,9 / 5", l: "Satisfaction" },
                  ].map(({ v, l }) => (
                    <div key={l} className="flex flex-col">
                      <span className="font-display text-[1.5rem] font-bold text-white">{v}</span>
                      <span className="text-[11px] font-medium uppercase tracking-wider text-white/60">{l}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carte témoignage hero */}
              <div className="hidden lg:block pb-12">
                <div className="rounded-3xl bg-white p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
                  <div className="mb-4 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="mb-6 font-display text-[1.05rem] leading-relaxed text-[#003366]">
                    &ldquo;Nous avons quitté Lyon avec trois enfants. Grâce à Mobility Canada,
                    tout était organisé à notre arrivée : logement, école, ouverture de compte.
                    Un service d&apos;une qualité rare.&rdquo;
                  </blockquote>
                  <footer className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-[#D80621] font-display text-sm font-bold text-white">
                      GB
                    </div>
                    <div>
                      <p className="font-semibold text-[#003366] text-sm">Gilles & Coralie B.</p>
                      <p className="text-xs text-neutral-500">Famille en relocalisation · Québec, QC</p>
                    </div>
                  </footer>
                  {/* Badge RP */}
                  <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50/60 p-3">
                    <CheckCircle2 className="size-4 text-emerald-500 flex-shrink-0" strokeWidth={2} aria-hidden />
                    <p className="text-xs font-medium text-emerald-700">
                      Résidence permanente obtenue en 6 mois
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vague de séparation */}
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
            2. PACK RELOCALISATION — Grille de services
        ══════════════════════════════════════════════ */}
        <section
          id="pack-relocalisation"
          aria-labelledby="pack-heading"
          className="bg-[#F8F9FA] py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

            {/* En-tête */}
            <div className="mb-14 text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
                Notre offre signature
              </p>
              <h2
                id="pack-heading"
                className="mx-auto max-w-[28ch] font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.5rem]"
              >
                Le Pack Relocalisation :
                <br />
                <span className="text-[#003366]/70">tout inclus, rien à gérer.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-[55ch] text-neutral-600">
                Un programme d&apos;accompagnement personnalisé, de la première consultation
                jusqu&apos;à votre première nuit dans votre nouveau foyer canadien.
              </p>
            </div>

            {/* Grille */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PACK_ITEMS.map((item) => (
                <PackCard key={item.label} {...item} />
              ))}
            </div>

            {/* CTA sous la grille */}
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/rendez-vous" className="btn-primary">
                Démarrer mon Pack Relocalisation
                <ChevronRight className="size-[15px]" aria-hidden />
              </Link>
              <p className="text-sm text-neutral-600">
                Consultation gratuite · Sous 24h · Sans engagement
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            3. STATS — Bande de confiance
        ══════════════════════════════════════════════ */}
        <section
          aria-label="Chiffres clés Mobility Canada"
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
            4. POURQUOI NOUS — L'aspect humain
        ══════════════════════════════════════════════ */}
        <section
          id="pourquoi-nous"
          aria-labelledby="pourquoi-heading"
          className="bg-white py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

              {/* Texte */}
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
                  Ce qui nous distingue
                </p>
                <h2
                  id="pourquoi-heading"
                  className="mb-6 font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.5rem]"
                >
                  Nous ne gérons pas
                  <br />
                  <span className="text-[#003366]/70">des dossiers. Nous accompagnons des familles.</span>
                </h2>
                <p className="mb-10 text-[1rem] leading-relaxed text-neutral-500">
                  Derrière chaque formulaire se cache un projet de vie. Une mutation professionnelle,
                  un désir d&apos;espace, un avenir meilleur pour vos enfants. Nous l&apos;avons compris
                  dès 2013 : l&apos;excellence administrative ne suffit pas. Elle doit s&apos;accompagner
                  d&apos;une réelle dimension humaine.
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

              {/* Carte réassurance visuelle */}
              <div className="relative">
                {/* Carte principale */}
                <div className="rounded-3xl bg-[#F8F9FA] p-8 lg:p-10">
                  <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
                    Notre processus en 4 étapes
                  </p>
                  <ol className="space-y-6">
                    {[
                      { n: "01", t: "Consultation gratuite (30 min)", d: "Analyse de votre profil, objectifs et délais souhaités." },
                      { n: "02", t: "Feuille de route personnalisée", d: "Programme d'immigration et calendrier détaillé, envoyés sous 48h." },
                      { n: "03", t: "Gestion complète du dossier", d: "Collecte des documents, traduction, dépôt — nous nous occupons de tout." },
                      { n: "04", t: "Accueil & installation", d: "Logement, école, banque, RAMQ — votre conciergerie d'arrivée activée." },
                    ].map(({ n, t, d }) => (
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
            5. TÉMOIGNAGE LONG — Famille en vedette
        ══════════════════════════════════════════════ */}
        <section
          aria-labelledby="temoignage-famille-heading"
          className="bg-[#003366] py-16 lg:py-20"
        >
          <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/60">
                  Témoignage client
                </p>
                <h2 id="temoignage-famille-heading" className="sr-only">Témoignage famille</h2>
                <blockquote className="mb-6 font-display text-[1.25rem] leading-[1.65] text-white sm:text-[1.4rem]">
                  &ldquo;Nous avions peur de tout : les formulaires, les délais, trouver une école
                  pour nos filles. Mobility Canada a transformé notre anxiété en excitation.
                  Six mois après notre appel initial, nous étions résidents permanents et nos
                  filles adoraient leur école à Montréal. Ce que cette équipe accomplit est
                  littéralement remarquable.&rdquo;
                </blockquote>
                <footer className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#D80621] font-display text-sm font-bold text-white">
                    SL
                  </div>
                  <div>
                    <p className="font-semibold text-white">Sophie & Laurent K.</p>
                    <p className="text-sm text-white/70">Famille de 4 personnes · Paris → Montréal · 2024</p>
                  </div>
                </footer>
              </div>

              <div className="flex flex-col gap-3 lg:min-w-[220px]">
                {[
                  { label: "Dossier déposé en", value: "6 semaines" },
                  { label: "RP obtenue en",      value: "5 mois" },
                  { label: "Logement trouvé",    value: "Avant l'arrivée" },
                  { label: "École inscrite",     value: "Jour J" },
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
            6. FAQ — Questions Résidence Permanente
        ══════════════════════════════════════════════ */}
        <section
          id="faq-particulier"
          aria-labelledby="faq-particulier-heading"
          className="bg-[#F8F9FA] py-20 lg:py-28"
        >
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
                Questions fréquentes
              </p>
              <h2
                id="faq-particulier-heading"
                className="font-display text-[1.75rem] font-bold text-[#003366] sm:text-[2.25rem]"
              >
                Résidence permanente & installation :
                <br />
                <span className="text-[#003366]/70">les réponses à vos vraies questions.</span>
              </h2>
            </div>

            <FaqAccordion items={FAQ_ITEMS} />

            <p className="mt-8 text-center text-sm text-neutral-600">
              Votre situation est unique ?{" "}
              <Link
                href="/rendez-vous"
                className="font-medium text-[#003366] underline underline-offset-2 hover:text-[#D80621]"
              >
                Parlez directement à un consultant.
              </Link>
            </p>
          </div>
        </section>

        {/* JSON-LD FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
                "@type": "Question",
                name: question,
                acceptedAnswer: { "@type": "Answer", text: answer },
              })),
            }),
          }}
        />

        {/* ══════════════════════════════════════════════
            7. CTA FINAL — Conversion
        ══════════════════════════════════════════════ */}
        <section
          aria-labelledby="cta-particulier-heading"
          className="bg-white py-20 lg:py-24"
        >
          <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#003366]/15 bg-[#003366]/5 px-4 py-2">
              <ShieldCheck className="size-4 text-[#003366]" strokeWidth={2} aria-hidden />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#003366]">
                Consultation 100 % gratuite — Sans engagement
              </span>
            </div>

            <h2
              id="cta-particulier-heading"
              className="mb-5 font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.75rem]"
            >
              Votre nouvelle vie au Canada
              <br />
              <span className="text-[#D80621]">commence par un appel.</span>
            </h2>

            <p className="mx-auto mb-10 max-w-[52ch] text-[1rem] leading-relaxed text-neutral-500">
              En 30 minutes, nous analysons votre profil, identifions le programme d&apos;immigration
              le plus adapté et vous donnons une feuille de route claire. Sans jargon, sans ambiguïté.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/rendez-vous" className="btn-primary text-base !px-8 !py-4">
                Prendre rendez-vous gratuitement
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

            {/* Garanties finales */}
            <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-neutral-500">
              {[
                "✓  Réponse garantie sous 24h",
                "✓  Consultants agréés CRIC",
                "✓  Zéro frais cachés",
                "✓  98 % de dossiers acceptés",
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
