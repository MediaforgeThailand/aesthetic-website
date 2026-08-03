export type Lang = "th" | "en";

/** Per-language text picker: const t = tr(lang); t("ไทย", "English") */
export const tr =
  (lang: Lang) =>
  <T = string>(th: T, en: T): T =>
    lang === "th" ? th : en;

/** Locale-aware internal href. path always starts with "/" and ends with "/". */
export const href = (lang: Lang, path: string): string => {
  const p = path.endsWith("/") ? path : `${path}/`;
  return lang === "en" ? (p === "/" ? "/en/" : `/en${p}`) : p;
};

/** The same page in the other language (for the TH/EN toggle). */
export const switchLangHref = (lang: Lang, currentPath: string): string => {
  if (lang === "en") {
    const stripped = currentPath.replace(/^\/en(\/|$)/, "/");
    return stripped.endsWith("/") ? stripped : `${stripped}/`;
  }
  return currentPath === "/" ? "/en/" : `/en${currentPath.endsWith("/") ? currentPath : `${currentPath}/`}`;
};
