import type { MetadataRoute } from "next";

const BASE_URL = "https://www.mobilitycanada.fr";

interface Route {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}

const ROUTES: Route[] = [
  { path: "",              priority: 1.0, changeFrequency: "weekly"  },
  { path: "/etudiant",    priority: 0.9, changeFrequency: "monthly" },
  { path: "/particulier", priority: 0.9, changeFrequency: "monthly" },
  { path: "/entreprise",  priority: 0.9, changeFrequency: "monthly" },
  { path: "/rendez-vous", priority: 0.8, changeFrequency: "monthly" },
  { path: "/guide",       priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq",         priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
