import type { MetadataRoute } from "next";

const SITE_URL = "https://eurocomplai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; changeFreq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFreq: "weekly" },
    { path: "/come-funziona/", priority: 0.9, changeFreq: "monthly" },
    { path: "/soluzioni/sanita/", priority: 0.8, changeFreq: "monthly" },
    { path: "/soluzioni/studi-legali/", priority: 0.8, changeFreq: "monthly" },
    { path: "/soluzioni/pa/", priority: 0.8, changeFreq: "monthly" },
    { path: "/soluzioni/aziende-private/", priority: 0.8, changeFreq: "monthly" },
    { path: "/chi-siamo/", priority: 0.7, changeFreq: "monthly" },
    { path: "/pricing/", priority: 0.8, changeFreq: "monthly" },
    { path: "/demo/", priority: 0.9, changeFreq: "monthly" },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }));
}
