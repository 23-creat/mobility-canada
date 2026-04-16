import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import Testimonials from "@/components/sections/Testimonials";
import LeadMagnetSection from "@/components/sections/LeadMagnetSection";

export const metadata: Metadata = {
  title: "Mobility Canada — Experts en Immigration, Visa et Relocalisation au Canada",
  description:
    "Cabinet de conseil agréé CRIC en immigration canadienne. Accompagnement sur mesure pour votre visa étudiant, permis de travail et résidence permanente. 1 200+ clients accompagnés.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* A — Attention */}
        <HeroSection />

        {/* I — Intérêt */}
        <ServicesGrid />

        {/* D — Désir */}
        <ProcessTimeline />
        <Testimonials />

        {/* A — Action */}
        <LeadMagnetSection />
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}
