import { Lang, tr } from "@/lib/i18n";
import { LINE_ID, LINE_QR, LINE_URL } from "@/lib/site";

/** QR Card "สแกนเพื่อแอดไลน์" — วางบนพื้นเข้ม (แบนเนอร์ CTA) — ทั้งการ์ดเป็นลิงก์ไป LINE */
export default function QrCard({ lang }: { lang: Lang }) {
  const t = tr(lang);
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener"
      className="aa-qr-card"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 22,
        background: "rgba(251,243,237,.07)",
        border: "1px solid rgba(229,183,157,.28)",
        borderRadius: 28,
        padding: "clamp(18px,2.4vw,24px)",
      }}
    >
      <img
        src={LINE_QR}
        alt={t(`QR แอดไลน์ ${LINE_ID}`, `LINE QR code ${LINE_ID}`)}
        width={148}
        height={148}
        style={{ width: 148, height: 148, background: "#fff", padding: 8, borderRadius: 18, flex: "none" }}
      />
      <div className="aa-qr-text">
        <div style={{ font: "500 11.5px 'DB Heavent',sans-serif", letterSpacing: ".26em", color: "#E5B79D" }}>SCAN TO ADD</div>
        <div className="aa-serif" style={{ fontSize: "clamp(22px,2.4vw,30px)", fontWeight: 600, color: "#FBF3ED", margin: "6px 0" }}>
          {LINE_ID}
        </div>
        <div style={{ font: "300 14px/1.7 'DB Heavent',sans-serif", color: "#C7AC9C" }}>
          {t("สแกน QR เพื่อแอดไลน์ ปรึกษาแพทย์ฟรี ไม่มีค่าใช้จ่าย", "Scan to add us on LINE — free doctor consultation.")}
        </div>
      </div>
    </a>
  );
}
