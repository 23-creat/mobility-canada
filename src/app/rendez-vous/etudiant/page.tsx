import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import QualificationQuestionnaire from "@/components/forms/QualificationQuestionnaire";
import RendezVousProfilePage from "@/components/sections/RendezVousProfilePage";

export const metadata: Metadata = {
  title: "Rendez-vous Étudiant — Appel de Faisabilité Québec",
  description:
    "Réservez un appel de 15 minutes pour cadrer votre projet d'études au Québec : lettre d'admission, logement à Montréal, installation et coordination CAQ/permis d'études avec Soleil Immigration.",
};

export default function RendezVousEtudiantPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_STUDENT_URL;

  return (
    <>
      <Navbar />
      <main id="main-content">
        <RendezVousProfilePage
          eyebrow="Étudiant · Appel gratuit de 15 min"
          title={<>Études au Québec.<br /><em>Arrivée cadrée.</em></>}
          description="On fait le point sur ta lettre d'admission, ton calendrier, ton logement à Montréal et la coordination de tes démarches étudiantes avec Soleil Immigration, consultant agréé CICC."
          promoTitle="Un plan clair avant de lancer les démarches"
          promoText="Un appel court, concret, pour savoir quoi faire maintenant et dans quel ordre."
          benefits={[
            "Point sur lettre d'admission, rentrée visée et délais",
            "Priorités logement à Montréal avant le départ",
            "Coordination CAQ et permis d'études avec consultant agréé CICC",
            "Accueil, installation et repères des premiers jours",
            "Questions DOM-TOM, France métropolitaine et familles",
          ]}
          trustBadges={[
            "15 minutes, gratuit, sans engagement",
            "Logement, installation et coordination depuis un seul endroit",
            "Présent pour les étudiants DOM-TOM et France métropolitaine",
            "5,0 / 5 — 17 avis vérifiés Google",
          ]}
          calendlyUrl={calendlyUrl}
          bookingContent={<QualificationQuestionnaire calendlyUrl={calendlyUrl} />}
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
