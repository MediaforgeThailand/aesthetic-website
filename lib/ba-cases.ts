import { Lang, tr } from "./i18n";
import { TxKey } from "./site";

/* ── ภาพเคสจริงก่อน–หลัง (ชุดภาพประกอบเดียวจบ) ─────────────────────────────
   ต่างจาก baPairs ใน shared-data.ts ตรงที่ชุดนี้เป็น "ภาพเดียว" ที่มีก่อน–หลัง
   อยู่ในภาพเดียวกันพร้อมป้าย ก่อนทำ / หลังทำ ฝังมาในไฟล์แล้ว จึงไม่ต้องใช้
   BaSlider — แสดงเป็นภาพนิ่งได้เลย

   ⚠️ ข้อกำหนดทางกฎหมาย (ประกาศ สบส. 2562) — อ่านก่อนแก้ไฟล์นี้
   ไฟล์ต้นฉบับที่ได้รับมา "ไม่ได้ระบุว่าเคสนั้นทำหัตถการอะไร" ระบุมาแค่ชื่อ
   ปัญหาผิว ซึ่งอยู่ใน "ชื่อโฟลเดอร์" ที่ส่งมา ดังนั้น:

     1. คำบรรยายภาพทุกภาพเขียนตาม "ผลลัพธ์ที่เห็นในภาพ" ไม่ใช่ตามชื่อหัตถการ
        ห้ามเขียนว่า "ผลลัพธ์จากการฉีดฟิลเลอร์" ถ้าไม่มีเวชระเบียนยืนยัน
     2. txKeys ใส่เฉพาะหน้าที่หัตถการนั้นเป็นวิธีมาตรฐานของปัญหานั้นแบบหนึ่งต่อหนึ่ง
        เคสที่ทำได้หลายวิธี (เช่น V shape / เหนียง ทำได้ทั้งร้อยไหม HIFU โบท็อกซ์)
        ปล่อย txKeys ว่างไว้ แล้วแสดงเฉพาะบนหน้า "ปัญหา" เท่านั้น
     3. ก่อนขึ้นเว็บจริง ต้องมีหนังสือยินยอมจากผู้รับบริการทุกภาพ

   📁 ที่มาของ concern — ยึดตามชื่อโฟลเดอร์ต้นฉบับ 11 โฟลเดอร์ (ยืนยัน 15 ส.ค. 2569)
        ปาก · ขมับตอบ · V shape · เหนียง · ฝ้ากระจุดด่างดำ · รูขุมขน
        สิวอักเสบ · หน้าใส เปล่งปลั่ง (Glow) · ใต้วงแขน · เซลูไลท์ · ไฝเนื้อ

   โฟลเดอร์ต้นฉบับมี 16 ไฟล์ แต่ภาพไม่ซ้ำจริงมี 15 ภาพ — "01 Vshape.png" กับ
   "01 เหนียง.png" เป็นไฟล์เดียวกันเป๊ะ (md5 ตรงกัน) ภาพเดียวจึงถูกใช้สองรายการ
   คือ V shape กับ เหนียง เพราะเป็นคนละปัญหาตามที่ต้นทางแยกโฟลเดอร์ไว้
   รายการในไฟล์นี้จึงมี 16 รายการ = 1 รายการต่อ 1 ไฟล์ต้นฉบับ ส่วนหน้าที่โชว์
   แกลเลอรีรวม (หน้าแรก / /reviews/) ใช้ featuredCases() ซึ่งกรองภาพซ้ำออกให้แล้ว
   ผู้ใช้จึงไม่เห็นภาพเดิมสองใบติดกัน
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

/** 1 คีย์ = 1 โฟลเดอร์ต้นฉบับ */
export type ConcernKey =
  | "lips"
  | "temple"
  | "vshape"
  | "jowl"
  | "melasma"
  | "pores"
  | "acne"
  | "glow"
  | "underarm"
  | "cellulite"
  | "mole";

/** คำบรรยายตามผลลัพธ์ที่เห็นในภาพ — ไม่อ้างชื่อหัตถการ */
export const concernLabel = (lang: Lang, c: ConcernKey): string => {
  const t = tr(lang);
  const m: Record<ConcernKey, string> = {
    lips: t("ริมฝีปากอวบอิ่มได้รูป", "Fuller, better-shaped lips"),
    temple: t("ขมับตอบดูเต็มขึ้น", "Fuller temples"),
    vshape: t("กรอบหน้าเป็นทรง V ชัดขึ้น", "Sharper V-shaped jawline"),
    jowl: t("เหนียงกระชับขึ้น", "Tighter jawline, less jowl"),
    melasma: t("ฝ้า กระ จุดด่างดำจางลง", "Lighter melasma, freckles and dark spots"),
    pores: t("รูขุมขนกระชับขึ้น", "Tighter pores"),
    acne: t("สิวอักเสบลดลง", "Reduced inflamed acne"),
    glow: t("ผิวหน้าใสเปล่งปลั่ง", "Brighter, glowing skin"),
    underarm: t("ใต้วงแขนเนียนขาวขึ้น", "Smoother, brighter underarms"),
    cellulite: t("ผิวเปลือกส้มเรียบเนียนขึ้น", "Smoother skin, less cellulite"),
    mole: t("ไฝเนื้อหลุดออก ผิวเรียบขึ้น", "Moles removed, smoother skin"),
  };
  return m[c];
};

