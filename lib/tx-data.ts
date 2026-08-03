import type { Metadata } from "next";
import { Lang, tr } from "./i18n";
import { alternatesFor } from "./seo";
import { TX_SLUGS, TxKey } from "./site";

/* ── SEO landing page content (ทั้ง 12 หัตถการ) — copy verbatim จาก design reference ── */

export type TxFaq = { q: string; a: string };

export type TxContent = {
  key: TxKey;
  name: string;
  en: string;
  tag: string;
  h1: string;
  lead: string;
  time: string;
  numb: string;
  down: string;
  last: string;
  img?: string;
  hasBa?: boolean;
  about1: string;
  about2: string;
  spots: string[];
  faqs: TxFaq[];
  /** Keyword block ท้ายหน้า — join ด้วย " · " ได้ข้อความตรงตาม reference */
  keywords: string[];
};

export function txData(lang: Lang): Record<TxKey, TxContent> {
  const t = tr(lang);
  return {
    filler: {
      key: "filler",
      name: t("ฉีดฟิลเลอร์", "Dermal Filler"),
      en: "Dermal Filler",
      tag: "INJECTABLE · FILLER",
      h1: t(
        "ฉีดฟิลเลอร์ เติมเต็มอย่างเป็นธรรมชาติ โดยแพทย์ผู้ชำนาญด้านโครงหน้า",
        "Dermal Filler — natural volume, by facial-structure specialists",
      ),
      lead: t(
        "เติมเต็มร่องลึกและปรับรูปหน้า ใต้ตา ร่องแก้ม คาง ปาก ขมับ ด้วยฟิลเลอร์แท้ผ่าน อย. ตรวจสอบได้ทุกกล่อง ฉีดโดยแพทย์ทุกเคส ผลลัพธ์เป็นธรรมชาติ ไม่เป็นก้อน",
        "Restore volume and reshape under-eyes, cheeks, chin, lips and temples with FDA-approved fillers — every case injected by a doctor.",
      ),
      time: t("20–40 นาที", "20–40 min"),
      numb: t("ยาชาเฉพาะที่", "Topical / local"),
      down: t("น้อยมาก 1–2 วัน", "Minimal, 1–2 days"),
      last: t("12–18 เดือน", "12–18 months"),
      img: "/assets/tx-face-inject.jpg",
      hasBa: true,
      about1: t(
        "ฟิลเลอร์ (Dermal Filler) คือสารเติมเต็มไฮยาลูรอนิก แอซิด (HA) ซึ่งเป็นสารที่พบได้ตามธรรมชาติในผิว ใช้เติมเต็มส่วนที่พร่องหรือเป็นร่องลึก เช่น ใต้ตาคล้ำลึก ร่องแก้มชัด แก้มตอบ รวมถึงเสริมรูปทรง คาง ปาก ขมับ และกรอบหน้า ให้ได้สัดส่วนที่สมดุลยิ่งขึ้น",
        "Dermal fillers are hyaluronic-acid gels — a substance found naturally in skin — used to restore hollow areas such as under-eyes and cheeks, and to shape the chin, lips, temples and jawline.",
      ),
      about2: t(
        "ที่ The Art Aesthetic แพทย์จะวิเคราะห์โครงหน้าและออกแบบปริมาณเฉพาะบุคคลก่อนทุกครั้ง ใช้เฉพาะฟิลเลอร์ของแท้ที่ผ่าน อย. เปิดกล่องใหม่ต่อหน้า และสแกนตรวจสอบได้ทุกเคส",
        "Our doctors analyse your facial structure and plan the exact volume for you. Only authentic, FDA-approved fillers — opened in front of you, scannable every case.",
      ),
      spots: t(
        ["ใต้ตา", "ร่องแก้ม", "คาง", "ปาก", "ขมับ", "หน้าผาก"],
        ["Under-eye", "Nasolabial folds", "Chin", "Lips", "Temples", "Forehead"],
      ),
      faqs: [
        {
          q: t("ฉีดฟิลเลอร์เจ็บไหม?", "Does it hurt?"),
          a: t(
            "มีการทายาชาก่อนทำประมาณ 20–30 นาที ส่วนใหญ่รู้สึกเพียงตึง ๆ ระหว่างฉีด และสามารถใช้ชีวิตได้ตามปกติทันทีหลังทำ",
            "Numbing cream is applied 20–30 minutes before. Most feel only slight pressure and resume normal life immediately.",
          ),
        },
        {
          q: t("ฟิลเลอร์อยู่ได้นานแค่ไหน?", "How long do results last?"),
          a: t(
            "โดยทั่วไป 12–18 เดือน ขึ้นอยู่กับรุ่นฟิลเลอร์ ตำแหน่งที่ฉีด และการดูแลตัวเอง แพทย์จะแนะนำรุ่นที่เหมาะกับคุณในวันปรึกษา",
            "Typically 12–18 months depending on the product, area and lifestyle — your doctor will recommend the right product at consultation.",
          ),
        },
        {
          q: t("ถ้าไม่ชอบผลลัพธ์ แก้ไขได้ไหม?", "Can it be reversed?"),
          a: t(
            "ได้ ฟิลเลอร์ HA แท้สามารถสลายได้ด้วยเอนไซม์ไฮยาลูโรนิเดส โดยแพทย์เป็นผู้ประเมินและดำเนินการอย่างปลอดภัย",
            "Yes — authentic HA fillers can be dissolved with hyaluronidase, assessed and performed safely by our doctors.",
          ),
        },
      ],
      keywords: [
        "ฉีดฟิลเลอร์",
        "ฟิลเลอร์ใต้ตา",
        "ฟิลเลอร์คาง",
        "ฟิลเลอร์ปาก",
        "ฟิลเลอร์ร่องแก้ม",
        "ฟิลเลอร์แท้ อย.",
        "ฉีดฟิลเลอร์ที่ไหนดี",
        "คลินิกฉีดฟิลเลอร์ กรุงเทพ",
        "ฉีดฟิลเลอร์ พัทยา — The Art Aesthetic",
      ],
    },
    lipfiller: {
      key: "lipfiller",
      name: t("ฟิลเลอร์ปาก", "Lip Filler"),
      en: "Lip Filler",
      tag: "INJECTABLE · LIPS",
      h1: t("ฟิลเลอร์ปาก ทรงสวยได้รูป ฉ่ำ ดูเป็นธรรมชาติ", "Lip filler — soft, defined, natural-looking lips"),
      lead: t(
        "ออกแบบทรงปากให้เข้ากับใบหน้า เติมความฉ่ำ แก้ปากบาง ปากไม่เท่ากัน ขอบปากไม่ชัด ด้วยฟิลเลอร์แท้ผ่าน อย. ฉีดโดยแพทย์ทุกเคส",
        "Shape and hydrate thin or uneven lips with FDA-approved fillers — every case injected by a doctor.",
      ),
      time: t("20–30 นาที", "20–30 min"),
      numb: t("ครีมยาชา + ยาชาเฉพาะจุด", "Cream + local"),
      down: t("บวมเล็กน้อย 1–3 วัน", "Mild swelling 1–3 days"),
      last: t("12–18 เดือน", "12–18 months"),
      img: "/assets/tx-lip-filler.jpg",
      hasBa: true,
      about1: t(
        "ฟิลเลอร์ปากใช้ไฮยาลูรอนิก แอซิด (HA) เนื้อเจลนุ่มสำหรับริมฝีปากโดยเฉพาะ เพื่อปรับทรง เติมความฉ่ำ และเก็บรายละเอียดขอบปากและคิวปิดโบว์ ให้ปากดูสุขภาพดี ไม่เป็นก้อน ไม่ดูทำ",
        "Lip fillers use soft HA gels designed for lips — shaping, hydrating and defining the border and Cupid's bow for a healthy, never-overdone look.",
      ),
      about2: t(
        "แพทย์ของเราวิเคราะห์สัดส่วนปากบน–ล่างและโครงหน้าก่อนออกแบบทรงร่วมกับคุณ เช่น ทรงฉ่ำธรรมชาติ ทรงเกาหลี หรือเน้นขอบชัด ใช้เฉพาะฟิลเลอร์แท้ เปิดกล่องใหม่ต่อหน้า สแกนตรวจสอบได้ทุกเคส",
        "Your doctor analyses lip proportions and face shape, then designs the style with you — natural glossy, Korean-style or defined — using authentic, scannable products opened in front of you.",
      ),
      spots: t(
        ["ปากบน", "ปากล่าง", "ขอบปาก", "คิวปิดโบว์", "มุมปาก"],
        ["Upper lip", "Lower lip", "Lip border", "Cupid's bow", "Mouth corners"],
      ),
      faqs: [
        {
          q: t("ฉีดฟิลเลอร์ปากเจ็บไหม บวมกี่วัน?", "Does it hurt? How long is swelling?"),
          a: t(
            "มีการทายาชาก่อนทำ ส่วนใหญ่รู้สึกตึง ๆ เท่านั้น อาการบวมมักยุบภายใน 1–3 วัน และทรงเข้าที่สวยสุดประมาณ 2 สัปดาห์",
            "Numbing cream is applied first — most feel only pressure. Swelling settles in 1–3 days, final shape at ~2 weeks.",
          ),
        },
        {
          q: t("เลือกทรงปากได้ไหม?", "Can I choose the shape?"),
          a: t(
            "ได้ แพทย์จะออกแบบร่วมกับคุณก่อนฉีดทุกครั้ง ทั้งทรงฉ่ำธรรมชาติ ทรงเกาหลี หรือเน้นขอบชัด ให้เข้ากับสัดส่วนใบหน้า",
            "Yes — designed with you before injecting: natural glossy, Korean-style or defined edges, to suit your face.",
          ),
        },
        {
          q: t("ฟิลเลอร์ปากอยู่ได้นานแค่ไหน?", "How long does it last?"),
          a: t(
            "โดยทั่วไป 12–18 เดือน ขึ้นอยู่กับรุ่นฟิลเลอร์และพฤติกรรมส่วนตัว แพทย์จะแนะนำรุ่นที่เหมาะกับคุณในวันปรึกษา",
            "Typically 12–18 months depending on the product and habits — your doctor will recommend the right one.",
          ),
        },
      ],
      keywords: [
        "ฟิลเลอร์ปาก",
        "ฉีดปาก",
        "ปากกระจับ",
        "ทรงปากเกาหลี",
        "แก้ปากบาง",
        "ฟิลเลอร์แท้ อย.",
        "ฟิลเลอร์ปากที่ไหนดี",
        "ฟิลเลอร์ปาก กรุงเทพ",
        "ฟิลเลอร์ปาก พัทยา — The Art Aesthetic",
      ],
    },
    dollyeye: {
      key: "dollyeye",
      name: t("ฟิลเลอร์ดอลลี่อาย", "Dolly Eye Filler"),
      en: "Dolly Eye Filler",
      tag: "INJECTABLE · UNDER-EYE",
      h1: t("ฟิลเลอร์ดอลลี่อาย ตากลมสดใส ไม่โทรมเหมือนอดนอน", "Dolly Eye filler — bright, refreshed, doll-like eyes"),
      lead: t(
        "เติมใต้ตาและร่องน้ำตา แก้ใต้ตาคล้ำ ตาลึกโบ๋ ดูเหนื่อยตลอดเวลา พร้อมเก็บรายละเอียดรอบดวงตาให้กลมสวยแบบดอลลี่ ด้วยฟิลเลอร์แท้ ฉีดโดยแพทย์ทุกเคส",
        "Fill under-eye hollows and tear troughs to erase tired, dark circles and create bright doll-like eyes — injected by doctors.",
      ),
      time: t("20–30 นาที", "20–30 min"),
      numb: t("ครีมยาชา", "Numbing cream"),
      down: t("น้อยมาก 1–2 วัน", "Minimal, 1–2 days"),
      last: t("12–18 เดือน", "12–18 months"),
      img: "/assets/tx-face-inject.jpg",
      hasBa: true,
      about1: t(
        "ดอลลี่อาย (Dolly Eye) คือเทคนิคการเติมฟิลเลอร์รอบดวงตา ทั้งใต้ตา ร่องน้ำตา และหน้าแก้มส่วนบน เพื่อลดเงาคล้ำจากร่องลึก ให้ดวงตาดูกลม สดใส และอ่อนเยาว์ขึ้นทันทีหลังทำ",
        "Dolly Eye is a filler technique for the eye area — under-eyes, tear troughs and upper cheeks — reducing hollow shadows for instantly rounder, brighter, younger-looking eyes.",
      ),
      about2: t(
        "ใต้ตาเป็นตำแหน่งที่ละเอียดอ่อนที่สุดจุดหนึ่ง แพทย์ของเราใช้เทคนิคแคนนูล่าเพื่อลดการช้ำ เลือกเนื้อฟิลเลอร์เฉพาะสำหรับใต้ตา และประเมินสาเหตุของความคล้ำก่อนทุกเคส",
        "The under-eye is one of the most delicate areas — our doctors use cannula techniques to minimise bruising, select under-eye-specific gels, and assess the cause of darkness first.",
      ),
      spots: t(
        ["ใต้ตา", "ร่องน้ำตา", "หน้าแก้มส่วนบน", "หางตา"],
        ["Under-eye", "Tear trough", "Upper cheek", "Outer eye"],
      ),
      faqs: [
        {
          q: t("ฉีดใต้ตาช้ำไหม อันตรายหรือเปล่า?", "Is it safe? Will I bruise?"),
          a: t(
            "แพทย์ใช้เทคนิคแคนนูล่าปลายทู่ซึ่งลดโอกาสช้ำและปลอดภัยกว่าการใช้เข็มแหลมในบริเวณนี้ ทำโดยแพทย์ที่ชำนาญรอบดวงตาทุกเคส",
            "We use blunt cannula techniques, which are safer and bruise less around the eyes — always performed by experienced doctors.",
          ),
        },
        {
          q: t("ดอลลี่อายเหมาะกับใคร?", "Who is it for?"),
          a: t(
            "ผู้ที่ใต้ตาคล้ำจากร่องลึก ตาลึกโบ๋ ดูโทรม หรืออยากให้ดวงตากลมสดใสขึ้น หากคล้ำจากเม็ดสี แพทย์จะแนะนำโปรแกรมที่เหมาะกว่าในวันปรึกษา",
            "Anyone with hollow-related dark circles or tired-looking eyes. If darkness is pigment-related, the doctor will suggest a better-suited program.",
          ),
        },
        {
          q: t("เห็นผลเลยไหม อยู่ได้นานแค่ไหน?", "When will I see results?"),
          a: t(
            "เห็นผลทันทีหลังทำ และเข้าที่สมบูรณ์ใน 1–2 สัปดาห์ ผลลัพธ์อยู่ได้ประมาณ 12–18 เดือน",
            "Results are visible immediately, settling fully in 1–2 weeks, and last around 12–18 months.",
          ),
        },
      ],
      keywords: [
        "ฟิลเลอร์ใต้ตา",
        "ดอลลี่อาย",
        "Dolly Eye",
        "แก้ใต้ตาคล้ำ",
        "ตาลึกโบ๋",
        "ฟิลเลอร์ร่องน้ำตา",
        "ฟิลเลอร์ใต้ตาที่ไหนดี",
        "ฟิลเลอร์ใต้ตา กรุงเทพ",
        "พัทยา — The Art Aesthetic",
      ],
    },
    ultraformer: {
      key: "ultraformer",
      name: "Ultraformer III",
      en: "Ultraformer III",
      tag: "LIFTING · MPT ULTRASOUND",
      h1: t(
        "Ultraformer III ยกกระชับหน้า ลดเหนียง เรียวชัดไม่ต้องผ่าตัด",
        "Ultraformer III — lift, tighten and contour without surgery",
      ),
      lead: t(
        "คลื่นอัลตราซาวด์โฟกัสลึกถึงชั้น SMAS ยกกระชับกรอบหน้า ลดเหนียง แก้มห้อย และกระชับสัดส่วนร่างกาย ไม่ต้องพักฟื้น ทำโดยแพทย์ทุกเคส",
        "Focused ultrasound reaching the SMAS layer — lifting jawlines, reducing double chins and tightening body areas with zero downtime.",
      ),
      time: t("30–60 นาที", "30–60 min"),
      numb: t("ครีมยาชา", "Numbing cream"),
      down: t("ไม่ต้องพักฟื้น", "None"),
      last: t("8–12 เดือน", "8–12 months"),
      img: "/assets/method-machine.png",
      hasBa: false,
      about1: t(
        "Ultraformer III ส่งพลังงานคลื่นเสียงความเข้มข้นสูงเป็นจุดเล็ก ๆ ที่ความลึก 1.5 / 3.0 / 4.5 มม. ถึงชั้น SMAS ซึ่งเป็นชั้นเดียวกับที่ศัลยแพทย์ดึงหน้า กระตุ้นการสร้างคอลลาเจนใหม่ ผิวจึงค่อย ๆ กระชับและยกขึ้นอย่างเป็นธรรมชาติ",
        "Ultraformer III delivers focused ultrasound at 1.5 / 3.0 / 4.5 mm — down to the SMAS layer targeted in surgical facelifts — stimulating new collagen for a gradual, natural lift.",
      ),
      about2: t(
        "แพทย์จะออกแบบจำนวนช็อตและความลึกให้เหมาะกับโครงหน้าและปัญหาของคุณ ทำได้ทั้งใบหน้า เหนียง ลำคอ และกระชับสัดส่วนร่างกาย เห็นผลบางส่วนทันที และชัดที่สุดช่วง 2–3 เดือนหลังทำ",
        "Your doctor plans shot counts and depths for your face or body area — jawline, double chin, neck and body tightening — with some lift visible immediately and peak results at 2–3 months.",
      ),
      spots: t(
        ["กรอบหน้า", "เหนียง", "แก้ม", "หน้าผาก–คิ้ว", "ลำคอ", "สัดส่วนร่างกาย"],
        ["Jawline", "Double chin", "Cheeks", "Brow", "Neck", "Body"],
      ),
      faqs: [
        {
          q: t("Ultraformer เจ็บไหม?", "Does it hurt?"),
          a: t(
            "รู้สึกอุ่น ๆ และตึงลึก ๆ ขณะยิงพลังงาน มีการทาครีมยาชาก่อนทำ ส่วนใหญ่ทำได้สบายและกลับไปใช้ชีวิตปกติได้ทันที",
            "You feel warmth and deep tightening during shots. Numbing cream is applied — most find it comfortable with zero downtime.",
          ),
        },
        {
          q: t("ต้องใช้กี่ช็อต ทำบ่อยแค่ไหน?", "How many shots? How often?"),
          a: t(
            "ขึ้นอยู่กับพื้นที่และความหย่อนคล้อย แพทย์จะประเมินและแจ้งจำนวนช็อตชัดเจนก่อนทำ โดยทั่วไปแนะนำปีละ 1–2 ครั้ง",
            "Depends on the area and laxity — your doctor quotes an exact shot count first. Typically 1–2 sessions per year.",
          ),
        },
        {
          q: t("ต่างจาก HIFU ทั่วไปอย่างไร?", "How is it different from generic HIFU?"),
          a: t(
            "Ultraformer III เป็นเครื่องมาตรฐานเกาหลีที่พลังงานสม่ำเสมอและหัวยิงหลายระดับความลึก ทำให้เก็บงานได้ละเอียดทั้งใบหน้าและร่างกาย โดยแพทย์เป็นผู้ทำทุกเคส",
            "Ultraformer III is a Korean-standard device with consistent energy and multi-depth cartridges for precise face and body work — always doctor-performed here.",
          ),
        },
      ],
      keywords: [
        "Ultraformer",
        "Ultraformer III",
        "ยกกระชับหน้า",
        "ลดเหนียง",
        "HIFU",
        "อัลตร้าฟอร์เมอร์ ที่ไหนดี",
        "ยกกระชับ ไม่ผ่าตัด",
        "Ultraformer กรุงเทพ",
        "พัทยา — The Art Aesthetic",
      ],
    },
    botox: {
      key: "botox",
      name: t("โบท็อกซ์", "Botulinum Toxin"),
      en: "Botulinum Toxin",
      tag: "INJECTABLE · ANTI-WRINKLE",
      h1: t("โบท็อกซ์ ลดริ้วรอย ปรับหน้าเรียว อย่างเป็นธรรมชาติ", "Botulinum toxin — soften lines, slim the jaw, naturally"),
      lead: t(
        "ลดริ้วรอยหน้าผาก ระหว่างคิ้ว หางตา ลดกรามหน้าเรียว ลดเหงื่อ ด้วยผลิตภัณฑ์ของแท้ผ่าน อย. ฉีดโดยแพทย์ที่เข้าใจกล้ามเนื้อใบหน้า",
        "Treat forehead, frown and crow's-feet lines, slim the jaw and reduce sweating — authentic products, injected by doctors.",
      ),
      time: t("15–30 นาที", "15–30 min"),
      numb: t("ครีมยาชา", "Numbing cream"),
      down: t("ไม่ต้องพักฟื้น", "None"),
      last: t("4–6 เดือน", "4–6 months"),
      img: "/assets/tx-injection.jpg",
      hasBa: false,
      about1: t(
        "โบทูลินัม ท็อกซิน (Botulinum Toxin) ช่วยให้กล้ามเนื้อบริเวณที่ฉีดคลายตัว ริ้วรอยจากการแสดงสีหน้าจึงดูจางลง และเมื่อฉีดที่กล้ามเนื้อกรามที่ใหญ่จากการบดเคี้ยว จะช่วยให้รูปหน้าดูเรียวขึ้น",
        "Botulinum toxin relaxes targeted muscles, softening expression lines. Injected into an enlarged jaw muscle, it slims the lower face.",
      ),
      about2: t(
        "แพทย์ของเราคำนวณจุดฉีดและปริมาณให้เหมาะกับกล้ามเนื้อของแต่ละคน เพื่อผลลัพธ์ที่ยังขยับหน้าได้เป็นธรรมชาติ ไม่แข็งทื่อ",
        "We map injection points and dosage to your muscles, so your face still moves naturally.",
      ),
      spots: t(
        ["หน้าผาก", "ระหว่างคิ้ว", "หางตา", "กราม", "ลดเหงื่อ", "น่อง"],
        ["Forehead", "Frown lines", "Crow's feet", "Jaw", "Sweat reduction", "Calves"],
      ),
      faqs: [
        {
          q: t("โบท็อกซ์เห็นผลเมื่อไหร่?", "When will I see results?"),
          a: t(
            "ริ้วรอยเริ่มดูจางลงใน 3–7 วัน และเห็นผลเต็มที่ประมาณ 2 สัปดาห์ ส่วนลดกรามจะเห็นชัดใน 4–6 สัปดาห์",
            "Lines soften within 3–7 days, full effect at ~2 weeks; jaw slimming shows at 4–6 weeks.",
          ),
        },
        {
          q: t("ฉีดแล้วหน้าแข็งไหม?", "Will my face look frozen?"),
          a: t(
            "หากฉีดในปริมาณและตำแหน่งที่ถูกต้องโดยแพทย์ ใบหน้าจะยังแสดงอารมณ์ได้เป็นธรรมชาติ",
            "With correct dosing and placement by a doctor, your expressions stay natural.",
          ),
        },
        {
          q: t("ต้องฉีดซ้ำบ่อยแค่ไหน?", "How often should I repeat?"),
          a: t(
            "โดยเฉลี่ยทุก 4–6 เดือน ขึ้นอยู่กับกล้ามเนื้อและไลฟ์สไตล์ของแต่ละคน",
            "On average every 4–6 months, depending on your muscles and lifestyle.",
          ),
        },
      ],
      keywords: [
        "โบท็อกซ์",
        "โบท็อกลดกราม",
        "โบท็อกหน้าเรียว",
        "โบท็อกซ์ริ้วรอย",
        "โบลดริ้วรอยหน้าผาก",
        "ฉีดโบท็อกซ์ที่ไหนดี",
        "โบท็อกซ์แท้ — The Art Aesthetic",
      ],
    },
    thread: {
      key: "thread",
      name: t("ร้อยไหม", "Thread Lift"),
      en: "Thread Lift",
      tag: "LIFTING · NON-SURGICAL",
      h1: t("ร้อยไหมยกกระชับ หน้า V-Shape โดยไม่ต้องผ่าตัด", "Thread lift — a non-surgical V-shape"),
      lead: t(
        "ยกกระชับแก้ม กรอบหน้า หางตา และเหนียง ด้วยไหมละลายมาตรฐาน อย. พร้อมกระตุ้นคอลลาเจนใต้ผิว โดยแพทย์ที่ชำนาญเทคนิคการวางไหม",
        "Lift cheeks, jawline, brow tails and double chin with absorbable threads that also stimulate collagen — placed by experienced doctors.",
      ),
      time: t("30–60 นาที", "30–60 min"),
      numb: t("ยาชาเฉพาะที่", "Local anaesthesia"),
      down: t("บวมเล็กน้อย 2–3 วัน", "Mild swelling 2–3 days"),
      last: t("12–18 เดือน", "12–18 months"),
      hasBa: false,
      about1: t(
        "การร้อยไหมใช้ไหมละลายชนิดพิเศษที่มีเงี่ยงเล็ก ๆ ยึดชั้นผิว เพื่อยกกระชับส่วนที่หย่อนคล้อยขึ้นทันทีหลังทำ และเมื่อไหมค่อย ๆ ละลาย จะกระตุ้นการสร้างคอลลาเจนใหม่ ผิวจึงแน่นขึ้นต่อเนื่อง",
        "Barbed absorbable threads anchor and lift sagging tissue immediately; as they dissolve they stimulate new collagen for lasting firmness.",
      ),
      about2: t(
        "แพทย์จะออกแบบแนวการวางไหมตามแรงโน้มถ่วงและโครงหน้าของคุณ เลือกจำนวนเส้นที่พอดี ไม่มากเกินจำเป็น",
        "Thread paths are mapped to your facial structure and gravity lines — using only as many threads as needed.",
      ),
      spots: t(
        ["แก้ม–กรอบหน้า", "หางตา–คิ้ว", "เหนียง", "ลำคอ", "ร่องแก้ม"],
        ["Cheeks & jawline", "Brow tail", "Double chin", "Neck", "Nasolabial area"],
      ),
      faqs: [
        {
          q: t("ร้อยไหมอยู่ได้นานแค่ไหน?", "How long does it last?"),
          a: t(
            "ตัวไหมละลายใน 6–8 เดือน แต่คอลลาเจนที่ถูกกระตุ้นทำให้ผลยกกระชับอยู่ต่อเนื่อง 12–18 เดือน",
            "Threads absorb in 6–8 months, but stimulated collagen keeps the lift for 12–18 months.",
          ),
        },
        {
          q: t("พักฟื้นนานไหม?", "What is the downtime?"),
          a: t(
            "ส่วนใหญ่บวมตึงเล็กน้อย 2–3 วัน แนะนำงดเคี้ยวอาหารแข็งและนอนหงายช่วงสัปดาห์แรก",
            "Mild swelling for 2–3 days; avoid hard chewing and sleep on your back for the first week.",
          ),
        },
        {
          q: t("เหมาะกับใคร?", "Who is it for?"),
          a: t(
            "ผู้ที่เริ่มมีแก้มหย่อน กรอบหน้าไม่ชัด หรือต้องการหน้าเรียวแบบไม่ผ่าตัด แพทย์จะประเมินความเหมาะสมก่อนทุกเคส",
            "Anyone with early sagging or an undefined jawline who wants a lift without surgery — assessed by a doctor first.",
          ),
        },
      ],
      keywords: [
        "ร้อยไหม",
        "ร้อยไหมหน้าเรียว",
        "ร้อยไหมยกกระชับ",
        "ร้อยไหม V-Shape",
        "ร้อยไหมก้างปลา",
        "ร้อยไหมที่ไหนดี — The Art Aesthetic",
      ],
    },
    thermage: {
      key: "thermage",
      name: "Thermage · Thermatite",
      en: "Thermage",
      tag: "TIGHTENING · RF",
      h1: t("Thermage ยกกระชับผิวด้วยคลื่น RF ไม่ต้องพักฟื้น", "Thermage — RF tightening with zero downtime"),
      lead: t(
        "คืนความกระชับให้ผิวหย่อนคล้อยทั้งใบหน้าและร่างกาย ด้วยคลื่นวิทยุความถี่สูงที่ส่งพลังงานลึกถึงชั้นผิวที่เสื่อมสภาพ กระตุ้นคอลลาเจนใหม่",
        "Firm sagging skin on face and body with monopolar radio-frequency energy that remodels collagen deep in the skin.",
      ),
      time: t("45–90 นาที", "45–90 min"),
      numb: t("ไม่ต้องใช้ยาชา", "None needed"),
      down: t("ไม่ต้องพักฟื้น", "None"),
      last: t("1–2 ปี", "1–2 years"),
      hasBa: false,
      about1: t(
        "Thermage ใช้พลังงานคลื่นวิทยุ (Radiofrequency) ให้ความร้อนลึกถึงชั้นผิวหนังแท้ ทำให้เส้นใยคอลลาเจนเดิมหดกระชับทันที และกระตุ้นการสร้างคอลลาเจนใหม่ต่อเนื่อง 3–6 เดือนหลังทำ",
        "Thermage delivers radio-frequency heat deep into the dermis, tightening existing collagen instantly and stimulating new collagen for 3–6 months after.",
      ),
      about2: t(
        "เหมาะสำหรับผิวหย่อนคล้อย ร่องแก้ม เหนียง หนังตาตก รวมถึงผิวเปลือกส้มตามร่างกาย ทำครั้งเดียว อยู่ได้ 1–2 ปี",
        "Ideal for facial laxity, jowls, hooded lids and body skin — a single session lasts 1–2 years.",
      ),
      spots: t(
        ["กรอบหน้า", "ร่องแก้ม", "เหนียง", "หนังตา", "หน้าท้อง", "ต้นแขน"],
        ["Jawline", "Nasolabial", "Double chin", "Eyelids", "Abdomen", "Arms"],
      ),
      faqs: [
        {
          q: t("Thermage ต่างจาก HIFU อย่างไร?", "Thermage vs HIFU?"),
          a: t(
            "Thermage ใช้คลื่น RF เน้นผิวชั้นหนังแท้ เหมาะกับความกระชับของผิว ส่วน HIFU ใช้คลื่นเสียงลึกถึงชั้น SMAS เน้นยกโครงหน้า แพทย์มักแนะนำตามปัญหาหลักของคุณ",
            "Thermage (RF) targets the dermis for skin tightness; HIFU reaches the SMAS layer to lift structure. Your doctor recommends by your main concern.",
          ),
        },
        {
          q: t("เจ็บไหม?", "Does it hurt?"),
          a: t(
            "รู้สึกอุ่นลึก ๆ เป็นจังหวะ เครื่องรุ่นใหม่มีระบบสั่นและความเย็นช่วยให้สบายขึ้นมาก",
            "A deep pulsing warmth — new-generation vibration and cooling make it very tolerable.",
          ),
        },
        {
          q: t("เห็นผลเมื่อไหร่?", "When do results show?"),
          a: t(
            "กระชับขึ้นทันทีหลังทำ และผลชัดที่สุดช่วง 2–6 เดือนเมื่อคอลลาเจนใหม่สร้างเต็มที่",
            "Immediate tightening, with peak results at 2–6 months as new collagen forms.",
          ),
        },
      ],
      keywords: [
        "Thermage",
        "เทอร์มาจ",
        "Thermatite",
        "ยกกระชับผิว",
        "ลดเหนียง",
        "กระชับกรอบหน้า",
        "Thermage ที่ไหนดี — The Art Aesthetic",
      ],
    },
    hifu: {
      key: "hifu",
      name: "Matrix HIFU",
      en: "Matrix HIFU",
      tag: "LIFTING · ULTRASOUND",
      h1: t("Matrix HIFU ยกกระชับโครงหน้า ลดเหนียง ไม่ผ่าตัด", "Matrix HIFU — lift and contour without surgery"),
      lead: t(
        "คลื่นเสียงความเข้มข้นสูงโฟกัสลึกถึงชั้น SMAS ชั้นเดียวกับที่ศัลยแพทย์ดึงหน้า ยกกระชับโครงหน้า หน้าเรียว ลดเหนียง โดยไม่ต้องพักฟื้น",
        "Focused ultrasound reaches the SMAS — the layer surgeons lift — to firm and contour the face with no downtime.",
      ),
      time: t("30–60 นาที", "30–60 min"),
      numb: t("ครีมยาชา", "Numbing cream"),
      down: t("ไม่ต้องพักฟื้น", "None"),
      last: t("8–12 เดือน", "8–12 months"),
      hasBa: false,
      about1: t(
        "HIFU (High-Intensity Focused Ultrasound) ส่งพลังงานคลื่นเสียงเป็นจุดเล็ก ๆ ลึกใต้ผิวถึง 4.5 มม. ทำให้เนื้อเยื่อชั้นพยุงใบหน้าหดกระชับ และกระตุ้นคอลลาเจนต่อเนื่องหลายเดือน",
        "HIFU focuses ultrasound energy at points up to 4.5 mm deep, contracting the support layer and stimulating collagen for months.",
      ),
      about2: t(
        "รุ่น Matrix ช่วยให้ยิงพลังงานสม่ำเสมอทั่วใบหน้า เก็บรายละเอียดได้ทั้งกรอบหน้า แก้ม และใต้คาง ในครั้งเดียว",
        "The Matrix system delivers even coverage — jawline, cheeks and under-chin in one session.",
      ),
      spots: t(
        ["กรอบหน้า", "แก้ม", "เหนียง", "หน้าผาก–คิ้ว", "ลำคอ"],
        ["Jawline", "Cheeks", "Double chin", "Brow", "Neck"],
      ),
      faqs: [
        {
          q: t("HIFU เจ็บไหม?", "Does HIFU hurt?"),
          a: t(
            "รู้สึกร้อนหนึบเป็นจุด ๆ ใต้ผิวขณะยิง ส่วนใหญ่ทนได้สบายหลังทาครีมชา",
            "Brief warm prickles under the skin — comfortable after numbing cream for most.",
          ),
        },
        {
          q: t("เห็นผลกี่วัน?", "When will I see lifting?"),
          a: t(
            "กระชับขึ้นบางส่วนทันที และชัดเจนสุดช่วง 1–3 เดือนหลังทำ",
            "Some immediate firmness; the clearest lift appears 1–3 months after.",
          ),
        },
        {
          q: t("ควรทำบ่อยแค่ไหน?", "How often?"),
          a: t(
            "โดยทั่วไปปีละ 1–2 ครั้ง ตามสภาพผิวและคำแนะนำของแพทย์",
            "Generally 1–2 times a year, per your doctor's advice.",
          ),
        },
      ],
      keywords: [
        "HIFU",
        "ไฮฟู",
        "Matrix HIFU",
        "ยกกระชับหน้า",
        "หน้าเรียว",
        "ลดเหนียง",
        "HIFU ที่ไหนดี — The Art Aesthetic",
      ],
    },
    pico: {
      key: "pico",
      name: "Pico Laser · Q-Switch",
      en: "Pico Laser",
      tag: "LASER · PIGMENT",
      h1: t("Pico Laser รักษาฝ้า กระ จุดด่างดำ ผิวกระจ่างใส", "Pico Laser — melasma, freckles and clarity"),
      lead: t(
        "เลเซอร์พลังงานสั้นระดับพิโควินาที เจาะจงทำลายเม็ดสีโดยไม่ทำร้ายผิวรอบข้าง รักษาฝ้า กระ รอยสิว รอยสัก และปรับผิวกระจ่างใส",
        "Picosecond pulses shatter pigment precisely without harming surrounding skin — for melasma, freckles, acne marks, tattoos and glow.",
      ),
      time: t("15–30 นาที", "15–30 min"),
      numb: t("ครีมยาชา (บางเคส)", "Cream (some cases)"),
      down: t("แดงเล็กน้อย 1 วัน", "Mild redness 1 day"),
      last: t("ทำต่อเนื่องเป็นคอร์ส", "Course-based"),
      hasBa: false,
      about1: t(
        "Pico Laser ปล่อยพลังงานในช่วงเวลาสั้นระดับ 1 ในล้านล้านวินาที แรงสั่นสะเทือนจะสลายเม็ดสีเป็นอนุภาคเล็กมากให้ร่างกายกำจัดออกเอง จึงใช้ความร้อนน้อย ผิวฟื้นตัวเร็ว",
        "Picosecond pulses shatter pigment into micro-particles the body clears naturally — minimal heat, fast recovery.",
      ),
      about2: t(
        "แพทย์จะเลือกหัวเลเซอร์และพลังงานตามปัญหาผิว ทั้งฝ้าลึก กระตื้น รอยดำจากสิว หรือปรับสีผิวโดยรวมให้สม่ำเสมอ",
        "Handpieces and energy are selected per concern — deep melasma, surface freckles, post-acne marks or overall tone.",
      ),
      spots: t(
        ["ฝ้า", "กระ", "รอยดำจากสิว", "ผิวหมองคล้ำ", "ลบรอยสัก"],
        ["Melasma", "Freckles", "Acne marks", "Dullness", "Tattoo removal"],
      ),
      faqs: [
        {
          q: t("ต้องทำกี่ครั้งถึงเห็นผล?", "How many sessions?"),
          a: t(
            "ส่วนใหญ่เริ่มเห็นผิวใสขึ้นตั้งแต่ครั้งแรก ฝ้ากระชัดเจนมักแนะนำเป็นคอร์ส 5–10 ครั้ง ห่างกัน 2–4 สัปดาห์",
            "Many see brighter skin from the first session; stubborn pigment usually needs 5–10 sessions, 2–4 weeks apart.",
          ),
        },
        {
          q: t("ทำแล้วผิวบางลงไหม?", "Does laser thin the skin?"),
          a: t(
            "ไม่ Pico ใช้แรงกลมากกว่าความร้อน จึงไม่ทำให้ผิวบางเมื่อทำโดยแพทย์ตามมาตรฐาน",
            "No — Pico works photo-mechanically, not thermally, and is safe when performed to standard by doctors.",
          ),
        },
        {
          q: t("หลังทำดูแลอย่างไร?", "Aftercare?"),
          a: t(
            "งดแดดจัด ทากันแดดสม่ำเสมอ และงดสครับผิว 3–5 วันแรก",
            "Avoid strong sun, wear sunscreen daily, skip scrubs for 3–5 days.",
          ),
        },
      ],
      keywords: [
        "Pico Laser",
        "พิโคเลเซอร์",
        "เลเซอร์ฝ้า กระ",
        "เลเซอร์รอยสิว",
        "เลเซอร์หน้าใส",
        "Q-Switch",
        "เลเซอร์ที่ไหนดี — The Art Aesthetic",
      ],
    },
    ivdrip: {
      key: "ivdrip",
      name: "IV Drip",
      en: "IV Drip",
      tag: "WELLNESS · SKIN",
      h1: t("IV Drip ผิวกระจ่างใส สุขภาพดีจากภายใน", "IV Drip — radiance from within"),
      lead: t(
        "ดริปวิตามินและสารต้านอนุมูลอิสระเข้าสู่ร่างกายโดยตรง สูตรออกแบบโดยแพทย์ตามเป้าหมายของคุณ ทั้งผิวใส ฟื้นฟูร่างกาย และภูมิคุ้มกัน",
        "Vitamin and antioxidant infusions formulated by doctors — for glow, recovery and immunity.",
      ),
      time: t("45–60 นาที", "45–60 min"),
      numb: t("ไม่จำเป็น", "None"),
      down: t("ไม่ต้องพักฟื้น", "None"),
      last: t("แนะนำเป็นคอร์สต่อเนื่อง", "Course-based"),
      hasBa: false,
      about1: t(
        "การดริปวิตามินทางหลอดเลือดช่วยให้ร่างกายได้รับสารอาหารเต็มปริมาณโดยไม่ผ่านระบบย่อย เหมาะกับผู้ที่ต้องการฟื้นฟูผิว ลดความอ่อนล้า หรือเตรียมผิวก่อนงานสำคัญ",
        "IV infusion delivers nutrients at full absorption, bypassing digestion — ideal for skin recovery, fatigue and pre-event prep.",
      ),
      about2: t(
        "ทุกสูตรผสมโดยเภสัชกรและให้ภายใต้การดูแลของแพทย์และพยาบาลวิชาชีพ ในสถานที่มาตรฐานโรงพยาบาล",
        "Every formula is compounded by pharmacists and administered under doctor and nurse supervision, in hospital-standard rooms.",
      ),
      spots: t(
        ["ผิวกระจ่างใส", "ฟื้นฟูร่างกาย", "ภูมิคุ้มกัน", "ล้างสารพิษ", "บำรุงผม"],
        ["Brightening", "Recovery", "Immunity", "Detox", "Hair support"],
      ),
      faqs: [
        {
          q: t("IV Drip ปลอดภัยไหม?", "Is IV Drip safe?"),
          a: t(
            "ปลอดภัยเมื่อทำภายใต้การดูแลของแพทย์ มีการซักประวัติและประเมินก่อนดริปทุกครั้ง",
            "Safe under medical supervision — history and assessment are taken before every drip.",
          ),
        },
        {
          q: t("เห็นผลเมื่อไหร่?", "When will I feel it?"),
          a: t(
            "หลายคนรู้สึกสดชื่นตั้งแต่ครั้งแรก ผิวใสชัดเจนมักเห็นเมื่อทำต่อเนื่อง 4–6 ครั้ง",
            "Many feel refreshed after one session; visible glow typically builds over 4–6 sessions.",
          ),
        },
        {
          q: t("ใช้เวลานานไหม?", "How long per session?"),
          a: t(
            "ประมาณ 45–60 นาที นั่งพักสบาย ๆ ในห้องส่วนตัว",
            "About 45–60 minutes, relaxing in a private room.",
          ),
        },
      ],
      keywords: [
        "IV Drip",
        "ดริปวิตามิน",
        "ดริปผิวใส",
        "วิตามินผิว",
        "ดริปวิตามินที่ไหนดี — The Art Aesthetic",
      ],
    },
    diamond: {
      key: "diamond",
      name: "Diamond Baby Face",
      en: "Diamond Baby Face",
      tag: "SIGNATURE · ACNE SCAR",
      h1: t("Diamond Baby Face จบปัญหาหลุมสิว คืนผิวเรียบเนียน", "Diamond Baby Face — resurface acne scars"),
      lead: t(
        "โปรแกรมเฉพาะของ The Art สำหรับหลุมสิวและผิวไม่เรียบ ผสานการผลัดเซลล์ผิวและกระตุ้นคอลลาเจน ให้ผิวเนียนใสเหมือนผิวเด็ก",
        "The Art's signature programme for acne scars — combining resurfacing and collagen stimulation for baby-smooth skin.",
      ),
      time: t("60–90 นาที", "60–90 min"),
      numb: t("ครีมยาชา + ยาชาเฉพาะจุด", "Cream + local"),
      down: t("สะเก็ดเล็ก 3–5 วัน", "Micro-scabs 3–5 days"),
      last: t("สะสมถาวรตามคอร์ส", "Cumulative"),
      img: "/assets/slide-diamond.png",
      hasBa: false,
      about1: t(
        "Diamond Baby Face เป็นโปรแกรม Signature ที่ออกแบบโดยทีมแพทย์ The Art สำหรับหลุมสิวโดยเฉพาะ ผสมผสานเทคนิคการเลาะพังผืดใต้หลุมสิว การผลัดผิว และการกระตุ้นคอลลาเจนในจุดที่ต้องการ",
        "A signature protocol designed by The Art's doctors specifically for acne scarring — combining subcision, resurfacing and targeted collagen induction.",
      ),
      about2: t(
        "แพทย์จะประเมินชนิดหลุมสิวของคุณ (Ice pick, Boxcar, Rolling) และเลือกเทคนิคผสมผสานที่เหมาะสมในแต่ละครั้ง เพื่อผลลัพธ์สะสมที่ดีที่สุด",
        "Your scar types (ice-pick, boxcar, rolling) are assessed and techniques combined per session for the best cumulative result.",
      ),
      spots: t(
        ["หลุมสิว", "รูขุมขนกว้าง", "ผิวไม่เรียบ", "รอยดำแดงจากสิว"],
        ["Acne scars", "Enlarged pores", "Uneven texture", "Post-acne marks"],
      ),
      faqs: [
        {
          q: t("กี่ครั้งเห็นผล?", "How many sessions?"),
          a: t(
            "หลุมสิวตื้นขึ้นตั้งแต่ครั้งแรก ๆ โดยทั่วไปแนะนำคอร์ส 3–6 ครั้ง ห่างกัน 4 สัปดาห์",
            "Scars soften from the first sessions; a 3–6 session course, 4 weeks apart, is typical.",
          ),
        },
        {
          q: t("พักฟื้นนานไหม?", "Downtime?"),
          a: t(
            "มีสะเก็ดเล็ก ๆ หรือรอยแดงประมาณ 3–5 วัน แต่งหน้าได้เมื่อสะเก็ดหลุด",
            "Micro-scabs or redness for 3–5 days; makeup once scabs fall off.",
          ),
        },
        {
          q: t("ผลอยู่ถาวรไหม?", "Are results permanent?"),
          a: t(
            "คอลลาเจนที่สร้างใหม่คงอยู่ระยะยาว ผิวที่เรียบขึ้นจึงเป็นผลสะสมถาวรเมื่อดูแลผิวสม่ำเสมอ",
            "New collagen persists long-term — smoother texture is a lasting, cumulative result with good skincare.",
          ),
        },
      ],
      keywords: [
        "รักษาหลุมสิว",
        "Diamond Baby Face",
        "หลุมสิวลึก",
        "เลาะพังผืดหลุมสิว",
        "รักษาหลุมสิวที่ไหนดี — The Art Aesthetic",
      ],
    },
    underarm: {
      key: "underarm",
      name: t("เลเซอร์รักแร้ขาว", "Bright Underarm"),
      en: "Bright Underarm",
      tag: "LASER · BODY",
      h1: t("เลเซอร์รักแร้ขาว เนียนใส มั่นใจทุกการเคลื่อนไหว", "Underarm laser — bright, smooth, confident"),
      lead: t(
        "ลดรอยคล้ำใต้วงแขนจากการถอน โกน หรือการเสียดสี ด้วยเลเซอร์ปรับสีผิวเฉพาะจุด ปลอดภัย ทำโดยแพทย์",
        "Fade underarm darkening from shaving, plucking and friction with targeted pigment laser — safe, doctor-performed.",
      ),
      time: t("15–20 นาที", "15–20 min"),
      numb: t("ครีมยาชา", "Numbing cream"),
      down: t("ไม่ต้องพักฟื้น", "None"),
      last: t("คอร์ส 5–10 ครั้ง", "5–10 session course"),
      hasBa: false,
      about1: t(
        "รอยคล้ำใต้วงแขนเกิดจากการเสียดสีและการอักเสบสะสมของรูขุมขน เลเซอร์จะสลายเม็ดสีส่วนเกินและกระตุ้นให้ผิวใหม่ที่สม่ำเสมอขึ้นมาแทนที่",
        "Underarm darkening comes from friction and follicle inflammation; laser breaks down excess pigment so even-toned skin replaces it.",
      ),
      about2: t(
        "ทำควบคู่กับคำแนะนำการดูแลผิวจากแพทย์ เพื่อป้องกันการกลับมาคล้ำซ้ำในระยะยาว",
        "Paired with doctor-guided aftercare to keep results long-term.",
      ),
      spots: t(
        ["รักแร้", "ข้อพับ", "ขาหนีบ", "หัวเข่า–ข้อศอก"],
        ["Underarms", "Inner folds", "Bikini line", "Knees & elbows"],
      ),
      faqs: [
        {
          q: t("กี่ครั้งเห็นผล?", "How many sessions?"),
          a: t(
            "เริ่มเห็นผิวใสขึ้นใน 2–3 ครั้งแรก แนะนำคอร์ส 5–10 ครั้งเพื่อผลสม่ำเสมอ",
            "Visible brightening in 2–3 sessions; a 5–10 session course gives even results.",
          ),
        },
        {
          q: t("เจ็บไหม?", "Does it hurt?"),
          a: t(
            "รู้สึกอุ่นเป็นจุด ๆ เท่านั้น มีการทาครีมชาก่อนทำ",
            "Just warm pinpricks — numbing cream is applied first.",
          ),
        },
        {
          q: t("หลังทำใช้โรลออนได้ไหม?", "Can I use deodorant after?"),
          a: t(
            "งดโรลออน 24 ชั่วโมงแรก แล้วใช้สูตรอ่อนโยนตามคำแนะนำแพทย์",
            "Skip deodorant for 24 hours, then use a gentle formula per your doctor.",
          ),
        },
      ],
      keywords: [
        "เลเซอร์รักแร้ขาว",
        "รักแร้คล้ำ",
        "เลเซอร์รักแร้ที่ไหนดี",
        "รักแร้ขาวใส — The Art Aesthetic",
      ],
    },
  };
}

