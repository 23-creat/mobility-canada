/**
 * LogoMark — Filigrane vectoriel du "M" de Mobility Canada.
 * Deux arches bezier qui reproduisent la silhouette du logo.
 * Usage : positionner en absolu, pointer-events-none, opacity très faible.
 */
export default function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      focusable="false"
    >
      {/* Arche gauche */}
      <path
        d="M 160 148
           C 145 112 118 62 80 46
           C 48 32 14 52 10 84
           C 6 116 36 150 84 178
           L 160 218 Z"
        fill="currentColor"
      />
      {/* Arche droite */}
      <path
        d="M 160 148
           C 175 112 202 62 240 46
           C 272 32 306 52 310 84
           C 314 116 284 150 236 178
           L 160 218 Z"
        fill="currentColor"
      />
    </svg>
  );
}
