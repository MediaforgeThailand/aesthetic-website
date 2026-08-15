import Image from "next/image";
import Link from "next/link";
import { href, Lang, tr } from "@/lib/i18n";
import { LINE_URL, TX_ORDER, TxKey, txHref } from "@/lib/site";
import { PROMO_MAP, PROMO_VALID_UNTIL, baPairs, promos } from "@/lib/shared-data";
import { casesForTx, concernLabel } from "@/lib/ba-cases";
import { txData } from "@/lib/tx-data";
import { LineButton, TelButton } from "@/components/ui/CtaButtons";
import DarkCtaBanner from "@/components/ui/DarkCtaBanner";
import BaSlider from "./tx/BaSlider";
import FaqAccordion from "./tx/FaqAccordion";

/* ── SEO landing page template (reference: TREATMENT DETAIL, desktop/mobile lines 529-676) ── */

const h2Style: React.CSSProperties = {
  margin: 0,
  fontFamily: "'Luxia','Noto Sans Thai',serif",
  fontWeight: 600,
  fontSize: "clamp(24px,2.8vw,34px)",
  color: "#33241E",
};

export default function TxLandingPage({ lang, txKey }: { lang: Lang; txKey: TxKey }) {
  const t = tr(lang);
  const data = txData(lang);
  const d = data[txKey];

  const promoIdx = PROMO_MAP[txKey];
  const promo = promoIdx === undefined ? null : promos(lang)[promoIdx];

  const facts = [
    { k: t("ระยะเวลาทำ", "DURATION"), v: d.time },
    { k: t("การระงับความรู้สึก", "ANAESTHESIA"), v: d.numb },
    { k: t("การพักฟื้น", "DOWNTIME"), v: d.down },
    { k: t("ผลลัพธ์อยู่ได้", "RESULTS LAST"), v: d.last },
  ];

  const steps = [
    {
      n: "1",
      t: t("ปรึกษาและประเมินโดยแพทย์", "Doctor consultation"),
      d: t("วิเคราะห์ปัญหาและความต้องการ ฟรี ไม่มีค่าใช้จ่าย", "Free analysis of your concerns and goals."),
      line: "#E3C2AF",
    },
    {
      n: "2",
      t: t("ออกแบบแผนเฉพาะบุคคล", "Personalised plan"),
      d: t("เลือกเทคนิคและปริมาณที่เหมาะกับโครงหน้าของคุณ", "Technique and dosage tailored to you."),
      line: "#E3C2AF",
    },
    {
      n: "3",
      t: t("ทำหัตถการโดยแพทย์", "Treatment by doctor"),
      d: t("ในห้องหัตถการมาตรฐานโรงพยาบาล สะอาด ปลอดภัย", "In hospital-standard treatment rooms."),
      line: "#E3C2AF",
    },
    {
      n: "4",
      t: t("ติดตามผลและดูแลต่อเนื่อง", "Follow-up care"),
      d: t("นัดติดตามผลพร้อมช่องทางปรึกษาแพทย์หลังทำ", "Scheduled reviews and doctor access."),
      line: "transparent",
    },
  ];

  /* ภาพก่อน–หลังต้องตรงกับหัตถการของหน้านี้เท่านั้น — ดู lib/shared-data.ts และ lib/ba-cases.ts */
  const ba = baPairs(lang, txKey);
  const caseImgs = casesForTx(txKey);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <div style={{ height: 62 }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="aa-wrap" style={{ padding: "clamp(28px,4vw,44px) 0 clamp(56px,8vw,90px)" }}>
        {/* Breadcrumb */}
        <nav aria-label={t("เส้นทางหน้า", "Breadcrumb")} style={{ font: "300 13px 'Luxia','Noto Sans Thai',sans-serif", color: "#8F7266" }}>
          <Link href={href(lang, "/")} style={{ color: "#8F543F" }}>
            {t("หน้าแรก", "Home")}
          </Link>
          <span style={{ margin: "0 8px", color: "#D9B7A3" }}>/</span>
          <span>{t("หัตถการ", "Treatments")}</span>
          <span style={{ margin: "0 8px", color: "#D9B7A3" }}>/</span>
          <span style={{ color: "#33241E" }}>{d.name}</span>
        </nav>

        {/* Other-procedure chips rail */}
        <div className="aa-rail" style={{ display: "flex", gap: 10, overflowX: "auto", padding: "22px 2px 8px" }}>
          {TX_ORDER.map((id) => {
            const on = id === txKey;
            return (
              <Link
                key={id}
                href={txHref(lang, id)}
                aria-current={on ? "page" : undefined}
                style={{
                  flex: "none",
                  padding: "9px 18px",
                  borderRadius: 999,
                  border: `1px solid ${on ? "transparent" : "#EBD8CD"}`,
                  background: on ? "linear-gradient(120deg,#8F543F,#C08268)" : "#fff",
                  color: on ? "#fff" : "#6B4E3F",
                  font: "400 13px 'Luxia','Noto Sans Thai',sans-serif",
                  whiteSpace: "nowrap",
                  transition: "all .25s",
                }}
              >
                {data[id].name}
              </Link>
            );
          })}
        </div>

        {/* Hero: tag pill + h1 + lead + fact strip + CTA pair | image */}
        <div
          className="aa-2col"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr .95fr",
            gap: "clamp(28px,4vw,60px)",
            alignItems: "center",
            marginTop: 26,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "7px 15px",
                borderRadius: 999,
                background: "#FAF3EE",
                border: "1px solid #F0DCCF",
                font: "500 11.5px 'Luxia','Noto Sans Thai',sans-serif",
                letterSpacing: ".2em",
                color: "#8F543F",
              }}
            >
              {d.tag}
            </div>
            <h1
              style={{
                margin: "18px 0 0",
                fontFamily: "'Luxia','Noto Sans Thai',serif",
                fontWeight: 600,
                fontSize: "clamp(30px,3.8vw,48px)",
                lineHeight: 1.22,
                color: "#33241E",
                textWrap: "pretty",
              }}
            >
              {d.h1}
            </h1>
            <p style={{ margin: "16px 0 0", font: "300 15.5px/1.9 'Luxia','Noto Sans Thai',sans-serif", color: "#71594E", textWrap: "pretty" }}>
              {d.lead}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 12, marginTop: 26 }}>
              {facts.map((fa) => (
                <div key={fa.k} style={{ background: "#FAF3EE", border: "1px solid #F0DCCF", borderRadius: 16, padding: "14px 16px" }}>
                  <div style={{ font: "500 10.5px 'Luxia','Noto Sans Thai',sans-serif", letterSpacing: ".18em", color: "#B4735F" }}>{fa.k}</div>
                  <div style={{ font: "500 14.5px 'Luxia','Noto Sans Thai',sans-serif", color: "#33241E", marginTop: 5 }}>{fa.v}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}>
              <LineButton lang={lang} on="light" label={t("ปรึกษาแพทย์ฟรี", "Free consultation")} />
              <TelButton lang={lang} on="light" />
            </div>
          </div>
          <div
            style={{
              position: "relative",
              borderRadius: 28,
              overflow: "hidden",
              background: "linear-gradient(160deg,#F5E4D8,#EFD3C2)",
              minHeight: 340,
              aspectRatio: "4/3.4",
              boxShadow: "0 26px 54px rgba(107,74,60,.2)",
            }}
          >
            {d.img ? (
              <Image
                src={d.img}
                alt={t(`หัตถการ${d.name} ที่ The Art Aesthetic`, `${d.name} treatment at The Art Aesthetic`)}
                fill
                sizes="(max-width: 980px) 92vw, 42vw"
                priority
                style={{ objectFit: "cover" }}
              />
            ) : (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: 30,
                  textAlign: "center",
                }}
              >
                <div
                  className="aa-pfi"
                  style={{ fontWeight: 600, fontSize: "clamp(30px,3.4vw,44px)", color: "#8F543F", lineHeight: 1.15 }}
                >
                  {d.en}
                </div>
                <div style={{ font: "400 15px 'Luxia','Noto Sans Thai',sans-serif", color: "#71594E" }}>{d.name}</div>
                <div style={{ width: 54, height: 1, background: "#C99B85", marginTop: 8 }} />
                <div style={{ font: "500 11px 'Luxia','Noto Sans Thai',sans-serif", letterSpacing: ".3em", color: "#B4735F", marginTop: 4 }}>
                  THE ART AESTHETIC
                </div>
              </div>
            )}
          </div>
        </div>

        {/* About + จุดที่นิยมทำ | ขั้นตอน 4 ขั้น */}
        <div
          className="aa-2col"
          style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: "clamp(28px,4vw,60px)", marginTop: "clamp(48px,6vw,80px)" }}
        >
          <div>
            <h2 style={h2Style}>
              {t("รู้จักกับ ", "About ")}
              {d.name}
            </h2>
            <p style={{ margin: "16px 0 0", font: "300 15px/2 'Luxia','Noto Sans Thai',sans-serif", color: "#5D4A40", textWrap: "pretty" }}>{d.about1}</p>
            <p style={{ margin: "14px 0 0", font: "300 15px/2 'Luxia','Noto Sans Thai',sans-serif", color: "#5D4A40", textWrap: "pretty" }}>{d.about2}</p>
            <div style={{ marginTop: 26, font: "500 14px 'Luxia','Noto Sans Thai',sans-serif", color: "#33241E" }}>{t("จุดที่นิยมทำ", "Popular areas")}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 9, marginTop: 12 }}>
              {d.spots.map((s) => (
                <span
                  key={s}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 999,
                    background: "#FAF3EE",
                    border: "1px solid #F0DCCF",
                    font: "300 13px 'Luxia','Noto Sans Thai',sans-serif",
                    color: "#6B4E3F",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div style={{ background: "linear-gradient(180deg,#FAF3EE,#F5E7DE)", borderRadius: 26, padding: "28px 28px 30px", height: "fit-content" }}>
            <div style={{ font: "500 12px 'Luxia','Noto Sans Thai',sans-serif", letterSpacing: ".26em", color: "#B4735F" }}>HOW IT WORKS</div>
            <h3 style={{ marginTop: 8, fontFamily: "'Luxia','Noto Sans Thai',serif", fontWeight: 600, fontSize: 22, color: "#33241E" }}>
              {t("ขั้นตอนการรับบริการ", "Your Journey")}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", marginTop: 18 }}>
              {steps.map((st) => (
                <div key={st.n} style={{ display: "flex", gap: 16 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div
                      className="aa-pfi"
                      style={{
                        flex: "none",
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        background: "#fff",
                        border: "1px solid #E3C2AF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        color: "#8F543F",
                      }}
                    >
                      {st.n}
                    </div>
                    <div style={{ flex: 1, width: 1, background: st.line, margin: "4px 0" }} />
                  </div>
                  <div style={{ paddingBottom: 20 }}>
                    <div style={{ font: "500 14.5px 'Luxia','Noto Sans Thai',sans-serif", color: "#33241E" }}>{st.t}</div>
                    <div style={{ font: "300 13px/1.7 'Luxia','Noto Sans Thai',sans-serif", color: "#71594E", marginTop: 3 }}>{st.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ก่อน–หลัง (เฉพาะหัตถการที่มีรูปจริง)
            สองชุด: baPairs = ภาพแยกก่อน/หลัง ใช้ BaSlider · caseImgs = ภาพเดียวมีก่อน–หลังในตัว */}
        {(d.hasBa && ba.length) || caseImgs.length ? (
          <section style={{ marginTop: "clamp(48px,6vw,80px)" }}>
            <h2 style={h2Style}>{t("ผลลัพธ์ก่อน–หลัง จากเคสจริง", "Before & After, Real Cases")}</h2>
            {d.hasBa && ba.length ? (
              <div className="aa-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 24 }}>
                {ba.map((p) => (
                  <div key={p.before}>
                    <BaSlider
                      before={p.before}
                      after={p.after}
                      altBefore={t(`ก่อนทำ ${p.cap}`, `Before — ${p.cap}`)}
                      altAfter={t(`หลังทำ ${p.cap}`, `After — ${p.cap}`)}
                      ariaLabel={t(`เลื่อนเปรียบเทียบก่อน–หลัง ${p.cap}`, `Drag to compare before and after — ${p.cap}`)}
                    />
                    <div style={{ marginTop: 10, font: "300 12.5px 'Luxia','Noto Sans Thai',sans-serif", color: "#8F7266", textAlign: "center" }}>{p.cap}</div>
                  </div>
                ))}
              </div>
            ) : null}
            {caseImgs.length ? (
              <div className="aa-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 24 }}>
                {caseImgs.map((c) => (
                  <figure key={c.img} style={{ margin: 0 }}>
                    <Image
                      src={c.img}
                      alt={`${t("เคสจริงก่อน–หลัง", "Real before and after case")} — ${concernLabel(lang, c.concern)}`}
                      width={1072}
                      height={800}
                      sizes="(max-width:980px) 92vw, 460px"
                      style={{ display: "block", width: "100%", height: "auto", aspectRatio: "1072/800", objectFit: "cover", borderRadius: 18 }}
                    />
                    <figcaption style={{ marginTop: 10, font: "300 12.5px 'Luxia','Noto Sans Thai',sans-serif", color: "#8F7266", textAlign: "center" }}>
                      {concernLabel(lang, c.concern)}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ) : null}
            <div style={{ marginTop: 14, font: "300 12px 'Luxia','Noto Sans Thai',sans-serif", color: "#A08876", textAlign: "center" }}>
              {t("*รูปที่ใช้รีวิวได้รับการอนุญาตแล้ว · ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล", "*Photos used with permission · Results vary by individual")}
            </div>
          </section>
        ) : null}

        {/* โปรโมชั่นที่เกี่ยวข้อง */}
        {promo ? (
          <section style={{ marginTop: "clamp(48px,6vw,80px)" }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
              <h2 style={h2Style}>{t("โปรโมชั่นที่เกี่ยวข้อง", "Current Promotion")}</h2>
              <Link href={href(lang, "/promotions/")} style={{ font: "400 13.5px 'Luxia','Noto Sans Thai',sans-serif", color: "#8F543F" }}>
                {t("ดูโปรโมชั่นทั้งหมด →", "All promotions →")}
              </Link>
            </div>
            <div
              className="aa-2col"
              data-rv
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(220px,340px) 1fr",
                background: "#fff",
                border: "1px solid #F0E1D8",
                borderRadius: 26,
                overflow: "hidden",
                marginTop: 20,
              }}
            >
              <div style={{ position: "relative", minHeight: 230 }}>
                <Image src={promo.img} alt={promo.title} fill sizes="(max-width: 980px) 92vw, 340px" style={{ objectFit: "cover" }} />
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    padding: "6px 13px",
                    borderRadius: 999,
                    background: "rgba(46,33,28,.72)",
                    backdropFilter: "blur(6px)",
                    color: "#E5B79D",
                    font: "500 10.5px 'Luxia','Noto Sans Thai',sans-serif",
                    letterSpacing: ".18em",
                  }}
                >
                  {promo.badge}
                </div>
              </div>
              <div style={{ padding: "clamp(22px,3vw,34px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3 style={{ margin: 0, font: "600 clamp(17px,2vw,21px) 'Luxia','Noto Sans Thai',sans-serif", color: "#33241E" }}>{promo.title}</h3>
                <div style={{ font: "300 14px/1.85 'Luxia','Noto Sans Thai',sans-serif", color: "#71594E", marginTop: 8, maxWidth: 520 }}>{promo.sub}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 12 }}>
                  <span style={{ font: "600 24px 'Luxia','Noto Sans Thai',sans-serif", color: "#8F543F" }}>
                    {promo.price.toLocaleString("en-US")}
                  </span>
                  <span style={{ font: "300 14px 'Luxia','Noto Sans Thai',sans-serif", color: "#71594E" }}>{t("บาท", "THB")}</span>
                  <span style={{ font: "300 11.5px 'Luxia','Noto Sans Thai',sans-serif", color: "#A08876" }}>
                    {promo.sku} · {t(`ถึง ${PROMO_VALID_UNTIL.th}`, `until ${PROMO_VALID_UNTIL.en}`)}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 20 }}>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener"
                    className="aa-hv-lift aa-white-link"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 9,
                      padding: "13px 28px",
                      borderRadius: 999,
                      background: "linear-gradient(120deg,#9E5F4E,#BE7E67 52%,#E7B79F)",
                      color: "#fff",
                      font: "500 14px 'Luxia','Noto Sans Thai',sans-serif",
                    }}
                  >
                    {t("รับสิทธิ์ทาง LINE", "Claim via LINE")}
                  </a>
                </div>
                <div style={{ font: "300 11.5px 'Luxia','Noto Sans Thai',sans-serif", color: "#A08876", marginTop: 12 }}>
                  {t("*เงื่อนไขเป็นไปตามที่คลินิกกำหนด", "*Terms as specified by the clinic.")}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* FAQ */}
        <section style={{ marginTop: "clamp(48px,6vw,80px)", maxWidth: 820 }}>
          <h2 style={h2Style}>{t("คำถามที่พบบ่อย", "FAQ")}</h2>
          <FaqAccordion faqs={d.faqs} />
        </section>

        {/* Dark CTA banner + QR */}
        <div style={{ marginTop: "clamp(48px,6vw,72px)" }}>
          <DarkCtaBanner
            lang={lang}
            title={
              <>
                {t("สนใจ ", "Interested in ")}
                {d.name}
                {t(" ปรึกษาแพทย์ก่อนได้ ฟรี", "? Talk to a doctor first, free.")}
              </>
            }
            sub={t("ประเมินโดยแพทย์ ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด", "Doctor assessment — no cost, no obligation.")}
          />
        </div>

        {/* Keyword block */}
        <p style={{ marginTop: 30, font: "300 12px/1.9 'Luxia','Noto Sans Thai',sans-serif", color: "#B39F92" }}>{d.keywords.join(" · ")}</p>
      </div>
    </>
  );
}
