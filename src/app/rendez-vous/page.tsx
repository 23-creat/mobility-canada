import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Clock, Phone, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MultiStepForm from "@/components/forms/MultiStepForm";

/* ─── SEO ─── */

export const metadata: Metadata = {
  title: "Prendre Rendez-vous — Consultation Gratuite en Immigration Canada",
  description:
    "Réservez votre consultation gratuite avec un consultant agréé CRIC. Visa étudiant, résidence permanente, permis de travail — nous analysons votre profil en 30 minutes.",
  openGraph: {
    title: "Consultation gratuite — Mobility Canada | Experts Immigration Canada",
    description:
      "30 minutes avec un expert CRIC pour définir votre feuille de route vers le Canada. Gratuit, sans engagement.",
  },
};

/* ─── Garanties ─── */

const GUARANTEES = [
  { icon: Clock,       text: "Réponse sous 24h ouvrées"          },
  { icon: ShieldCheck, text: "Consultants agréés CRIC / CICC"    },
  { icon: Star,        text: "4,9 / 5 — 98% de satisfaction"     },
  { icon: Phone,       text: "+1 (514) 377-0857 — Ligne directe" },
] as const;

/* ─── Page ─── */

export default function RendezVousPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Section hero courte ── */}
        <section className="bg-[#003366] pb-0 pt-28 sm:pt-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="pb-12 text-center lg:pb-16">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5">
                <ShieldCheck className="size-3.5 text-emerald-400" strokeWidth={2} aria-hidden />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-300">
                  Consultation gratuite · Sans engagement
                </span>
              </div>
              <h1 className="mb-4 font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-white sm:text-[3.25rem]">
                Parlez à un expert.
                <br />
                <span className="text-white/50">On définit votre plan ensemble.</span>
              </h1>
              <p className="mx-auto max-w-[52ch] text-[1.0625rem] leading-[1.7] text-white/60">
                30 minutes avec un consultant agréé CRIC pour analyser votre profil,
                répondre à vos questions et vous proposer la meilleure feuille de route.
              </p>
            </div>
          </div>
        </section>

        {/* ── Formulaire + sidebar ── */}
        <section
          aria-labelledby="rdv-form-heading"
          className="bg-[#F8F9FA] py-16 lg:py-20"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-14 xl:gap-20">

              {/* Formulaire multi-étapes */}
              <div className="rounded-3xl bg-white p-8 shadow-[0_8px_40px_rgba(0,51,102,0.09)] sm:p-10">
                <h2 id="rdv-form-heading" className="sr-only">
                  Formulaire de prise de rendez-vous
                </h2>
                <MultiStepForm />
              </div>

              {/* Sidebar — réassurance */}
              <aside aria-label="Pourquoi Mobility Canada">
                {/* Garanties */}
                <div className="mb-6 rounded-2xl border border-neutral-200 bg-white p-6">
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-wider text-[#D80621]">
                    Nos engagements
                  </p>
                  <ul className="space-y-3.5">
                    {GUARANTEES.map(({ icon: Icon, text }) => (
                      <li key={text} className="flex items-center gap-3 text-sm text-neutral-600">
                        <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#003366]/8">
                          <Icon className="size-4 text-[#003366]" strokeWidth={1.75} aria-hidden />
                        </div>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Témoignage */}
                <div className="mb-6 rounded-2xl bg-[#003366] p-6">
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="mb-4 text-[0.9rem] leading-relaxed text-white/80">
                    &ldquo;Dès le premier appel, j&apos;ai su que j&apos;étais entre de bonnes mains.
                    Mon visa étudiant a été accordé en 6 semaines. Je recommande sans hésiter.&rdquo;
                  </blockquote>
                  <footer className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-full bg-[#D80621] font-display text-xs font-bold text-white">
                      JT
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Jeremy T.</p>
                      <p className="text-xs text-white/50">Étudiant · UQAM, Montréal</p>
                    </div>
                  </footer>
                </div>

                {/* Contact direct */}
                <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[#003366]/60">
                    Préférez-vous nous appeler ?
                  </p>
                  <a
                    href="tel:+15143770857"
                    className="flex items-center gap-3 group"
                  >
                    <div className="flex size-10 items-center justify-center rounded-xl bg-[#D80621]/10">
                      <Phone className="size-5 text-[#D80621]" strokeWidth={1.75} aria-hidden />
                    </div>
                    <div>
                      <p className="font-semibold text-[#003366] group-hover:text-[#D80621] transition-colors">
                        +1 (514) 377-0857
                      </p>
                      <p className="text-xs text-neutral-400">Lun–Ven · 9h – 18h (heure de Montréal)</p>
                    </div>
                  </a>
                  <div className="mt-4 border-t border-neutral-100 pt-4">
                    <a
                      href="mailto:info@mobilitycanada.fr"
                      className="text-sm text-neutral-500 transition-colors hover:text-[#003366]"
                    >
                      info@mobilitycanada.fr
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Bande de confiance ── */}
        <section
          className="border-t border-neutral-100 bg-white py-10"
          aria-label="Preuves de confiance"
        >
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="flex flex-wrap items-center justify-center gap-6 text-center text-sm text-neutral-400">
              {[
                "🔒  Données protégées — RGPD & Loi 25",
                "✓  Consultants agréés CRIC / CICC",
                "⭐  4,9 / 5 Google · 1 200+ avis",
                "🇨🇦  Membres de l'ICCRC",
              ].map((item) => (
                <span key={item} className="font-medium">{item}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ courte ── */}
        <section className="bg-[#F8F9FA] py-16">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D80621]">
              Avant votre rendez-vous
            </p>
            <h2 className="mb-8 font-display text-[1.75rem] font-bold text-[#003366]">
              Questions fréquentes
            </h2>
            <div className="space-y-4 text-left">
              {[
                {
                  q: "La consultation est-elle vraiment gratuite ?",
                  a: "Oui, sans frais ni engagement. C'est une session de découverte pour analyser votre profil et vos objectifs.",
                },
                {
                  q: "Que se passe-t-il après le rendez-vous ?",
                  a: "Vous recevez un récapitulatif personnalisé et une proposition de parcours d'accompagnement adaptée à votre situation.",
                },
                {
                  q: "Dans combien de temps puis-je être rappelé ?",
                  a: "Notre équipe vous contacte sous 24 heures ouvrées selon le mode de contact que vous avez sélectionné.",
                },
              ].map(({ q, a }) => (
                <details key={q} className="rounded-xl border border-neutral-200 bg-white">
                  <summary className="cursor-pointer px-6 py-4 text-sm font-semibold text-[#003366] marker:text-[#D80621]">
                    {q}
                  </summary>
                  <p className="px-6 pb-4 text-sm leading-relaxed text-neutral-500">{a}</p>
                </details>
              ))}
            </div>
            <p className="mt-8 text-sm text-neutral-400">
              D&apos;autres questions ?{" "}
              <Link href="/etudiant#faq-etudiant" className="font-medium text-[#003366] underline underline-offset-2 hover:text-[#D80621]">
                Consultez notre FAQ complète
              </Link>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
