import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Lang, href, tr } from "@/lib/i18n";
import { alternatesFor } from "@/lib/seo";
import { SITE_URL, TX_SLUGS, txHref } from "@/lib/site";
import { CloneBlock, ClonePageData, pick } from "@/lib/clone-content";
import { disclaimer } from "@/lib/shared-data";
import { txData } from "@/lib/tx-data";
import { LineButton, TelButton } from "@/components/ui/CtaButtons";
import DarkCtaBanner from "@/components/ui/DarkCtaBanner";
import FaqAccordion from "@/components/pages/tx/FaqAccordion";

export function cloneMetadata(lang: Lang, page: ClonePageData): Metadata {
  const c = pick(lang, page);
  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: alternatesFor(lang, page.path),
    openGraph: page.heroImage ? { images: [page.heroImage] } : undefined,
  };
}

const P_STYLE: React.CSSProperties = { font: "300 15px/1.95 'Prompt',sans-serif", color: "#5D4A40", margin: "14px 0 0" };

function Block({ b }: { b: CloneBlock }) {
  switch (b.t) {
    case "h2":
      return (
        <h2 id={anchorId(b.text)} style={{ fontSize: "clamp(22px,2.6vw,30px)", lineHeight: 1.4, margin: "40px 0 4px", scrollMarginTop: 90 }}>
          {b.text}
        </h2>
      );
    case "h3":
      return <h3 style={{ fontSize: "clamp(17px,2vw,21px)", lineHeight: 1.45, margin: "28px 0 0", scrollMarginTop: 90 }}>{b.text}</h3>;
    case "p":
      return <p style={P_STYLE} dangerouslySetInnerHTML={{ __html: b.html }} />;
    case "ul":
    case "ol": {
      const Tag = b.t;
      return (
        <Tag style={{ ...P_STYLE, paddingLeft: 24, display: "flex", flexDirection: "column", gap: 6 }}>
          {b.items.map((it, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: it }} />
          ))}
        </Tag>
      );
    }
    case "img":
      return (
        <Image
          src={b.src}
          alt={b.alt}
          width={b.w}
          height={b.h}
          sizes="(max-width: 900px) 92vw, 820px"
          style={{ width: "100%", height: "auto", borderRadius: 18, marginTop: 22, boxShadow: "0 18px 42px rgba(107,74,60,.12)" }}
        />
      );
    case "table":
      return (
        <div style={{ overflowX: "auto", marginTop: 22, border: "1px solid #F0E1D8", borderRadius: 14 }}>
          <div className="clone-table" dangerouslySetInnerHTML={{ __html: b.html }} />
        </div>
      );
    case "video":
      return (
        <div style={{ position: "relative", aspectRatio: "16/9", marginTop: 22, borderRadius: 18, overflow: "hidden", background: "#2B1C16" }}>
          <iframe
            src={b.src}
            title={b.title ?? "video"}
            loading="lazy"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          />
        </div>
      );
    case "quote":
      return (
        <blockquote
          style={{ ...P_STYLE, margin: "22px 0 0", padding: "16px 22px", borderLeft: "3px solid #CE9079", background: "#FAF3EE", borderRadius: "0 14px 14px 0" }}
          dangerouslySetInnerHTML={{ __html: b.html }}
        />
      );
    default:
      return null;
  }
}

const anchorId = (text: string) => encodeURIComponent(text.trim().toLowerCase().replace(/\s+/g, "-").slice(0, 60));

