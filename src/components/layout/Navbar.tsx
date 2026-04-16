"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X, ChevronRight, ShieldCheck } from "lucide-react";

const NAV_LINKS = [
  { label: "Étudiant", href: "/etudiant" },
  { label: "Particulier", href: "/particulier" },
  { label: "Entreprise", href: "/entreprise" },
] as const;

const mobileMenuVariants: Variants = {
  closed: { opacity: 0, y: -8 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.18, ease: "easeIn" as const },
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#003366]/96 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex h-[4.5rem] items-center justify-between">

          {/* ── Logo + badge CRIC ── */}
          <Link href="/" className="flex flex-col gap-[3px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">
            {/* font-sans (Inter + local Arial fallback) : LCP-safe */}
            <span className="font-sans text-[1.35rem] font-bold leading-none tracking-tight text-white">
              Mobility<span className="text-[#D80621]">Canada</span>
            </span>
            <span className="flex items-center gap-[5px]">
              <ShieldCheck
                className="size-[11px] text-emerald-400 flex-shrink-0"
                strokeWidth={2.5}
                aria-hidden
              />
              <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/50 leading-none">
                Consultants agréés CRIC&nbsp;/&nbsp;CICC
              </span>
            </span>
          </Link>

          {/* ── Navigation desktop ── */}
          <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="relative text-[0.875rem] font-medium text-white/70 transition-colors duration-200 hover:text-white group focus-visible:outline-none focus-visible:text-white"
              >
                {label}
                <span
                  className="absolute -bottom-[3px] left-0 h-[2px] w-0 rounded-full bg-[#D80621] transition-all duration-300 group-hover:w-full"
                  aria-hidden
                />
              </Link>
            ))}
          </nav>

          {/* ── CTA desktop ── */}
          <div className="hidden lg:block">
            <Link
              href="/rendez-vous"
              className="btn-primary !py-[0.65rem] !px-[1.25rem] !text-[0.875rem]"
            >
              Prendre rendez-vous
              <ChevronRight className="size-[14px]" aria-hidden />
            </Link>
          </div>

          {/* ── Bouton hamburger mobile ── */}
          <button
            className="relative z-10 rounded-md p-2 text-white transition-colors hover:bg-white/10 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
                className="block"
              >
                {open ? <X className="size-6" /> : <Menu className="size-6" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Menu mobile (drawer) ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="lg:hidden border-t border-white/10 bg-[#003366]/97 backdrop-blur-md"
          >
            <nav
              aria-label="Menu mobile"
              className="flex flex-col divide-y divide-white/10 px-5 py-1"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 text-base font-medium text-white transition-colors hover:text-white/70"
                >
                  {label}
                  <ChevronRight className="size-4 text-white/30" aria-hidden />
                </Link>
              ))}

              <div className="flex items-center gap-2 py-4">
                <ShieldCheck className="size-4 text-emerald-400 flex-shrink-0" strokeWidth={2} />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                  Consultants agréés CRIC / CICC
                </span>
              </div>

              <div className="py-5">
                <Link
                  href="/rendez-vous"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Prendre rendez-vous
                  <ChevronRight className="size-4" aria-hidden />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
