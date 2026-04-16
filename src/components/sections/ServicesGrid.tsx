"use client";

import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Users,
  Building2,
  ChevronRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

/* ─── Données ─── */

interface Service {
  icon: LucideIcon;
  category: string;
  title: string;
  tagline: string;
  benefits: string[];
  cta: string;
  href: string;
  iconBg: string;
  accentBorder: string;
}

const SERVICES: Service[] = [
  {
    icon: GraduationCap,
    category: "Étudiants",
    title: "Étudiez dans les meilleures universités canadiennes",
    tagline: "Du choix de l'université à votre premier jour de cours au Canada.",
    benefits: [
      "Admission dans 50+ universités partenaires",
      "Visa étudiant (CAQ) géré de A à Z",
      "Logement sécurisé avant votre arrivée",
      "Accompagnement emploi à temps partiel",
    ],
    cta: "Préparer mon admission",
    href: "/etudiant",
    iconBg: "bg-[#003366]/8",
    accentBorder: "hover:border-[#003366]/30",
  },
  {
    icon: Users,
    category: "Particuliers",
    title: "Installez votre famille au Canada en toute sérénité",
    tagline: "Une relocalisation clé en main, sans les aléas administratifs.",
    benefits: [
      "Visa de résident permanent sur mesure",
      "Relocalisation famille complète coordonnée",
      "Logement, école, médecin — tout organisé",
      "Suivi personnalisé jusqu'à votre installation",
    ],
    cta: "Évaluer mon éligibilité",
    href: "/particulier",
    iconBg: "bg-[#D80621]/8",
    accentBorder: "hover:border-[#D80621]/30",
  },
  {
    icon: Building2,
    category: "Entreprises",
    title: "Mobilisez vos talents au Canada sans friction",
    tagline: "Gestion complète de la mobilité RH internationale.",
    benefits: [
      "Permis de travail intra-entreprise accélérés",
      "Conformité légale et administrative totale",
      "Programme d'intégration pour vos équipes",
      "Reporting trimestriel des dossiers actifs",
    ],
    cta: "Discuter de mes besoins",
    href: "/entreprise",
    iconBg: "bg-[#003366]/8",
    accentBorder: "hover:border-[#003366]/30",
  },
];

/* ─── Variants Framer Motion ─── */

const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EXPO_OUT },
  },
};

/* ─── Composant carte ─── */

function ServiceCard({ service }: { service: Service }) {
  const { icon: Icon, category, title, tagline, benefits, cta, href, iconBg, accentBorder } =
    service;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -10,
        boxShadow: "0 28px 56px rgba(0, 51, 102, 0.13)",
        transition: { duration: 0.28, ease: "easeOut" as const },
      }}
      className={`
        group relative flex flex-col rounded-2xl
        border border-white/80 bg-white/75 backdrop-blur-lg
        p-8 shadow-[0_4px_24px_rgba(0,51,102,0.07)]
        transition-colors duration-300
        ${accentBorder}
      `}
    >
      {/* Icône */}
      <div className={`mb-5 inline-flex size-12 items-center justify-center rounded-xl ${iconBg}`}>
        <Icon className="size-6 text-[#003366]" strokeWidth={1.75} aria-hidden />
      </div>

      {/* Catégorie */}
      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
        {category}
      </p>

      {/* Titre H3 */}
      <h3 className="mb-3 font-display text-[1.2rem] font-bold leading-snug text-[#003366]">
        {title}
      </h3>

      {/* Tagline */}
      <p className="mb-6 text-[0.9rem] leading-relaxed text-neutral-500">{tagline}</p>

      {/* Bénéfices */}
      <ul className="mb-8 flex-1 space-y-3" aria-label={`Bénéfices — ${category}`}>
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2.5 text-[0.875rem] text-neutral-600">
            <CheckCircle2
              className="mt-[1px] size-[15px] flex-shrink-0 text-emerald-500"
              strokeWidth={2}
              aria-hidden
            />
            {benefit}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-[#003366] transition-gap duration-200 group-hover:gap-2.5"
        aria-label={`${cta} — ${category}`}
      >
        {cta}
        <ChevronRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden
        />
      </Link>
    </motion.article>
  );
}

/* ─── Section principale ─── */

export default function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-[#F8F9FA] py-24 lg:py-32"
    >
      {/* Décoration de fond subtile */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, rgba(0,51,102,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" as const }}
          className="mb-14 max-w-2xl lg:mb-16"
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
            Nos parcours d&apos;accompagnement
          </p>
          <h2
            id="services-heading"
            className="mb-4 font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.5rem]"
          >
            Choisissez votre chemin vers le Canada.
          </h2>
          <p className="text-[1.0625rem] leading-relaxed text-neutral-500">
            Chaque profil est unique. Nos conseillers agréés construisent un plan
            d&apos;action sur mesure, adapté à votre situation et à vos objectifs.
          </p>
        </motion.div>

        {/* Grille de cartes */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.category} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
