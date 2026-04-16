import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap, FileText, Shield, Home, Briefcase, Award,
  MapPin, Globe, TrendingUp, CheckCircle2, ChevronRight,
  ShieldCheck, Languages, Coins,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InnerPageHero from "@/components/sections/InnerPageHero";
import FaqAccordion from "@/components/ui/FaqAccordion";

/* ─── SEO ─── */

export const metadata: Metadata = {
  title: "Études au Canada — Visa Étudiant, CAQ & Admission Universitaire",
  description:
    "Accompagnement complet pour étudier au Canada : admission dans 50+ universités, visa étudiant (CAQ), logement et emploi étudiant. Consultants agréés CRIC/CICC. Consultation gratuite.",
  openGraph: {
    title: "Étudier au Canada | Visa étudiant, CAQ — Mobility Canada",
    description:
      "De l'admission au logement : Mobility Canada gère 100% de votre dossier étudiant au Canada. Taux de succès 98%.",
  },
};

/* ─── Données ─── */

const WHY_CANADA = [
  {
    icon: GraduationCap,
    title: "Universités de rang mondial",
    description:
      "McGill, UBC, Université de Montréal, Concordia — des diplômes reconnus dans 190 pays et un réseau alumni international.",
    stat: "30+ universités dans le Top 500 mondial",
  },
  {
    icon: Coins,
    title: "Coût des études accessible",
    description:
      "Les frais de scolarité canadiens sont 40 à 60% moins élevés qu'au Royaume-Uni ou aux États-Unis, pour un niveau académique équivalent.",
    stat: "De 8 000 à 25 000 CAD / an",
  },
  {
    icon: Briefcase,
    title: "Travailler pendant les études",
    description:
      "Jusqu'à 24 heures par semaine hors campus pendant les sessions, et sans limite pendant les vacances. Une source de revenus et d'expérience.",
    stat: "Permis de travail inclus dans le visa",
  },
  {
    icon: TrendingUp,
    title: "Voie directe vers la résidence",
    description:
      "Le Post-Graduation Work Permit (PGWP) et les programmes d'Express Entry ouvrent une voie claire et privilégiée vers la résidence permanente.",
    stat: "PGWP jusqu'à 3 ans après l'obtention",
  },
  {
    icon: Languages,
    title: "Environnement bilingue",
    description:
      "Québec en français, reste du Canada en anglais ou les deux — une immersion linguistique exceptionnelle qui booste votre employabilité internationale.",
    stat: "Montréal : 2ème ville francophone mondiale",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité et qualité de vie",
    description:
      "Le Canada se classe régulièrement parmi les pays les plus sûrs et les plus agréables à vivre. Montréal et Vancouver sont dans le Top 10 mondial étudiant.",
    stat: "Top 10 QS Best Student Cities",
  },
] as const;

const SERVICES = [
  {
    icon: GraduationCap,
    title: "Dossier d'admission universitaire",
    description:
      "Sélection des établissements selon votre profil, rédaction de la lettre de motivation, traduction des relevés de notes et suivi des candidatures jusqu'à l'offre d'admission.",
    tags: ["50+ universités partenaires", "Suivi en temps réel"],
  },
  {
    icon: FileText,
    title: "Certificat d'Acceptation du Québec (CAQ)",
    description:
      "Obligatoire pour toute étude au Québec, le CAQ est soumis au Ministère de l'Immigration du Québec. Nous constituons et déposons le dossier complet en votre nom.",
    tags: ["Obligatoire pour le Québec", "Délai 3–5 semaines"],
  },
  {
    icon: Shield,
    title: "Permis d'études canadien",
    description:
      "Dépôt auprès d'IRCC (Immigration, Réfugiés et Citoyenneté Canada) avec vérification de chaque pièce justificative. Objectif : zéro motif de refus.",
    tags: ["Valable partout au Canada", "Inclut l'autorisation de travail"],
  },
  {
    icon: Home,
    title: "Logement étudiant",
    description:
      "Recherche de résidences universitaires ou d'appartements partagés à Montréal, Québec, Toronto ou Vancouver — adaptés à votre budget, avant votre arrivée.",
    tags: ["Montréal & Toronto", "Budget optimisé"],
  },
  {
    icon: MapPin,
    title: "Accueil à l'arrivée",
    description:
      "Transfert aéroport, visite de la ville, ouverture de compte bancaire, inscription à la RAMQ (Québec) et obtention du NAS — tout est coordonné dès J+1.",
    tags: ["Accueil aéroport inclus", "Check-list administrative"],
  },
  {
    icon: Award,
    title: "Post-Graduation Work Permit (PGWP)",
    description:
      "À l'issue de vos études, nous vous accompagnons dans la demande du PGWP — un permis de travail ouvert, valable jusqu'à 3 ans — et dans les démarches vers la résidence permanente.",
    tags: ["Ouvert à tous les employeurs", "Voie vers Express Entry"],
  },
] as const;

