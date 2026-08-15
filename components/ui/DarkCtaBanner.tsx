import { Lang, tr } from "@/lib/i18n";
import { LineButton, TelButton } from "./CtaButtons";
import QrCard from "./QrCard";

/** แบนเนอร์ CTA เข้ม (ท้าย landing page / หน้าอื่น) — eyebrow + หัวข้อ serif + CTA + QR */
export default function DarkCtaBanner({
  lang,
  eyebrow = "FREE CONSULTATION",
  title,
  sub,
}: {
  lang: Lang;
  eyebrow?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
}) {
  const t = tr(lang);
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(120deg,#2B1C16,#4A2F24)",
        borderRadius: "clamp(26px,3vw,32px)",
        padding: "clamp(30px,4vw,48px)",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -120,
          right: -80,
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(229,183,157,.25),transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="aa-2col"
        style={{ position: "relative", display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: "clamp(24px,3.5vw,44px)", alignItems: "center" }}
      >
        <div>
          <div style={{ font: "500 12px 'Luxia','Noto Sans Thai',sans-serif", letterSpacing: ".32em", color: "#E5B79D" }}>{eyebrow}</div>
          <h2 className="aa-serif" style={{ color: "#FBF3ED", fontSize: "clamp(26px,3.2vw,40px)", lineHeight: 1.25, margin: "12px 0 0" }}>
            {title}
          </h2>
          {sub ? (
            <p style={{ font: "300 15px/1.85 'Luxia','Noto Sans Thai',sans-serif", color: "#C7AC9C", margin: "14px 0 0", maxWidth: 520 }}>{sub}</p>
          ) : null}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 26 }}>
            <LineButton lang={lang} on="dark" label={t("แอดไลน์ ปรึกษาฟรี", "LINE — Free consult")} />
            <TelButton lang={lang} on="dark" />
          </div>
        </div>
        <QrCard lang={lang} />
      </div>
    </div>
  );
}
