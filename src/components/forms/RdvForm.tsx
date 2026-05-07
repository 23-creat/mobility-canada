"use client";

import { useState } from "react";
import Link from "next/link";

type StepId = 0 | 1 | 2 | 3 | 4;

interface FormData {
  profile: string;
  destination: string;
  prenom: string;
  nom: string;
  email: string;
  phone: string;
  message: string;
  slot: string;
}

const PROFILES = [
  { emoji: "🎓", title: "Étudiant",         desc: "Visa étudiant, CAQ, logement sécurisé" },
  { emoji: "🏠", title: "Particulier",       desc: "Résidence permanente, installation famille" },
  { emoji: "🏢", title: "Entreprise",        desc: "EIMT, permis de travail, mobilité RH" },
];

const DESTINATIONS = [
  { emoji: "🍁", title: "Montréal / Québec", desc: "Francophone, vivant, abordable" },
  { emoji: "🌊", title: "Toronto / Ontario", desc: "Hub financier et tech" },
  { emoji: "🏔️", title: "Vancouver / BC",    desc: "Qualité de vie, façade Pacifique" },
  { emoji: "📍", title: "Autre province",    desc: "Saskatchewan, Alberta, Manitoba…" },
];

const SLOTS = [
  { d: "Lun 28",  t: "09:00" },
  { d: "Lun 28",  t: "11:00" },
  { d: "Mar 29",  t: "10:00" },
  { d: "Mar 29",  t: "14:00" },
  { d: "Mer 30",  t: "09:00" },
  { d: "Mer 30",  t: "16:00" },
  { d: "Jeu 1er", t: "11:00" },
  { d: "Jeu 1er", t: "15:00" },
];

const TOTAL_STEPS = 4;

