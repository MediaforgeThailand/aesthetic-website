import type { Metadata } from "next";
import Image from "next/image";
import { Lang, tr } from "@/lib/i18n";
import { alternatesFor } from "@/lib/seo";
import {
  branches,
  FACEBOOK_URL,
  LINE_ID,
  LINE_QR,
  LINE_URL,
  TEL_DISPLAY,
  TEL_HREF,
} from "@/lib/site";

export function contactMetadata(lang: Lang): Metadata {
  const t = tr(lang);
  return {
    title: t(
      "ติดต่อเรา · สาขา ดอนเมือง ลาดพร้าว พัทยา — ปรึกษาแพทย์ฟรี",
      "Contact & Branches — Don Mueang · Lat Phrao · Pattaya",
    ),
    description: t(
      "ติดต่อ The Art Aesthetic คลินิกความงาม 3 สาขา ดอนเมือง · ลาดพร้าว · พัทยา เปิดทุกวัน 10:00–20:00 แอดไลน์ @theartaesthetics หรือโทร 02-666-4666 ปรึกษาแพทย์ฟรีทุกช่องทาง",
      "Contact The Art Aesthetic — 3 branches in Don Mueang, Lat Phrao and Pattaya, open daily 10:00–20:00. Add LINE @theartaesthetics or call 02-666-4666 for a free doctor consultation.",
    ),
    alternates: alternatesFor(lang, "/contact/"),
  };
}