export const concernTag = (c: ConcernKey): string => {
  const m: Record<ConcernKey, string> = {
    lips: "LIPS",
    temple: "TEMPLE",
    vshape: "V SHAPE",
    jowl: "JOWL",
    melasma: "MELASMA",
    pores: "PORES",
    acne: "ACNE",
    glow: "GLOW",
    underarm: "UNDERARM",
    cellulite: "CELLULITE",
    mole: "MOLE",
  };
  return m[c];
};

/* หมายเหตุการจับคู่แต่ละเคส (ยืนยันกับ relatedTxKey ที่ทีมเนื้อหาตั้งไว้ใน content/clone/*.json)
     lips      → lipfiller   เสริมริมฝีปาก = ฟิลเลอร์ปาก ตรงตัว
     temple    → filler      ขมับตอบเติมด้วยฟิลเลอร์ (baPairs เดิมของ filler ก็มีเคสขมับอยู่แล้ว)
     melasma   → pico        พิโคเลเซอร์คือหัตถการหลักของฝ้า/กระ
     glow      → ivdrip      โปรแกรม Aura White IV Drip
     underarm  → underarm    เลเซอร์รักแร้
     acne      → diamond     Diamond Baby Face (ตาม relatedTxKey ของหน้าสิวทุกหน้า)
     vshape    → (ไม่ผูก)    ทำได้หลายวิธี ร้อยไหม/HIFU/โบท็อกซ์ — โชว์เฉพาะหน้าปัญหา
     jowl      → (ไม่ผูก)    เหมือน vshape — หน้า /articles/ปัญหาเหนียง/ ตั้ง relatedTxKey เป็น
                             thread ไว้ แต่เหนียงทำได้ทั้งร้อยไหม HIFU Ultraformer จึงไม่ผูก
     pores     → (ไม่ผูก)    ทีมเนื้อหาไม่ได้ตั้ง relatedTxKey ไว้ — โชว์เฉพาะหน้าปัญหา
     cellulite → (ไม่ผูก)    ยังไม่มีหน้าเนื้อหาเรื่องเซลูไลท์เลยในเว็บ
     mole      → (ไม่ผูก)    ยังไม่มีหน้าเนื้อหาเรื่องไฝเนื้อเลยในเว็บ

   เซลูไลท์ กับ ไฝเนื้อ ไม่มีหน้าปัญหาหรือหน้าหัตถการรองรับ (grep แล้วไม่มีสักหน้า)
   จึงปล่อย txKeys/paths ว่าง — ภาพจะขึ้นเฉพาะแกลเลอรีรวมที่หน้าแรกกับ /reviews/
   ถ้าวันหลังเปิดหน้าบริการสองอันนี้ ค่อยเติม paths เข้ามา */
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
    paths: ["/skin-aesthetics/ลิฟกรอบหน้า/"],
  },
  /* ภาพเดียวกับ vshape-01 เป๊ะ — ต้นทางแยกโฟลเดอร์ "V shape" กับ "เหนียง" ไว้คนละอัน
     จึงแยกเป็นสองรายการเพื่อให้คำบรรยายตรงกับหน้าที่ไปแสดง (แกลเลอรีรวมกรองซ้ำออกแล้ว) */
  {
    img: "/assets/case/vshape-01.jpg",
    concern: "jowl",
    txKeys: [],
    paths: ["/articles/ปัญหาเหนียง/", "/skin-aesthetics/ใบหน้าดูกลมบวม-the-art/"],
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
  /* สองเคสนี้ยังไม่มีหน้าเนื้อหารองรับ — ขึ้นเฉพาะแกลเลอรีรวม */
  {
    img: "/assets/case/cellulite-01.jpg",
    concern: "cellulite",
    txKeys: [],
    paths: [],
  },
  {
    img: "/assets/case/mole-01.jpg",
    concern: "mole",
    txKeys: [],
    paths: [],
  },
];

/** เคสที่โชว์ในแถวที่สองของ Real Client Reviews — เน้น ปาก · ผิวดารา · กรอบหน้า ตามที่สั่ง
    ท้ายลิสต์คือเคสที่ยังไม่มีหน้าเนื้อหารองรับ */
export const FEATURED_ORDER: ConcernKey[] = [
  "lips",
  "glow",
  "vshape",
  "temple",
  "melasma",
  "acne",
  "pores",
  "underarm",
  "jowl",
  "cellulite",
  "mole",
];

/** แกลเลอรีรวม (หน้าแรก + /reviews/) — เรียงตาม FEATURED_ORDER แล้วกรองภาพซ้ำออก
    เหลือภาพละใบเดียว เพราะ vshape กับ jowl ใช้ไฟล์เดียวกัน ถ้าไม่กรองจะเห็นภาพเดิมสองใบ
    ตัวที่อยู่ก่อนใน FEATURED_ORDER เป็นตัวที่ได้ไปต่อ (vshape ชนะ jowl) */
export const featuredCases = (): BaCase[] => {
  const seen = new Set<string>();
  return [...BA_CASES]
    .sort((a, b) => FEATURED_ORDER.indexOf(a.concern) - FEATURED_ORDER.indexOf(b.concern))
    .filter((c) => !seen.has(c.img) && seen.add(c.img));
};

/** ภาพเคสของหน้า landing หัตถการหนึ่ง ๆ */
export const casesForTx = (key: TxKey): BaCase[] => BA_CASES.filter((c) => c.txKeys.includes(key));

/** ภาพเคสของหน้าเนื้อหา (clone) — เทียบด้วย path ที่ decode แล้ว */
export const casesForPath = (path: string): BaCase[] => {
  const norm = decodeURIComponent(path);
  return BA_CASES.filter((c) => c.paths.some((p) => p === norm));
};
