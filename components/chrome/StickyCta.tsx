import { Lang, tr } from "@/lib/i18n";
import { LINE_URL, TEL_HREF } from "@/lib/site";

/** Desktop: ปุ่มลอย LINE วงกลม · Mobile ≤640px: sticky capsule (LINE + โทร) */
export default function StickyCta({ lang }: { lang: Lang }) {
  const t = tr(lang);
  return (
    <>
      {/* Desktop floating LINE */}
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener"
        aria-label="LINE"
        className="aa-d-only aa-hv-scale"
        style={{
          position: "fixed",
          right: 18,
          bottom: 18,
          zIndex: 80,
          width: 54,
          height: 54,
          borderRadius: "50%",
          background: "#06C755",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 14px 30px rgba(6,199,85,.4)",
        }}
      >
        <img src="/assets/line-icon.png" alt="LINE" width={30} height={30} style={{ width: 30, height: 30, borderRadius: 9 }} />
      </a>

      {/* Mobile sticky capsule */}
      <div
        className="aa-m-only aa-m-flex"
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 80,
          justifyContent: "center",
          padding: "0 16px calc(12px + env(safe-area-inset-bottom,0px))",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            gap: 6,
            width: "min(100%,430px)",
            padding: 6,
            borderRadius: 999,
            background: "rgba(43,28,22,.9)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(229,183,157,.28)",
            boxShadow: "0 18px 44px rgba(43,28,22,.38),0 2px 8px rgba(43,28,22,.24),inset 0 1px 0 rgba(255,255,255,.09)",
          }}
        >
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener"
            className="aa-white-link"
            style={{
              flex: 1.55,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "13px 10px",
              borderRadius: 999,
              background: "#06C755",
              color: "#fff",
              font: "600 14.5px 'Luxia','Noto Sans Thai',sans-serif",
              boxShadow: "0 6px 16px rgba(6,199,85,.35)",
            }}
          >
            <img src="/assets/line-icon.png" alt="LINE" width={20} height={20} style={{ width: 20, height: 20, borderRadius: 6 }} />
            {t("แอดไลน์ ปรึกษาฟรี", "LINE — Free consult")}
          </a>
          <a
            href={TEL_HREF}
            className="aa-ghost-cap"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 7,
              padding: "13px 10px",
              borderRadius: 999,
              font: "500 14.5px 'Luxia','Noto Sans Thai',sans-serif",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
                fill="currentColor"
              />
            </svg>
            {t("โทร", "Call")}
          </a>
        </div>
      </div>
    </>
  );
}