export default function RdvForm() {
  const [step, setStep]   = useState<StepId>(0);
  const [form, setForm]   = useState<FormData>({
    profile: "", destination: "", prenom: "", nom: "",
    email: "", phone: "", message: "", slot: "",
  });

  function set(key: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function next() { setStep((s) => Math.min(s + 1, TOTAL_STEPS) as StepId); }
  function back() { setStep((s) => Math.max(s - 1, 0) as StepId); }

  const stepLabel = `Étape ${step + 1} / ${TOTAL_STEPS}`;

  if (step === TOTAL_STEPS) {
    return (
      <div className="rdv-form">
        <div className="done-screen">
          <div className="check" aria-hidden="true">✓</div>
          <h2>Demande envoyée !</h2>
          <p>Notre équipe vous contacte sous 24h ouvrées pour confirmer votre créneau.</p>
          <div className="done-summary" role="list" aria-label="Récapitulatif de votre demande">
            {[
              { k: "Profil",      v: form.profile      || "—" },
              { k: "Destination", v: form.destination  || "—" },
              { k: "Contact",     v: form.email        || "—" },
              { k: "Créneau",     v: form.slot         || "—" },
            ].map(({ k, v }) => (
              <div key={k} className="row" role="listitem">
                <span className="k">{k}</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" className="btn btn-primary">Retour à l&apos;accueil</Link>
            <button type="button" className="btn btn-ghost" onClick={() => { setStep(0); setForm({ profile:"", destination:"", prenom:"", nom:"", email:"", phone:"", message:"", slot:"" }); }}>
              Nouvelle demande
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rdv-form" role="form" aria-label="Formulaire de prise de rendez-vous">
      {/* Header */}
      <div className="step-header">
        <span className="step-counter">{stepLabel}</span>
        <div className="step-dots" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={TOTAL_STEPS}>
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <span
              key={i}
              className={i < step ? "done" : i === step ? "current" : ""}
            />
          ))}
        </div>
      </div>

      {/* Step 0 — Profil */}
      {step === 0 && (
        <div className="rdv-step">
          <h2>Quel est votre projet ?</h2>
          <p className="lead">Choisissez le profil qui correspond le mieux à votre situation.</p>
          <div className="option-row" role="radiogroup" aria-label="Sélectionnez votre profil">
            {PROFILES.map(({ emoji, title, desc }) => (
              <button
                key={title}
                type="button"
                className={`option-card${form.profile === title ? " selected" : ""}`}
                onClick={() => set("profile", title)}
                aria-pressed={form.profile === title}
              >
                <div className="oc-emoji" aria-hidden="true">{emoji}</div>
                <div>
                  <div className="oc-title">{title}</div>
                  <div className="oc-desc">{desc}</div>
                </div>
                <span className="oc-chev" aria-hidden="true">›</span>
              </button>
            ))}
          </div>
          <div className="step-actions">
            <span />
            <button type="button" className="next-btn" onClick={next} disabled={!form.profile}>
              Continuer <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      )}

      {/* Step 1 — Destination */}
      {step === 1 && (
        <div className="rdv-step">
          <h2>Quelle destination vous attire ?</h2>
          <p className="lead">Vous pouvez changer d&apos;avis — c&apos;est justement ce dont on parlera.</p>
          <div className="option-row" role="radiogroup" aria-label="Sélectionnez votre destination">
            {DESTINATIONS.map(({ emoji, title, desc }) => (
              <button
                key={title}
                type="button"
                className={`option-card${form.destination === title ? " selected" : ""}`}
                onClick={() => set("destination", title)}
                aria-pressed={form.destination === title}
              >
                <div className="oc-emoji" aria-hidden="true">{emoji}</div>
                <div>
                  <div className="oc-title">{title}</div>
                  <div className="oc-desc">{desc}</div>
                </div>
                <span className="oc-chev" aria-hidden="true">›</span>
              </button>
            ))}
          </div>
          <div className="step-actions">
            <button type="button" className="back-btn" onClick={back}>← Retour</button>
            <button type="button" className="next-btn" onClick={next} disabled={!form.destination}>
              Continuer <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      )}

      {/* Step 2 — Coordonnées */}
      {step === 2 && (
        <div className="rdv-step">
          <h2>Vos coordonnées</h2>
          <p className="lead">Pour que nous puissions vous recontacter sous 24h ouvrées.</p>
          <div className="field-row">
            <div className="rdv-field">
              <label htmlFor="rdv-prenom">Prénom</label>
              <input
                id="rdv-prenom"
                type="text"
                placeholder="Votre prénom"
                value={form.prenom}
                onChange={(e) => set("prenom", e.target.value)}
                autoComplete="given-name"
                required
              />
            </div>
            <div className="rdv-field">
              <label htmlFor="rdv-nom">Nom</label>
              <input
                id="rdv-nom"
                type="text"
                placeholder="Votre nom"
                value={form.nom}
                onChange={(e) => set("nom", e.target.value)}
                autoComplete="family-name"
                required
              />
            </div>
          </div>
          <div className="rdv-field">
            <label htmlFor="rdv-email">Email</label>
            <input
              id="rdv-email"
              type="email"
              placeholder="votre@email.fr"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              autoComplete="email"
              required
            />
          </div>
          <div className="rdv-field">
            <label htmlFor="rdv-phone">Téléphone (optionnel)</label>
            <input
              id="rdv-phone"
              type="tel"
              placeholder="+33 6 XX XX XX XX"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              autoComplete="tel"
            />
          </div>
          <div className="rdv-field">
            <label htmlFor="rdv-message">Votre situation en quelques mots (optionnel)</label>
            <textarea
              id="rdv-message"
              rows={3}
              placeholder="Ex : famille de 3, départ prévu en septembre, visa étudiant pour ma fille…"
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
            />
          </div>
          <div className="step-actions">
            <button type="button" className="back-btn" onClick={back}>← Retour</button>
            <button
              type="button"
              className="next-btn"
              onClick={next}
              disabled={!form.prenom || !form.nom || !form.email}
            >
              Continuer <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      )}

      {/* Step 3 — Créneau */}
      {step === 3 && (
        <div className="rdv-step">
          <h2>Choisissez un créneau</h2>
          <p className="lead">Consultation de 30 minutes, par téléphone ou visio. Heure de Montréal (UTC−5).</p>
          <div className="slot-grid" role="radiogroup" aria-label="Choisissez un créneau disponible">
            {SLOTS.map(({ d, t }) => {
              const key = `${d} ${t}`;
              return (
                <button
                  key={key}
                  type="button"
                  className={`slot-btn${form.slot === key ? " selected" : ""}`}
                  onClick={() => set("slot", key)}
                  aria-pressed={form.slot === key}
                >
                  <div className="d">{d}</div>
                  <div className="t">{t}</div>
                </button>
              );
            })}
          </div>
          <div className="step-actions">
            <button type="button" className="back-btn" onClick={back}>← Retour</button>
            <button type="button" className="next-btn" onClick={next} disabled={!form.slot}>
              Confirmer ma demande <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
