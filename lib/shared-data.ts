import { Lang, tr } from "./i18n";
import { TxKey } from "./site";

/* ── โปรโมชั่น ──────────────────────────────────────────────────────────────
   ทุกรายการต้องตรงกับไฟล์โปรโมชั่นต้นทาง (Aesthetics_v2.xlsx ชีท "โปรโมชั่น Aesthetics")
   เท่านั้น — sku / price / ชื่อ ห้ามแต่งขึ้นเอง
   ทุกรายการด้านล่างสถานะ "ยังขายอยู่" ช่วงขาย 1 ม.ค. – 31 ธ.ค. 2569
   ก่อนแก้ ให้เช็คสถานะในไฟล์ต้นทางใหม่ทุกครั้ง (โปรที่ยกเลิก/หมดเขต ห้ามขึ้นเว็บ)
   ────────────────────────────────────────────────────────────────────────── */
export type Promo = {
  img: string;
  /** ป้ายหมวดหัตถการ — เป็นข้อเท็จจริง ห้ามใส่คำจัดอันดับ (BEST SELLER / อันดับ 1 ฯลฯ) */
  badge: string;
  title: string;
  sub: string;
  /** Package Code จากไฟล์ต้นทาง */
  sku: string;
  /** ราคาขาย (บาท) จากไฟล์ต้นทาง */
  price: number;
};

/** สิ้นสุดช่วงขายของทุกแพ็กเกจด้านล่าง ตามไฟล์ต้นทาง */
export const PROMO_VALID_UNTIL = { th: "31 ธ.ค. 2569", en: "31 Dec 2026" };

export const promos = (lang: Lang): Promo[] => {
  const t = tr(lang);
  return [
    {
      img: "/assets/promo/filler.jpg",
      badge: "FILLER",
      sku: "PKAES-6812119",
      price: 12900,
      title: t("Filler Restylane ทุกรุ่น 1 cc", "Filler Restylane — any model, 1 cc"),
      sub: t(
        "เติมร่องลึกและปรับรูปหน้า ฟิลเลอร์แท้ เปิดกล่องต่อหน้า ฉีดโดยแพทย์ทุกเคส",
        "Restore volume and reshape the face. Authentic filler, box opened in front of you, injected by a doctor.",
      ),
    },
    {
      img: "/assets/promo/lip-filler.jpg",
      badge: "LIP FILLER",
      sku: "PKAES-6812011",
      price: 4900,
      title: t("ฟิลเลอร์ปาก (Filler Elasty) 1 ครั้ง", "Lip Filler (Elasty) — 1 session"),
      sub: t(
        "ออกแบบทรงปากให้เข้ากับโครงหน้า ฉีดโดยแพทย์",
        "Lip shape designed to suit your face, injected by a doctor.",
      ),
    },
    {
      img: "/assets/promo/botox.jpg",
      badge: "BOTOX",
      sku: "PKAES-6811040",
      price: 5900,
      title: t("Botox Korea 50 units", "Botox Korea — 50 units"),
      sub: t("ลดริ้วรอยและปรับกรอบหน้า ฉีดโดยแพทย์", "Soften lines and contour the jawline, injected by a doctor."),
    },
    {
      img: "/assets/promo/thread.jpg",
      badge: "THREAD LIFT",
      sku: "PKAES-6811030",
      price: 17900,
      title: t("ร้อยไหม MINT 4 เส้น", "MINT Thread Lift — 4 threads"),
      sub: t("ยกกระชับจุดที่หย่อนคล้อย ไหมละลายได้", "Lift sagging areas with absorbable threads."),
    },
    {
      img: "/assets/promo/hifu.jpg",
      badge: "LIFTING",
      sku: "PKAES-6811035",
      price: 8900,
      title: t("Ultraformer III S 200 shots แถม 200 shots", "Ultraformer III S — 200 shots + 200 free"),
      sub: t("ยกกระชับผิวหน้าโดยไม่ต้องผ่าตัด", "Non-surgical skin lifting."),
    },
    {
      img: "/assets/promo/pico.jpg",
      badge: "PICO LASER",
      sku: "PKAES-6811018",
      price: 5900,
      title: t("Pico 1 แถม 1 (ได้ทุกโหมด)", "Pico Laser — 1 free 1 (all modes)"),
      sub: t("ดูแลฝ้า กระ รอยดำ และรูขุมขน", "For melasma, freckles, dark spots and pores."),
    },
    {
      img: "/assets/promo/ivdrip.jpg",
      badge: "IV DRIP",
      sku: "PKAES-6811002",
      price: 4500,
      title: t("Aura White IV Drip 5 ครั้ง", "Aura White IV Drip — 5 sessions"),
      sub: t("โปรแกรมดูแลผิวจากภายใน ให้โดยแพทย์และพยาบาล", "An inside-out skin programme, administered by medical staff."),
    },
    {
      img: "/assets/promo/diamond.jpg",
      badge: "DIAMOND BABY FACE",
      sku: "PKAES-6812167",
      price: 57500,
      title: t("Diamond Baby Face 4 ครั้ง", "Diamond Baby Face — 4 sessions"),
      sub: t(
        "โปรแกรมดูแลหลุมสิวและผิวไม่เรียบ (inskin + PRP หรือ fraxel + PRP)",
        "A programme for acne scars and uneven texture (inskin + PRP or fraxel + PRP).",
      ),
    },
    {
      img: "/assets/promo/underarm.jpg",
      badge: "LASER",
      sku: "PKAES-6811013",
      price: 2850,
      title: t("Diode laser กำจัดขน 8 ครั้ง (เลือก 1 บริเวณ)", "Diode Hair Removal — 8 sessions, 1 area"),
      sub: t("เลือกได้ 1 บริเวณ เช่น หนวด หรือรักแร้", "Choose one area, e.g. upper lip or underarm."),
    },
  ];
};

