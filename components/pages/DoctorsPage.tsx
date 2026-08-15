import type { Metadata } from "next";
import Image from "next/image";
import { Lang, tr } from "@/lib/i18n";
import { alternatesFor } from "@/lib/seo";
import { DOCTORS } from "@/lib/shared-data";
import DarkCtaBanner from "@/components/ui/DarkCtaBanner";

export function doctorsMetadata(lang: Lang): Metadata {
  const t = tr(lang);
  return {
    title: t(
      "ทีมแพทย์ — ทุกหัตถการทำโดยแพทย์ มาตรฐานเครือโรงพยาบาลศัลยกรรมตกแต่ง",
      "Our Doctors — Every Treatment Performed by Physicians",
    ),
    description: t(
      "รู้จักทีมแพทย์ The Art Aesthetic ทุกหัตถการทำโดยแพทย์เท่านั้น ภายใต้มาตรฐานเครือโรงพยาบาลศัลยกรรมตกแต่ง The Art พร้อมเลขที่ใบประกอบวิชาชีพเวชกรรมทุกท่าน ปรึกษาแพทย์ฟรีทาง LINE @theartaesthetics",
      "Meet The Art Aesthetic medical team. Every treatment is performed by licensed physicians under The Art plastic-surgery hospital group standard, with medical licence numbers listed. Free doctor consultation via LINE.",
    ),
    alternates: alternatesFor(lang, "/doctors/"),
  };
}

export default function DoctorsPage({ lang }: { lang: Lang }) {
  const t = tr(lang);
  return (
    <>
      <div style={{ height: 62 }} />
      <div className="aa-wrap" style={{ padding: "clamp(44px,6vw,72px) 0 clamp(56px,8vw,90px)" }}>
        {/* ── Page head ── */}
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <div style={{ font: "500 12px 'DB Heavent',sans-serif", letterSpacing: ".3em", color: "#B4735F" }}>MEDICAL TEAM</div>
          <h1 style={{ margin: "14px 0 0", fontWeight: 600, fontSize: "clamp(30px,4vw,50px)", color: "#33241E" }}>
            {t("ทีมแพทย์ The Art Aesthetic", "The Art Aesthetic Doctors")}
          </h1>
          <p style={{ margin: "14px 0 0", font: "300 15px/1.85 'DB Heavent',sans-serif", color: "#71594E" }}>
            {t(
              "ทุกหัตถการที่ The Art Aesthetic ทำโดยแพทย์เท่านั้น ภายใต้มาตรฐานเครือโรงพยาบาลศัลยกรรมตกแต่ง The Art",
              "Every treatment is performed by physicians, under The Art plastic-surgery hospital group standard.",
            )}
          </p>
        </div>

        {/* ── Doctor cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18, marginTop: 44 }}>
          {DOCTORS.map((d) => (
            <div
              key={d.img}
              data-rv
              className="aa-hv-card"
              style={{
                background: "linear-gradient(180deg,#fff,#FBF1EA)",
                border: "1px solid #F0E1D8",
                borderRadius: 24,
                overflow: "hidden",
              }}
            >
              <div style={{ background: "radial-gradient(120% 90% at 50% 100%,#EFD3C2 0%,#FAF3EE 70%)", padding: "22px 20px 0" }}>
                <Image
                  src={d.img}
                  alt={t(`${d.nick} — ${d.full}`, `${d.nick} (${d.full}) — The Art Aesthetic doctor`)}
                  width={480}
                  height={547}
                  sizes="(max-width: 640px) 92vw, (max-width: 1100px) 45vw, 260px"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    aspectRatio: "1/1.14",
                    objectFit: "contain",
                    objectPosition: "bottom",
                  }}
                />
              </div>
              <div style={{ padding: "16px 20px 20px" }}>
                <div style={{ font: "600 16.5px 'DB Heavent',sans-serif", color: "#33241E" }}>{d.nick}</div>
                <div style={{ font: "400 12.5px/1.5 'DB Heavent',sans-serif", color: "#33241E", marginTop: 4 }}>{d.full}</div>
                {d.role ? (
                  <div style={{ font: "500 11.5px/1.55 'DB Heavent',sans-serif", color: "#8F543F", marginTop: 4 }}>{d.role}</div>
                ) : null}
                <div style={{ font: "300 11.5px/1.55 'DB Heavent',sans-serif", color: "#8F7266", marginTop: 7 }}>{d.deg}</div>
                <div style={{ font: "300 11.5px/1.55 'DB Heavent',sans-serif", color: "#A08876", marginTop: 1 }}>{d.lic}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Dark CTA banner ── */}
        <div data-rv style={{ marginTop: "clamp(40px,5vw,60px)" }}>
          <DarkCtaBanner
            lang={lang}
            title={t(
              "ไม่แน่ใจว่าควรเริ่มจากอะไร ให้แพทย์ช่วยประเมินฟรี",
              "Not sure where to start? Get a free doctor assessment.",
            )}
            sub={t("ส่งรูปปรึกษาทาง LINE ได้เลย ไม่มีค่าใช้จ่าย", "Send photos via LINE — free of charge.")}
          />
        </div>
      </div>
    </>
  );
}
