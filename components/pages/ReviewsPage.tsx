import type { Metadata } from "next";
import Image from "next/image";
import { Lang, tr } from "@/lib/i18n";
import { alternatesFor } from "@/lib/seo";
import { disclaimer, vids } from "@/lib/shared-data";
import ReviewRail from "@/components/ui/ReviewRail";
import BaSlider from "@/components/pages/reviews/BaSlider";

export function reviewsMetadata(lang: Lang): Metadata {
  const t = tr(lang);
  return {
    title: t(
      "รีวิวก่อน–หลัง จากเคสจริง ฟิลเลอร์ · โบท็อกซ์ · ยกกระชับ",
      "Real Before & After Reviews — Filler, Botox & Lifting",
    ),
    description: t(
      "รวมรีวิวก่อน–หลังจากเคสจริงของ The Art Aesthetic ฟิลเลอร์ปาก ฟิลเลอร์ใต้ตา ฟิลเลอร์คาง โบท็อกซ์ ร้อยไหม ยกกระชับ พร้อมคลิปวิดีโอรีวิว ทุกภาพได้รับอนุญาตจากผู้รับบริการ *ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล",
      "Real before-and-after cases from The Art Aesthetic — lip filler, under-eye filler, chin filler, Botox, thread lifts and skin tightening, plus video reviews. All images shared with client consent. *Results vary by individual.",
    ),
    alternates: alternatesFor(lang, "/reviews/"),
  };
}

const GALLERY = [
  "/assets/rv-filler-1.jpg",
  "/assets/rv-filler-2.jpg",
  "/assets/rv-filler-3.jpg",
  "/assets/rv-filler-4.jpg",
  "/assets/rv-filler-5.jpg",
  "/assets/rv-filler-6.jpg",
];

