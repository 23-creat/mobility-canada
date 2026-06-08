import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

/* ─── Typographie premium ─── */

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "optional",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "optional",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "optional",
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "optional",
  weight: ["400", "600", "700"],
});

/* ─── SEO — Metadata optimisées ─── */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mobilitycanada.fr"),

  title: {
    template: "%s | Mobility Canada",
    default:
      "Mobility Canada — Coordination de Relocalisation pour Étudier au Québec",
  },
  description:
    "Logement à Montréal, installation sur place et coordination des démarches étudiantes avec des consultants agréés CICC. Présent dans les Départements Ultramarins.",
  keywords: [
    "Mobility Canada",
    "études au Québec",
    "étudier à Montréal",
    "logement étudiant Montréal",
    "relocalisation étudiant Canada",
    "installation étudiant Montréal",
    "coordination CAQ permis d'études",
    "relocalisation Canada",
    "CAQ",
    "consultant agréé CICC",
    "s'installer à Montréal depuis les Départements Ultramarins ou la France métropolitaine",
  ],

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.mobilitycanada.fr",
    siteName: "Mobility Canada",
    title: "Mobility Canada — Logement, Installation et Coordination Études au Québec",
    description:
      "De la lettre d'admission aux clés de l'appartement : logement à Montréal, installation et coordination avec des consultants agréés CICC.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mobility Canada — Relocalisation étudiante au Québec",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mobility Canada — Relocalisation Étudiante au Québec",
    description:
      "Logement à Montréal, installation sur place et coordination des démarches étudiantes avec des consultants agréés CICC.",
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
    "Coordination de relocalisation au Canada pour étudiants et familles francophones.",
  url: "https://www.mobilitycanada.fr",
  logo: "https://www.mobilitycanada.fr/logo.png",
  priceRange: "€€",
  areaServed: ["France métropolitaine", "Départements Ultramarins", "Canada"],
  availableLanguage: ["French", "English"],
  knowsAbout: [
    "Relocalisation Canada",
    "Visa étudiant Canada",
    "Logement étudiant Montréal",
    "Installation à Montréal",
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
  serviceType: "Relocation Coordination",
  provider: { "@type": "Organization", name: "Mobility Canada" },
  areaServed: { "@type": "Country", name: "Canada" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de relocalisation",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Coordination CAQ et permis d'études avec consultant agréé CICC" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Recherche de logement étudiant à Montréal" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Accueil aéroport et installation à Montréal" } },
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
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} ${playfair.variable}`}
    >
      <head />
      <body>
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
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'PIXEL_ID_A_REMPLACER');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
