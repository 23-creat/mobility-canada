"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap, Users, Building2, ChevronRight, ChevronLeft,
  CheckCircle2, Mail, Phone, Video, MapPin, Calendar,
} from "lucide-react";

/* ─── Types ─── */

type ProfileType = "etudiant" | "particulier" | "entreprise" | "";

interface FormData {
  profileType: ProfileType;
  firstName: string;
  lastName: string;
  country: string;
  destination: string;
  timeline: string;
  projectDesc: string;
  email: string;
  phone: string;
  contactPref: string;
  timeSlot: string;
}

const INITIAL_DATA: FormData = {
  profileType: "",
  firstName: "",
  lastName: "",
  country: "",
  destination: "",
  timeline: "",
  projectDesc: "",
  email: "",
  phone: "",
  contactPref: "email",
  timeSlot: "",
};

/* ─── Options ─── */

const PROFILES = [
  { value: "etudiant",    label: "Étudiant",    icon: GraduationCap, desc: "Visa étudiant, CAQ, admission" },
  { value: "particulier", label: "Particulier",  icon: Users,         desc: "Résidence permanente, famille" },
  { value: "entreprise",  label: "Entreprise",   icon: Building2,     desc: "Permis de travail, mobilité RH" },
] as const;

const DESTINATIONS = [
  "Québec (Montréal, Québec City…)",
  "Ontario (Toronto, Ottawa…)",
  "Colombie-Britannique (Vancouver…)",
  "Alberta (Calgary, Edmonton…)",
  "Autre province ou territoire",
] as const;

const TIMELINES = [
  "Moins de 6 mois",
  "De 6 à 12 mois",
  "De 1 à 2 ans",
  "Plus de 2 ans",
  "Pas encore fixé",
] as const;

const CONTACT_PREFS = [
  { value: "email", label: "Email",              icon: Mail  },
  { value: "phone", label: "Téléphone",          icon: Phone },
  { value: "video", label: "Visio (Teams/Zoom)", icon: Video },
] as const;

const TIME_SLOTS = [
  "Matin (9h – 12h)",
  "Après-midi (12h – 18h)",
  "Soir (18h – 20h)",
] as const;

/* ─── Variants Framer Motion ─── */

const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stepVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (dir: number) => ({ x: dir > 0 ? -48 : 48, opacity: 0 }),
};

/* ─── Helpers ─── */

