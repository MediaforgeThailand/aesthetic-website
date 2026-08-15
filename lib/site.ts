import { href, Lang, tr } from "./i18n";

/* ── ค่าจริง ห้ามเปลี่ยน (README: ช่องทางติดต่อ) ── */
export const LINE_ID = "@theartaesthetics";
export const LINE_URL = "https://line.me/R/ti/p/@theartaesthetics";
export const LINE_QR = "https://qr-official.line.me/gs/M_738iwzqx_GW.png?oat_content=qr";
export const TEL_HREF = "tel:026664666";
export const TEL_DISPLAY = "02-666-4666";
export const FACEBOOK_URL = "https://www.facebook.com/aesthetics.theartclinic";
/* ── เลขใบอนุญาต — ยืนยันกับ art-hospital.com 15 ส.ค. 2569
   ห้ามแก้โดยไม่ยืนยันกับฝ่ายกฎหมาย / สบส. ก่อน

   ระวัง: เว็บหลักใช้ 2 เทมเพลตที่แสดงเลขคนละชุด ต้องดูให้ครบทั้งสองที่
     • หน้าทั่วไป (/ , /about-us/)  → แถบหัวเว็บ + footer แสดง "ใบอนุญาตสถานพยาบาล 10202000368"
     • /medical-team/               → แถบหัวเว็บแสดงเลขอนุมัติโฆษณา "ทั้งสองเลข"
                                      ส่วน footer แสดงเฉพาะ ๒๕๘๔ / ๒๕๖๓
   ────────────────────────────────────────────────────────────────────────── */
export const LICENSE_HOSPITAL = "ใบอนุญาตประกอบกิจการสถานพยาบาล เลขที่ 10202000368";

/** เลขอนุมัติโฆษณา — เว็บหลักแสดงทั้งสองเลขคู่กัน ห้ามตัดออกเลขใดเลขหนึ่ง */
export const LICENSE_ADS = [
  "เลขที่ ฆสพ.สบส. ๒๕๘๔ / ๒๕๖๓",
  "เลขที่ ฆสพ.สบส. ๗๐๓๘ / ๒๕๖๗",
] as const;
export const COMPANY_NAME = "บริษัท อาทออฟเซอร์เจอร์รี่ จำกัด (มหาชน)";
export const COMPANY_REG = "เลขทะเบียนบริษัท 0107569000071";

/* ── โดเมนจริง ────────────────────────────────────────────────────────────────
   ซับโดเมนจริงของเว็บนี้ (ยืนยันกับลูกค้า 15 ส.ค. 2569)
   ค่านี้ถูกใช้ใน canonical / hreflang / OG / sitemap / robots / JSON-LD / llms.txt
   ตั้ง NEXT_PUBLIC_SITE_URL ทับได้สำหรับ preview/staging แต่ค่า default ต้องเป็น
   โดเมน production เสมอ ห้ามปล่อยให้เป็น *.vercel.app
   หมายเหตุ: อยู่ใต้โดเมนเดียวกับ artsurgery.co.th (เว็บต้นทางของบทความ clone)
   จึงต้องมี 301 จาก artsurgery.co.th/aesthetics/** มาที่นี่ ดู docs/redirects.csv
   ────────────────────────────────────────────────────────────────────────── */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aesthetics.artsurgery.co.th";

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

/* ── ที่อยู่สาขา — ตรงกับ footer ของ art-hospital.com / artsurgery.co.th (14 ส.ค. 2569)
   ห้ามแต่งข้อความบอกทาง (เช่น "ใกล้รถไฟฟ้า") ที่ยืนยันจากเว็บหลักไม่ได้ ── */
export type BranchAddr = {
  /** บรรทัดที่อยู่แบบเต็ม (schema.org streetAddress) */
  street: { th: string; en: string };
  locality: { th: string; en: string };
  region: { th: string; en: string };
  postalCode: string;
};

export const BRANCH_ADDR: BranchAddr[] = [
  {
    street: { th: "287 ถนนวิภาวดีรังสิต แขวงสนามบิน เขตดอนเมือง", en: "287 Vibhavadi Rangsit Rd., Sanam Bin, Don Mueang" },
    locality: { th: "กรุงเทพมหานคร", en: "Bangkok" },
    region: { th: "กรุงเทพมหานคร", en: "Bangkok" },
    postalCode: "10210",
  },
  {
    street: {
      th: "2571 ถนนลาดพร้าว (ระหว่างซอยลาดพร้าว 85 และ 87) แขวงคลองเจ้าคุณสิงห์ เขตวังทองหลาง",
      en: "2571 Lat Phrao Rd. (between Soi Lat Phrao 85 and 87), Khlong Chaokhun Sing, Wang Thonglang",
    },
    locality: { th: "กรุงเทพมหานคร", en: "Bangkok" },
    region: { th: "กรุงเทพมหานคร", en: "Bangkok" },
    postalCode: "10310",
  },
  {
    street: { th: "47/32-33 หมู่ 9 พัทยากลาง ต.หนองปรือ อ.บางละมุง", en: "47/32-33 Moo 9, Central Pattaya, Nong Prue, Bang Lamung" },
    locality: { th: "พัทยา", en: "Pattaya" },
    region: { th: "ชลบุรี", en: "Chonburi" },
    postalCode: "20150",
  },
];

export const branches = (lang: Lang) => {
  const t = tr(lang);
  const a = (i: number) => {
    const b = BRANCH_ADDR[i];
    return t(
      `${b.street.th} ${b.locality.th} ${b.postalCode}`,
      `${b.street.en}, ${b.locality.en} ${b.postalCode}`,
    );
  };
  return [
    { name: t("กรุงเทพฯ · ดอนเมือง", "Bangkok · Don Mueang"), addr: a(0), hours: t("เปิดทุกวัน 10:00–20:00", "Open daily 10:00–20:00") },
    { name: t("กรุงเทพฯ · ลาดพร้าว", "Bangkok · Lat Phrao"), addr: a(1), hours: t("เปิดทุกวัน 10:00–20:00", "Open daily 10:00–20:00") },
    { name: t("พัทยา", "Pattaya"), addr: a(2), hours: t("เปิดทุกวัน 10:00–20:00", "Open daily 10:00–20:00") },
  ];
};
