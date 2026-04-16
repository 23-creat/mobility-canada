import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Exclure les routes internes Next.js et les endpoints API
        disallow: ["/api/", "/_next/", "/static/"],
      },
    ],
    sitemap: "https://www.mobilitycanada.fr/sitemap.xml",
    host: "https://www.mobilitycanada.fr",
  };
}
