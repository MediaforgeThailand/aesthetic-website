import Link from "next/link";
import { LineButton } from "@/components/ui/CtaButtons";

export default function NotFound() {
  return (
    <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 6vw 60px", textAlign: "center" }}>
      <div>
        <div className="aa-pfi" style={{ fontSize: 64, color: "#C99B85" }}>404</div>
        <h1 style={{ fontSize: "clamp(24px,3vw,34px)", margin: "10px 0 12px" }}>ไม่พบหน้าที่คุณค้นหา</h1>
        <p style={{ font: "300 15px/1.85 'Prompt',sans-serif", color: "#5D4A40", maxWidth: 420, margin: "0 auto 26px" }}>
          หน้านี้อาจถูกย้ายหรือไม่มีอยู่แล้ว กลับสู่หน้าแรก หรือปรึกษาแพทย์ฟรีทาง LINE ได้เลย
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
          <LineButton lang="th" />
          <Link
            href="/"
            className="aa-hv-lift"
            style={{ display: "inline-flex", alignItems: "center", padding: "15px 32px", borderRadius: 999, border: "1px solid #D9B7A3", color: "#8F543F", font: "500 15px 'Prompt',sans-serif" }}
          >
            กลับหน้าแรก
          </Link>
        </div>
      </div>
    </div>
  );
}
