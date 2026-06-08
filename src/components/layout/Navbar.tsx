"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Étudiant",    href: "/etudiant",   idx: "01" },
  { label: "Particulier", href: "/particulier", idx: "02" },
  { label: "Entreprise",  href: "/entreprise",  idx: "03" },
  { label: "Processus",   href: "/#process",    idx: "04" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function update() { setScrolled(window.scrollY > 20); }
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Ferme le menu à chaque changement de route
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Bloque le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navClass = ["mc-nav", scrolled ? "scrolled" : ""].filter(Boolean).join(" ");

  return (
    <nav role="navigation" aria-label="Navigation principale" className={navClass}>
      <div className="mc-nav-shell">

        {/* ── Pill principal ── */}
        <div className="mc-nav-inner">

          {/* Logo */}
          <Link
            href="/"
            className="mc-logo"
            aria-label="Mobility Canada — Accueil"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/juste_logo.png"
              alt=""
              width={44}
              height={55}
              priority
              style={{ height: 54, width: "auto", borderRadius: 8 }}
              aria-hidden
            />
            <span className="mc-logo-name">Mobility Canada</span>
          </Link>

          {/* Liens desktop — masqués sous 980px */}
          <div className="mc-nav-links">
            {NAV_LINKS.map(({ label, href, idx }) => {
              const isActive =
                href === "/#process"
                  ? false
                  : pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  className={isActive ? "active" : ""}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="idx">{idx}</span>
                  {label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mc-nav-cta">
            {/* Téléphone — masqué sous 640px */}
            <a
              href="tel:+15143770857"
              className="mc-nav-phone"
              aria-label="Appeler Mobility Canada"
            >
              <span className="phone-dot" aria-hidden="true" />
              <span className="phone-label">+1 (514) 377-0857</span>
            </a>

            {/* Bouton RDV desktop — masqué sous 640px */}
            <Link href="/rendez-vous" className="mc-nav-rdv mc-nav-rdv--pill">
              Rendez-vous
              <span className="arrow" aria-hidden="true">→</span>
            </Link>

            {/* Hamburger — visible sous 980px uniquement */}
            <button
              className="mc-hamburger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
            >
              <span className={`mc-hamburger-icon${menuOpen ? " open" : ""}`}>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>

        {/* ── Menu mobile ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mc-mobile-menu"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              aria-label="Menu de navigation mobile"
            >
              {/* Liens */}
              <div className="mc-mobile-links">
                {NAV_LINKS.map(({ label, href, idx }) => {
                  const isActive =
                    href === "/#process"
                      ? false
                      : pathname === href || pathname.startsWith(href + "/");
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`mc-mobile-link${isActive ? " active" : ""}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="idx">{idx}</span>
                      {label}
                    </Link>
                  );
                })}
              </div>

              {/* Pied du menu : téléphone + CTA */}
              <div className="mc-mobile-footer">
                <a
                  href="tel:+15143770857"
                  className="mc-mobile-phone"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="phone-dot" aria-hidden="true" />
                  +1 (514) 377-0857
                </a>
                <Link
                  href="/rendez-vous"
                  className="mc-nav-rdv mc-mobile-rdv"
                  onClick={() => setMenuOpen(false)}
                >
                  Prendre rendez-vous
                  <span className="arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}
