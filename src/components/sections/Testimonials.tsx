"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

/* ─── Données ─── */

const TESTIMONIALS = [
  {
    id: 1,
    name: "Jessica M.",
    role: "Esthéticienne",
    location: "Montréal, QC",
    rating: 5,
    featured: true,
    quote:
      "Mobility Canada a géré l'intégralité de mon dossier de visa. En moins de 4 mois, j'étais installée à Montréal et je continuais à exercer ma passion. Un accompagnement professionnel, humain et d'une efficacité remarquable.",
    initials: "JM",
    avatarBg: "bg-[#003366]",
  },
  {
    id: 2,
    name: "Jeremy T.",
    role: "Étudiant",
    location: "UQAM, Montréal",
    rating: 5,
    featured: false,
    quote:
      "Du choix de mon université jusqu'au dépôt de ma demande de CAQ, j'ai été accompagné à chaque étape. L'équipe répond toujours rapidement et m'a évité un stress considérable. Je recommande sans hésiter.",
    initials: "JT",
    avatarBg: "bg-[#1a4d8f]",
  },
  {
    id: 3,
    name: "Gilles & Coralie B.",
    role: "Famille en relocalisation",
    location: "Québec, QC",
    rating: 5,
    featured: false,
    quote:
      "Nous avons quitté Lyon avec trois enfants. Grâce à Mobility Canada, tout était organisé à notre arrivée : logement, école, ouverture de compte. Un service d'une qualité rare que nous recommandons fortement.",
    initials: "GB",
    avatarBg: "bg-[#D80621]",
  },
] as const;

/* ─── Helpers ─── */

const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Variants direction-aware pour le carrousel (custom = direction: 1 | -1)
const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden />
      ))}
    </div>
  );
}

/* ─── Composant principal ─── */

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const total = TESTIMONIALS.length;

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((c) => (c + dir + total) % total);
    },
    [total]
  );

  // Auto-advance toutes les 6 secondes (pause au hover)
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => go(1), 6000);
    return () => clearInterval(timer);
  }, [paused, go]);

  const testimonial = TESTIMONIALS[current];

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="overflow-hidden bg-[#F8F9FA] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
            Ce que disent nos clients
          </p>
          <h2
            id="testimonials-heading"
            className="font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.5rem]"
          >
            Des parcours réels, des résultats concrets.
          </h2>
        </motion.div>

        {/* Carte principale */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.article
              key={testimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: EXPO_OUT }}
              className="relative rounded-3xl bg-white p-8 shadow-[0_8px_40px_rgba(0,51,102,0.09)] sm:p-12"
              aria-live="polite"
            >
              {/* Badge "En avant" sur le témoignage featured */}
              {testimonial.featured && (
                <div className="absolute right-6 top-6 flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1">
                  <Star className="size-3 fill-amber-400 text-amber-400" aria-hidden />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                    Avis mis en avant
                  </span>
                </div>
              )}

              {/* Icône citation décorative */}
              <Quote
                className="mb-6 size-10 text-[#003366]/10"
                fill="currentColor"
                aria-hidden
              />

              {/* Texte du témoignage */}
              <blockquote className="mb-8">
                <p className="font-display text-[1.2rem] leading-[1.65] text-[#003366] sm:text-[1.35rem]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Étoiles */}
              <div className="mb-6">
                <StarRow count={testimonial.rating} />
              </div>

              {/* Auteur */}
              <footer className="flex items-center gap-4">
                <div
                  className={`flex size-12 flex-shrink-0 items-center justify-center rounded-full ${testimonial.avatarBg} font-display text-sm font-bold text-white`}
                  aria-hidden
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#003366]">{testimonial.name}</p>
                  <p className="text-sm text-neutral-500">
                    {testimonial.role} · {testimonial.location}
                  </p>
                </div>
              </footer>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          {/* Flèche précédente */}
          <button
            onClick={() => go(-1)}
            className="flex size-11 items-center justify-center rounded-full border border-[#003366]/15 bg-white text-[#003366]/50 transition-all duration-200 hover:border-[#003366]/40 hover:text-[#003366] hover:shadow-md"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Dots + avatars */}
          <div className="flex items-center gap-3">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`flex items-center gap-2 rounded-full px-3 py-2 transition-all duration-300 ${
                  i === current
                    ? "bg-[#003366] shadow-md"
                    : "bg-[#003366]/8 hover:bg-[#003366]/15"
                }`}
                aria-label={`Afficher le témoignage de ${t.name}`}
                aria-current={i === current ? "true" : undefined}
              >
                <div
                  className={`size-5 rounded-full ${t.avatarBg} flex items-center justify-center font-display text-[9px] font-bold text-white`}
                  aria-hidden
                >
                  {t.initials}
                </div>
                {i === current && (
                  <span className="text-[11px] font-medium text-white">{t.name}</span>
                )}
              </button>
            ))}
          </div>

          {/* Flèche suivante */}
          <button
            onClick={() => go(1)}
            className="flex size-11 items-center justify-center rounded-full border border-[#003366]/15 bg-white text-[#003366]/50 transition-all duration-200 hover:border-[#003366]/40 hover:text-[#003366] hover:shadow-md"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* Barre de progression */}
        <div className="mt-6 h-[2px] overflow-hidden rounded-full bg-[#003366]/10">
          <motion.div
            key={current}
            className="h-full bg-[#D80621] origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: paused ? undefined : 1 }}
            transition={{ duration: 6, ease: "linear" as const }}
          />
        </div>
      </div>
    </section>
  );
}
