import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import RendezVousProfilePage from "@/components/sections/RendezVousProfilePage";

export const metadata: Metadata = {
  title: "Rendez-vous Particulier — Relocalisation Famille Canada",
  description:
    "Réservez un appel de 15 minutes pour cadrer votre relocalisation familiale : logement, école, banque, santé et coordination administrative avec professionnels habilités.",
};

export default function RendezVousParticulierPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <RendezVousProfilePage
          eyebrow="Particulier · Famille · Appel gratuit"
          title={<>Votre installation.<br /><em>Sans charge mentale.</em></>}
          description="On cadre votre projet de relocalisation familiale : logement, école, banque, santé, calendrier et coordination administrative avec les bons interlocuteurs."
          promoTitle="Un plan d'installation lisible"
          promoText="On clarifie ce qui relève de l'organisation terrain et ce qui doit être coordonné avec des professionnels habilités."
          benefits={[
            "Cadrage logement, quartier, école et calendrier familial",
            "Priorités banque, santé, téléphone et premiers jours",
            "Coordination administrative sans représentation légale directe",
            "Orientation vers professionnels habilités si nécessaire",
            "Plan d'action adapté à votre famille",
          ]}
          trustBadges={[
            "15 minutes, gratuit, sans engagement",
            "Pas de représentation légale directe",
            "Coordination avec professionnels habilités lorsque nécessaire",
            "5,0 / 5 — 17 avis vérifiés Google",
          ]}
          calendlyUrl={process.env.NEXT_PUBLIC_CALENDLY_PARTICULIER_URL}
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