/** หน้าติดต่อเรา · สาขา — reference lines 785-841 (desktop/mobile เหมือนกัน ต่างเฉพาะ container = .aa-wrap) */
export default function ContactPage({ lang }: { lang: Lang }) {
  const t = tr(lang);

  /* branches(lang) จาก @/lib/site ให้ name/addr/hours — ที่อยู่เป็นค่าจริงจากเว็บหลัก
     ห้ามเติมข้อความบอกทางที่ยืนยันไม่ได้ (ที่จอดรถ / ใกล้รถไฟฟ้า ฯลฯ) */
  const extras = [
    { tag: t("BANGKOK · ดอนเมือง", "BANGKOK · DON MUEANG"), name: t("The Art — ดอนเมือง", "The Art — Don Mueang") },
    { tag: t("BANGKOK · ลาดพร้าว", "BANGKOK · LAT PHRAO"), name: t("The Art — ลาดพร้าว", "The Art — Lat Phrao") },
    { tag: t("EAST · พัทยา", "EAST · PATTAYA"), name: t("The Art — พัทยา", "The Art — Pattaya") },
  ];
  const branchCards = branches(lang).map((b, i) => ({ ...extras[i], addr: b.addr, hours: b.hours }));

  const chanStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 18px",
    borderRadius: 16,
    color: "#FBF3ED",
    font: "400 14px 'DB Heavent',sans-serif",
  };

  return (
    <>
      <style>{`
        .contact-chan{background:rgba(229,183,157,.12);transition:background .25s}
        .contact-chan:hover{background:rgba(229,183,157,.22);color:#FBF3ED}
        .contact-telpill{transition:background .25s}
        .contact-telpill:hover{background:#FAF3EE}
      `}</style>
      <div style={{ height: 62 }} />
      <div className="aa-wrap" style={{ padding: "clamp(44px,6vw,72px) 0 clamp(56px,8vw,90px)" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto" }}>
          <div style={{ font: "500 12px 'DB Heavent',sans-serif", letterSpacing: ".3em", color: "#B4735F" }}>
            CONTACT &amp; BRANCHES
          </div>
          <h1
            style={{
              margin: "14px 0 0",
              fontWeight: 600,
              fontSize: "clamp(30px,4vw,50px)",
              color: "#33241E",
            }}
          >
            {t("ติดต่อเรา · สาขา", "Contact & Branches")}
          </h1>
          <p style={{ margin: "14px 0 0", font: "300 15px/1.85 'DB Heavent',sans-serif", color: "#71594E" }}>
            {t(
              "เปิดให้บริการทุกวัน แนะนำให้นัดหมายล่วงหน้าเพื่อความสะดวกของคุณ",
              "Open daily — booking ahead is recommended.",
            )}
          </p>
        </div>

        {/* Branch cards (3 สาขา) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))",
            gap: 20,
            marginTop: 44,
          }}
        >
          {branchCards.map((b) => (
            <div
              key={b.tag}
              data-rv=""
              className="aa-hv-card"
              style={{
                background: "#fff",
                border: "1px solid #F0E1D8",
                borderRadius: 24,
                padding: "26px 26px 28px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "6px 13px",
                  borderRadius: 999,
                  background: "#FAF3EE",
                  border: "1px solid #F0DCCF",
                  font: "500 10.5px 'DB Heavent',sans-serif",
                  letterSpacing: ".18em",
                  color: "#8F543F",
                }}
              >
                {b.tag}
              </div>
              <h3 style={{ margin: "14px 0 0", font: "600 17px 'DB Heavent',sans-serif", color: "#33241E" }}>
                {b.name}
              </h3>
              <address
                style={{
                  marginTop: 6,
                  font: "300 13.5px/1.8 'DB Heavent',sans-serif",
                  color: "#71594E",
                  fontStyle: "normal",
                }}
              >
                {b.addr}
              </address>
              <div
                style={{
                  marginTop: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  font: "300 13px 'DB Heavent',sans-serif",
                  color: "#71594E",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="12" cy="12" r="9" stroke="#B4735F" strokeWidth="1.6" />
                  <path d="M12 7v5l3 2" stroke="#B4735F" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                {b.hours}
              </div>
              <a
                href={TEL_HREF}
                className="contact-telpill"
                style={{
                  marginTop: 18,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: 11,
                  borderRadius: 999,
                  border: "1px solid #D9B7A3",
                  color: "#8F543F",
                  font: "500 13.5px 'DB Heavent',sans-serif",
                }}
              >
                {TEL_DISPLAY}
              </a>
            </div>
          ))}
        </div>

        {/* Channels (dark card) + image card */}
        <div
          className="aa-2col"
          style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 20, marginTop: 20 }}
        >
          <div
            data-rv=""
            style={{
              background: "linear-gradient(120deg,#2B1C16,#4A2F24)",
              borderRadius: 24,
              padding: "clamp(28px,4vw,44px)",
            }}
          >
            <div style={{ font: "500 12px 'DB Heavent',sans-serif", letterSpacing: ".28em", color: "#E5B79D" }}>
              TALK TO US
            </div>
            <h2
              style={{
                margin: "10px 0 0",
                fontWeight: 600,
                fontSize: "clamp(22px,2.6vw,30px)",
                color: "#FBF3ED",
              }}
            >
              {t("ปรึกษาแพทย์ฟรี ทุกช่องทาง", "Free consultation, every channel")}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 22 }}>
              <a href={LINE_URL} target="_blank" rel="noopener" className="contact-chan" style={chanStyle}>
                <img
                  src="/assets/line-icon.png"
                  alt="LINE"
                  width={36}
                  height={36}
                  style={{ flex: "none", width: 36, height: 36, borderRadius: 10 }}
                />
                LINE — {LINE_ID}
              </a>
              <a href={TEL_HREF} className="contact-chan" style={chanStyle}>
                <span
                  style={{
                    flex: "none",
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "#C08268",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
                      fill="#fff"
                    />
                  </svg>
                </span>
                {t(
                  `โทร ${TEL_DISPLAY} (ทุกวัน 10:00–20:00)`,
                  `Call ${TEL_DISPLAY} (daily 10:00–20:00)`,
                )}
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener" className="contact-chan" style={chanStyle}>
                <span
                  style={{
                    flex: "none",
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "#1877F2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    font: "600 17px 'DB Heavent',sans-serif",
                  }}
                >
                  f
                </span>
                Facebook — The Art Aesthetic
              </a>
              {/* QR card — light variant (การ์ดพื้นขาว QR 152px ตัวหนังสือโทนเข้ม — COMPONENTS.md §3) */}
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 22,
                  padding: "20px 24px",
                  borderRadius: 22,
                  background: "#fff",
                }}
              >
                <img
                  src={LINE_QR}
                  alt={t(`QR แอดไลน์ ${LINE_ID}`, `LINE QR code ${LINE_ID}`)}
                  width={152}
                  height={152}
                  style={{ flex: "none", width: 152, height: 152, display: "block" }}
                />
                <span style={{ display: "flex", flexDirection: "column", gap: 5, minWidth: 170, flex: 1 }}>
                  <span style={{ font: "500 11.5px 'DB Heavent',sans-serif", letterSpacing: ".26em", color: "#B4735F" }}>
                    SCAN TO ADD
                  </span>
                  <span
                    style={{
                      fontFamily: "'Playfair Display','Luxia',serif",
                      fontWeight: 600,
                      fontSize: "clamp(22px,2.4vw,30px)",
                      lineHeight: 1.15,
                      color: "#33241E",
                    }}
                  >
                    {LINE_ID}
                  </span>
                  <span style={{ font: "300 14px/1.7 'DB Heavent',sans-serif", color: "#71594E" }}>
                    {t(
                      "สแกน QR เพื่อแอดไลน์ ปรึกษาแพทย์ได้ทันที",
                      "Scan to add us and chat with a doctor.",
                    )}
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Image card (โรงพยาบาล The Art) */}
          <div
            data-rv=""
            style={{
              borderRadius: 24,
              overflow: "hidden",
              position: "relative",
              minHeight: 300,
              transitionDelay: ".08s",
            }}
          >
            <Image
              src="/assets/hospital-side.jpg"
              alt={t(
                "อาคารโรงพยาบาลศัลยกรรมตกแต่ง The Art",
                "The Art plastic surgery hospital building",
              )}
              fill
              sizes="(max-width: 980px) 92vw, 40vw"
              style={{ objectFit: "cover" }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg,rgba(46,33,28,0) 40%,rgba(46,33,28,.72))",
              }}
            />
            <div style={{ position: "absolute", left: 24, right: 24, bottom: 22, color: "#FBF3ED" }}>
              <div style={{ font: "500 11px 'DB Heavent',sans-serif", letterSpacing: ".24em", color: "#E5B79D" }}>
                THE ART AESTHETIC
              </div>
              <div style={{ font: "300 13.5px/1.7 'DB Heavent',sans-serif", marginTop: 6 }}>
                {t(
                  "แผนที่และเส้นทางแต่ละสาขา สอบถามได้ทาง LINE",
                  "Maps and directions for each branch via LINE.",
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
