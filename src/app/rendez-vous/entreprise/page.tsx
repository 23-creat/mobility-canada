import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import RendezVousProfilePage from "@/components/sections/RendezVousProfilePage";

export const metadata: Metadata = {
  title: "Rendez-vous Entreprise — Mobilité RH Canada",
  description:
    "Réservez un appel B2B pour cadrer la relocalisation de vos talents au Canada : préparation documentaire, logement, onboarding et coordination partenaires habilités.",
};

export default function RendezVousEntreprisePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <RendezVousProfilePage
          eyebrow="Entreprise · Mobilité RH · Devis B2B"
          title={<>Mobilité RH.<br /><em>Talents installés.</em></>}
          description="On cadre votre besoin de mobilité internationale : profils concernés, délais, préparation documentaire, relocalisation terrain et onboarding opérationnel."
          promoTitle="Un cadrage B2B concret"
          promoText="Un échange pour qualifier le besoin, identifier les frictions et préparer les prochaines étapes avec reporting clair."
          benefits={[
            "Cadrage des profils, délais et responsabilités RH",
            "Préparation documentaire et coordination des intervenants",
            "Logement, arrivée, banque, santé et onboarding",
            "Reporting pour équipes RH et managers",
            "Devis B2B sous 48h après qualification",
          ]}
          trustBadges={[
            "Appel de cadrage B2B, sans engagement",
            "Coordination partenaires habilités lorsque nécessaire",
            "Reporting clair pour les équipes RH",
            "Relocalisation terrain et onboarding au Canada",
          ]}
          calendlyUrl={process.env.NEXT_PUBLIC_CALENDLY_B2B_URL}
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
