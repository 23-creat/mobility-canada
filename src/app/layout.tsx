import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

/* ─── Typographie premium ─── */

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  // "optional" : rend le texte immédiatement avec la police de secours (Arial local)
  // sans swap ultérieur — élimine les mises à jour LCP liées au chargement de la police.
  display: "optional",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  // "optional" : même logique — évite que le swap de Playfair ne repousse le LCP.
  display: "optional",
  weight: ["400", "700"],
});

/* ─── SEO — Metadata optimisées ─── */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mobilitycanada.fr"),

  title: {
    template: "%s | Mobility Canada",
    default:
      "Mobility Canada — Experts en Immigration, Visa et Relocalisation au Canada",
  },
  description:
    "Cabinet de conseil agréé CRIC en immigration canadienne. Accompagnement sur mesure pour votre visa étudiant, permis de travail et résidence permanente au Canada. 1 200+ clients accompagnés, 98% de succès.",
  keywords: [
    "immigration Canada",
    "Mobility Canada",
    "visa Canada",
    "visa étudiant Canada",
    "permis de travail Canada",
    "résidence permanente Canada",
    "expatriation Canada",
    "relocalisation Canada",
    "CAQ",
    "consultant immigration CRIC",
    "consultant immigration CICC",
    "s'installer au Canada depuis la France",
  ],

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.mobilitycanada.fr",
    siteName: "Mobility Canada",
    title: "Mobility Canada — Experts en Immigration Canadienne agréés CRIC",
    description:
      "Cabinet de conseil CRIC spécialisé en immigration au Canada. Visa étudiant, permis de travail, résidence permanente. 98% de dossiers acceptés. Consultation gratuite.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mobility Canada — Immigration et Relocalisation au Canada",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mobility Canada — Immigration au Canada | Consultants agréés CRIC",
    description:
      "Visa étudiant, permis de travail, résidence permanente. Accompagnement personnalisé par des consultants certifiés CRIC / CICC.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.mobilitycanada.fr",
    languages: {
      fr: "https://www.mobilitycanada.fr",
      en: "https://www.mobilitycanada.fr/en",
    },
  },
};

/* ─── JSON-LD — Données structurées ─── */

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Mobility Canada",
  description:
    "Cabinet de conseil agréé CRIC spécialisé en immigration et relocalisation au Canada.",
  url: "https://www.mobilitycanada.fr",
  logo: "https://www.mobilitycanada.fr/logo.png",
  priceRange: "€€",
  areaServed: ["France", "Canada"],
  availableLanguage: ["French", "English"],
  knowsAbout: [
    "Immigration Canada",
    "Visa étudiant Canada",
    "Permis de travail Canada",
    "Résidence permanente",
    "CAQ",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@mobilitycanada.fr",
    contactType: "customer service",
    areaServed: "FR",
    availableLanguage: "French",
  },
  sameAs: ["https://www.linkedin.com/company/mobility-canada"],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Immigration Consulting",
  provider: { "@type": "Organization", name: "Mobility Canada" },
  areaServed: { "@type": "Country", name: "Canada" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services d'immigration",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Visa étudiant (CAQ)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Permis de travail" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Résidence permanente" } },
    ],
  },
};

/* ─── Layout racine ─── */

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head />
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}

        {/* JSON-LD — Organisation */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* JSON-LD — Service */}
        <Script
          id="schema-service"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </body>
    </html>
  );
}
