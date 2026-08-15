import type { MetadataRoute } from "next";
import { SITE_URL, TX_SLUGS } from "@/lib/site";
import { getAllClonePages } from "@/lib/clone-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/reviews/", "/promotions/", "/doctors/", "/contact/"];
  const txPaths = Object.values(TX_SLUGS).map((slug) => `/${slug}/`);
  const clones = getAllClonePages();
  const clonePages = clones.map((p) => p.path);
  const sectionIndexes = ["/skin-aesthetics/", "/articles/"].filter((p) => !clonePages.includes(p));
  const all = [...staticPaths, ...txPaths, ...clonePages, ...sectionIndexes];

  /** วันแก้ไขล่าสุดของบทความ clone — หน้าอื่นไม่มีวันที่ จึงไม่ใส่ lastModified */
  const lastMod = new Map(
    clones
      .map((p) => [p.path, p.dateModified ?? p.datePublished] as const)
      .filter((e): e is readonly [string, string] => Boolean(e[1])),
  );

  return all.flatMap((raw) => {
    // sitemaps.org บังคับ percent-encode URL — path ไทยต้องผ่าน encodeURI
    const p = encodeURI(raw);
    const enP = p === "/" ? "/en/" : `/en${p}`;
    // hreflang cluster ต้องตรงกับที่หน้าเว็บประกาศใน lib/seo.ts (th / en / x-default)
    const languages = { th: `${SITE_URL}${p}`, en: `${SITE_URL}${enP}`, "x-default": `${SITE_URL}${p}` };
    const modified = lastMod.get(raw);
    const common = {
      changeFrequency: "weekly" as const,
      alternates: { languages },
      ...(modified ? { lastModified: new Date(modified) } : {}),
    };
    return [
      { url: `${SITE_URL}${p}`, priority: raw === "/" ? 1 : 0.8, ...common },
      { url: `${SITE_URL}${enP}`, priority: raw === "/" ? 0.9 : 0.7, ...common },
    ];
  });
}