export default function ClonePage({ lang, page }: { lang: Lang; page: ClonePageData }) {
  const t = tr(lang);
  const c = pick(lang, page);
  const h2s = c.blocks.filter((b): b is Extract<CloneBlock, { text: string }> => b.t === "h2");
  const related = page.relatedTxKey ? txData(lang)[page.relatedTxKey] : null;

  const sectionLabel =
    page.section === "articles" ? t("บทความ", "Articles") : page.section === "aesthetics" ? "Aesthetics" : "Skin Aesthetics";

  const crumbs = [
    { name: t("หน้าแรก", "Home"), item: href(lang, "/") },
    { name: sectionLabel, item: href(lang, page.section === "articles" ? "/articles/" : `/${page.section}/`) },
    { name: c.title, item: href(lang, page.path) },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": page.section === "articles" ? "Article" : "MedicalWebPage",
        headline: c.title,
        description: c.metaDesc,
        inLanguage: lang === "th" ? "th-TH" : "en",
        url: `${SITE_URL}${href(lang, page.path)}`,
        ...(page.heroImage ? { image: `${SITE_URL}${page.heroImage}` } : {}),
        ...(page.datePublished ? { datePublished: page.datePublished } : {}),
        ...(page.dateModified ? { dateModified: page.dateModified } : {}),
        publisher: { "@type": "MedicalClinic", name: "The Art Aesthetic" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((cr, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: cr.name,
          item: `${SITE_URL}${cr.item}`,
        })),
      },
      ...(c.faqs?.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: c.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <div>
      <div style={{ height: 62 }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="aa-wrap" style={{ maxWidth: 860, paddingTop: "clamp(28px,4vw,48px)" }}>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ font: "300 12.5px 'Prompt',sans-serif", color: "#A08876", display: "flex", flexWrap: "wrap", gap: 6 }}>
          {crumbs.map((cr, i) => (
            <span key={i} style={{ display: "inline-flex", gap: 6 }}>
              {i > 0 && <span>›</span>}
              {i < crumbs.length - 1 ? (
                <Link href={cr.item} style={{ color: "#8F543F" }}>
                  {cr.name}
                </Link>
              ) : (
                <span>{cr.name}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 style={{ fontSize: "clamp(27px,3.6vw,42px)", lineHeight: 1.3, margin: "14px 0 0" }}>{c.title}</h1>
        {c.lead ? (
          <p style={{ font: "300 16px/1.95 'Prompt',sans-serif", color: "#71594E", margin: "16px 0 0" }}>{c.lead}</p>
        ) : null}

        {/* CTA row ใต้ intro */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, margin: "24px 0 6px" }}>
          <LineButton lang={lang} />
          <TelButton lang={lang} />
        </div>

        {/* On this page — AEO-friendly TOC */}
        {h2s.length >= 3 && (
          <nav
            aria-label={t("ในหน้านี้", "On this page")}
            style={{ margin: "26px 0 0", padding: "16px 20px", background: "#FAF3EE", border: "1px solid #F0DCCF", borderRadius: 16 }}
          >
            <div style={{ font: "500 11.5px 'Prompt',sans-serif", letterSpacing: ".22em", color: "#B4735F" }}>
              {t("ในหน้านี้", "ON THIS PAGE")}
            </div>
            <ol style={{ margin: "10px 0 0", paddingLeft: 20, font: "300 13.5px/2 'Prompt',sans-serif", color: "#5D4A40" }}>
              {h2s.map((h) => (
                <li key={h.text}>
                  <a href={`#${anchorId(h.text)}`} style={{ color: "#8F543F" }}>
                    {h.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* เนื้อหา */}
        {c.blocks.map((b, i) => (
          <Block key={i} b={b} />
        ))}

        {page.hasCaseImagery ? (
          <div style={{ marginTop: 18, font: "300 12px 'Prompt',sans-serif", color: "#A08876" }}>{disclaimer(lang)}</div>
        ) : null}

        {/* FAQ */}
        {c.faqs?.length ? (
          <section style={{ marginTop: 44 }}>
            <h2 style={{ fontSize: "clamp(22px,2.6vw,30px)", margin: 0 }}>{t("คำถามที่พบบ่อย", "Frequently asked questions")}</h2>
            <div style={{ marginTop: 8 }}>
              <FaqAccordion faqs={c.faqs} />
            </div>
          </section>
        ) : null}

        {/* ลิงก์ไป landing หัตถการที่เกี่ยวข้อง */}
        {related && page.relatedTxKey ? (
          <Link
            href={txHref(lang, page.relatedTxKey)}
            className="aa-hv-card"
            data-rv
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 14,
              marginTop: 44,
              padding: "22px 26px",
              borderRadius: 20,
              background: "#FAF3EE",
              border: "1px solid #F0DCCF",
            }}
          >
            <div>
              <div style={{ font: "500 11.5px 'Prompt',sans-serif", letterSpacing: ".22em", color: "#B4735F" }}>
                {t("โปรแกรมที่เกี่ยวข้อง", "RELATED PROGRAM")}
              </div>
              <div className="aa-serif" style={{ fontSize: "clamp(19px,2.2vw,26px)", fontWeight: 600, color: "#33241E", marginTop: 6 }}>
                {related.name}
              </div>
              <div style={{ font: "300 13.5px 'Prompt',sans-serif", color: "#8F7266", marginTop: 4 }}>
                {t("ดูรายละเอียด ราคา และรีวิวของโปรแกรมนี้", "See details, prices and reviews for this program")}
              </div>
            </div>
            <span style={{ font: "500 14px 'Prompt',sans-serif", color: "#8F543F" }}>{t("ดูรายละเอียด →", "View details →")}</span>
          </Link>
        ) : null}
      </article>

      {/* Dark CTA */}
      <div className="aa-wrap" style={{ maxWidth: 1040, margin: "clamp(44px,6vw,72px) auto 0", paddingBottom: "clamp(48px,6vw,80px)" }}>
        <div data-rv>
          <DarkCtaBanner
            lang={lang}
            title={t("ปรึกษาแพทย์ก่อนตัดสินใจ ฟรี ไม่มีค่าใช้จ่าย", "Talk to a doctor before you decide — free.")}
            sub={t(
              "ทีมแพทย์ The Art Aesthetic พร้อมประเมินและออกแบบการรักษาเฉพาะบุคคล ทุกวัน 10:00–20:00",
              "Our doctors assess and plan your treatment personally, daily 10:00–20:00.",
            )}
          />
        </div>
        {c.keywords?.length ? (
          <div style={{ marginTop: 26, font: "300 12px/1.9 'Prompt',sans-serif", color: "#B39F92", textAlign: "center" }}>
            {c.keywords.join(" · ")}
          </div>
        ) : null}
      </div>

      <style>{`
        .clone-table table{width:100%;border-collapse:collapse;font:300 14px/1.8 'Prompt',sans-serif;color:#5D4A40}
        .clone-table th{font-weight:500;color:#33241E;background:#FAF3EE;text-align:left}
        .clone-table th,.clone-table td{padding:12px 16px;border-bottom:1px solid #F0E1D8}
        .clone-table tr:last-child td{border-bottom:none}
        article a{color:#8F543F;text-decoration:underline;text-underline-offset:3px}
        article strong{font-weight:600;color:#33241E}
      `}</style>
    </div>
  );
}
