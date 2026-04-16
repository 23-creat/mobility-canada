"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";

/* ─── Données ─── */

const STATS = [
  { value: 1200, suffix: "+",    label: "Clients accompagnés"     },
  { value: 98,   suffix: "%",    label: "Dossiers acceptés"       },
  { value: 12,   suffix: " ans", label: "D'expertise Canada"      },
  { value: 50,   suffix: "+",    label: "Universités partenaires" },
] as const;

const STAT_BORDERS = [
  "border-r border-white/10",
  "lg:border-r border-white/10",
  "border-t border-r border-white/10 lg:border-t-0",
  "border-t border-white/10 lg:border-t-0",
] as const;

/* ─── Client island : compteurs animés ─── */

export default function HeroStats() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-10">
      {STATS.map(({ value, suffix, label }, i) => (
        <div
          key={label}
          className={`flex flex-col items-center py-7 text-center ${STAT_BORDERS[i]}`}
        >
          <p className="font-display text-[2rem] font-bold leading-none text-white sm:text-[2.25rem]">
            <AnimatedCounter target={value} suffix={suffix} duration={2000} />
          </p>
          <p className="mt-2 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-white/40">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