/** landing page ไหนโชว์โปรตัวไหน (index ใน promos) — ต้องเป็นหัตถการเดียวกับหน้านั้น */
export const PROMO_MAP: Partial<Record<TxKey, number>> = {
  filler: 0,
  lipfiller: 1,
  dollyeye: 0,
  botox: 2,
  thread: 3,
  hifu: 4,
  ultraformer: 4,
  thermage: 4,
  pico: 5,
  ivdrip: 6,
  diamond: 7,
  underarm: 8,
};

/* ── ภาพก่อน–หลังของแต่ละ landing page ──────────────────────────────────────
   ต้องเป็นภาพของ "หัตถการเดียวกับหน้านั้น" เท่านั้น การเอาภาพหัตถการอื่นมาแสดง
   ถือเป็นการโฆษณาผลลัพธ์ที่ไม่ตรงกับบริการ (ขัด ประกาศ สบส. 2562)
   หน้าไหนยังไม่มีภาพจริงของหัตถการนั้น ให้ตั้ง hasBa: false ใน lib/tx-data.ts
   ────────────────────────────────────────────────────────────────────────── */
export type BaPair = { before: string; after: string; cap: string };

export const baPairs = (lang: Lang, key: TxKey): BaPair[] => {
  const t = tr(lang);
  const byKey: Partial<Record<TxKey, BaPair[]>> = {
    filler: [
      { before: "/assets/ba/undereye-b.jpg", after: "/assets/ba/undereye-a.jpg", cap: t("ฟิลเลอร์ใต้ตา + ขมับ", "Under-eye + temple filler") },
      { before: "/assets/ba/chin-b.jpg", after: "/assets/ba/chin-a.jpg", cap: t("ฟิลเลอร์คาง ปรับรูปหน้า", "Chin filler contour") },
    ],
    lipfiller: [
      { before: "/assets/ba/lips-b.jpg", after: "/assets/ba/lips-a.jpg", cap: t("ฟิลเลอร์ปาก", "Lip filler") },
      { before: "/assets/ba/chinlip-b.jpg", after: "/assets/ba/chinlip-a.jpg", cap: t("ฟิลเลอร์ปาก + คาง", "Lip and chin filler") },
    ],
    dollyeye: [
      { before: "/assets/ba/eye-b.jpg", after: "/assets/ba/eye-a.jpg", cap: t("ฟิลเลอร์รอบดวงตา", "Peri-orbital filler") },
      { before: "/assets/ba/undereye-b.jpg", after: "/assets/ba/undereye-a.jpg", cap: t("ฟิลเลอร์ใต้ตา", "Under-eye filler") },
    ],
  };
  return byKey[key] ?? [];
};

