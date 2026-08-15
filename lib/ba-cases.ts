import { Lang, tr } from "./i18n";
import { TxKey } from "./site";

/* ── ภาพเคสจริงก่อน–หลัง (ชุดภาพประกอบเดียวจบ) ─────────────────────────────
   ต่างจาก baPairs ใน shared-data.ts ตรงที่ชุดนี้เป็น "ภาพเดียว" ที่มีก่อน–หลัง
   อยู่ในภาพเดียวกันพร้อมป้าย ก่อนทำ / หลังทำ ฝังมาในไฟล์แล้ว จึงไม่ต้องใช้
   BaSlider — แสดงเป็นภาพนิ่งได้เลย

   ⚠️ ข้อกำหนดทางกฎหมาย (ประกาศ สบส. 2562) — อ่านก่อนแก้ไฟล์นี้
   ไฟล์ต้นฉบับที่ได้รับมา "ไม่ได้ระบุว่าเคสนั้นทำหัตถการอะไร" ระบุมาแค่ชื่อ
   ปัญหาผิว (ปาก / ขมับตอบ / ฝ้า / รูขุมขน ฯลฯ) เท่านั้น ดังนั้น:

     1. คำบรรยายภาพทุกภาพเขียนตาม "ปัญหาที่เห็นในภาพ" ไม่ใช่ตามชื่อหัตถการ
        ห้ามเขียนว่า "ผลลัพธ์จากการฉีดฟิลเลอร์" ถ้าไม่มีเวชระเบียนยืนยัน
     2. txKeys ใส่เฉพาะหน้าที่หัตถการนั้นเป็นวิธีมาตรฐานของปัญหานั้นแบบหนึ่งต่อหนึ่ง
        เคสที่ทำได้หลายวิธี (เช่น V shape ทำได้ทั้งร้อยไหม/HIFU/โบท็อกซ์)
        ปล่อย txKeys ว่างไว้ แล้วแสดงเฉพาะบนหน้า "ปัญหา" เท่านั้น
     3. ก่อนขึ้นเว็บจริง ต้องมีหนังสือยินยอมจากผู้รับบริการทุกภาพ
   ────────────────────────────────────────────────────────────────────────── */

export type BaCase = {
  /** ไฟล์ภาพ 1072×800 มีป้ายก่อน–หลังฝังในภาพ */
  img: string;
  /** กลุ่มปัญหา ใช้จับคู่กับหน้าเนื้อหา */
  concern: ConcernKey;
  /** หน้า landing หัตถการที่แสดงภาพนี้ได้ (ดูข้อ 2 ด้านบน) */
  txKeys: TxKey[];
  /** path ของหน้าเนื้อหา (clone) ที่แสดงภาพนี้ได้ */
  paths: string[];
};

export type ConcernKey =
  | "lips"
  | "temple"
  | "vshape"
  | "melasma"
  | "pores"
  | "acne"
  | "glow"
  | "underarm";

/** คำบรรยายตามปัญหาที่เห็นในภาพ — ไม่อ้างชื่อหัตถการ */
export const concernLabel = (lang: Lang, c: ConcernKey): string => {
  const t = tr(lang);
  const m: Record<ConcernKey, string> = {
    lips: t("ริมฝีปากอวบอิ่มได้รูป", "Fuller, better-shaped lips"),
    temple: t("ขมับตอบดูเต็มขึ้น", "Fuller temples"),
    vshape: t("กรอบหน้าคมขึ้น เหนียงลดลง", "Sharper jawline, less sagging"),
    melasma: t("ฝ้า กระ จุดด่างดำจางลง", "Lighter melasma and dark spots"),
    pores: t("รูขุมขนกระชับขึ้น", "Tighter pores"),
    acne: t("สิวอักเสบลดลง", "Reduced inflamed acne"),
    glow: t("ผิวหน้าใสเปล่งปลั่ง", "Brighter, glowing skin"),
    underarm: t("ใต้วงแขนเนียนขาวขึ้น", "Smoother, brighter underarms"),
  };
  return m[c];
};

export const concernTag = (c: ConcernKey): string => {
  const m: Record<ConcernKey, string> = {
    lips: "LIPS",
    temple: "TEMPLE",
    vshape: "V SHAPE",
    melasma: "MELASMA",
    pores: "PORES",
    acne: "ACNE",
    glow: "GLOW",
    underarm: "UNDERARM",
  };
  return m[c];
};

/* หมายเหตุการจับคู่แต่ละเคส (ยืนยันกับ relatedTxKey ที่ทีมเนื้อหาตั้งไว้ใน content/clone/*.json)
     lips     → lipfiller   เสริมริมฝีปาก = ฟิลเลอร์ปาก ตรงตัว
     temple   → filler      ขมับตอบเติมด้วยฟิลเลอร์ (baPairs เดิมของ filler ก็มีเคสขมับอยู่แล้ว)
     melasma  → pico        พิโคเลเซอร์คือหัตถการหลักของฝ้า/กระ
     glow     → ivdrip      โปรแกรม Aura White IV Drip
     underarm → underarm    เลเซอร์รักแร้
     acne     → diamond     Diamond Baby Face (ตาม relatedTxKey ของหน้าสิวทุกหน้า)
     vshape   → (ไม่ผูก)    ทำได้หลายวิธี ร้อยไหม/HIFU/โบท็อกซ์ — โชว์เฉพาะหน้าปัญหา
     pores    → (ไม่ผูก)    ทีมเนื้อหาไม่ได้ตั้ง relatedTxKey ไว้ — โชว์เฉพาะหน้าปัญหา
   เคส "เซลูไลท์" กับ "ไฝเนื้อ" ที่ส่งมาด้วยยังไม่มีหน้ารองรับ จึงยังไม่ได้ใส่ไฟล์นี้
   (ภาพอยู่ที่ public/assets/case/cellulite-01.jpg และ mole-01.jpg รอหน้าใหม่) */
