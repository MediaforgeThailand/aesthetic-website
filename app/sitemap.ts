import type { MetadataRoute } from "next";
import { SITE_URL, TX_SLUGS } from "@/lib/site";
import { getAllClonePages } from "@/lib/clone-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/reviews/", "/promotions/", "/doctors/", "/contact/"];
  const txPaths = Object.values(TX_SLUGS).map((slug) => `/${slug}/`);
  const clonePages = getAllClonePages().map((p) => p.path);
  const sectionIndexes = ["/skin-aesthetics/", "/articles/"].filter((p) => !clonePages.includes(p));
  const all = [...staticPaths, ...txPaths, ...clonePages, ...sectionIndexes];

  return all.flatMap((raw) => {
    // sitemaps.org บังคับ percent-encode URL — path ไทยต้องผ่าน encodeURI
    const p = encodeURI(raw);
    const enP = p === "/" ? "/en/" : `/en${p}`;
    const languages = { th: `${SITE_URL}${p}`, en: `${SITE_URL}${enP}` };
    return [
      { url: `${SITE_URL}${p}`, changeFrequency: "weekly" as const, priority: raw === "/" ? 1 : 0.8, alternates: { languages } },
      { url: `${SITE_URL}${enP}`, changeFrequency: "weekly" as const, priority: raw === "/" ? 0.9 : 0.7, alternates: { languages } },
    ];
  });
}
