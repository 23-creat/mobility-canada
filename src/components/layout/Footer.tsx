import Link from "next/link";
import { ShieldCheck, Globe, Mail, MapPin } from "lucide-react";

/* ─── Données de navigation ─── */

const FOOTER_NAV = {
  parcours: [
    { label: "Étudiants", href: "/etudiant" },
    { label: "Particuliers", href: "/particulier" },
    { label: "Entreprises", href: "/entreprise" },
    { label: "Prendre rendez-vous", href: "/rendez-vous" },
  ],
  ressources: [
    { label: "Notre méthode", href: "/#processus" },
    { label: "Guide de l'expatrié (PDF)", href: "/#guide" },
    { label: "FAQ Immigration", href: "/faq" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/confidentialite" },
    { label: "Conformité Loi 25", href: "/loi-25" },
    { label: "CGU", href: "/cgu" },
  ],
} as const;

const CURRENT_YEAR = new Date().getFullYear();

/* ─── Icône LinkedIn ─── */

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/* ─── Composant principal ─── */

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#001A33] text-white"
      role="contentinfo"
    >
      {/* Décoration de fond */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />
      <div
        className="pointer-events-none absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-[#D80621]/8 blur-[100px]"
        aria-hidden
      />

      {/* ── Contenu principal ── */}
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* Colonne 1 — Marque */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex flex-col gap-[4px] focus-visible:outline-none">
              <span className="font-display text-[1.35rem] font-bold leading-none tracking-tight text-white">
                Mobility<span className="text-[#D80621]">Canada</span>
              </span>
              <span className="flex items-center gap-[5px]">
                <ShieldCheck className="size-[11px] text-emerald-400 flex-shrink-0" strokeWidth={2.5} aria-hidden />
                <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/40">
                  Consultants agréés CRIC&nbsp;/&nbsp;CICC
                </span>
              </span>
            </Link>

            <p className="mt-5 text-[0.875rem] leading-relaxed text-white/50">
              Cabinet de conseil spécialisé en immigration canadienne. Expertise
              reconnue, accompagnement humain.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-2.5">
              <a
                href="mailto:contact@mobilitycanada.fr"
                className="flex items-center gap-2.5 text-sm text-white/50 transition-colors hover:text-white/80"
              >
                <Mail className="size-4 flex-shrink-0" aria-hidden />
                contact@mobilitycanada.fr
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/50">
                <MapPin className="mt-0.5 size-4 flex-shrink-0" aria-hidden />
                <span>Paris, France &amp; Montréal, Canada</span>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-lg bg-white/8 text-white/50 transition-all duration-200 hover:bg-white/15 hover:text-white"
                aria-label="LinkedIn — Mobility Canada"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-lg bg-white/8 text-white/50 transition-all duration-200 hover:bg-white/15 hover:text-white"
                aria-label="Instagram — Mobility Canada"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Colonne 2 — Parcours */}
          <div>
            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">
              Nos parcours
            </h3>
            <ul className="space-y-3">
              {FOOTER_NAV.parcours.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[0.9rem] text-white/55 transition-colors duration-200 hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Ressources */}
          <div>
            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">
              Ressources
            </h3>
            <ul className="space-y-3">
              {FOOTER_NAV.ressources.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[0.9rem] text-white/55 transition-colors duration-200 hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 — Légal */}
          <div>
            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">
              Informations légales
            </h3>
            <ul className="space-y-3">
              {FOOTER_NAV.legal.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[0.9rem] text-white/55 transition-colors duration-200 hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mention Loi 25 */}
            <div className="mt-6 rounded-xl border border-white/8 bg-white/[0.04] p-4">
              <p className="text-[11px] leading-relaxed text-white/35">
                <span className="font-semibold text-white/50">Conformité Loi 25 ·</span>{" "}
                Vos données personnelles sont traitées selon les exigences de la Loi
                modernisant des dispositions législatives en matière de protection des
                renseignements personnels (Québec).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Barre inférieure ── */}
      <div className="relative border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 sm:flex-row sm:px-8 lg:px-10">

          {/* Copyright */}
          <p className="text-[0.8125rem] text-white/35">
            © {CURRENT_YEAR} Mobility Canada. Tous droits réservés.
          </p>

          {/* Centre — Certifications */}
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/30">
              RGPD
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/30">
              Loi 25
            </span>
            <span className="rounded-full border border-emerald-500/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-500/50">
              CRIC · CICC
            </span>
          </div>

          {/* Sélecteur de langue (inactif — préparation i18n) */}
          <div
            className="flex items-center gap-2"
            aria-label="Sélecteur de langue"
          >
            <Globe className="size-3.5 text-white/25" aria-hidden />
            <button
              className="text-[0.8125rem] font-semibold text-white/60 transition-colors hover:text-white"
              aria-current="true"
              lang="fr"
            >
              FR
            </button>
            <span className="text-white/20" aria-hidden>|</span>
            <button
              className="cursor-not-allowed text-[0.8125rem] text-white/25"
              disabled
              aria-label="Version anglaise — bientôt disponible"
              lang="en"
              title="Bientôt disponible"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
