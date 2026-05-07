"use client";

import { useState } from "react";
import Link from "next/link";

interface Question {
  q: string;
  opts: { label: string; key: string }[];
}

const QUESTIONS: Question[] = [
  {
    q: "Quel est votre projet au Canada ?",
    opts: [
      { label: "Étudier dans une université canadienne", key: "A" },
      { label: "M'installer avec ma famille",            key: "B" },
      { label: "Recruter un talent international",       key: "C" },
    ],
  },
  {
    q: "Quelle est votre situation actuelle ?",
    opts: [
      { label: "Je prépare mon dossier depuis la France", key: "A" },
      { label: "Je suis déjà au Canada",                  key: "B" },
      { label: "Je n'ai pas encore commencé",             key: "C" },
    ],
  },
  {
    q: "Quel est votre calendrier ?",
    opts: [
      { label: "Dans les 3 prochains mois",    key: "A" },
      { label: "Dans les 6 à 12 mois",         key: "B" },
      { label: "À plus d'un an",               key: "C" },
    ],
  },
];

function getScore(answers: string[]): { score: number; text: string; cta: string } {
  const hasA = answers.includes("A");
  const hasB = answers.includes("B");
  if (answers[2] === "A") {
    return { score: 92, text: "Excellent — votre profil est très éligible et le calendrier est idéal. Démarrez dès maintenant.", cta: "Lancer mon dossier" };
  }
  if (hasA && hasB) {
    return { score: 78, text: "Très bon profil — quelques points à affiner pour maximiser vos chances. Un conseiller peut vous guider.", cta: "Parler à un conseiller" };
  }
  return { score: 64, text: "Profil éligible — il faut définir la meilleure stratégie pour votre situation. Consultation recommandée.", cta: "Consultation gratuite" };
}

export default function Simulator() {
  const [step,    setStep]    = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [active,  setActive]  = useState<string | null>(null);
  const [done,    setDone]    = useState(false);

  const current = QUESTIONS[step];

  function choose(key: string) {
    setActive(key);
  }

  function next() {
    if (!active) return;
    const newAnswers = [...answers, active];
    setAnswers(newAnswers);
    setActive(null);
    if (step + 1 >= QUESTIONS.length) {
      setDone(true);
    } else {
      setStep(step + 1);
    }
  }

  function reset() {
    setStep(0);
    setAnswers([]);
    setActive(null);
    setDone(false);
  }

  const result = done ? getScore(answers) : null;

  return (
    <div className="sim-card">
      {/* Progress */}
      <div className="sim-progress">
        {QUESTIONS.map((_, i) => (
          <span
            key={i}
            className={i < step || done ? "done" : i === step && !done ? "" : ""}
          />
        ))}
      </div>

      {!done ? (
        <>
          <div className="sim-step">Question {step + 1} / {QUESTIONS.length}</div>
          <div className="sim-q">{current.q}</div>
          <div className="sim-options">
            {current.opts.map((opt) => (
              <button
                key={opt.key}
                type="button"
                className={`sim-option${active === opt.key ? " active" : ""}`}
                onClick={() => choose(opt.key)}
              >
                <span>{opt.label}</span>
                <span className="k">{opt.key}</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="btn btn-accent"
            onClick={next}
            disabled={!active}
            style={{ opacity: active ? 1 : 0.5 }}
          >
            {step + 1 < QUESTIONS.length ? "Question suivante →" : "Voir mon résultat →"}
          </button>
        </>
      ) : (
        result && (
          <div className="sim-result">
            <div className="sim-step">Résultat de votre analyse</div>
            <div className="score">
              {result.score}<sup>%</sup>
            </div>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.55, margin: "16px 0 24px" }}>
              {result.text}
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href="/rendez-vous" className="btn btn-accent">
                {result.cta} →
              </Link>
              <button type="button" className="btn btn-ghost-dark" onClick={reset}>
                Recommencer
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
