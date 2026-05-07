"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function MerciContent() {
  const params = useSearchParams();

  useEffect(() => {
    const event = params.get("event");
    if (!window.fbq) return;
    if (event === "lead") window.fbq("trackCustom", "LeadQualifié");
    if (event === "booking") window.fbq("trackCustom", "AppelBooké");
  }, [params]);

  return (
    <main
      id="main-content"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        background: "var(--mc-ink)",
        color: "#fff",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow de fond */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(55% 55% at 50% 40%, rgba(216,6,33,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Keyframes injectés en ligne */}
      <style>{`
        @keyframes mc-disc-in {
          0%   { transform: scale(0.4); opacity: 0; }
          65%  { transform: scale(1.06); opacity: 1; }
          100% { transform: scale(1);   opacity: 1; }
        }
        @keyframes mc-ring-draw {
          from { stroke-dashoffset: 276; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes mc-check-draw {
          from { stroke-dashoffset: 65; opacity: 0; }
          to   { stroke-dashoffset: 0;  opacity: 1; }
        }
      `}</style>

      <div style={{ position: "relative", zIndex: 2, maxWidth: 520 }}>
        {/* SVG checkmark animé */}
        <div aria-hidden style={{ marginBottom: 36, display: "flex", justifyContent: "center" }}>
          <svg width="96" height="96" viewBox="0 0 96 96" fill="none" aria-hidden="true">
            {/* Halo extérieur */}
            <circle
              cx="48" cy="48" r="47"
              stroke="rgba(216,6,33,0.2)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="295"
              strokeDashoffset="295"
              strokeLinecap="round"
              style={{
                animation: "mc-ring-draw 0.7s cubic-bezier(0.4,0,0.2,1) 0.35s forwards",
                transformOrigin: "48px 48px",
                transform: "rotate(-90deg)",
              }}
            />
            {/* Disque rouge plein */}
            <circle
              cx="48" cy="48" r="38"
              fill="#D80621"
              style={{ animation: "mc-disc-in 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.05s both" }}
            />
            {/* Checkmark */}
            <polyline
              points="30,50 42,62 67,34"
              stroke="#fff"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="65"
              strokeDashoffset="65"
              style={{ animation: "mc-check-draw 0.38s cubic-bezier(0.4,0,0.2,1) 0.52s forwards" }}
            />
          </svg>
        </div>

        <h1
          style={{
            fontFamily: "var(--mc-display)",
            fontWeight: 600,
            fontSize: "clamp(36px, 6vw, 64px)",
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            color: "#fff",
            marginBottom: 20,
          }}
        >
          C&apos;est confirmé.
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 2vw, 19px)",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.65,
            marginBottom: 48,
          }}
        >
          Tu vas recevoir un email de confirmation dans quelques minutes.
          <br />
          On revient vers toi rapidement pour valider le créneau.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "14px 28px",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 999,
            color: "#fff",
            fontWeight: 600,
            fontSize: 15,
            transition: "background .2s ease",
            textDecoration: "none",
          }}
          aria-label="Retourner à l'accueil de Mobility Canada"
        >
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}

export default function MerciPage() {
  return (
    <Suspense>
      <MerciContent />
    </Suspense>
  );
}