/** Metadata ต่อ landing page — title = ย่อจาก h1 (layout เติม "| The Art Aesthetic" ให้เอง), description จาก lead */
export function txMetadata(lang: Lang, key: TxKey | undefined): Metadata {
  if (!key) return {};
  const t = tr(lang);
  const d = txData(lang)[key];
  const titles: Record<TxKey, string> = {
    filler: t("ฉีดฟิลเลอร์ เติมเต็มอย่างเป็นธรรมชาติ โดยแพทย์", "Dermal Filler — natural volume, by doctors"),
    lipfiller: t("ฟิลเลอร์ปาก ทรงสวยได้รูป ฉ่ำ ดูเป็นธรรมชาติ", "Lip Filler — soft, defined, natural lips"),
    dollyeye: t("ฟิลเลอร์ดอลลี่อาย ตากลมสดใส ไม่โทรม", "Dolly Eye Filler — bright, refreshed eyes"),
    ultraformer: t("Ultraformer III ยกกระชับหน้า ลดเหนียง ไม่ผ่าตัด", "Ultraformer III — lift and tighten, no surgery"),
    botox: t("โบท็อกซ์ ลดริ้วรอย ปรับหน้าเรียว", "Botulinum Toxin — soften lines, slim the jaw"),
    thread: t("ร้อยไหมยกกระชับ หน้า V-Shape ไม่ผ่าตัด", "Thread Lift — a non-surgical V-shape"),
    thermage: t("Thermage ยกกระชับผิวด้วยคลื่น RF ไม่พักฟื้น", "Thermage — RF tightening, zero downtime"),
    hifu: t("Matrix HIFU ยกกระชับโครงหน้า ลดเหนียง", "Matrix HIFU — lift and contour, no surgery"),
    pico: t("Pico Laser รักษาฝ้า กระ ผิวกระจ่างใส", "Pico Laser — melasma, freckles and clarity"),
    ivdrip: t("IV Drip ดริปวิตามิน ผิวกระจ่างใสจากภายใน", "IV Drip — radiance from within"),
    diamond: t("Diamond Baby Face รักษาหลุมสิว ผิวเรียบเนียน", "Diamond Baby Face — acne-scar renewal"),
    underarm: t("เลเซอร์รักแร้ขาว เนียนใส มั่นใจ", "Underarm Laser — bright and smooth"),
  };
  const meta: Metadata = {
    title: titles[key],
    description: d.lead,
    alternates: alternatesFor(lang, `/${TX_SLUGS[key]}/`),
  };
  if (d.img) meta.openGraph = { images: [d.img] };
  return meta;
}
