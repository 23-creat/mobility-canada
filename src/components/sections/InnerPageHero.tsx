"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck } from "lucide-react";

interface InnerPageHeroProps {
  eyebrow: string;
  title: string;
  /** Mot ou fragment de titre à colorer en blanc/atténué pour la hiérarchie */
  titleSecondLine?: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function InnerPageHero({
  eyebrow,
  title,
  titleSecondLine,
  subtitle,
  primaryCta = { label: "Prendre rendez-vous", href: "/rendez-vous" },
  secondaryCta,
}: InnerPageHeroProps) {
  return (
    <section
      aria-label={`Hero — ${eyebrow}`}
      className="relative flex min-h-[65vh] flex-col justify-center overflow-hidden bg-[#003366] pt-24 pb-16"
    >
      {/* ── Fond décoratif ── */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1.2px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute right-[-8%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#D80621]/10 blur-[110px]" />
        <div className="absolute left-[-5%] bottom-0 h-[300px] w-[300px] rounded-full bg-white/[0.03] blur-[70px]" />
      </div>

      {/* ── Contenu ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EXPO_OUT }}
          className="max-w-3xl"
        >
          {/* Badge CRIC */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5">
            <ShieldCheck className="size-3.5 text-emerald-400" strokeWidth={2} aria-hidden />
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-emerald-300">
              Consultants agréés CRIC&nbsp;/&nbsp;CICC
            </span>
          </div>

          {/* Eyebrow */}
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/65">
            {eyebrow}
          </p>

          {/* Titre H1 */}
          <h1 className="mb-6 font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-white sm:text-[3.25rem] lg:text-[4rem]">
            {title}
            {titleSecondLine && (
              <>
                <br />
                <span className="text-white/65">{titleSecondLine}</span>
              </>
            )}
          </h1>

          {/* Sous-titre */}
          <p className="mb-10 max-w-[52ch] text-[1.0625rem] leading-[1.7] text-white/70">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href={primaryCta.href} className="btn-primary">
              {primaryCta.label}
              <ChevronRight className="size-[15px]" aria-hidden />
            </Link>

            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-white/70 transition-colors hover:text-white"
              >
                {secondaryCta.label}
                <ChevronRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
