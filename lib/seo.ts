import type { Metadata } from "next";
import { Lang } from "./i18n";

/* ── Open Graph ──────────────────────────────────────────────────────────────
   Next merges `metadata` ทีละคีย์ระดับบนเท่านั้น — ถ้า page ประกาศ `openGraph`
   เอง มันจะ "แทนที่" ของ layout ทั้งก้อน ไม่ใช่รวมกัน ทำให้ og:site_name /
   og:locale / og:type หายไปทั้งหน้า
   ทุกหน้าที่ต้องกำหนดรูป OG เอง ให้เรียก ogFor() แทนการเขียน openGraph ตรง ๆ
   ────────────────────────────────────────────────────────────────────────── */
export const ogFor = (lang: Lang, image: string): Metadata["openGraph"] => ({
  siteName: "The Art Aesthetic",
  locale: lang === "th" ? "th_TH" : "en_US",
  type: "website",
  images: [image],
});

/** hreflang alternates สำหรับหน้าเดียวกันสองภาษา — thPath เช่น "/reviews/" */
export const alternatesFor = (lang: Lang, thPath: string): Metadata["alternates"] => {
  const p = thPath.endsWith("/") ? thPath : `${thPath}/`;
  const enPath = p === "/" ? "/en/" : `/en${p}`;
  return {
    canonical: lang === "th" ? p : enPath,
    languages: { th: p, en: enPath, "x-default": p },
  };
};