const FAQ_ITEMS = [
  {
    question: "Combien coûtent les études au Canada pour un ressortissant français ?",
    answer:
      "Les frais de scolarité varient selon l'établissement et le programme, mais comptez en moyenne de 8 000 à 25 000 CAD par an pour un étudiant international. À titre de comparaison, c'est 40 à 60% moins cher que le Royaume-Uni ou les États-Unis pour un niveau équivalent. Les universités francophones du Québec (UQAM, U de Montréal) sont souvent les moins onéreuses.",
  },
  {
    question: "Quelle est la différence entre le CAQ et le permis d'études ?",
    answer:
      "Le CAQ (Certificat d'Acceptation du Québec) est un document provincial, délivré par le Québec, obligatoire uniquement si vous étudiez dans cette province. Le permis d'études est un document fédéral, délivré par IRCC, obligatoire pour tous les étudiants internationaux peu importe la province. Si vous étudiez au Québec, vous avez besoin des deux. Si vous étudiez en Ontario ou ailleurs, seul le permis d'études est requis.",
  },
  {
    question: "Puis-je travailler pendant mes études au Canada ?",
    answer:
      "Oui. Les étudiants titulaires d'un permis d'études valide sont autorisés à travailler jusqu'à 24 heures par semaine hors campus durant les sessions académiques, et sans limite d'heures pendant les vacances officielles. Ce droit est inclus dans votre permis d'études — aucune démarche supplémentaire n'est nécessaire.",
  },
  {
    question: "Combien de temps à l'avance faut-il commencer les démarches ?",
    answer:
      "Nous recommandons de commencer entre 12 et 18 mois avant la date de rentrée souhaitée. Les dossiers d'admission universitaire ont des délais stricts (souvent de septembre à janvier pour une rentrée en septembre), et les délais de traitement du CAQ et du permis d'études peuvent varier de 6 à 16 semaines selon les périodes.",
  },
  {
    question: "Mon diplôme français est-il reconnu dans les universités canadiennes ?",
    answer:
      "En règle générale, oui. Les universités canadiennes accueillent chaque année des milliers d'étudiants français et reconnaissent les diplômes du baccalauréat, BTS, BUT et licences françaises. Une évaluation de l'équivalence est parfois requise selon le programme visé. Nos conseillers vous guident sur les équivalences spécifiques à votre situation.",
  },
  {
    question: "Puis-je rester au Canada après mes études ?",
    answer:
      "C'est l'un des grands avantages du Canada : après vos études, vous êtes éligible au Post-Graduation Work Permit (PGWP), un permis de travail ouvert d'une durée pouvant aller jusqu'à 3 ans. Ce permis vous permet de travailler pour n'importe quel employeur canadien et constitue la principale voie d'accès aux programmes de résidence permanente comme Express Entry ou le Programme des travailleurs qualifiés du Québec.",
  },
  {
    question: "Est-il possible d'amener sa famille au Canada pendant ses études ?",
    answer:
      "Oui, sous certaines conditions. Votre conjoint(e) ou partenaire de fait peut obtenir un permis de travail ouvert s'il vous accompagne pendant vos études dans un programme de niveau graduate (master, doctorat) à temps plein. Vos enfants peuvent étudier gratuitement dans les écoles publiques. Mobility Canada accompagne l'ensemble de votre famille dans ces démarches.",
  },
] as const;

/* ─── JSON-LD FAQ ─── */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

/* ─── Page ─── */

