"use client";

import Link from "next/link";
import { useState } from "react";
import { Lang, href, tr } from "@/lib/i18n";
import {
  COMPANY_NAME,
  COMPANY_REG,
  FACEBOOK_URL,
  FOOT_TX,
  LICENSE_ADS,
  LICENSE_HOSPITAL,
  LINE_ID,
  LINE_URL,
  TEL_DISPLAY,
  TEL_HREF,
  branches,
  navItems,
  txHref,
} from "@/lib/site";

/** ชื่อหัตถการใน footer (ตรงกับ txData().name) */
const FOOT_TX_LABELS: Record<string, { th: string; en: string }> = {
  filler: { th: "ฉีดฟิลเลอร์", en: "Dermal Filler" },
  botox: { th: "โบท็อกซ์", en: "Botox" },
  thread: { th: "ร้อยไหมยกกระชับ", en: "Thread Lift" },
  hifu: { th: "HIFU ยกกระชับ", en: "HIFU" },
  diamond: { th: "Diamond Baby Face", en: "Diamond Baby Face" },
};

function AccordionSection({
  title,
  open,
  onToggle,
  children,
}: {
  title: React.ReactNode;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div style={{ borderBottom: "1px solid rgba(229,183,157,.16)" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "17px 2px",
          textAlign: "left",
        }}
      >
        <span style={{ font: "400 14.5px 'Luxia','Noto Sans Thai',sans-serif", color: "#EFDDD2", letterSpacing: ".02em" }}>{title}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          style={{ flex: "none", transition: "transform .35s", transform: open ? "rotate(180deg)" : "rotate(0)" }}
        >
          <path d="M3 6l5 5 5-5" stroke="#C7AC9C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div style={{ display: open ? "block" : "none", padding: "2px 2px 20px" }}>{children}</div>
    </div>
  );
}

