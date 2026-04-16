"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  type MotionValue,
  type Variants,
} from "framer-motion";
import { Search, Map, FileCheck, Home } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─── Données ─── */

interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  detail: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    icon: Search,
    title: "Diagnostic",
    description:
      "Lors d'une consultation gratuite de 30 minutes, nous analysons votre profil, vos objectifs et votre admissibilité au regard des programmes d'immigration en vigueur.",
    detail: "Consultation gratuite · 30 min",
  },
  {
    number: "02",
    icon: Map,
    title: "Stratégie",
    description:
      "Nous construisons votre feuille de route personnalisée : choix du visa optimal, constitution complète du dossier, et calendrier de soumission maximisant vos chances.",
    detail: "Plan d'action sur mesure",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Dépôt",
    description:
      "Nos consultants agréés CRIC préparent et soumettent votre dossier officiel aux autorités canadiennes. Chaque pièce est vérifiée pour zéro motif de refus.",
    detail: "Suivi en temps réel",
  },
  {
    number: "04",
    icon: Home,
    title: "Installation",
    description:
      "À votre arrivée au Canada, nous facilitons vos premières démarches : logement, ouverture de compte, numéro d'assurance sociale et accès aux services de santé.",
    detail: "Accompagnement à l'arrivée",
  },
];

/* ─── Variants ─── */

const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EXPO_OUT },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

/* ─── Desktop Step Item ───────────────────────────────────────────────────────
   Composant isolé pour respecter les Rules of Hooks :
   useTransform ne peut pas être appelé dans un .map() au niveau de la section.
──────────────────────────────────────────────────────────────────────────── */

interface DesktopStepProps {
  step: Step;
  progress: MotionValue<number>;
}

function DesktopStepItem({ step, progress }: DesktopStepProps) {
  // Les useTransform sont au top-level du composant ✓
  const dotBorderColor = useTransform(
    progress,
    [0, 0.5, 1],
    ["rgba(0,51,102,0.2)", "rgba(0,51,102,0.2)", "#D80621"]
  );
  const dotTextColor = useTransform(
    progress,
    [0, 0.5, 1],
    ["rgba(0,51,102,0.35)", "rgba(0,51,102,0.35)", "#D80621"]
  );
  const dotGlow = useTransform(
    progress,
    [0, 1],
    ["0 0 0 0px rgba(216,6,33,0)", "0 0 0 6px rgba(216,6,33,0.12)"]
  );

  return (
    <motion.div variants={stepVariants} className="flex flex-col items-center text-center">
      {/* Dot animé scroll-driven */}
      <motion.div
        className="relative z-10 mb-6 flex size-14 flex-shrink-0 items-center justify-center rounded-full border-2 bg-white font-display font-bold text-lg"
        style={{
          borderColor: dotBorderColor,
          color: dotTextColor,
          boxShadow: dotGlow,
        }}
      >
        {step.number}
      </motion.div>

      {/* Icône */}
      <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-[#003366]/6">
        <step.icon className="size-5 text-[#003366]" strokeWidth={1.75} aria-hidden />
      </div>

      <h3 className="mb-2 font-display text-[1.1rem] font-bold text-[#003366]">
        {step.title}
      </h3>
      <p className="mb-3 text-[0.85rem] leading-relaxed text-neutral-500">
        {step.description}
      </p>
      <span className="inline-flex items-center rounded-full bg-[#003366]/6 px-3 py-1 text-[11px] font-semibold text-[#003366]/70">
        {step.detail}
      </span>
    </motion.div>
  );
}

/* ─── Composant principal ─── */

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  // Scroll progress de la section — alimente TOUTES les animations de ligne
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.4"],
  });

  // Desktop : progression horizontale (scaleX, origin-left)
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // Mobile : progression verticale (scaleY, origin-top)
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Seuils d'activation des dots (1 par étape)
  const step1Progress = useTransform(scrollYProgress, [0.0,  0.08], [0, 1]);
  const step2Progress = useTransform(scrollYProgress, [0.28, 0.38], [0, 1]);
  const step3Progress = useTransform(scrollYProgress, [0.58, 0.68], [0, 1]);
  const step4Progress = useTransform(scrollYProgress, [0.88, 0.98], [0, 1]);
  const stepProgresses = [step1Progress, step2Progress, step3Progress, step4Progress];

  return (
    <section
      ref={sectionRef}
      id="processus"
      aria-labelledby="process-heading"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Décoration de fond */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(0,51,102,0.04) 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ── En-tête ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" as const }}
          className="mb-16 max-w-2xl lg:mb-20"
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
            Notre méthode
          </p>
          <h2
            id="process-heading"
            className="mb-4 font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.5rem]"
          >
            Un processus éprouvé, de A à Z.
          </h2>
          <p className="text-[1.0625rem] leading-relaxed text-neutral-500">
            1&nbsp;200 clients accompagnés. Zéro improvisation. Chaque étape est pilotée
            par un consultant dédié qui connaît votre dossier par cœur.
          </p>
        </motion.div>

        {/* ════════════════════════════════════
            DESKTOP — Timeline horizontale
        ════════════════════════════════════ */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Piste inactive (base grise) */}
            <div
              className="absolute top-7 left-7 right-7 h-[2px] bg-[#003366]/10"
              aria-hidden
            />
            {/* Piste active — rouge, scroll-driven ✦ */}
            <motion.div
              className="absolute top-7 left-7 h-[2px] bg-[#D80621] origin-left"
              style={{ scaleX: lineScaleX, right: "1.75rem" }}
              aria-hidden
            />

            {/* Steps — composants isolés pour respecter les Rules of Hooks */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-4 gap-6"
            >
              {STEPS.map((step, i) => (
                <DesktopStepItem
                  key={step.number}
                  step={step}
                  progress={stepProgresses[i]}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* ════════════════════════════════════
            MOBILE — Timeline verticale
        ════════════════════════════════════ */}
        <div className="relative block lg:hidden">
          {/* Piste inactive verticale */}
          <div className="absolute left-7 top-0 bottom-0 w-[2px] bg-[#003366]/10" aria-hidden />
          {/* Piste active — rouge, scroll-driven ✦ */}
          <motion.div
            className="absolute left-7 top-0 w-[2px] bg-[#D80621] origin-top"
            style={{ scaleY: lineScaleY }}
            aria-hidden
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-10"
          >
            {STEPS.map((step) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative flex gap-5 pl-[3.75rem]"
              >
                {/* Dot fixe sur mobile (pas d'animation scroll-driven pour simplifier) */}
                <div className="absolute left-0 top-0 z-10 flex size-14 items-center justify-center rounded-full border-2 border-[#003366]/20 bg-white font-display font-bold text-lg text-[#003366]/40">
                  {step.number}
                </div>

                {/* Contenu */}
                <div className="flex-1 pb-2">
                  <div className="mb-2.5 flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-[#003366]/6">
                      <step.icon
                        className="size-4 text-[#003366]"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </div>
                    <h3 className="font-display text-[1.1rem] font-bold text-[#003366]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mb-3 text-[0.9rem] leading-relaxed text-neutral-500">
                    {step.description}
                  </p>
                  <span className="inline-flex items-center rounded-full bg-[#003366]/6 px-3 py-1 text-[11px] font-semibold text-[#003366]/70">
                    {step.detail}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