/* ── รีวิวก่อน–หลัง (carousel) ── */
export const revItems = (lang: Lang) => {
  const t = tr(lang);
  return [
    { img: "/assets/rev/botox.jpg", title: t("โบท็อกซ์กรอบหน้า", "Botox Jaw Contour"), tag: "BOTOX" },
    { img: "/assets/rev/thread.jpg", title: t("ร้อยไหมยกคิ้ว", "Brow Thread Lift"), tag: "THREAD" },
    { img: "/assets/rev/filler-face.jpg", title: t("ฟิลเลอร์ปรับรูปหน้า", "Face Filler"), tag: "FILLER" },
    { img: "/assets/rev/filler-lips.jpg", title: t("ฟิลเลอร์ปาก", "Lip Filler"), tag: "FILLER" },
  ];
};

/* ── ทีมแพทย์ ────────────────────────────────────────────────────────────────
   ชื่อ · ตำแหน่ง · เลขใบประกอบวิชาชีพ ยืนยันกับ art-hospital.com/medical-team/
   เมื่อ 15 ส.ค. 2569 — ห้ามแก้โดยไม่เทียบกับเว็บหลักก่อน

   ข้อความกำกับเลขลอกตามเว็บหลักเป๊ะ ๆ และไม่เหมือนกันทุกคนโดยตั้งใจ:
     • หมออาท (CMO) ใช้ "เลขที่ใบประกอบวิชาชีพเวชกรรม"
     • แพทย์ท่านอื่นใช้ "เลขที่ใบประกอบวิชาชีพ"
   ────────────────────────────────────────────────────────────────────────── */
export type Doctor = {
  img: string;
  nick: string;
  full: string;
  /** ตำแหน่งบริหาร — มีเฉพาะบางท่าน */
  role?: string;
  deg: string;
  lic: string;
};

export const DOCTORS: Doctor[] = [
  {
    img: "/assets/dc-art.png",
    nick: "หมออาท",
    full: "นายแพทย์ธรรมรัตน์ จันทร์นวล",
    role: "ประธานเจ้าหน้าที่ฝ่ายการแพทย์",
    deg: "แพทยศาสตรบัณฑิต",
    lic: "เลขที่ใบประกอบวิชาชีพเวชกรรม 34616",
  },
  { img: "/assets/dc-top.png", nick: "หมอต๊อป", full: "นายแพทย์คุณณภัศ รัตนอมรางกูร", deg: "แพทยศาสตรบัณฑิต", lic: "เลขที่ใบประกอบวิชาชีพ 67073" },
  { img: "/assets/dc-pluem.png", nick: "หมอปลื้ม", full: "นายแพทย์ปลื้ม บุตรศรี", deg: "แพทยศาสตรบัณฑิต", lic: "เลขที่ใบประกอบวิชาชีพ 75147" },
  { img: "/assets/dc-jan.png", nick: "หมอแจน", full: "แพทย์หญิงกันตา ตันติชูศักดิ์", deg: "แพทยศาสตรบัณฑิต", lic: "เลขที่ใบประกอบวิชาชีพ 67069" },
  { img: "/assets/dc-jelly.png", nick: "หมอเจลลี่", full: "แพทย์หญิงณัฏฐ์ชุดา จิรธนานุวงศ์", deg: "แพทยศาสตรบัณฑิต", lic: "เลขที่ใบประกอบวิชาชีพ 71918" },
  { img: "/assets/dc-ohm.png", nick: "หมอโอม", full: "นายแพทย์สรณัญ มาลากุล ณ อยุธยา", deg: "แพทยศาสตรบัณฑิต", lic: "เลขที่ใบประกอบวิชาชีพ 68011" },
];

/* ── วิดีโอรีวิว (thumbs) ── */
export const vids = (lang: Lang) => {
  const t = tr(lang);
  return [
    { img: "/assets/vt-lips-1.png", cap: t("รีวิวฉีดฟิลเลอร์ปาก", "Lip filler review") },
    { img: "/assets/vt-ultraformer.png", cap: t("รีวิวยกกระชับผิวหน้า", "Skin-lifting review") },
    { img: "/assets/vt-lips-2.png", cap: t("รีวิวฉีดฟิลเลอร์", "Filler review") },
    { img: "/assets/vt-aura.png", cap: t("รีวิวโปรแกรมผิวกระจ่างใส", "Brightening review") },
    { img: "/assets/vt-lips-3.png", cap: t("รีวิวปากกระจับ", "Lip-shape review") },
    { img: "/assets/vt-lips-4.png", cap: t("รีวิวฉีดฟิลเลอร์", "Filler review") },
  ];
};

/** Disclaimer บังคับใต้รีวิว/ก่อน–หลังทุกจุด */
export const disclaimer = (lang: Lang) =>
  lang === "th" ? "*ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล" : "*Results vary by individual";
