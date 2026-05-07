"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Étudiant",   href: "/etudiant",   idx: "01" },
  { label: "Particulier", href: "/particulier", idx: "02" },
  { label: "Entreprise",  href: "/entreprise",  idx: "03" },
  { label: "Processus",   href: "/#process",    idx: "04" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function update() {
      setScrolled(window.scrollY > 20);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const navClass = ["mc-nav", scrolled ? "scrolled" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <nav role="navigation" aria-label="Navigation principale" className={navClass}>
      <div className="mc-nav-shell">
        <div className="mc-nav-inner">

          {/* Logo */}
          <Link href="/" className="mc-logo" aria-label="Mobility Canada — Accueil">
            <Image
              src="/logo.png"
              alt="Mobility Canada"
              width={44}
              height={55}
              priority
              style={{ height: 38, width: "auto", borderRadius: 8 }}
            />
          </Link>

          {/* Links */}
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
            <a href="tel:+15143770857" className="mc-nav-phone" aria-label="Appeler Mobility Canada">
              <span className="phone-dot" aria-hidden="true" />
              <span className="phone-label">+1 (514) 377-0857</span>
            </a>
            <Link href="/rendez-vous" className="mc-nav-rdv">
              Rendez-vous
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
