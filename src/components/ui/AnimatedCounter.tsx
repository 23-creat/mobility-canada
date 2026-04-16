"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

/**
 * Compteur animé — s'incrémente de 0 à `target` lors de l'entrée dans le viewport.
 * Utilise une courbe ease-out cubic pour un effet premium.
 */
export default function AnimatedCounter({
  target,
  suffix = "",
  duration = 1800,
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3; // ease-out cubic
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  // Format: "1 200" avec espace fine insécable pour les milliers
  const formatted =
    value >= 1000
      ? `${Math.floor(value / 1000)}\u202f${String(value % 1000).padStart(3, "0")}`
      : String(value);

  return (
    <span ref={ref} aria-label={`${target}${suffix}`}>
      {formatted}
      {suffix}
    </span>
  );
}