function FieldLabel({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-[#003366]">
      {children}
      {required && <span className="ml-0.5 text-[#D80621]" aria-hidden>*</span>}
    </label>
  );
}

function TextInput({
  id, value, onChange, placeholder, type = "text", autoComplete,
}: {
  id: string; value: string; onChange: (v: string) => void;
  placeholder?: string; type?: string; autoComplete?: string;
}) {
  return (
    <input
      id={id}
      type={type}
      autoComplete={autoComplete}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border border-neutral-200 px-4 py-3.5 text-[0.9375rem] text-neutral-800 outline-none transition-all placeholder:text-neutral-300 focus:border-[#003366]/50 focus:ring-2 focus:ring-[#003366]/10"
    />
  );
}

/* ─── Steps ─── */

function Step1({ data, set }: { data: FormData; set: (d: Partial<FormData>) => void }) {
  return (
    <div>
      <h2 className="mb-1 font-display text-[1.5rem] font-bold text-[#003366]">
        Votre profil
      </h2>
      <p className="mb-8 text-sm text-neutral-500">Étape 1 sur 3 — Dites-nous qui vous êtes.</p>

      {/* Type de projet */}
      <fieldset className="mb-7">
        <legend className="mb-3 text-sm font-medium text-[#003366]">
          Type de projet <span className="text-[#D80621]" aria-hidden>*</span>
        </legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {PROFILES.map(({ value, label, icon: Icon, desc }) => (
            <button
              key={value}
              type="button"
              onClick={() => set({ profileType: value as ProfileType })}
              className={`flex flex-col items-center rounded-2xl border-2 p-5 text-center transition-all duration-200 ${
                data.profileType === value
                  ? "border-[#003366] bg-[#003366]/[0.04] shadow-md"
                  : "border-neutral-200 hover:border-[#003366]/30"
              }`}
              aria-pressed={data.profileType === value}
            >
              <div className={`mb-3 flex size-10 items-center justify-center rounded-xl transition-colors ${
                data.profileType === value ? "bg-[#003366] text-white" : "bg-neutral-100 text-neutral-500"
              }`}>
                <Icon className="size-5" strokeWidth={1.75} aria-hidden />
              </div>
              <p className={`text-sm font-semibold ${data.profileType === value ? "text-[#003366]" : "text-neutral-700"}`}>
                {label}
              </p>
              <p className="mt-0.5 text-[11px] text-neutral-400">{desc}</p>
            </button>
          ))}
        </div>
      </fieldset>

      {/* Prénom + Nom */}
      <div className="mb-5 grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="step1-fname" required>Prénom</FieldLabel>
          <TextInput id="step1-fname" value={data.firstName} onChange={(v) => set({ firstName: v })} placeholder="Marie" autoComplete="given-name" />
        </div>
        <div>
          <FieldLabel htmlFor="step1-lname">Nom</FieldLabel>
          <TextInput id="step1-lname" value={data.lastName} onChange={(v) => set({ lastName: v })} placeholder="Dupont" autoComplete="family-name" />
        </div>
      </div>

      {/* Pays */}
      <div>
        <FieldLabel htmlFor="step1-country">Pays de résidence actuel</FieldLabel>
        <TextInput id="step1-country" value={data.country} onChange={(v) => set({ country: v })} placeholder="France" autoComplete="country-name" />
      </div>
    </div>
  );
}

function Step2({ data, set }: { data: FormData; set: (d: Partial<FormData>) => void }) {
  return (
    <div>
      <h2 className="mb-1 font-display text-[1.5rem] font-bold text-[#003366]">
        Votre projet
      </h2>
      <p className="mb-8 text-sm text-neutral-500">Étape 2 sur 3 — Décrivez votre projet au Canada.</p>

      {/* Destination */}
      <fieldset className="mb-7">
        <legend className="mb-3 flex items-center gap-2 text-sm font-medium text-[#003366]">
          <MapPin className="size-4 text-[#D80621]" aria-hidden />
          Destination souhaitée <span className="text-[#D80621]" aria-hidden>*</span>
        </legend>
        <div className="space-y-2">
          {DESTINATIONS.map((dest) => (
            <button
              key={dest}
              type="button"
              onClick={() => set({ destination: dest })}
              className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                data.destination === dest
                  ? "border-[#003366]/40 bg-[#003366]/[0.04] font-semibold text-[#003366]"
                  : "border-neutral-200 text-neutral-600 hover:border-[#003366]/25"
              }`}
              aria-pressed={data.destination === dest}
            >
              {dest}
              {data.destination === dest && (
                <CheckCircle2 className="size-4 text-[#003366]" strokeWidth={2} aria-hidden />
              )}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Délai */}
      <fieldset className="mb-7">
        <legend className="mb-3 flex items-center gap-2 text-sm font-medium text-[#003366]">
          <Calendar className="size-4 text-[#D80621]" aria-hidden />
          Calendrier prévu <span className="text-[#D80621]" aria-hidden>*</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {TIMELINES.map((tl) => (
            <button
              key={tl}
              type="button"
              onClick={() => set({ timeline: tl })}
              className={`rounded-full border px-4 py-2 text-sm transition-all ${
                data.timeline === tl
                  ? "border-[#003366] bg-[#003366] text-white"
                  : "border-neutral-200 text-neutral-600 hover:border-[#003366]/40"
              }`}
              aria-pressed={data.timeline === tl}
            >
              {tl}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Description */}
      <div>
        <FieldLabel htmlFor="step2-desc">Décrivez votre projet en quelques mots</FieldLabel>
        <textarea
          id="step2-desc"
          value={data.projectDesc}
          onChange={(e) => set({ projectDesc: e.target.value })}
          placeholder="Ex : Je veux étudier l'informatique à Montréal dès septembre 2025…"
          rows={4}
          className="w-full resize-none rounded-xl border border-neutral-200 px-4 py-3.5 text-[0.9375rem] text-neutral-800 outline-none transition-all placeholder:text-neutral-300 focus:border-[#003366]/50 focus:ring-2 focus:ring-[#003366]/10"
        />
      </div>
    </div>
  );
}

function Step3({ data, set }: { data: FormData; set: (d: Partial<FormData>) => void }) {
  return (
    <div>
      <h2 className="mb-1 font-display text-[1.5rem] font-bold text-[#003366]">
        Vos coordonnées
      </h2>
      <p className="mb-8 text-sm text-neutral-500">Étape 3 sur 3 — Comment vous joindre ?</p>

      {/* Email + Téléphone */}
      <div className="mb-5 grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="step3-email" required>Adresse email</FieldLabel>
          <TextInput id="step3-email" type="email" value={data.email} onChange={(v) => set({ email: v })} placeholder="marie@exemple.fr" autoComplete="email" />
        </div>
        <div>
          <FieldLabel htmlFor="step3-phone">Téléphone</FieldLabel>
          <TextInput id="step3-phone" type="tel" value={data.phone} onChange={(v) => set({ phone: v })} placeholder="+33 6 00 00 00 00" autoComplete="tel" />
        </div>
      </div>

      {/* Préférence de contact */}
      <fieldset className="mb-6">
        <legend className="mb-3 text-sm font-medium text-[#003366]">
          Préférence de contact
        </legend>
        <div className="flex gap-3">
          {CONTACT_PREFS.map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              type="button"
              onClick={() => set({ contactPref: value })}
              className={`flex flex-1 flex-col items-center gap-1.5 rounded-xl border py-4 text-center transition-all ${
                data.contactPref === value
                  ? "border-[#003366] bg-[#003366]/[0.04] text-[#003366]"
                  : "border-neutral-200 text-neutral-500 hover:border-[#003366]/30"
              }`}
              aria-pressed={data.contactPref === value}
            >
              <Icon className="size-5" strokeWidth={1.75} aria-hidden />
              <span className="text-[11px] font-semibold">{label}</span>
            </button>
          ))}
        </div>
      </fieldset>

      {/* Créneau */}
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-[#003366]">
          Créneau préféré
        </legend>
        <div className="flex flex-wrap gap-2">
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => set({ timeSlot: slot })}
              className={`rounded-full border px-4 py-2 text-sm transition-all ${
                data.timeSlot === slot
                  ? "border-[#003366] bg-[#003366] text-white"
                  : "border-neutral-200 text-neutral-600 hover:border-[#003366]/40"
              }`}
              aria-pressed={data.timeSlot === slot}
            >
              {slot}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

function SuccessScreen({ data }: { data: FormData }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: EXPO_OUT }}
      className="flex flex-col items-center py-8 text-center"
    >
      <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-emerald-50">
        <CheckCircle2 className="size-10 text-emerald-500" strokeWidth={1.5} />
      </div>
      <h2 className="mb-2 font-display text-[1.75rem] font-bold text-[#003366]">
        {data.firstName ? `Merci, ${data.firstName} !` : "Demande reçue !"}
      </h2>
      <p className="mb-6 max-w-[38ch] text-[1rem] leading-relaxed text-neutral-500">
        Votre conseiller dédié vous contacte sous <strong className="text-[#003366]">24 heures ouvrées</strong> via{" "}
        {data.contactPref === "email" ? "email" : data.contactPref === "phone" ? "téléphone" : "visio"}.
      </p>

      <div className="w-full max-w-sm rounded-2xl border border-[#003366]/15 bg-[#003366]/[0.03] p-5 text-left">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[#003366]/60">
          Récapitulatif
        </p>
        {[
          { label: "Profil", value: data.profileType },
          { label: "Destination", value: data.destination || "Non précisée" },
          { label: "Calendrier", value: data.timeline || "Non précisé" },
          { label: "Email", value: data.email },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between py-1.5 text-sm">
            <span className="text-neutral-400">{label}</span>
            <span className="font-medium text-[#003366] capitalize">{value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Composant principal ─── */

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateData = (patch: Partial<FormData>) =>
    setData((prev) => ({ ...prev, ...patch }));

  const next = () => { setDirection(1); setStep((s) => s + 1); };
  const prev = () => { setDirection(-1); setStep((s) => s - 1); };

  const canProceedStep1 = data.profileType !== "" && data.firstName.trim() !== "";
  const canProceedStep2 = data.destination !== "" && data.timeline !== "";
  const canSubmit = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);

  const handleSubmit = async () => {
    setLoading(true);
    // TODO: Connecter à votre CRM / Calendly API / Brevo
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  const TOTAL_STEPS = 3;
  const progress = (step / TOTAL_STEPS) * 100;

  if (submitted) return <SuccessScreen data={data} />;

  return (
    <div>
      {/* Barre de progression */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-xs text-neutral-400">
          <span>Étape {step} sur {TOTAL_STEPS}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
          <motion.div
            className="h-full rounded-full bg-[#D80621]"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
          />
        </div>
        {/* Points d'étape */}
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          {["Profil", "Projet", "Coordonnées"].map((label, i) => (
            <div
              key={label}
              className={`text-[11px] font-semibold transition-colors ${
                step > i + 1 ? "text-emerald-500" : step === i + 1 ? "text-[#003366]" : "text-neutral-300"
              }`}
            >
              {step > i + 1 ? "✓ " : ""}{label}
            </div>
          ))}
        </div>
      </div>

      {/* Contenu de l'étape */}
      <div className="overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={step}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: EXPO_OUT }}
          >
            {step === 1 && <Step1 data={data} set={updateData} />}
            {step === 2 && <Step2 data={data} set={updateData} />}
            {step === 3 && <Step3 data={data} set={updateData} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between gap-4">
        {step > 1 ? (
          <button
            type="button"
            onClick={prev}
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-5 py-3 text-sm font-medium text-neutral-600 transition-colors hover:border-[#003366]/30 hover:text-[#003366]"
          >
            <ChevronLeft className="size-4" aria-hidden />
            Retour
          </button>
        ) : (
          <div />
        )}

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={next}
            disabled={step === 1 ? !canProceedStep1 : !canProceedStep2}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            Continuer
            <ChevronRight className="size-[15px]" aria-hidden />
          </button>
        ) : (
          <motion.button
            type="button"
            onClick={handleSubmit}
            disabled={!canSubmit || loading}
            whileHover={!loading && canSubmit ? { scale: 1.02 } : undefined}
            whileTap={!loading && canSubmit ? { scale: 0.98 } : undefined}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <>
                <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden />
                Envoi en cours…
              </>
            ) : (
              <>
                Confirmer ma demande
                <CheckCircle2 className="size-[15px]" aria-hidden />
              </>
            )}
          </motion.button>
        )}
      </div>
    </div>
  );
}
