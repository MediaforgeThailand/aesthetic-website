"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Lang, tr, href } from "@/lib/i18n";
import { LICENSE_ADS, LICENSE_HOSPITAL, LINE_URL, TEL_DISPLAY, TEL_HREF, navItems } from "@/lib/site";
import LangToggle from "./LangToggle";

export default function Header({ lang }: { lang: Lang }) {
  const t = tr(lang);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const items = navItems(lang);

  return (
    <div
      id="aa-hdr"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        background: "rgba(255,253,252,.05)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid transparent",
      }}
    >
      {/* แถบใบอนุญาตโฆษณา — ข้อบังคับทางกฎหมาย ห้ามตัดออก */}
      <div style={{ borderBottom: "1px solid rgba(217,183,163,.22)" }}>
        <div
          className="aa-wrap"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            columnGap: 16,
            rowGap: 2,
            padding: "4px 0",
            font: "300 11px/1.5 'Luxia','Noto Sans Thai',sans-serif",
            color: "#8F7266",
            letterSpacing: ".02em",
          }}
        >
          <span>{LICENSE_HOSPITAL}</span>
          {LICENSE_ADS.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
      </div>
      <div className="aa-wrap" style={{ display: "flex", alignItems: "center", gap: 20, padding: "12px 0" }}>
        <Link href={href(lang, "/")} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 3 }}>
          <img src="/assets/logo-art.png" alt="THE ART" width={94} height={30} style={{ height: 30, width: "auto", display: "block" }} />
          <span style={{ font: "600 8.5px/1 'Luxia','Noto Sans Thai',sans-serif", letterSpacing: ".46em", color: "#A96A55", paddingLeft: 2 }}>
            AESTHETIC
          </span>
        </Link>
        <nav className="aa-desk" style={{ display: "flex", alignItems: "center", gap: 26, marginLeft: "auto" }}>
          {items.map((m) => (
            <Link key={m.href} href={m.href} className="aa-nav-link" style={{ font: "400 14px 'Luxia','Noto Sans Thai',sans-serif", padding: "4px 0" }}>
              {m.label}
            </Link>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: "auto" }}>
          <LangToggle lang={lang} pathname={pathname} />
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener"
            className="aa-desk aa-hv-lift aa-white-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              borderRadius: 999,
              background: "linear-gradient(120deg,#9E5F4E,#BE7E67 52%,#E7B79F)",
              color: "#fff",
              font: "500 13.5px 'Luxia','Noto Sans Thai',sans-serif",
              boxShadow: "0 10px 24px rgba(169,106,85,.3)",
            }}
          >
            <img src="/assets/line-icon.png" alt="" width={18} height={18} style={{ width: 18, height: 18, borderRadius: 5, verticalAlign: -4 }} />
            {t("ปรึกษาฟรี", "Free Consult")}
          </a>
          <button
            className="aa-burg"
            aria-label={t("เมนู", "Menu")}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: 12,
              border: "1px solid #EBD8CD",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M1 1h16M1 7h16M1 13h16" stroke="#33241E" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div style={{ borderTop: "1px solid #F0E1D8", background: "#FFFDFC", padding: "8px 4vw 18px", display: "flex", flexDirection: "column" }}>
          {items.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              onClick={() => setMenuOpen(false)}
              style={{ font: "400 16px 'Luxia','Noto Sans Thai',sans-serif", color: "#33241E", padding: "13px 4px", borderBottom: "1px solid #F6EBE3" }}
            >
              {m.label}
            </Link>
          ))}
          <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener"
              className="aa-white-link"
              style={{
                flex: 1,
                textAlign: "center",
                padding: 13,
                borderRadius: 999,
                background: "linear-gradient(120deg,#9E5F4E,#BE7E67 52%,#E7B79F)",
                color: "#fff",
                font: "500 14px 'Luxia','Noto Sans Thai',sans-serif",
              }}
            >
              {t("ปรึกษาฟรีทาง LINE", "Free Consult")}
            </a>
            <a
              href={TEL_HREF}
              style={{ flex: 1, textAlign: "center", padding: 13, borderRadius: 999, border: "1px solid #D9B7A3", color: "#8F543F", font: "500 14px 'Luxia','Noto Sans Thai',sans-serif" }}
            >
              {TEL_DISPLAY}
            </a>
          </div>
          <div style={{ marginTop: 14, alignSelf: "flex-start" }}>
            <LangToggle lang={lang} pathname={pathname} size="lg" />
          </div>
        </div>
      )}
    </div>
  );
}
