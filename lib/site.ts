import { href, Lang, tr } from "./i18n";

/* ── ค่าจริง ห้ามเปลี่ยน (README: ช่องทางติดต่อ) ── */
export const LINE_ID = "@theartaesthetics";
export const LINE_URL = "https://line.me/R/ti/p/@theartaesthetics";
export const LINE_QR = "https://qr-official.line.me/gs/M_738iwzqx_GW.png?oat_content=qr";
export const TEL_HREF = "tel:026664666";
export const TEL_DISPLAY = "02-666-4666";
export const FACEBOOK_URL = "https://www.facebook.com/aesthetics.theartclinic";
export const LICENSE_1 = "เลขที่ ฆสพ.สบส. ๒๕๖๖ / ๒๕๖๗";
export const LICENSE_2 = "เลขที่ ฆสพ.สบส. ๗๐๓๘ / ๒๕๖๗";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aesthetic-website.vercel.app";

/* ── Landing pages (หัตถการ) ── */
export type TxKey =
  | "filler"
  | "lipfiller"
  | "dollyeye"
  | "ultraformer"
  | "botox"
  | "thread"
  | "thermage"
  | "hifu"
  | "pico"
  | "ivdrip"
  | "diamond"
  | "underarm";

export const TX_SLUGS: Record<TxKey, string> = {
  filler: "filler",
  lipfiller: "lip-filler",
  dollyeye: "dolly-eye",
  ultraformer: "ultraformer",
  botox: "botox",
  thread: "thread-lift",
  thermage: "thermage",
  hifu: "hifu",
  pico: "pico-laser",
  ivdrip: "iv-drip",
  diamond: "diamond-baby-face",
  underarm: "underarm-laser",
};

export const TX_KEY_BY_SLUG: Record<string, TxKey> = Object.fromEntries(
  (Object.entries(TX_SLUGS) as [TxKey, string][]).map(([k, s]) => [s, k]),
) as Record<string, TxKey>;

export const txHref = (lang: Lang, key: TxKey) => href(lang, `/${TX_SLUGS[key]}/`);

/** Home services section order (09 รายการ) */
export const TX_ORDER: TxKey[] = [
  "filler",
  "botox",
  "thread",
  "thermage",
  "hifu",
  "pico",
  "ivdrip",
  "diamond",
  "underarm",
];

/** Footer "หัตถการยอดนิยม" */
export const FOOT_TX: TxKey[] = ["filler", "botox", "thread", "hifu", "diamond"];

/* ── Nav ── */
export const navItems = (lang: Lang) => {
  const t = tr(lang);
  return [
    { label: t("หน้าแรก", "Home"), href: href(lang, "/") },
    { label: t("รีวิวก่อน–หลัง", "Before & After"), href: href(lang, "/reviews/") },
    { label: t("โปรโมชั่น", "Promotions"), href: href(lang, "/promotions/") },
    { label: t("ทีมแพทย์", "Doctors"), href: href(lang, "/doctors/") },
    { label: t("ติดต่อเรา", "Contact"), href: href(lang, "/contact/") },
  ];
};

export const branches = (lang: Lang) => {
  const t = tr(lang);
  return [
    { name: t("กรุงเทพฯ · ดอนเมือง", "Bangkok · Don Mueang"), hours: t("เปิดทุกวัน 10:00–20:00", "Open daily 10:00–20:00") },
    { name: t("กรุงเทพฯ · ลาดพร้าว", "Bangkok · Lat Phrao"), hours: t("เปิดทุกวัน 10:00–20:00", "Open daily 10:00–20:00") },
    { name: t("พัทยา", "Pattaya"), hours: t("เปิดทุกวัน 10:00–20:00", "Open daily 10:00–20:00") },
  ];
};
