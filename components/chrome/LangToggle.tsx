"use client";

import Link from "next/link";
import { useId } from "react";
import { Lang, switchLangHref } from "@/lib/i18n";

/** ธงชาติแบบ SVG (emoji ธงใช้ไม่ได้บน Windows) */
export function FlagTH({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 900 600" style={{ borderRadius: 2, flex: "none", display: "block" }} aria-hidden>
      <rect width="900" height="600" fill="#F4F5F8" />
      <rect width="900" height="100" y="0" fill="#A51931" />
      <rect width="900" height="200" y="200" fill="#2D2A4A" />
      <rect width="900" height="100" y="500" fill="#A51931" />
    </svg>
  );
}

export function FlagEN({ size = 16 }: { size?: number }) {
  const id = useId();
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 60 30" style={{ borderRadius: 2, flex: "none", display: "block" }} aria-hidden>
      <clipPath id={id}>
        <rect width="60" height="30" />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="3.6" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

const remember = (l: Lang) => {
  document.cookie = `lang=${l}; path=/; max-age=31536000; samesite=lax`;
};

/** ตัวสลับภาษา TH/EN พร้อมธงชาติ — โชว์ทุกขนาดจอ */
export default function LangToggle({
  lang,
  pathname,
  size = "sm",
}: {
  lang: Lang;
  pathname: string;
  size?: "sm" | "lg";
}) {
  const thHref = lang === "th" ? pathname : switchLangHref("en", pathname);
  const enHref = lang === "en" ? pathname : switchLangHref("th", pathname);
  const pad = size === "lg" ? "7px 14px" : "5px 10px";

  const opt = (active: boolean): React.CSSProperties => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    font: "500 11px 'DB Heavent',sans-serif",
    letterSpacing: ".08em",
    padding: pad,
    borderRadius: 999,
    background: active ? "#8F543F" : "transparent",
    color: active ? "#fff" : "#8F7266",
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        border: "1px solid #EBD8CD",
        borderRadius: 999,
        padding: 3,
        background: "rgba(255,253,252,.75)",
      }}
      aria-label="Language / ภาษา"
    >
      <Link href={thHref} hrefLang="th" onClick={() => remember("th")} style={opt(lang === "th")}>
        <FlagTH />
        TH
      </Link>
      <Link href={enHref} hrefLang="en" onClick={() => remember("en")} style={opt(lang === "en")}>
        <FlagEN />
        EN
      </Link>
    </div>
  );
}
