import type { Metadata } from "next";
import Image from "next/image";
import { Lang, tr } from "@/lib/i18n";
import { alternatesFor } from "@/lib/seo";
import { LINE_URL } from "@/lib/site";
import { PROMO_VALID_UNTIL, promos } from "@/lib/shared-data";
import DarkCtaBanner from "@/components/ui/DarkCtaBanner";

export function promotionsMetadata(lang: Lang): Metadata {
  const t = tr(lang);
  return {
    title: t(
      "โปรโมชั่น ฟิลเลอร์ · โบท็อกซ์ · ร้อยไหม · เลเซอร์ ราคาชัดเจน",
      "Promotions — Filler, Botox, Thread Lift & Laser",
    ),
    description: t(
      "โปรโมชั่นคลินิกความงาม The Art Aesthetic ฟิลเลอร์ Restylane 1 cc, ฟิลเลอร์ปาก, Botox Korea, ร้อยไหม MINT, Ultraformer III, Pico Laser, IV Drip และ Diamond Baby Face แจ้งราคาชัดเจนทุกรายการ สอบถามและจองคิวผ่าน LINE @theartaesthetics",
      "The Art Aesthetic clinic promotions — Restylane filler 1 cc, lip filler, Botox Korea, MINT thread lift, Ultraformer III, Pico Laser, IV Drip and Diamond Baby Face. Every price listed. Ask and book via LINE @theartaesthetics.",
    ),
    alternates: alternatesFor(lang, "/promotions/"),
  };
}

export default function PromotionsPage({ lang }: { lang: Lang }) {
  const t = tr(lang);
  const promoCards = promos(lang);
  return (
    <>
      <div style={{ height: 62 }} />
      <div className="aa-wrap" style={{ padding: "clamp(44px,6vw,72px) 0 clamp(56px,8vw,90px)" }}>
        {/* หัวหน้าเพจ: ป้ายเดือน + h1 + lead */}
        <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              padding: "8px 18px",
              borderRadius: 999,
              background: "linear-gradient(120deg,#8F543F,#C08268)",
              color: "#fff",
              font: "500 11.5px 'Luxia','Noto Sans Thai',sans-serif",
              letterSpacing: ".26em",
            }}
          >
            {t(`ราคานี้ถึง ${PROMO_VALID_UNTIL.th}`, `VALID UNTIL ${PROMO_VALID_UNTIL.en}`)}
          </div>
          <h1 style={{ margin: "16px 0 0", fontWeight: 500, fontSize: "clamp(30px,4vw,50px)", color: "#33241E" }}>
            {t("โปรโมชั่น", "Promotions")}
          </h1>
          <p style={{ margin: "14px 0 0", font: "300 15px/1.85 'Luxia','Noto Sans Thai',sans-serif", color: "#71594E" }}>
            {t(
              "ราคาทุกรายการเป็นราคาแพ็กเกจจริง สอบถามรายละเอียดและจองคิวผ่าน LINE",
              "Every price shown is the actual package price. Ask for details and book via LINE.",
            )}
          </p>
        </div>

        {/* การ์ดโปรโมชั่น */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 20, marginTop: 44 }}>
          {promoCards.map((p) => (
            <div
              key={p.title}
              data-rv
              className="aa-hv-card"
              style={{
                background: "#fff",
                border: "1px solid #F0E1D8",
                borderRadius: 24,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width:720px) 92vw, (max-width:1200px) 46vw, 24vw"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    padding: "6px 13px",
                    borderRadius: 999,
                    background: "rgba(46,33,28,.72)",
                    backdropFilter: "blur(6px)",
                    color: "#E5B79D",
                    font: "500 10.5px 'Luxia','Noto Sans Thai',sans-serif",
                    letterSpacing: ".18em",
                  }}
                >
                  {p.badge}
                </div>
              </div>
              <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ font: "500 17px 'Luxia','Noto Sans Thai',sans-serif", color: "#33241E" }}>{p.title}</div>
                <div style={{ font: "300 13.5px/1.75 'Luxia','Noto Sans Thai',sans-serif", color: "#71594E", marginTop: 6, flex: 1 }}>{p.sub}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 12 }}>
                  <span style={{ font: "500 22px 'Luxia','Noto Sans Thai',sans-serif", color: "#8F543F" }}>
                    {p.price.toLocaleString("en-US")}
                  </span>
                  <span style={{ font: "300 13px 'Luxia','Noto Sans Thai',sans-serif", color: "#71594E" }}>{t("บาท", "THB")}</span>
                </div>
                <div style={{ font: "300 11px 'Luxia','Noto Sans Thai',sans-serif", color: "#A08876", marginTop: 2 }}>
                  {p.sku} · {t(`ถึง ${PROMO_VALID_UNTIL.th}`, `until ${PROMO_VALID_UNTIL.en}`)}
                </div>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener"
                  className="aa-hv-lift aa-white-link"
                  style={{
                    marginTop: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: 12,
                    borderRadius: 999,
                    background: "linear-gradient(120deg,#9E5F4E,#BE7E67 52%,#E7B79F)",
                    color: "#fff",
                    font: "500 13.5px 'Luxia','Noto Sans Thai',sans-serif",
                  }}
                >
                  {t("รับสิทธิ์ทาง LINE", "Claim via LINE")}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* หมายเหตุเงื่อนไข */}
        <div style={{ marginTop: 26, font: "300 12px 'Luxia','Noto Sans Thai',sans-serif", color: "#A08876", textAlign: "center" }}>
          {t(
            "*เงื่อนไขเป็นไปตามที่คลินิกกำหนด สอบถามรายละเอียดเพิ่มเติมได้ทาง LINE @theartaesthetics",
            "*Terms as specified by the clinic — full details via LINE @theartaesthetics.",
          )}
        </div>

        {/* แบนเนอร์ CTA เข้มท้ายหน้า */}
        <div data-rv style={{ marginTop: "clamp(40px,5vw,60px)" }}>
          <DarkCtaBanner
            lang={lang}
            title={t(
              "สนใจโปรโมชั่นไหน ปรึกษาแพทย์ก่อนได้ ฟรี",
              "Interested in a promotion? Talk to a doctor first, free.",
            )}
            sub={t(
              "แจ้งโปรที่สนใจทาง LINE เพื่อรับสิทธิ์และจองคิวก่อนใคร ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด",
              "Tell us the promotion you want via LINE to claim it and book ahead — no cost, no obligation.",
            )}
          />
        </div>
      </div>
    </>
  );
}
