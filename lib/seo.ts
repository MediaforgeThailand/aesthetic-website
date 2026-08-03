import type { Metadata } from "next";
import { Lang } from "./i18n";

/** hreflang alternates สำหรับหน้าเดียวกันสองภาษา — thPath เช่น "/reviews/" */
export const alternatesFor = (lang: Lang, thPath: string): Metadata["alternates"] => {
  const p = thPath.endsWith("/") ? thPath : `${thPath}/`;
  const enPath = p === "/" ? "/en/" : `/en${p}`;
  return {
    canonical: lang === "th" ? p : enPath,
    languages: { th: p, en: enPath, "x-default": p },
  };
};
