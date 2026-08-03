import type { MetadataRoute } from "next";
import { SITE_URL, TX_SLUGS } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/reviews/", "/promotions/", "/doctors/", "/contact/"];
  const txPaths = Object.values(TX_SLUGS).map((slug) => `/${slug}/`);
  const all = [...staticPaths, ...txPaths];

  return all.flatMap((p) => {
    const enP = p === "/" ? "/en/" : `/en${p}`;
    const languages = { th: `${SITE_URL}${p}`, en: `${SITE_URL}${enP}` };
    return [
      { url: `${SITE_URL}${p}`, changeFrequency: "weekly" as const, priority: p === "/" ? 1 : 0.8, alternates: { languages } },
      { url: `${SITE_URL}${enP}`, changeFrequency: "weekly" as const, priority: p === "/" ? 0.9 : 0.7, alternates: { languages } },
    ];
  });
}
