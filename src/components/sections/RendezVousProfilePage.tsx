import type { ReactNode } from "react";

type RendezVousProfilePageProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  promoTitle: string;
  promoText: string;
  benefits: string[];
  trustBadges: string[];
  calendlyUrl?: string;
  bookingContent?: ReactNode;
};

const DEFAULT_CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/mobility-canada-admin/30min";

export default function RendezVousProfilePage({
  eyebrow,
  title,
  description,
  promoTitle,
  promoText,
  benefits,
  trustBadges,
  calendlyUrl = DEFAULT_CALENDLY_URL,
  bookingContent,
}: RendezVousProfilePageProps) {
  return (
    <section className="rdv" aria-labelledby="rdv-h1">
      <div className="mc-container">
        <div className="rdv-grid">
          <div className="rdv-left">
            <div className="eyebrow-row">
              <span className="dot" aria-hidden="true" />
              <span className="eyebrow">{eyebrow}</span>
            </div>
            <h1 id="rdv-h1">{title}</h1>
            <p>{description}</p>

            <div className="rdv-promo">
              <span className="eyebrow">Ce que vous obtenez</span>
              <h3>{promoTitle}</h3>
              <p>{promoText}</p>
              <ul>
                {benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
              {trustBadges.map((text) => (
                <div
                  key={text}
                  style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "var(--mc-soft)" }}
                >
                  <span aria-hidden="true" style={{ color: "var(--mc-accent)" }}>•</span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div>
            {bookingContent ?? (
              <iframe
                src={calendlyUrl}
                width="100%"
                height="700"
                style={{ border: "none", borderRadius: 16, background: "var(--mc-white)" }}
                title="Réserver un appel de 15 minutes avec Mobility Canada"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
