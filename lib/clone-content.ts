import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { Lang } from "./i18n";
import type { TxKey } from "./site";

/* ── หน้า clone จากเว็บหลัก (artsurgery.co.th) — เนื้อหาเก็บเป็น block JSON ── */

export type CloneBlock =
  | { t: "h2" | "h3"; text: string }
  | { t: "p"; html: string }
  | { t: "ul" | "ol"; items: string[] }
  | { t: "img"; src: string; alt: string; w: number; h: number }
  | { t: "table"; html: string }
  | { t: "video"; src: string; title?: string }
  | { t: "quote"; html: string };

export type CloneFaq = { q: string; a: string };

export type CloneLocaleContent = {
  title: string;
  metaTitle: string;
  metaDesc: string;
  lead?: string;
  blocks: CloneBlock[];
  faqs?: CloneFaq[];
  keywords?: string[];
};

export type ClonePageData = {
  slug: string;
  section: "aesthetics" | "skin-aesthetics" | "articles";
  /** path ไทยแบบ decode แล้ว ลงท้าย "/" เช่น "/skin-aesthetics/รักษาฝ้า/" */
  path: string;
  sourceUrl: string;
  sourceId: number;
  th: CloneLocaleContent;
  en: CloneLocaleContent;
  heroImage?: string;
  relatedTxKey?: TxKey;
  hasCaseImagery?: boolean;
  datePublished?: string;
  dateModified?: string;
};

const CONTENT_DIR = join(process.cwd(), "content", "clone");

let cache: ClonePageData[] | null = null;

export function getAllClonePages(): ClonePageData[] {
  if (cache) return cache;
  let files: string[] = [];
  try {
    files = readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".json"));
  } catch {
    return [];
  }
  cache = files.map((f) => JSON.parse(readFileSync(join(CONTENT_DIR, f), "utf8")) as ClonePageData);
  return cache;
}

const normalize = (p: string) => {
  let d = p;
  try {
    d = decodeURIComponent(p);
  } catch {}
  return d.endsWith("/") ? d : `${d}/`;
};

export function getClonePage(section: ClonePageData["section"], segments: string[] | undefined): ClonePageData | undefined {
  const path = normalize(`/${[section, ...(segments ?? [])].join("/")}/`.replace(/\/+/g, "/"));
  return getAllClonePages().find((p) => normalize(p.path) === path);
}

/** segments ใต้ section สำหรับ generateStaticParams (decode แล้ว) */
export function cloneParamsFor(section: ClonePageData["section"]): { path?: string[] }[] {
  return getAllClonePages()
    .filter((p) => p.section === section)
    .map((p) => {
      const segs = p.path.replace(/^\/|\/$/g, "").split("/").slice(1);
      return segs.length ? { path: segs } : {};
    });
}

export function pick(lang: Lang, page: ClonePageData): CloneLocaleContent {
  return lang === "th" ? page.th : page.en;
}

/** params สำหรับ route [[...path]] — การันตีมี entry ราก ({}) เพียงหนึ่งเดียว */
export function cloneRouteParams(section: ClonePageData["section"]): { path?: string[] }[] {
  const params = cloneParamsFor(section);
  const hasRoot = params.some((p) => !p.path || p.path.length === 0);
  return hasRoot ? params : [{}, ...params];
}
