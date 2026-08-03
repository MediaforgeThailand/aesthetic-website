import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Lang, href, tr } from "@/lib/i18n";
import { alternatesFor } from "@/lib/seo";
import { ClonePageData, getAllClonePages, pick } from "@/lib/clone-content";

const LABELS: Record<ClonePageData["section"], { th: string; en: string; descTh: string; descEn: string }> = {
  aesthetics: { th: "หัตถการความงาม", en: "Aesthetics", descTh: "", descEn: "" },
  "skin-aesthetics": {
    th: "ปัญหาผิวและความงามรายอาการ",
    en: "Skin Aesthetics — by concern",
    descTh: "รวมทุกปัญหาผิวและความงาม ฝ้า กระ สิว รูขุมขน เลเซอร์ กำจัดขน ริมฝีปาก พร้อมแนวทางการรักษาโดยทีมแพทย์ The Art Aesthetic",
    descEn: "Every skin and aesthetic concern — melasma, acne, pores, laser, hair removal, lips — with doctor-led treatment guidance from The Art Aesthetic.",
  },
  articles: {
    th: "บทความความงาม",
    en: "Aesthetic Articles",
    descTh: "บทความความรู้ด้านผิวพรรณและความงาม โดยทีมแพทย์ The Art Aesthetic",
    descEn: "Skin and aesthetic knowledge articles by The Art Aesthetic doctors.",
  },
};

export function cloneSectionIndexMetadata(lang: Lang, section: ClonePageData["section"]): Metadata {
  const l = LABELS[section];
  const path = section === "articles" ? "/articles/" : `/${section}/`;
  return {
    title: lang === "th" ? l.th : l.en,
    description: lang === "th" ? l.descTh : l.descEn,
    alternates: alternatesFor(lang, path),
  };
}

export default function CloneSectionIndex({ lang, section }: { lang: Lang; section: ClonePageData["section"] }) {
  const t = tr(lang);
  const l = LABELS[section];
  const pages = getAllClonePages()
    .filter((p) => p.section === section && p.path.replace(/^\/|\/$/g, "").split("/").length > 1)
    .sort((a, b) => a.path.localeCompare(b.path, "th"));

  return (
    <div>
      <div style={{ height: 62 }} />
      <div className="aa-wrap" style={{ padding: "clamp(32px,5vw,56px) 0 clamp(48px,6vw,80px)" }}>
        <div style={{ font: "500 12px 'Prompt',sans-serif", letterSpacing: ".3em", color: "#B4735F" }}>THE ART AESTHETIC</div>
        <h1 style={{ fontSize: "clamp(28px,3.4vw,42px)", margin: "10px 0 0" }}>{t(l.th, l.en)}</h1>
        <p style={{ font: "300 15px/1.9 'Prompt',sans-serif", color: "#71594E", maxWidth: 640, margin: "14px 0 0" }}>
          {t(l.descTh, l.descEn)}
        </p>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))", gap: 18, marginTop: "clamp(28px,4vw,44px)" }}
        >
          {pages.map((p) => {
            const c = pick(lang, p);
            return (
              <Link
                key={p.path}
                href={href(lang, p.path)}
                className="aa-hv-card"
                data-rv
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 20,
                  border: "1px solid #F0E1D8",
                  background: "#fff",
                  overflow: "hidden",
                  boxShadow: "0 14px 34px rgba(107,74,60,.08)",
                }}
              >
                {p.heroImage ? (
                  <div style={{ position: "relative", aspectRatio: "16/9" }}>
                    <Image src={p.heroImage} alt={c.title} fill sizes="(max-width: 720px) 92vw, 320px" style={{ objectFit: "cover" }} />
                  </div>
                ) : null}
                <div style={{ padding: "18px 20px 20px" }}>
                  <div style={{ font: "500 15.5px/1.5 'Prompt',sans-serif", color: "#33241E" }}>{c.title}</div>
                  <div
                    style={{
                      font: "300 13px/1.8 'Prompt',sans-serif",
                      color: "#8F7266",
                      marginTop: 6,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {c.metaDesc}
                  </div>
                  <span style={{ display: "inline-block", marginTop: 12, font: "500 13px 'Prompt',sans-serif", color: "#8F543F" }}>
                    {t("อ่านต่อ →", "Read more →")}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