export const BA_CASES: BaCase[] = [
  {
    img: "/assets/case/lips-01.jpg",
    concern: "lips",
    txKeys: ["lipfiller"],
    paths: [
      "/skin-aesthetics/ริมฝีปากอวบอิ่ม-the-art/",
      "/skin-aesthetics/ปรับรูปทรงปากให้สวยอวบ/",
      "/skin-aesthetics/เติมริมฝีปากให้อวบอิ่ม-t/",
      "/skin-aesthetics/แก้ริมฝีปากบน-the-art/",
      "/skin-aesthetics/ทรงปากกระจับ/",
    ],
  },
  {
    img: "/assets/case/lips-02.jpg",
    concern: "lips",
    txKeys: ["lipfiller"],
    paths: [
      "/skin-aesthetics/ริมฝีปากอวบอิ่ม-the-art/",
      "/skin-aesthetics/ปรับรูปทรงปากให้สวยอวบ/",
      "/skin-aesthetics/เติมริมฝีปากให้อวบอิ่ม-t/",
      "/skin-aesthetics/แก้ริมฝีปากบน-the-art/",
      "/skin-aesthetics/ทรงปากกระจับ/",
    ],
  },
  {
    img: "/assets/case/temple-01.jpg",
    concern: "temple",
    txKeys: ["filler"],
    paths: ["/skin-aesthetics/ขมับตอบ/"],
  },
  {
    img: "/assets/case/temple-02.jpg",
    concern: "temple",
    txKeys: ["filler"],
    paths: ["/skin-aesthetics/ขมับตอบ/"],
  },
  {
    img: "/assets/case/vshape-01.jpg",
    concern: "vshape",
    txKeys: [],
    paths: ["/skin-aesthetics/ลิฟกรอบหน้า/", "/articles/ปัญหาเหนียง/"],
  },
  {
    img: "/assets/case/melasma-01.jpg",
    concern: "melasma",
    txKeys: ["pico"],
    paths: ["/skin-aesthetics/รักษาฝ้า/", "/skin-aesthetics/melasma-and-freckles/"],
  },
  {
    img: "/assets/case/pores-01.jpg",
    concern: "pores",
    txKeys: [],
    paths: ["/skin-aesthetics/กระชับรูขุมขน/", "/articles/รูขุมขนกว้าง/", "/articles/ปัญหารูขุมขนกว้าง/"],
  },
  {
    img: "/assets/case/pores-02.jpg",
    concern: "pores",
    txKeys: [],
    paths: ["/skin-aesthetics/กระชับรูขุมขน/", "/articles/รูขุมขนกว้าง/", "/articles/ปัญหารูขุมขนกว้าง/"],
  },
  {
    img: "/assets/case/acne-01.jpg",
    concern: "acne",
    txKeys: ["diamond"],
    paths: ["/skin-aesthetics/สิวติดเชื้อ/", "/skin-aesthetics/สิวหัวช้างไม่มีหัว/", "/skin-aesthetics/หลุมสิว/"],
  },
  {
    img: "/assets/case/glow-01.jpg",
    concern: "glow",
    txKeys: ["ivdrip"],
    paths: ["/skin-aesthetics/ปรับผิวให้ดูขาวกระจ่าง/", "/skin-aesthetics/ดริปผิว/"],
  },
  {
    img: "/assets/case/glow-02.jpg",
    concern: "glow",
    txKeys: ["ivdrip"],
    paths: ["/skin-aesthetics/ปรับผิวให้ดูขาวกระจ่าง/", "/skin-aesthetics/ดริปผิว/"],
  },
  {
    img: "/assets/case/glow-03.jpg",
    concern: "glow",
    txKeys: ["ivdrip"],
    paths: ["/skin-aesthetics/ปรับผิวให้ดูขาวกระจ่าง/", "/skin-aesthetics/ดริปผิว/"],
  },
  {
    img: "/assets/case/underarm-01.jpg",
    concern: "underarm",
    txKeys: ["underarm"],
    paths: ["/skin-aesthetics/เลเซอร์รักแร้ขาว/"],
  },
];

/** เคสที่โชว์ในแถวที่สองของ Real Client Reviews — เน้น ปาก · ผิวดารา · กรอบหน้า ตามที่สั่ง */
export const FEATURED_ORDER: ConcernKey[] = ["lips", "glow", "vshape", "temple", "melasma", "acne", "pores", "underarm"];

export const featuredCases = (): BaCase[] =>
  [...BA_CASES].sort((a, b) => FEATURED_ORDER.indexOf(a.concern) - FEATURED_ORDER.indexOf(b.concern));

/** ภาพเคสของหน้า landing หัตถการหนึ่ง ๆ */
export const casesForTx = (key: TxKey): BaCase[] => BA_CASES.filter((c) => c.txKeys.includes(key));

/** ภาพเคสของหน้าเนื้อหา (clone) — เทียบด้วย path ที่ decode แล้ว */
export const casesForPath = (path: string): BaCase[] => {
  const norm = decodeURIComponent(path);
  return BA_CASES.filter((c) => c.paths.some((p) => p === norm));
};
