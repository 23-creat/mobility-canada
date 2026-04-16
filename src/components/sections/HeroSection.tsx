// React Server Component — pas de "use client"
// Les animations d'entrée sont des keyframes CSS définis dans globals.css.
// Le texte est visible et animé avant même la moindre hydratation JS.

import Link from "next/link";
import { ChevronRight, ShieldCheck, ArrowDown } from "lucide-react";
import HeroStats from "@/components/sections/HeroStats";

export default function HeroSection() {
  return (
    <section
      aria-label="Accueil — Mobility Canada"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#003366]"
    >
      {/* ────────────────────────────────────────
          Éléments décoratifs de fond (aria-hidden)
      ──────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden>

        {/* Grille de points subtile */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1.2px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Orbe secondaire (rouge Canada) */}
        <div className="absolute right-[-10%] top-[15%] h-[640px] w-[640px] rounded-full bg-[#D80621]/12 blur-[130px]" />

        {/* Orbe blanc — profondeur côté gauche */}
        <div className="absolute left-[-8%] top-[-10%] h-[500px] w-[500px] rounded-full bg-white/[0.04] blur-[90px]" />

        {/* Ligne diagonale décorative */}
        <svg
          className="absolute right-0 top-0 h-full w-auto opacity-[0.025]"
          viewBox="0 0 400 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMid slice"
          aria-hidden
        >
          <line x1="400" y1="0" x2="0" y2="900" stroke="white" strokeWidth="200" />
        </svg>
      </div>

      {/* ────────────────────────────────────────
          Contenu principal
      ──────────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-1 flex-col justify-center px-5 pb-6 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pt-36">

        {/* Badge CRIC — signal de confiance n°1 */}
        {/* hero-fade-up : opacity 0→1 + translateY(20px→0) dès le premier octet CSS */}
        <div
          className="hero-fade-up mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-2"
          style={{ "--anim-delay": "0.1s" } as React.CSSProperties}
        >
          <ShieldCheck
            className="size-4 flex-shrink-0 text-emerald-400"
            strokeWidth={2}
            aria-hidden
          />
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-300">
            Consultants agréés CRIC&nbsp;/&nbsp;CICC
          </span>
        </div>

        {/* H1 — animation ligne par ligne (hero-slide-up staggeré via --anim-delay) */}
        <h1
          className="mb-7 max-w-[16ch] font-display text-[2.75rem] font-bold leading-[1.08] tracking-tight text-white sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem]"
          aria-label="Votre vie au Canada. Sans les obstacles."
        >
          <span className="block overflow-hidden">
            <span
              className="hero-slide-up block"
              style={{ "--anim-delay": "0.25s" } as React.CSSProperties}
            >
              Votre vie au Canada.
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="hero-slide-up block text-white/50"
              style={{ "--anim-delay": "0.41s" } as React.CSSProperties}
            >
              Sans les obstacles.
            </span>
          </span>
        </h1>

        {/* Sous-titre */}
        <p
          className="hero-fade-up mb-10 max-w-[52ch] text-[1.0625rem] leading-[1.7] text-white/60"
          style={{ "--anim-delay": "0.85s" } as React.CSSProperties}
        >
          Cabinet de conseil spécialisé en immigration canadienne. Nous accompagnons
          étudiants, familles et entreprises françaises de la première démarche
          de visa jusqu&apos;à la résidence permanente.
        </p>

        {/* CTAs */}
        <div
          className="hero-fade-up flex flex-wrap items-center gap-4"
          style={{ "--anim-delay": "1.05s" } as React.CSSProperties}
        >
          <Link href="/rendez-vous" className="btn-primary">
            Prendre rendez-vous
            <ChevronRight className="size-[15px]" aria-hidden />
          </Link>

          <Link
            href="#services"
            className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-white/60 transition-colors duration-200 hover:text-white"
          >
            Découvrir nos parcours
            <ChevronRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>
      </div>

      {/* ────────────────────────────────────────
          Indicateur de scroll (desktop uniquement)
          hero-fade-up pour l'apparition, hero-pulse-y pour le rebond
      ──────────────────────────────────────── */}
      <div
        className="hero-fade-up absolute bottom-[7rem] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 lg:flex"
        style={{ "--anim-delay": "2s" } as React.CSSProperties}
        aria-hidden
      >
        <div className="hero-pulse-y">
          <ArrowDown className="size-5 text-white/25" />
        </div>
      </div>

      {/* ────────────────────────────────────────
          Barre de stats — client island (AnimatedCounter)
      ──────────────────────────────────────── */}
      <div
        className="hero-fade-up relative z-10 mt-auto border-t border-white/[0.08] bg-white/[0.04] backdrop-blur-sm"
        style={{ "--anim-delay": "1.4s" } as React.CSSProperties}
      >
        <HeroStats />
      </div>
    </section>
  );
}
