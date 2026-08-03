"use client";

import { useState } from "react";
import Link from "next/link";
import { Lang, tr } from "@/lib/i18n";
import { LINE_URL, TxKey, txHref } from "@/lib/site";

type ConTab = "face" | "body";

/**
 * "01 เลือกตามปัญหา" — สลับแท็บ ใบหน้า / ผิวกายและรูปร่าง
 * chip ปัญหาแต่ละอันลิงก์ไป landing page ของหัตถการที่ตรงกัน (txHref) — ห้ามลิงก์แคตตาล็อก
 * mapping ปัญหา→หัตถการ ตาม catalog() ในไฟล์ reference (รายการแรกที่มี concern นั้น)
 */
export default function ConcernTabs({ lang }: { lang: Lang }) {
  const t = tr(lang);
  const [tab, setTab] = useState<ConTab>("face");
  const [n, setN] = useState(0);

  const face: { label: string; tx: TxKey }[] = [
    { label: t("สิว", "Acne"), tx: "pico" },
    { label: t("ฝ้า กระ จุดด่างดำ", "Pigmentation"), tx: "pico" },
    { label: t("ริ้วรอย", "Wrinkles"), tx: "botox" },
    { label: t("หย่อนคล้อย ไม่กระชับ", "Sagging"), tx: "botox" },
    { label: t("ผิวหมองคล้ำ ไม่กระจ่างใส", "Dullness"), tx: "filler" },
    { label: t("รูขุมขนกว้าง หน้ามัน", "Pores & oil"), tx: "filler" },
    { label: t("ผิวแห้ง ขาดน้ำ", "Dry skin"), tx: "filler" },
    { label: t("ผิวแพ้ง่าย หน้าแดง", "Sensitive skin"), tx: "ivdrip" },
  ];
  const body: { label: string; tx: TxKey }[] = [
    { label: t("ผิวขาวกระจ่างใส", "Brightening"), tx: "underarm" },
    { label: t("รักแร้ / ขาหนีบคล้ำ", "Dark underarms/folds"), tx: "botox" },
    { label: t("สิวหลัง / สิวหน้าอก", "Body acne"), tx: "diamond" },
    { label: t("รอยแตกลาย", "Stretch marks"), tx: "pico" },
    { label: t("เซลลูไลท์", "Cellulite"), tx: "thermage" },
    { label: t("ไขมันสะสมเฉพาะจุด", "Stubborn fat"), tx: "hifu" },
    { label: t("ผิวหย่อนคล้อย", "Skin laxity"), tx: "hifu" },
    { label: t("กำจัดขนถาวร", "Hair removal"), tx: "underarm" },
    { label: t("ผิวแห้งหยาบ ไม่เรียบเนียน", "Rough skin"), tx: "underarm" },
    { label: t("แผลเป็นและรอยดำ", "Scars & marks"), tx: "pico" },
  ];

  const isFace = tab === "face";
  const list = isFace ? face : body;
  const conAnim = `${n % 2 ? "aaRiseB" : "aaRise"} .5s cubic-bezier(.22,.61,.36,1) both`;

  const switchTab = (to: ConTab) => {
    if (to === tab) return;
    setTab(to);
    setN((x) => x + 1);
  };

  const tabStyle = (active: boolean): React.CSSProperties => ({
    background: "none",
    border: "none",
    borderBottom: `2px solid ${active ? "#8F543F" : "transparent"}`,
    cursor: "pointer",
    padding: "12px 4px",
    marginBottom: -1,
    fontWeight: 600,
    fontSize: 20,
    color: active ? "#33241E" : "#B7A093",
    transition: "all .3s",
  });

  return (
    <div
      className="aa-2col"
      data-rv
      style={{
        display: "grid",
        gridTemplateColumns: ".82fr 1.18fr",
        gap: "clamp(26px,4vw,56px)",
        marginTop: 24,
        alignItems: "stretch",
      }}
    >
      <style>{`
        .home-con-item{transition:padding .25s}
        .home-con-item:hover{padding-left:8px !important}
        @media (max-width:640px){
          .home-con-vis{min-height:400px !important;margin-top:6px}
          .home-con-model{left:0 !important;height:100% !important;max-width:62% !important}
          .home-con-quote{top:14px !important;max-width:47% !important}
        }
      `}</style>

      {/* ── ภาพคุณบลู + quote ── */}
      <div className="home-con-vis" style={{ position: "relative", minHeight: 560, display: "flex", alignItems: "flex-end" }}>
        <img
          src="/assets/blue-model.png"
          alt={t("คุณบลู — The Art Aesthetic", "Blue — The Art Aesthetic")}
          width={667}
          height={1275}
          className="home-con-model"
          style={{
            position: "absolute",
            left: "clamp(20px,3vw,60px)",
            bottom: 0,
            height: "122%",
            width: "auto",
            maxWidth: "82%",
            objectFit: "contain",
            objectPosition: "bottom left",
            filter: "drop-shadow(0 22px 40px rgba(107,74,60,.18))",
          }}
        />
        <div className="home-con-quote" style={{ position: "absolute", right: 0, top: 30, maxWidth: "44%", textAlign: "left" }}>
          <span style={{ display: "inline-block", fontSize: 24, color: "#C08268", lineHeight: 1 }}>&ldquo;</span>
          <div className="aa-serif" style={{ fontWeight: 600, fontSize: "clamp(24px,2.8vw,36px)", color: "#4A2F24", lineHeight: 1.06 }}>
            {isFace ? t("เข้าใจ", "Every") : t("ดูแลผิวกาย", "Head-to-toe")}
          </div>
          <div
            className="aa-serif"
            style={{ fontWeight: 600, fontSize: "clamp(16px,1.7vw,22px)", color: "#4A2F24", lineHeight: 1.24, marginTop: 4, textWrap: "balance" }}
          >
            {isFace ? t("ทุกปัญหาผิวหน้า", "facial concern") : t("ทั่วเรือนร่าง", "skin care")}
          </div>
          <div style={{ font: "300 12px/1.65 'Prompt',sans-serif", color: "#8A6E60", marginTop: 8 }}>
            {isFace
              ? t("ออกแบบการรักษาเฉพาะโครงหน้าของคุณ", "Personalised to your facial features")
              : t("ตั้งแต่ผิวขาวกระจ่างใสถึงกระชับสัดส่วน", "From brightening to body contouring")}
          </div>
          <div style={{ width: 38, height: 2, background: "linear-gradient(90deg,#C08268,#E5B79D)", marginTop: 14 }} />
        </div>
      </div>

      {/* ── แท็บ + รายการปัญหา ── */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", gap: 6, borderBottom: "1px solid #F0E1D8" }}>
          <button type="button" onClick={() => switchTab("face")} className="aa-serif" style={{ ...tabStyle(isFace), marginRight: 26 }}>
            {t("ใบหน้า", "Face")}{" "}
            <span style={{ font: "300 12px 'Prompt',sans-serif", color: "#C4AE9E", verticalAlign: "middle" }}>{face.length}</span>
          </button>
          <button type="button" onClick={() => switchTab("body")} className="aa-serif" style={tabStyle(!isFace)}>
            {t("ผิวกายและรูปร่าง", "Body & Skin")}{" "}
            <span style={{ font: "300 12px 'Prompt',sans-serif", color: "#C4AE9E", verticalAlign: "middle" }}>{body.length}</span>
          </button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 clamp(20px,3vw,44px)", marginTop: 6 }}>
          {list.map((c, i) => (
            <Link
              key={`${tab}-${c.label}`}
              href={txHref(lang, c.tx)}
              className="home-con-item"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                borderBottom: "1px solid #F4E9E1",
                textAlign: "left",
                padding: "15px 2px",
                animation: conAnim,
                animationDelay: `${i * 0.045}s`,
              }}
            >
              <span style={{ font: "400 14.5px 'Prompt',sans-serif", color: "#4A382F" }}>{c.label}</span>
              <span style={{ flex: "none", fontSize: 15, color: "#C08268" }}>→</span>
            </Link>
          ))}
        </div>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener"
          className="aa-hv-lift aa-white-link"
          style={{
            alignSelf: "flex-start",
            marginTop: 24,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "13px 28px",
            borderRadius: 999,
            background: "linear-gradient(120deg,#9E5F4E,#BE7E67 52%,#E7B79F)",
            color: "#fff",
            font: "500 14px 'Prompt',sans-serif",
          }}
        >
          <img src="/assets/line-icon.png" alt="" width={18} height={18} style={{ width: 18, height: 18, borderRadius: 5 }} />
          {isFace
            ? t("ปรึกษาปัญหาผิวหน้ากับแพทย์ ฟรี", "Ask a doctor about your face — free")
            : t("ปรึกษาปัญหารูปร่างกับแพทย์ ฟรี", "Ask a doctor about body concerns — free")}{" "}
          →
        </a>
      </div>
    </div>
  );
}
