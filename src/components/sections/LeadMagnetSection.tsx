"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, CheckCircle2, ChevronRight, Download, Lock } from "lucide-react";

/* ─── Variants du bouton (vibration au hover) ─── */

const buttonVariants = {
  rest: { scale: 1, x: 0 },
  hover: {
    scale: 1.025,
    x: [0, -2, 3, -2, 2, 0],
    transition: {
      scale: { duration: 0.15, ease: "easeOut" as const },
      x: { duration: 0.45, ease: "easeInOut" as const },
    },
  },
  tap: {
    scale: 0.97,
    transition: { duration: 0.1 },
  },
  loading: {
    scale: 1,
    opacity: 0.8,
  },
};

/* ─── Bénéfices du guide ─── */

const GUIDE_BENEFITS = [
  "Les 10 étapes clés pour réussir votre installation",
  "Check-list complète des documents pour chaque visa",
  "Budget type pour vos 3 premiers mois au Canada",
  "Erreurs fréquentes à éviter — conseils d'experts",
] as const;

/* ─── Composant success ─── */

function SuccessState({ name }: { name: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="flex flex-col items-center py-6 text-center"
    >
      <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-emerald-50">
        <CheckCircle2 className="size-8 text-emerald-500" strokeWidth={1.75} />
      </div>
      <h3 className="mb-2 font-display text-[1.3rem] font-bold text-[#003366]">
        {name ? `Merci, ${name.split(" ")[0]} !` : "Merci !"}
      </h3>
      <p className="mb-5 max-w-[30ch] text-sm leading-relaxed text-neutral-500">
        Votre guide est en route. Vérifiez votre boîte mail dans les prochaines minutes.
      </p>
      <div className="flex items-center gap-2 rounded-full bg-[#003366]/6 px-4 py-2">
        <Download className="size-4 text-[#003366]" aria-hidden />
        <span className="text-sm font-medium text-[#003366]">
          Guide de l&apos;Expatrié au Canada — PDF
        </span>
      </div>
    </motion.div>
  );
}

/* ─── Composant principal ─── */

export default function LeadMagnetSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validate = () => {
    const errs: { name?: string; email?: string } = {};
    if (!name.trim()) errs.name = "Votre prénom est requis.";
    if (!email.trim()) {
      errs.email = "Votre email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Adresse email invalide.";
    }
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    // TODO: Connecter à votre endpoint API / Mailchimp / Brevo
    await new Promise((r) => setTimeout(r, 1200)); // Simulation réseau
    setStatus("success");
  };

  return (
    <section
      id="guide"
      aria-labelledby="lead-magnet-heading"
      className="bg-[#003366]/[0.04] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Colonne gauche : Contenu ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            {/* Eyebrow */}
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
              Ressource gratuite
            </p>

            {/* Titre */}
            <h2
              id="lead-magnet-heading"
              className="mb-5 font-display text-[2rem] font-bold leading-tight text-[#003366] sm:text-[2.4rem]"
            >
              Le Guide de l&apos;Expatrié au Canada
            </h2>

            {/* Description */}
            <p className="mb-8 text-[1.0625rem] leading-relaxed text-neutral-500">
              Tout ce qu&apos;il faut savoir avant de faire vos valises. Rédigé par
              nos consultants agréés CRIC, ce guide de 28 pages vous accompagne
              étape par étape dans votre projet d&apos;installation.
            </p>

            {/* Bénéfices */}
            <ul className="space-y-3" aria-label="Contenu du guide">
              {GUIDE_BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-[0.9375rem] text-neutral-600">
                  <CheckCircle2
                    className="mt-0.5 size-5 flex-shrink-0 text-emerald-500"
                    strokeWidth={2}
                    aria-hidden
                  />
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Visuel PDF */}
            <div className="mt-10 flex items-center gap-4 rounded-xl border border-[#003366]/10 bg-white px-5 py-4">
              <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#003366]/8">
                <FileText className="size-6 text-[#003366]" strokeWidth={1.75} aria-hidden />
              </div>
              <div>
                <p className="font-semibold text-[#003366]">Guide de l&apos;Expatrié au Canada</p>
                <p className="text-sm text-neutral-400">PDF · 28 pages · Gratuit</p>
              </div>
            </div>
          </motion.div>

          {/* ── Colonne droite : Formulaire ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 }}
          >
            <div className="rounded-3xl bg-white p-8 shadow-[0_8px_40px_rgba(0,51,102,0.10)] sm:p-10">

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <SuccessState key="success" name={name} />
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* En-tête formulaire */}
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
                      Accès immédiat
                    </p>
                    <h3 className="mb-1 font-display text-[1.35rem] font-bold text-[#003366]">
                      Recevez le guide par email
                    </h3>
                    <p className="mb-8 text-sm text-neutral-400">
                      Aucune carte bancaire. Aucun engagement.
                    </p>

                    <form onSubmit={handleSubmit} noValidate>
                      {/* Champ Prénom */}
                      <div className="mb-5">
                        <label
                          htmlFor="guide-name"
                          className="mb-1.5 block text-sm font-medium text-[#003366]"
                        >
                          Prénom et nom
                        </label>
                        <input
                          id="guide-name"
                          type="text"
                          autoComplete="name"
                          value={name}
                          onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })); }}
                          placeholder="Marie Dupont"
                          className={`w-full rounded-xl border px-4 py-3.5 text-[0.9375rem] text-neutral-800 outline-none transition-all duration-200 placeholder:text-neutral-300 focus:border-[#003366]/50 focus:ring-2 focus:ring-[#003366]/10 ${
                            errors.name ? "border-red-400" : "border-neutral-200"
                          }`}
                          aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1.5 text-xs text-red-500">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Champ Email */}
                      <div className="mb-7">
                        <label
                          htmlFor="guide-email"
                          className="mb-1.5 block text-sm font-medium text-[#003366]"
                        >
                          Adresse email
                        </label>
                        <input
                          id="guide-email"
                          type="email"
                          autoComplete="email"
                          value={email}
                          onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
                          placeholder="marie@exemple.fr"
                          className={`w-full rounded-xl border px-4 py-3.5 text-[0.9375rem] text-neutral-800 outline-none transition-all duration-200 placeholder:text-neutral-300 focus:border-[#003366]/50 focus:ring-2 focus:ring-[#003366]/10 ${
                            errors.email ? "border-red-400" : "border-neutral-200"
                          }`}
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1.5 text-xs text-red-500">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Bouton — vibration au hover */}
                      <motion.button
                        type="submit"
                        variants={buttonVariants}
                        initial="rest"
                        whileHover={status !== "loading" ? "hover" : undefined}
                        whileTap={status !== "loading" ? "tap" : undefined}
                        animate={status === "loading" ? "loading" : "rest"}
                        disabled={status === "loading"}
                        className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-75"
                        aria-live="polite"
                      >
                        {status === "loading" ? (
                          <>
                            <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden />
                            Envoi en cours…
                          </>
                        ) : (
                          <>
                            Recevoir le guide gratuitement
                            <ChevronRight className="size-4" aria-hidden />
                          </>
                        )}
                      </motion.button>

                      {/* Micro-mention RGPD */}
                      <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-neutral-400">
                        <Lock className="size-3 flex-shrink-0" aria-hidden />
                        Données protégées — Conformité Loi 25 &amp; RGPD. Désabonnement en 1 clic.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