export default function EtudiantPage() {
  return (
    <>
      <Navbar />

      {/* JSON-LD FAQ — indexation Google rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main id="main-content">
        {/* Hero */}
        <InnerPageHero
          eyebrow="Parcours Étudiant"
          title="Étudiez dans les meilleures universités canadiennes."
          titleSecondLine="Sans les obstacles administratifs."
          subtitle="Du choix de votre université jusqu'à votre premier jour de cours — Mobility Canada gère l'intégralité de votre dossier étudiant."
          primaryCta={{ label: "Préparer mon dossier", href: "/rendez-vous" }}
          secondaryCta={{ label: "Découvrir les services", href: "#services-etudiant" }}
        />

        {/* ═══════════════════════════════════
            Pourquoi le Canada ?
        ═══════════════════════════════════ */}
        <section
          id="pourquoi-canada"
          aria-labelledby="why-canada-heading"
          className="bg-white py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
                Pourquoi choisir le Canada
              </p>
              <h2
                id="why-canada-heading"
                className="mb-4 font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.5rem]"
              >
                6 raisons pour lesquelles le Canada est la destination n°1 des étudiants français.
              </h2>
              <p className="text-[1.0625rem] leading-relaxed text-neutral-500">
                Pas seulement une destination académique — une voie vers une carrière et une vie internationale.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_CANADA.map(({ icon: Icon, title, description, stat }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-neutral-100 bg-[#F8F9FA] p-7 transition-shadow duration-200 hover:shadow-md"
                >
                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-[#003366]/8">
                    <Icon className="size-6 text-[#003366]" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="mb-2 font-display text-[1.05rem] font-bold text-[#003366]">
                    {title}
                  </h3>
                  <p className="mb-4 text-[0.875rem] leading-relaxed text-neutral-500">
                    {description}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-[#D80621]" aria-hidden />
                    <span className="text-[11px] font-semibold text-[#003366]/70">{stat}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            Nos services détaillés
        ═══════════════════════════════════ */}
        <section
          id="services-etudiant"
          aria-labelledby="services-etudiant-heading"
          className="bg-[#F8F9FA] py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
                Ce que nous faisons pour vous
              </p>
              <h2
                id="services-etudiant-heading"
                className="mb-4 font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.5rem]"
              >
                Un accompagnement complet, étape par étape.
              </h2>
              <p className="text-[1.0625rem] leading-relaxed text-neutral-500">
                Nos consultants agréés CRIC gèrent chaque démarche à votre place.
                Vous vous concentrez sur votre projet académique.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map(({ icon: Icon, title, description, tags }) => (
                <article
                  key={title}
                  className="flex flex-col rounded-2xl border border-white bg-white p-7 shadow-[0_2px_16px_rgba(0,51,102,0.06)] transition-shadow duration-200 hover:shadow-[0_8px_28px_rgba(0,51,102,0.1)]"
                >
                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-[#003366]/8">
                    <Icon className="size-6 text-[#003366]" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="mb-2.5 font-display text-[1.05rem] font-bold text-[#003366]">
                    {title}
                  </h3>
                  <p className="mb-5 flex-1 text-[0.875rem] leading-relaxed text-neutral-500">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#003366]/6 px-2.5 py-1 text-[10.5px] font-semibold text-[#003366]/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link href="/rendez-vous" className="btn-primary">
                Démarrer mon dossier étudiant
                <ChevronRight className="size-[15px]" aria-hidden />
              </Link>
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <CheckCircle2 className="size-4 text-emerald-500" aria-hidden />
                Consultation gratuite · Réponse sous 24h
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            Chiffres clés
        ═══════════════════════════════════ */}
        <section
          className="border-y border-neutral-100 bg-white py-14"
          aria-label="Chiffres clés Mobility Canada"
        >
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
              {[
                { value: "50+",  label: "Universités partenaires" },
                { value: "98%",  label: "Dossiers acceptés"       },
                { value: "4 mois", label: "Délai moyen d'installation" },
                { value: "12 ans", label: "D'expertise Canada"    },
              ].map(({ value, label }) => (
                <div key={label}>
                  <dt className="font-display text-[2.25rem] font-bold text-[#003366]">{value}</dt>
                  <dd className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ═══════════════════════════════════
            FAQ Accordéon + JSON-LD
        ═══════════════════════════════════ */}
        <section
          id="faq-etudiant"
          aria-labelledby="faq-etudiant-heading"
          className="bg-[#F8F9FA] py-20 lg:py-28"
        >
          <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
            <div className="mb-12 text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
                Questions fréquentes
              </p>
              <h2
                id="faq-etudiant-heading"
                className="mb-4 font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.25rem]"
              >
                Toutes vos questions sur les études au Canada.
              </h2>
              <p className="text-[1rem] text-neutral-500">
                Réponses rédigées par nos consultants agréés CRIC.
              </p>
            </div>

            <FaqAccordion items={FAQ_ITEMS as unknown as { question: string; answer: string }[]} />

            <div className="mt-10 rounded-2xl border border-[#003366]/15 bg-white p-6 text-center">
              <p className="mb-4 text-[0.9375rem] text-neutral-600">
                Votre question ne figure pas ici ?
              </p>
              <Link href="/rendez-vous" className="btn-primary mx-auto">
                Poser ma question à un conseiller
                <ChevronRight className="size-[15px]" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            CTA Final
        ═══════════════════════════════════ */}
        <section className="bg-[#003366] py-20">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5">
              <Globe className="size-3.5 text-emerald-400" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                Consultation gratuite — 30 min
              </span>
            </div>
            <h2 className="mb-4 font-display text-[1.75rem] font-bold text-white sm:text-[2.25rem]">
              Votre projet d&apos;études au Canada commence ici.
            </h2>
            <p className="mb-8 max-w-[48ch] mx-auto text-white/60">
              Un conseiller dédié analyse votre profil et vous propose un plan d&apos;action
              personnalisé. Sans engagement, sans frais cachés.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/rendez-vous" className="btn-primary">
                Prendre rendez-vous gratuitement
                <ChevronRight className="size-[15px]" aria-hidden />
              </Link>
              <a
                href="tel:+15143770857"
                className="inline-flex items-center gap-2 text-[0.9375rem] font-medium text-white/60 transition-colors hover:text-white"
              >
                +1 (514) 377-0857
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
