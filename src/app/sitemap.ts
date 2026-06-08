import type { MetadataRoute } from "next";

const BASE_URL = "https://www.mobilitycanada.fr";

interface Route {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}

const ROUTES: Route[] = [
  { path: "",                          priority: 1.0, changeFrequency: "weekly"  },
  { path: "/etudiant",                 priority: 0.9, changeFrequency: "monthly" },
  { path: "/particulier",              priority: 0.9, changeFrequency: "monthly" },
  { path: "/entreprise",               priority: 0.9, changeFrequency: "monthly" },
  { path: "/rendez-vous",              priority: 0.8, changeFrequency: "monthly" },
  { path: "/rendez-vous/etudiant",     priority: 0.7, changeFrequency: "monthly" },
  { path: "/rendez-vous/particulier",  priority: 0.7, changeFrequency: "monthly" },
  { path: "/rendez-vous/entreprise",   priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog",                     priority: 0.6, changeFrequency: "weekly"  },
  { path: "/mentions-legales",         priority: 0.2, changeFrequency: "yearly"  },
  { path: "/confidentialite",          priority: 0.2, changeFrequency: "yearly"  },
  { path: "/loi-25",                   priority: 0.2, changeFrequency: "yearly"  },
  { path: "/cgu",                      priority: 0.2, changeFrequency: "yearly"  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date("2026-06-07"),
    changeFrequency,
    priority,
  }));
}
