import { Lang, tr } from "@/lib/i18n";
import { LINE_ID, LINE_URL, TEL_DISPLAY, TEL_HREF } from "@/lib/site";

/** ปุ่ม LINE หลัก (pill gradient) — on="light" พื้นสว่าง / on="dark" พื้นเข้ม */
export function LineButton({
  lang,
  on = "light",
  label,
}: {
  lang: Lang;
  on?: "light" | "dark";
  label?: string;
}) {
  const t = tr(lang);
  const light = on === "light";
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener"
      className={`aa-hv-lift ${light ? "aa-white-link" : ""}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: "15px 32px",
        borderRadius: 999,
        background: light
          ? "linear-gradient(120deg,#9E5F4E,#BE7E67 52%,#E7B79F)"
          : "linear-gradient(120deg,#CE9079,#F1D3C2)",
        color: light ? "#fff" : "#2B1C16",
        font: "600 15px 'DB Heavent',sans-serif",
        boxShadow: light ? "0 10px 24px rgba(169,106,85,.3)" : "0 10px 24px rgba(43,28,22,.3)",
      }}
    >
      <img src="/assets/line-icon.png" alt="" width={20} height={20} style={{ width: 20, height: 20, borderRadius: 5 }} />
      {label ?? t("แอดไลน์ ปรึกษาฟรี", `LINE ${LINE_ID}`)}
    </a>
  );
}

/** ปุ่มโทร (pill outline รอง) */
export function TelButton({ lang, on = "light" }: { lang: Lang; on?: "light" | "dark" }) {
  const t = tr(lang);
  const light = on === "light";
  return (
    <a
      href={TEL_HREF}
      className="aa-hv-lift"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: "15px 32px",
        borderRadius: 999,
        border: light ? "1px solid #D9B7A3" : "1px solid rgba(229,183,157,.5)",
        color: light ? "#8F543F" : "#F6E8E1",
        font: "500 15px 'DB Heavent',sans-serif",
      }}
    >
      {t("โทร", "Call")} {TEL_DISPLAY}
    </a>
  );
}