export default function Footer({ lang }: { lang: Lang }) {
  const t = tr(lang);
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (k: string) => () => setOpen((v) => (v === k ? null : k));
  const items = navItems(lang);
  const brs = branches(lang);
  const contactHref = href(lang, "/contact/");

  const colHead: React.CSSProperties = { font: "500 12px 'Luxia','Noto Sans Thai',sans-serif", letterSpacing: ".24em", color: "#E5B79D" };
  const colLink: React.CSSProperties = { font: "300 13.5px 'Luxia','Noto Sans Thai',sans-serif", padding: 0, textAlign: "left" };

  const contactLinks = (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, font: "300 13.5px/1.7 'Luxia','Noto Sans Thai',sans-serif" }}>
      <a href={TEL_HREF} className="aa-ftr-link">{TEL_DISPLAY}</a>
      <a href={LINE_URL} target="_blank" rel="noopener" className="aa-ftr-link">LINE {LINE_ID}</a>
      <a href={FACEBOOK_URL} target="_blank" rel="noopener" className="aa-ftr-link">Facebook — The Art Aesthetic</a>
      <span style={{ color: "#D8C2B4" }}>{t("เปิดทุกวัน 10:00–20:00", "Open daily 10:00–20:00")}</span>
    </div>
  );

  /* ── ข้อความบังคับตามกฎหมาย — เลขอ้างอิงอยู่ที่ lib/site.ts ห้ามแก้ตรงนี้ ── */
  const bottomNote = (
    <span style={{ textAlign: "right" }}>
      {LICENSE_HOSPITAL}
      <br />
      {LICENSE_ADS.join(" · ")}
      <br />
      {t("ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล", "Results vary by individual")}
    </span>
  );

  const legalBlock = (
    <div style={{ font: "300 11.5px/1.8 'Luxia','Noto Sans Thai',sans-serif", color: "#9A7E6E" }}>
      <div>{COMPANY_NAME}</div>
      <div>{COMPANY_REG}</div>
    </div>
  );

  return (
    <footer style={{ position: "relative", zIndex: 2, background: "#2B1C16" }}>
      {/* ── Desktop / tablet ── */}
      <div className="aa-d-only">
        <div className="aa-wrap" style={{ padding: "clamp(44px,6vw,64px) 0 30px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 34 }}>
            <div>
              <img src="/assets/logo-footer.png" alt="The Art Hospital & Clinic" width={132} height={56} style={{ height: 56, width: "auto" }} />
              <div style={{ marginTop: 14, font: "300 13px/1.9 'Luxia','Noto Sans Thai',sans-serif", color: "#C7AC9C", maxWidth: 280 }}>
                {t(
                  "คลินิกความงามภายใต้เครือโรงพยาบาลศัลยกรรมตกแต่ง The Art — The Art of Confidence.",
                  "Aesthetic clinic under The Art plastic-surgery hospital group.",
                )}
              </div>
            </div>
            <div>
              <div style={colHead}>{t("เมนู", "MENU")}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
                {items.map((m) => (
                  <Link key={m.href} href={m.href} className="aa-ftr-link" style={colLink}>
                    {m.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div style={colHead}>{t("หัตถการยอดนิยม", "POPULAR")}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
                {FOOT_TX.map((k) => (
                  <Link key={k} href={txHref(lang, k)} className="aa-ftr-link" style={colLink}>
                    {t(FOOT_TX_LABELS[k].th, FOOT_TX_LABELS[k].en)}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div style={colHead}>{t("ติดต่อ", "CONTACT")}</div>
              <div style={{ marginTop: 16 }}>{contactLinks}</div>
            </div>
          </div>
          <div style={{ marginTop: 38, paddingTop: 26, borderTop: "1px solid rgba(229,183,157,.18)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: 10 }}>
              <div style={colHead}>{t("สาขา", "BRANCHES")}</div>
              <Link href={contactHref} className="aa-ftr-link-dim" style={{ font: "400 12.5px 'Luxia','Noto Sans Thai',sans-serif", letterSpacing: ".02em" }}>
                {t("ดูสาขาทั้งหมด →", "All branches →")}
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 14, marginTop: 16 }}>
              {brs.map((b) => (
                <Link
                  key={b.name}
                  href={contactHref}
                  className="aa-branch-card"
                  style={{ display: "block", padding: "16px 18px", borderRadius: 18, border: "1px solid rgba(229,183,157,.18)" }}
                >
                  <div style={{ font: "500 14px 'Luxia','Noto Sans Thai',sans-serif", color: "#FBF3ED" }}>{b.name}</div>
                  <div style={{ font: "300 12.5px/1.7 'Luxia','Noto Sans Thai',sans-serif", color: "#C7AC9C", marginTop: 4 }}>{b.hours}</div>
                </Link>
              ))}
            </div>
          </div>
          <div
            style={{
              marginTop: 30,
              paddingTop: 22,
              borderTop: "1px solid rgba(229,183,157,.18)",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 12,
              font: "300 11.5px/1.8 'Luxia','Noto Sans Thai',sans-serif",
              color: "#9A7E6E",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span>© 2026 The Art Aesthetic — by The Art Hospital &amp; Clinic</span>
              {legalBlock}
            </div>
            {bottomNote}
          </div>
        </div>
      </div>

      {/* ── Mobile (accordion) ── */}
      <div className="aa-m-only">
        <div className="aa-wrap" style={{ padding: "clamp(44px,6vw,64px) 0 30px" }}>
          <div>
            <img src="/assets/logo-footer.png" alt="The Art Hospital & Clinic" width={108} height={46} style={{ height: 46, width: "auto" }} />
            <div style={{ marginTop: 12, font: "300 13px/1.9 'Luxia','Noto Sans Thai',sans-serif", color: "#C7AC9C", maxWidth: 320 }}>
              {t(
                "คลินิกความงามภายใต้เครือโรงพยาบาลศัลยกรรมตกแต่ง The Art — The Art of Confidence.",
                "Aesthetic clinic under The Art plastic-surgery hospital group.",
              )}
            </div>
          </div>
          <div style={{ marginTop: 24, borderTop: "1px solid rgba(229,183,157,.16)" }}>
            <AccordionSection title={t("เมนู", "Menu")} open={open === "menu"} onToggle={toggle("menu")}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {items.map((m) => (
                  <Link key={m.href} href={m.href} className="aa-ftr-link" style={colLink}>
                    {m.label}
                  </Link>
                ))}
              </div>
            </AccordionSection>
            <AccordionSection title={t("หัตถการยอดนิยม", "Popular treatments")} open={open === "tx"} onToggle={toggle("tx")}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {FOOT_TX.map((k) => (
                  <Link key={k} href={txHref(lang, k)} className="aa-ftr-link" style={colLink}>
                    {t(FOOT_TX_LABELS[k].th, FOOT_TX_LABELS[k].en)}
                  </Link>
                ))}
              </div>
            </AccordionSection>
            <AccordionSection title={t("ติดต่อ", "Contact")} open={open === "contact"} onToggle={toggle("contact")}>
              {contactLinks}
            </AccordionSection>
            <AccordionSection title={t("สาขา (3)", "Branches (3)")} open={open === "branches"} onToggle={toggle("branches")}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {brs.map((b) => (
                  <Link
                    key={b.name}
                    href={contactHref}
                    style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}
                  >
                    <span style={{ font: "300 13.5px 'Luxia','Noto Sans Thai',sans-serif", color: "#D8C2B4" }}>{b.name}</span>
                    <span style={{ flex: "none", font: "300 12px 'Luxia','Noto Sans Thai',sans-serif", color: "#9A7E6E" }}>10:00–20:00</span>
                  </Link>
                ))}
                <Link href={contactHref} className="aa-ftr-link-dim" style={{ alignSelf: "flex-start", font: "400 12.5px 'Luxia','Noto Sans Thai',sans-serif" }}>
                  {t("ดูสาขาทั้งหมด →", "All branches →")}
                </Link>
              </div>
            </AccordionSection>
          </div>
          <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 8, font: "300 11.5px/1.8 'Luxia','Noto Sans Thai',sans-serif", color: "#9A7E6E" }}>
            <span>© 2026 The Art Aesthetic — by The Art Hospital &amp; Clinic</span>
            {legalBlock}
            <span>
              {LICENSE_HOSPITAL}
              <br />
              {LICENSE_ADS.map((n) => (
                <span key={n}>
                  {n}
                  <br />
                </span>
              ))}
              {t("ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล", "Results vary by individual")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