export default function ReviewsPage({ lang }: { lang: Lang }) {
  const t = tr(lang);

  /* revCards จาก renderVals ของ reference (desktop บรรทัด 1376-1381) */
  const cards = [
    {
      b: "/assets/ba/undereye-b.jpg",
      a: "/assets/ba/undereye-a.jpg",
      title: t("ฟิลเลอร์ใต้ตา + ขมับ", "Under-eye + Temple"),
      tag: "Filler",
    },
    {
      b: "/assets/ba/chin-b.jpg",
      a: "/assets/ba/chin-a.jpg",
      title: t("ฟิลเลอร์คาง ปรับรูปหน้า", "Chin Contour"),
      tag: "Filler",
    },
    {
      b: "/assets/ba/chinlip-b.jpg",
      a: "/assets/ba/chinlip-a.jpg",
      title: t("ฟิลเลอร์คาง + ปาก", "Chin + Lips"),
      tag: "Filler",
    },
    {
      b: "/assets/ba/eye-b.jpg",
      a: "/assets/ba/eye-a.jpg",
      title: t("ฟิลเลอร์ใต้ตา", "Under-eye"),
      tag: "Filler",
    },
  ];

  const dragLabel = t("เลื่อนเปรียบเทียบก่อน–หลัง", "drag to compare before/after");

  return (
    <>
      <div style={{ height: 62 }} />

      {/* ── Header band (reference 680-686) ── */}
      <div style={{ background: "linear-gradient(175deg,#FAF3EE,#FFFDFC)", borderBottom: "1px solid #F4E6DD" }}>
        <div className="aa-wrap" style={{ padding: "clamp(44px,6vw,72px) 0", textAlign: "center" }}>
          <div style={{ font: "500 12px 'Prompt',sans-serif", letterSpacing: ".3em", color: "#B4735F" }}>BEFORE &amp; AFTER</div>
          <h1
            style={{
              margin: "14px 0 0",
              fontFamily: "'Trirong','Playfair Display',serif",
              fontWeight: 600,
              fontSize: "clamp(30px,4vw,50px)",
              color: "#33241E",
            }}
          >
            {t("รีวิวก่อน–หลัง จากเคสจริง", "Real Before & After Reviews")}
          </h1>
          <p style={{ margin: "14px auto 0", maxWidth: 560, font: "300 15px/1.85 'Prompt',sans-serif", color: "#71594E" }}>
            {t(
              "ลากแถบเลื่อนบนภาพ เพื่อเปรียบเทียบผลลัพธ์ก่อนและหลังทำหัตถการกับ The Art Aesthetic",
              "Drag the handle on each image to compare results at The Art Aesthetic.",
            )}
          </p>
        </div>
      </div>

      {/* ── Before/After comparison grid (reference 688-703) ── */}
      <section className="aa-wrap" style={{ padding: "clamp(40px,5vw,64px) 0 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 22 }}>
          {cards.map((r) => (
            <div key={r.b} data-rv style={{ background: "#fff", border: "1px solid #F0E1D8", borderRadius: 24, padding: "14px 14px 18px" }}>
              <BaSlider
                before={r.b}
                after={r.a}
                label={`${r.title} — ${dragLabel}`}
                aspect="386/580"
                sizes="(max-width:640px) 92vw, (max-width:1180px) 44vw, 320px"
              />
              <div style={{ marginTop: 14, padding: "0 6px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
                <div style={{ font: "500 14.5px 'Prompt',sans-serif", color: "#33241E" }}>{r.title}</div>
                <span style={{ flex: "none", padding: "5px 12px", borderRadius: 999, background: "#FAF3EE", font: "400 11.5px 'Prompt',sans-serif", color: "#8F543F" }}>
                  {r.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div data-rv style={{ marginTop: 26 }}>
          <BaSlider
            before="/assets/ba/lips-b.jpg"
            after="/assets/ba/lips-a.jpg"
            label={`${t("ฟิลเลอร์ปาก", "Lip filler")} — ${dragLabel}`}
            aspect="5/2"
            minHeight={200}
            sizes="(max-width:640px) 92vw, 88vw"
          />
          <div style={{ marginTop: 10, font: "300 12.5px 'Prompt',sans-serif", color: "#8F7266", textAlign: "center" }}>
            {t("โปรแกรมฉีดฟิลเลอร์ปาก — ทำเมื่อ 22/11/67", "Lip filler programme — 22 Nov 2024")}
          </div>
        </div>
        <div style={{ marginTop: 18, font: "300 12px 'Prompt',sans-serif", color: "#A08876", textAlign: "center" }}>
          {t(
            "*รูปที่ใช้รีวิวได้รับการอนุญาตจากผู้รับบริการแล้ว · ผลลัพธ์ขึ้นอยู่กับสภาพผิวของแต่ละบุคคล",
            "*Published with client consent · Results vary by individual.",
          )}
        </div>
      </section>

      {/* ── รีวิว carousel (shared ReviewRail) ── */}
      <section style={{ marginTop: "clamp(44px,6vw,64px)", background: "linear-gradient(180deg,#FAF3EE,#F5E7DE)", overflow: "hidden" }}>
        <div className="aa-wrap" style={{ padding: "clamp(44px,6vw,72px) 0" }}>
          <div data-rv style={{ maxWidth: 600 }}>
            <div style={{ font: "500 12px 'Prompt',sans-serif", letterSpacing: ".3em", color: "#B4735F" }}>REAL REVIEWS</div>
            <h2
              style={{
                margin: "14px 0 0",
                fontFamily: "'Trirong','Playfair Display',serif",
                fontWeight: 600,
                fontSize: "clamp(28px,3.4vw,42px)",
                lineHeight: 1.25,
                color: "#33241E",
              }}
            >
              {t("รีวิวจากผู้รับบริการจริง", "Real Client Reviews")}
            </h2>
            <p style={{ margin: "14px 0 0", font: "300 15px/1.9 'Prompt',sans-serif", color: "#71594E" }}>
              {t(
                "ผลลัพธ์ก่อน–หลังจากเคสจริงของ The Art Aesthetic เลื่อนหรือปัดเพื่อดูรีวิวเพิ่มเติม",
                "Real before & after cases from The Art Aesthetic — slide or swipe to browse.",
              )}
            </p>
            <p style={{ margin: "8px 0 0", font: "300 12px/1.6 'Prompt',sans-serif", color: "#A08876" }}>
              {t("ทุกภาพได้รับอนุญาตจากผู้รับบริการแล้ว", "All images shared with client consent.")}
            </p>
          </div>
          <ReviewRail lang={lang} />
        </div>
      </section>

      {/* ── แกลเลอรีรีวิวฟิลเลอร์ (rv-filler-1..6) ── */}
      <section className="aa-wrap" style={{ padding: "clamp(44px,6vw,64px) 0 0" }}>
        <h2
          data-rv
          style={{
            margin: 0,
            fontFamily: "'Trirong','Playfair Display',serif",
            fontWeight: 600,
            fontSize: "clamp(24px,2.8vw,34px)",
            color: "#33241E",
          }}
        >
          {t("รวมภาพรีวิวฟิลเลอร์ จากเคสจริง", "Filler Review Gallery")}
        </h2>
        <div className="rvw-gal" data-rv style={{ marginTop: 22 }}>
          {GALLERY.map((g, i) => (
            <div key={g} className="aa-zoom" style={{ borderRadius: 18, overflow: "hidden", boxShadow: "0 12px 26px rgba(107,74,60,.12)" }}>
              <Image
                className="aa-zoom-img"
                src={g}
                alt={t(`รีวิวฉีดฟิลเลอร์ เคสจริงที่ ${i + 1}`, `Filler review — real case ${i + 1}`)}
                width={800}
                height={800}
                sizes="(max-width:640px) 46vw, (max-width:1100px) 30vw, 420px"
                style={{ display: "block", width: "100%", height: "auto", aspectRatio: "1/1", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14, font: "300 12px 'Prompt',sans-serif", color: "#A08876", textAlign: "center" }}>{disclaimer(lang)}</div>
      </section>

      {/* ── คลิปรีวิววิดีโอ (reference 704-712) ── */}
      <section className="aa-wrap" style={{ padding: "0 0 clamp(56px,8vw,90px)" }}>
        <div
          data-rv
          style={{
            marginTop: "clamp(44px,6vw,64px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: "'Trirong','Playfair Display',serif",
              fontWeight: 600,
              fontSize: "clamp(24px,2.8vw,34px)",
              color: "#33241E",
            }}
          >
            {t("คลิปรีวิววิดีโอ", "Video Reviews")}
          </h2>
          <a
            className="rvw-yt"
            href="https://www.youtube.com/c/THEARTCLINICOfficial"
            target="_blank"
            rel="noopener"
            style={{ font: "500 13.5px 'Prompt',sans-serif", color: "#8F543F" }}
          >
            {t("ดูทั้งหมดบน YouTube →", "See all on YouTube →")}
          </a>
        </div>
        <div className="aa-rail" data-rv style={{ display: "flex", gap: 16, overflowX: "auto", padding: "24px 4px 12px" }}>
          {vids(lang).map((v) => (
            <Image
              key={v.img}
              src={v.img}
              alt={v.cap}
              width={180}
              height={320}
              sizes="180px"
              style={{
                flex: "none",
                width: 180,
                height: "auto",
                aspectRatio: "9/16",
                objectFit: "cover",
                borderRadius: 16,
                boxShadow: "0 12px 26px rgba(107,74,60,.16)",
              }}
            />
          ))}
        </div>
        <div style={{ font: "300 12px 'Prompt',sans-serif", color: "#A08876" }}>{disclaimer(lang)}</div>
      </section>

      <style>{`
.rvw-gal{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
@media (max-width:640px){.rvw-gal{grid-template-columns:repeat(2,1fr);gap:12px}}
.rvw-yt:hover{color:#A96A55}
`}</style>
    </>
  );
}
