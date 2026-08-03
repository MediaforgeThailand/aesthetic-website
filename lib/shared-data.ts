import { Lang, tr } from "./i18n";
import { TxKey } from "./site";

/* ── โปรโมชั่น (ใช้ทั้งหน้าโปรโมชั่นและ "โปรที่เกี่ยวข้อง" บน landing) ── */
export type Promo = { img: string; badge: string; title: string; sub: string };

export const promos = (lang: Lang): Promo[] => {
  const t = tr(lang);
  return [
    {
      img: "/assets/tx-lip-filler.jpg",
      badge: "BEST SELLER",
      title: t("Lip Perfect — ฟิลเลอร์ปาก", "Lip Perfect — Lip Filler"),
      sub: t(
        "ปากอิ่มสวยได้รูป พร้อมออกแบบทรงปากให้เข้ากับใบหน้า โดยแพทย์เฉพาะด้าน",
        "Shapely, natural lips designed for your face by our doctors.",
      ),
    },
    {
      img: "/assets/tx-face-inject.jpg",
      badge: "NEW",
      title: t("Baby Glow — ใต้ตา + ผิวใส", "Baby Glow — Under-eye + Radiance"),
      sub: t("แพ็กเกจฟิลเลอร์ใต้ตา คู่ IV Drip ผิวใส รับลุคสดใสไม่โทรม", "Under-eye filler paired with a brightening IV drip."),
    },
    {
      img: "/assets/tx-injection.jpg",
      badge: "LIMITED",
      title: t("Firm & Lift — HIFU + โบกราม", "Firm & Lift — HIFU + Jaw"),
      sub: t("ยกกระชับโครงหน้า พร้อมปรับหน้าเรียวในแพ็กเกจเดียว", "Lift and contour the face in one package."),
    },
    {
      img: "/assets/slide-diamond.png",
      badge: "SIGNATURE",
      title: "Diamond Baby Face",
      sub: t("คอร์สรักษาหลุมสิวเฉพาะของ The Art จองคิวประเมินผิวฟรี", "The Art's signature acne-scar course — free skin assessment."),
    },
  ];
};

/** landing page ไหนโชว์โปรตัวไหน (index ใน promos) */
export const PROMO_MAP: Partial<Record<TxKey, number>> = {
  filler: 0,
  lipfiller: 0,
  dollyeye: 0,
  botox: 2,
  thread: 2,
  thermage: 2,
  hifu: 2,
  ultraformer: 2,
  pico: 1,
  ivdrip: 1,
  diamond: 3,
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

/* ── ทีมแพทย์ ── */
export type Doctor = { img: string; nick: string; full: string; deg: string; lic: string };

export const DOCTORS: Doctor[] = [
  { img: "/assets/dc-top.png", nick: "หมอต๊อป", full: "นายแพทย์คุณณภัศ รัตนอมรางกูร", deg: "แพทยศาสตรบัณฑิต", lic: "เลขที่ใบประกอบวิชาชีพเวชกรรม 67073" },
  { img: "/assets/dc-pluem.png", nick: "หมอปลื้ม", full: "นายแพทย์ปลื้ม บุตรศรี", deg: "แพทยศาสตรบัณฑิต", lic: "เลขที่ใบประกอบวิชาชีพเวชกรรม 75147" },
  { img: "/assets/dc-jan.png", nick: "หมอแจน", full: "แพทย์หญิงกันตา ตันติชูศักดิ์", deg: "แพทยศาสตรบัณฑิต", lic: "เลขที่ใบประกอบวิชาชีพเวชกรรม 67069" },
  { img: "/assets/dc-jelly.png", nick: "หมอเจลลี่", full: "แพทย์หญิงณัฏฐ์ชุดา จิรธนานุวงศ์", deg: "แพทยศาสตรบัณฑิต", lic: "เลขที่ใบประกอบวิชาชีพเวชกรรม 71918" },
  { img: "/assets/dc-ohm.png", nick: "หมอโอม", full: "นายแพทย์สรณัญ มาลากุล ณ อยุธยา", deg: "แพทยศาสตรบัณฑิต", lic: "เลขที่ใบประกอบวิชาชีพเวชกรรม 68011" },
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
