"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "mc-cookie-consent";

export default function CookieBanner() {
  // true par défaut → le banner est dans le HTML initial (SSR) et compte comme LCP précoce.
  // Après hydration, useEffect masque si l'utilisateur a déjà répondu.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) setVisible(false);
  }, []);

  const accept = () => { localStorage.setItem(STORAGE_KEY, "accepted"); setVisible(false); };
  const decline = () => { localStorage.setItem(STORAGE_KEY, "declined"); setVisible(false); };

  return (
    <div
      role="alertdialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      aria-hidden={!visible}
      className={`fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-2xl rounded-2xl border border-neutral-200/80 bg-white/95 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-lg transition-[opacity,transform] duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Icône */}
        <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#003366]/8">
          <Cookie className="size-5 text-[#003366]" strokeWidth={1.75} aria-hidden />
        </div>

        {/* Contenu */}
        <div className="flex-1 min-w-0">
          <h2 id="cookie-title" className="mb-1 font-semibold text-[#003366] text-sm">
            Gestion des cookies
          </h2>
          <p id="cookie-desc" className="text-[0.8125rem] leading-relaxed text-neutral-500">
            Nous utilisons des cookies pour améliorer votre expérience et mesurer
            l&apos;audience, conformément à la{" "}
            <strong className="font-semibold text-neutral-600">Loi 25</strong>{" "}
            (Québec) et au <strong className="font-semibold text-neutral-600">RGPD</strong>.
          </p>

          {/* Actions */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              onClick={accept}
              className="rounded-lg bg-[#003366] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#002244] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003366]/50"
            >
              Tout accepter
            </button>
            <button
              onClick={decline}
              className="rounded-lg border border-neutral-200 bg-transparent px-4 py-2 text-xs font-semibold text-neutral-600 transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/50"
            >
              Refuser
            </button>
            <a
              href="/loi-25"
              className="text-xs text-neutral-400 underline underline-offset-2 transition-colors hover:text-neutral-600"
            >
              En savoir plus
            </a>
          </div>
        </div>

        {/* Fermer */}
        <button
          onClick={decline}
          className="flex-shrink-0 rounded-lg p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600 focus-visible:outline-none"
          aria-label="Fermer la bannière de cookies"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}
