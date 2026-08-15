import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Lang, href, tr } from "@/lib/i18n";
import { alternatesFor } from "@/lib/seo";
import { LINE_ID, txHref } from "@/lib/site";
import { DOCTORS, disclaimer, vids } from "@/lib/shared-data";
import { LineButton, TelButton } from "@/components/ui/CtaButtons";
import QrCard from "@/components/ui/QrCard";
import ReviewRail from "@/components/ui/ReviewRail";
import ConcernTabs from "@/components/pages/home/ConcernTabs";
import HeroFx from "@/components/pages/home/HeroFx";

export function homeMetadata(lang: Lang): Metadata {
  const t = tr(lang);
  return {
    title: t(
      "คลินิกความงามมาตรฐานโรงพยาบาลศัลยกรรม ฉีดฟิลเลอร์ โบท็อกซ์ ยกกระชับ โดยทีมแพทย์",
      "Hospital-Standard Aesthetic Clinic — Filler, Botox & Lifting by Doctors",
    ),
    description: t(
      "The Art Aesthetic แผนกผิวพรรณและความงาม เครือโรงพยาบาลศัลยกรรมตกแต่ง The Art ฉีดฟิลเลอร์ โบท็อกซ์ ร้อยไหม Ultraformer Thermage Pico Laser IV Drip ทำโดยแพทย์ทุกเคส สาขาดอนเมือง ลาดพร้าว พัทยา ปรึกษาแพทย์ฟรี LINE @theartaesthetics",
      "The Art Aesthetic — the skin & aesthetic department of The Art Plastic Surgery Hospital group. Filler, Botox, thread lifts, Ultraformer, Thermage, Pico Laser and IV drips, performed by doctors every case. Don Mueang, Lat Phrao and Pattaya. Free doctor consultation on LINE.",
    ),
    alternates: alternatesFor(lang, "/"),
  };
}

/* วงกลม gradient ลอยในฮีโร่ */
function HeroCircle({
  plx,
  className,
  pos,
  size,
  bg,
  shadow,
  extra,
}: {
  plx: string;
  className?: string;
  pos: React.CSSProperties;
  size: number;
  bg: string;
  shadow?: string;
  extra?: React.CSSProperties;
}) {
  return (
    <div data-plx={plx} className={className} style={{ position: "absolute", ...pos }} aria-hidden>
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: bg,
          ...(shadow ? { boxShadow: shadow } : {}),
          ...extra,
        }}
      />
    </div>
  );
}

export default function HomePage({ lang }: { lang: Lang }) {
  const t = tr(lang);

  const top5: { rank: string; en: string; sub: string; key: "lipfiller" | "dollyeye" | "ultraformer" }[] = [
    { rank: "01", en: t("Filler ปาก", "Lip Filler"), sub: t("เติมริมฝีปากให้ได้รูป ฉ่ำ ดูเป็นธรรมชาติ", "Natural, well-shaped lip volume"), key: "lipfiller" },
    { rank: "02", en: t("Filler ดอลลี่อาย", "Dolly Eye Filler"), sub: t("เติมใต้ตา ตาดูสดใส ไม่โทรมเหมือนอดนอน", "Brighter, refreshed under-eyes"), key: "dollyeye" },
    { rank: "03", en: "Ultraformer", sub: t("ยกกระชับหน้าและตัว ไม่ต้องผ่าตัด", "Non-surgical face & body lifting"), key: "ultraformer" },
  ];

  const tourRooms = [
    { img: "/assets/tour/room1.jpg", title: t("เคาน์เตอร์ต้อนรับ", "Reception") },
    { img: "/assets/tour/room2.jpg", title: t("โซนพักคอย", "Waiting Lounge") },
    { img: "/assets/tour/room3.jpg", title: t("ห้องหัตถการ", "Treatment Room") },
  ];

  const methods = [
    {
      href: txHref(lang, "filler"),
      img: "/assets/method-inject.jpg",
      imgW: 5000,
      imgH: 3333,
      imgOp: 0.9,
      count: 10,
      en: "Injectables",
      sub: t("หัตถการฉีด", "Injection treatments"),
      desc: t("ฟิลเลอร์ โบท็อกซ์ ร้อยไหม สกินบูสเตอร์ เมโสแฟต", "Filler, botox, threads, skin boosters."),
      delay: undefined as string | undefined,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="m18 2 4 4M14.5 5.5 3 17v4h4L18.5 9.5M13 7l4 4" stroke="#8F543F" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      href: txHref(lang, "ultraformer"),
      img: "/assets/method-machine.png",
      imgW: 918,
      imgH: 769,
      imgOp: 0.92,
      count: 9,
      en: "Machines",
      sub: t("เครื่องมือแพทย์", "Energy devices"),
      desc: t("Ultraformer, Thermage, Pico Laser, เลเซอร์กำจัดขน", "Ultraformer, Thermage, Pico, lasers."),
      delay: ".06s",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 3h12M9 3v5l-5 9a3 3 0 0 0 2.6 4.5h10.8A3 3 0 0 0 20 17l-5-9V3" stroke="#8F543F" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10" cy="16" r="1.2" fill="#8F543F" />
          <circle cx="14" cy="18" r="1.2" fill="#8F543F" />
        </svg>
      ),
    },
    {
      href: txHref(lang, "diamond"),
      img: "/assets/method-treatment.jpg",
      imgW: 5760,
      imgH: 3840,
      imgOp: 0.9,
      count: 5,
      en: "Treatments",
      sub: t("ทรีตเมนต์ผิว", "Skin treatments"),
      desc: t("IV Drip, Diamond Baby Face, ทรีตเมนต์สิวและผิวแพ้ง่าย", "IV drips, signature facials, calming care."),
      delay: ".12s",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 21c-5 0-8-3.5-8-8 0-5.5 4.5-9.5 8-11 3.5 1.5 8 5.5 8 11 0 4.5-3 8-8 8Z" stroke="#8F543F" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M12 21V8M12 12l3.5-2.5M12 15 8.5 12.5" stroke="#8F543F" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{`
        @media (max-width:640px){
          .home-plx1{top:7% !important;left:-44px !important}
          .home-plx2{top:54% !important;left:5% !important}
          .home-herotext{left:0 !important;right:0 !important;top:24% !important;width:auto !important;text-align:center !important;padding:0 5vw}
          .home-herotext h1{font-size:clamp(36px,10.5vw,54px) !important;line-height:1.08 !important}
          .home-herosub{justify-content:center !important;gap:12px !important;margin-top:14px !important}
          .home-herosub-t{font-size:clamp(14px,4.2vw,19px) !important}
          .home-top5-en{font-size:clamp(19px,5.4vw,24px) !important}
          .home-con01{margin-left:0 !important}
        }
        .home-method{transition:transform .3s,box-shadow .3s,background .3s}
        .home-method:hover{transform:translateY(-6px);box-shadow:0 22px 44px rgba(169,106,85,.16);background:#FAF3EE !important}
        .home-top5{transition:background .25s,padding .25s}
        .home-top5:hover{background:#FAF3EE;padding:20px 16px !important}
        .home-vid{transition:transform .3s}
        .home-vid:hover{transform:translateY(-6px)}
        .home-revall{transition:background .25s}
        .home-revall:hover{background:#fff}
      `}</style>

      {/* ══════ HERO (100svh) ══════ */}
      <div
        id="aa-hero"
        style={{
          position: "relative",
          zIndex: 1,
          height: "100svh",
          minHeight: 560,
          overflow: "hidden",
          background: "linear-gradient(160deg,#FBF5F0 0%,#F3E4DA 46%,#EAD7C9 100%)",
        }}
      >
        <HeroFx />
        <img
          src="/assets/hero-hospital.jpg"
          alt="The Art Hospital"
          width={1920}
          height={1080}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 42%" }}
        />
        {/* desktop/tablet: ทีมแพทย์ซ้าย + นพ.ธรรมรัตน์ขวา */}
        <img
          className="aa-d-only"
          src="/assets/hero-doctors.png"
          alt={t("ทีมแพทย์ The Art", "The Art medical team")}
          width={1146}
          height={657}
          style={{
            position: "absolute",
            left: "clamp(20px,4vw,90px)",
            bottom: 0,
            height: "min(50svh,486px)",
            width: "auto",
            maxWidth: "52%",
            objectFit: "contain",
            objectPosition: "left bottom",
            zIndex: 2,
            filter: "drop-shadow(0 24px 48px rgba(90,60,50,.28))",
          }}
        />
        <img
          className="aa-d-only"
          src="/assets/hero-art-blue.png"
          alt={t("นพ.ธรรมรัตน์ · The Art", "Dr. Thammarat · The Art")}
          width={790}
          height={772}
          style={{
            position: "absolute",
            right: "clamp(-24px,-1vw,10px)",
            bottom: 0,
            height: "min(85svh,830px)",
            width: "auto",
            maxWidth: "62%",
            objectFit: "contain",
            objectPosition: "right bottom",
            zIndex: 3,
            filter: "drop-shadow(0 28px 54px rgba(90,60,50,.3))",
          }}
        />
        {/* mobile: ทีมแพทย์รูปเดียวกึ่งกลาง (bleed) */}
        <img
          className="aa-m-only"
          src="/assets/hero-doctors.png"
          alt={t("ทีมแพทย์ The Art", "The Art medical team")}
          width={1146}
          height={657}
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: 0,
            width: "min(140%,780px)",
            maxWidth: "none",
            height: "auto",
            maxHeight: "60svh",
            objectFit: "contain",
            objectPosition: "center bottom",
            zIndex: 2,
            filter: "drop-shadow(0 24px 48px rgba(90,60,50,.28))",
          }}
        />
        <HeroCircle
          plx="-0.16"
          className="home-plx1"
          pos={{ top: "15%", left: "13%" }}
          size={118}
          bg="radial-gradient(circle at 32% 28%,#FFFFFF 0%,#FBEBE0 32%,#E7C3AC 64%,#B87A66 100%)"
          shadow="0 24px 50px rgba(188,114,104,.35),inset 0 -8px 18px rgba(255,255,255,.55)"
          extra={{ opacity: 0.94 }}
        />
        <HeroCircle
          plx="-0.3"
          className="home-plx2"
          pos={{ top: "56%", left: "25%" }}
          size={52}
          bg="radial-gradient(circle at 32% 28%,#FFFFFF 0%,#FBEBE0 34%,#E4B49E 66%,#B47765 100%)"
          shadow="0 14px 30px rgba(188,114,104,.32),inset 0 -5px 10px rgba(255,255,255,.5)"
        />
        <div
          className="home-herotext"
          style={{
            position: "absolute",
            left: "6%",
            top: "21%",
            zIndex: 4,
            textAlign: "left",
            pointerEvents: "none",
            width: "min(60vw,900px)",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "clamp(38px,5.2vw,80px)", lineHeight: 1.06, whiteSpace: "nowrap", textWrap: "balance" }}>
            The Art Hospital
          </h1>
          <div className="home-herosub" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 14, marginTop: 16 }}>
            <span style={{ width: 34, height: 1, background: "#B4886F" }} />
            <span
              className="home-herosub-t"
              style={{
                font: "400 clamp(17px,2.5vw,31px) 'Luxia','Noto Sans Thai',sans-serif",
                letterSpacing: ".1em",
                color: "#6E5142",
                textShadow: "0 1px 18px rgba(255,255,255,.8)",
              }}
            >
              {t("แผนกผิวพรรณและความงาม", "Skin & Aesthetic Department")}
            </span>
            <span style={{ width: 34, height: 1, background: "#B4886F" }} />
          </div>
        </div>
        <HeroCircle
          plx="-0.09"
          pos={{ top: "24%", right: "12%" }}
          size={34}
          bg="radial-gradient(circle at 32% 28%,#FFF 0%,#FAE6D8 40%,#DDAE93 74%,#B47765 100%)"
          shadow="0 10px 22px rgba(188,114,104,.3)"
        />
        <HeroCircle
          plx="-0.22"
          pos={{ bottom: "20%", right: "7%" }}
          size={74}
          bg="radial-gradient(circle at 32% 28%,#FFF 0%,#FAE6D8 36%,#DDAE93 70%,#A96A55 100%)"
          shadow="0 18px 38px rgba(188,114,104,.32),inset 0 -6px 12px rgba(255,255,255,.5)"
          extra={{ filter: "blur(1.5px)", opacity: 0.85 }}
        />
        <HeroCircle
          plx="-0.05"
          pos={{ top: "12%", left: "6%" }}
          size={90}
          bg="radial-gradient(circle at 32% 28%,#FFF 0%,#FBEFE4 40%,#EBC8B4 78%,#C48A72 100%)"
          extra={{ filter: "blur(7px)", opacity: 0.55 }}
        />
        <div
          aria-hidden
          style={{ position: "absolute", top: "30%", left: "38%", width: 8, height: 8, borderRadius: "50%", background: "#fff", boxShadow: "0 0 12px 3px rgba(255,255,255,.9)", opacity: 0.8 }}
        />
        <div
          aria-hidden
          style={{ position: "absolute", top: "70%", left: "12%", width: 6, height: 6, borderRadius: "50%", background: "#F2D3BF", boxShadow: "0 0 10px 2px rgba(246,201,196,.9)" }}
        />
      </div>

      {/* ══════ เนื้อหาทับฮีโร่ (มุมบนโค้ง) ══════ */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          background: "#FFFDFC",
          borderRadius: "clamp(24px,4vw,40px) clamp(24px,4vw,40px) 0 0",
          boxShadow: "0 -28px 80px rgba(150,90,90,.2)",
          overflow: "hidden",
          marginTop: -40,
        }}
      >
        {/* ── OUR HOSPITAL + tour rooms ── */}
        <div className="aa-wrap" style={{ padding: "clamp(52px,7vw,92px) 0 clamp(24px,3vw,36px)" }}>
          <div data-rv style={{ textAlign: "center", maxWidth: 660, margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 30, height: 1, background: "#DCC0A8" }} />
              <span style={{ font: "500 12px 'Luxia','Noto Sans Thai',sans-serif", letterSpacing: ".3em", color: "#B4735F" }}>OUR HOSPITAL</span>
              <span style={{ width: 30, height: 1, background: "#DCC0A8" }} />
            </div>
            <h2 style={{ margin: "16px 0 0", fontWeight: 600, fontSize: "clamp(28px,3.6vw,44px)", lineHeight: 1.22, color: "#33241E" }}>
              The Art Hospital
            </h2>
            <p style={{ margin: "14px 0 0", font: "300 15px/1.85 'Luxia','Noto Sans Thai',sans-serif", color: "#71594E" }}>
              {t("ผสานศาสตร์ทางการแพทย์ เข้ากับศิลปะแห่งความงามอย่างสมดุล", "Where medical science meets the art of beauty, in perfect balance.")}
            </p>
          </div>
          <div data-rv style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18, marginTop: 36 }}>
            {tourRooms.map((room) => (
              <div
                key={room.img}
                className="aa-zoom"
                style={{ position: "relative", borderRadius: 22, overflow: "hidden", aspectRatio: "4/3.3", boxShadow: "0 18px 42px rgba(107,74,60,.16)" }}
              >
                <Image
                  className="aa-zoom-img"
                  src={room.img}
                  alt={room.title}
                  fill
                  sizes="(max-width: 720px) 92vw, (max-width: 1200px) 45vw, 30vw"
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(43,28,22,0) 52%,rgba(43,28,22,.74))" }} />
                <div style={{ position: "absolute", left: 18, right: 18, bottom: 16 }}>
                  <div className="aa-serif" style={{ fontWeight: 600, fontSize: "clamp(17px,1.9vw,21px)", color: "#FBF3ED" }}>{room.title}</div>
                  <div style={{ font: "300 12px 'Luxia','Noto Sans Thai',sans-serif", color: "#E7CDBD", marginTop: 2 }}>
                    {t("แผนกผิวพรรณและความงาม", "Skin & Aesthetic")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── ภาพโรงพยาบาล ── */}
        <div data-rv className="aa-wrap" style={{ padding: "clamp(6px,1.5vw,16px) 0 0" }}>
          <div style={{ position: "relative", borderRadius: "clamp(18px,3vw,26px)", overflow: "hidden", boxShadow: "0 22px 54px rgba(107,74,60,.2)" }}>
            <Image
              src="/assets/hospital-side2.jpg"
              alt="The Art Hospital"
              width={3168}
              height={1344}
              sizes="(max-width: 640px) 92vw, 88vw"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* ── ART & SCIENCE / About us ── */}
        <div
          className="aa-wrap aa-2col"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr .85fr",
            gap: "clamp(28px,4vw,52px)",
            alignItems: "center",
            padding: "clamp(56px,8vw,100px) 0",
          }}
        >
          <div data-rv style={{ position: "relative", justifySelf: "center", width: "min(820px,96vw)" }}>
            <Image
              src="/assets/who-team.png"
              alt={t("ทีมแพทย์ The Art", "The Art medical team")}
              width={2150}
              height={1300}
              sizes="(max-width: 980px) 92vw, 60vw"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>
          <div>
            <h2 data-rv style={{ margin: 0, fontWeight: 600, fontSize: "clamp(34px,4.4vw,60px)", lineHeight: 1.05, letterSpacing: ".01em", color: "#33241E" }}>
              ART &amp; SCIENCE
            </h2>
            <div data-rv style={{ margin: "12px 0 0", font: "400 clamp(15px,1.5vw,19px)/1.55 'Luxia','Noto Sans Thai',sans-serif", color: "#8F6A5A" }}>
              {t(
                <>ผสานศาสตร์ทางการแพทย์<br />เข้ากับศิลปะแห่งความงามอย่างสมดุล</>,
                <>Where medical science meets<br />the art of natural beauty</>,
              )}
            </div>
            <div data-rv style={{ width: "min(340px,60%)", height: 1, background: "#D9BFAF", margin: "26px 0 0" }} />
            <h3 data-rv style={{ margin: "26px 0 0", fontWeight: 600, fontSize: "clamp(26px,2.9vw,38px)", lineHeight: 1.15, color: "#33241E" }}>
              About us
            </h3>
            <div data-rv style={{ margin: "8px 0 0", font: "400 clamp(14px,1.35vw,17px) 'Luxia','Noto Sans Thai',sans-serif", color: "#B4907E" }}>
              {t("เกี่ยวกับดิอาท", "About The Art")}
            </div>
            <p data-rv style={{ margin: "20px 0 0", font: "300 15px/1.95 'Luxia','Noto Sans Thai',sans-serif", color: "#5D4A40", maxWidth: 600, textWrap: "pretty" }}>
              {t(
                "เพราะ…ความสวยไม่ได้เกิดขึ้นแค่ในห้องผ่าตัด แต่เริ่มต้นตั้งแต่การออกแบบโรงพยาบาล เพราะเราเชื่อว่า “ประสบการณ์” สำคัญไม่แพ้ “ผลลัพธ์” ในทุกตารางเมตร…",
                "Beauty doesn't begin in the operating room — it begins with how the hospital itself is designed. We believe the experience matters as much as the result, in every square metre.",
              )}
            </p>
            <p data-rv style={{ margin: "12px 0 0", font: "300 15px/1.95 'Luxia','Noto Sans Thai',sans-serif", color: "#5D4A40", maxWidth: 600, textWrap: "pretty" }}>
              {t(
                "สัมผัสความพิถีพิถันในการออกแบบ ที่ซึ่งหลอมรวมศิลปะ ความงาม และมาตรฐานทางการแพทย์ ได้ที่โรงพยาบาลศัลยกรรมดิอาท",
                "Experience that meticulous design — where art, beauty and medical standards converge — at The Art Plastic Surgery Hospital.",
              )}
            </p>
          </div>
        </div>

        {/* ── REAL REVIEWS ── */}
        <div style={{ background: "linear-gradient(180deg,#FAF3EE,#F5E7DE)", overflow: "hidden" }}>
          <div className="aa-wrap" style={{ padding: "clamp(56px,8vw,100px) 0" }}>
            <div data-rv style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 20 }}>
              <div style={{ maxWidth: 600 }}>
                <div style={{ font: "500 12px 'Luxia','Noto Sans Thai',sans-serif", letterSpacing: ".3em", color: "#B4735F" }}>REAL REVIEWS</div>
                <h2 style={{ margin: "14px 0 0", fontWeight: 600, fontSize: "clamp(28px,3.4vw,42px)", lineHeight: 1.25, color: "#33241E" }}>
                  {t("รีวิวจากผู้รับบริการจริง", "Real Client Reviews")}
                </h2>
                <p style={{ margin: "14px 0 0", font: "300 15px/1.9 'Luxia','Noto Sans Thai',sans-serif", color: "#71594E" }}>
                  {t(
                    "ผลลัพธ์ก่อน–หลังจากเคสจริงของ The Art Aesthetic เลื่อนหรือปัดเพื่อดูรีวิวเพิ่มเติม",
                    "Real before & after cases from The Art Aesthetic — slide or swipe to browse.",
                  )}
                </p>
                <p style={{ margin: "8px 0 0", font: "300 12px/1.6 'Luxia','Noto Sans Thai',sans-serif", color: "#A08876" }}>
                  {t("ทุกภาพได้รับอนุญาตจากผู้รับบริการแล้ว", "All images shared with client consent.")}
                </p>
              </div>
            </div>
            <ReviewRail lang={lang} />
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, marginTop: 18 }}>
              <Link
                href={href(lang, "/reviews/")}
                className="home-revall"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 28px",
                  borderRadius: 999,
                  border: "1px solid #C99B85",
                  background: "transparent",
                  color: "#8F543F",
                  font: "500 14.5px 'Luxia','Noto Sans Thai',sans-serif",
                }}
              >
                {t("ดูรีวิวทั้งหมด", "View all reviews")} →
              </Link>
            </div>
          </div>
        </div>

        {/* ── WHAT WE SOLVE ── */}
        <div className="aa-wrap" style={{ position: "relative", padding: "clamp(56px,8vw,100px) 0" }}>
          <div
            data-rv
            aria-hidden
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100vw",
              height: "min(78%,620px)",
              overflow: "hidden",
              zIndex: -1,
              pointerEvents: "none",
            }}
          >
            <img
              src="/assets/bg-building.jpg"
              alt=""
              aria-hidden
              width={1800}
              height={764}
              style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", opacity: 0.15 }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(255,253,252,0) 40%,#FFFDFC 100%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,#FFFDFC 0%,rgba(255,253,252,0) 14%,rgba(255,253,252,0) 86%,#FFFDFC 100%)" }} />
          </div>
          <div data-rv style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
            <div style={{ font: "500 12px 'Luxia','Noto Sans Thai',sans-serif", letterSpacing: ".3em", color: "#B4735F" }}>WHAT WE SOLVE</div>
            <h2 style={{ margin: "14px 0 0", fontWeight: 600, fontSize: "clamp(28px,3.4vw,42px)", lineHeight: 1.25, color: "#33241E" }}>
              {t("เลือกการรักษาที่ใช่สำหรับคุณ", "Find the Right Treatment")}
            </h2>
            <p style={{ margin: "14px 0 0", font: "300 15px/1.85 'Luxia','Noto Sans Thai',sans-serif", color: "#71594E" }}>
              {t(
                "เริ่มจากปัญหาที่กังวล รูปแบบการรักษาที่สนใจ หรือหมวดโปรแกรมยอดนิยม — ระบบจะพาไปยังหัตถการที่ตรงกับคุณ",
                "Start from your concern, a treatment method, or our most popular categories.",
              )}
            </p>
          </div>

          {/* 01 เลือกตามปัญหา */}
          <div data-rv className="home-con01" style={{ display: "flex", alignItems: "baseline", gap: 14, marginTop: 56, marginLeft: "clamp(0px,42%,520px)" }}>
            <span className="aa-pfi" style={{ fontSize: 16, color: "#C4A996" }}>01</span>
            <h3 style={{ margin: 0, fontWeight: 600, fontSize: "clamp(21px,2.4vw,28px)", color: "#33241E" }}>
              {t("เลือกตามปัญหา", "By Concern")}
            </h3>
          </div>
          <ConcernTabs lang={lang} />

          {/* 02 เลือกตามรูปแบบการรักษา */}
          <div data-rv style={{ display: "flex", alignItems: "baseline", gap: 14, marginTop: 52 }}>
            <span className="aa-pfi" style={{ fontSize: 17, color: "#C99B85" }}>02</span>
            <h3 style={{ margin: 0, fontWeight: 600, fontSize: "clamp(21px,2.4vw,28px)", color: "#33241E" }}>
              {t("เลือกตามรูปแบบการรักษา", "By Method")}
            </h3>
          </div>
          <div className="aa-3col" style={{ marginTop: 22 }}>
            {methods.map((m) => (
              <Link
                key={m.en}
                href={m.href}
                data-rv
                className="home-method"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  textAlign: "left",
                  background: "#fff",
                  border: "1px solid #F0E1D8",
                  borderRadius: 24,
                  padding: 26,
                  display: "block",
                  ...(m.delay ? { transitionDelay: m.delay } : {}),
                }}
              >
                <img
                  src={m.img}
                  alt=""
                  aria-hidden
                  width={m.imgW}
                  height={m.imgH}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    height: "100%",
                    width: "60%",
                    objectFit: "cover",
                    opacity: m.imgOp,
                    WebkitMaskImage: "linear-gradient(to left,#000 42%,transparent)",
                    maskImage: "linear-gradient(to left,#000 42%,transparent)",
                    pointerEvents: "none",
                  }}
                />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#FAF3EE,#F0DCCF)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {m.icon}
                    </span>
                    <span
                      style={{
                        padding: "5px 12px",
                        borderRadius: 999,
                        background: "#FAF3EE",
                        border: "1px solid #F0DCCF",
                        font: "500 12px 'Luxia','Noto Sans Thai',sans-serif",
                        color: "#8F543F",
                      }}
                    >
                      {m.count} {t("โปรแกรม", "programs")}
                    </span>
                  </div>
                  <div className="aa-serif" style={{ marginTop: 16, fontWeight: 600, fontSize: 22, color: "#33241E" }}>{m.en}</div>
                  <div style={{ marginTop: 3, font: "500 15px 'Luxia','Noto Sans Thai',sans-serif", color: "#8F543F" }}>{m.sub}</div>
                  <p style={{ margin: "8px 0 0", font: "300 13.5px/1.7 'Luxia','Noto Sans Thai',sans-serif", color: "#71594E" }}>{m.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* 03 หมวดโปรแกรมยอดนิยมตอนนี้ */}
          <div data-rv style={{ display: "flex", alignItems: "baseline", gap: 14, marginTop: 52, paddingInline: "clamp(8px,2vw,36px)" }}>
            <span className="aa-pfi" style={{ fontSize: 17, color: "#C99B85" }}>03</span>
            <h3 style={{ margin: 0, fontWeight: 600, fontSize: "clamp(21px,2.4vw,28px)", color: "#33241E" }}>
              {t("หมวดโปรแกรมยอดนิยมตอนนี้", "Popular Now — Top 3")}
            </h3>
          </div>
          <div style={{ marginTop: 10, paddingInline: "clamp(8px,2vw,36px)", borderTop: "1px solid #F0E1D8" }}>
            {top5.map((tp) => (
              <Link
                key={tp.key}
                href={txHref(lang, tp.key)}
                data-rv
                className="home-top5"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  borderBottom: "1px solid #F0E1D8",
                  textAlign: "left",
                  padding: "20px 8px",
                }}
              >
                <span style={{ display: "flex", alignItems: "baseline", gap: 18, minWidth: 0 }}>
                  <span className="aa-pfi" style={{ fontSize: 19, color: "#C99B85", flex: "none" }}>{tp.rank}</span>
                  <span style={{ minWidth: 0 }}>
                    <span className="aa-serif home-top5-en" style={{ display: "block", fontWeight: 600, fontSize: "clamp(20px,2.6vw,30px)", color: "#33241E" }}>
                      {tp.en}
                    </span>
                    <span style={{ display: "block", font: "300 13.5px 'Luxia','Noto Sans Thai',sans-serif", color: "#8F7266", marginTop: 2 }}>{tp.sub}</span>
                  </span>
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 14, flex: "none" }}>
                  <span
                    className="aa-m-hide"
                    style={{
                      padding: "6px 14px",
                      borderRadius: 999,
                      background: "#FAF3EE",
                      border: "1px solid #F0DCCF",
                      font: "400 12px 'Luxia','Noto Sans Thai',sans-serif",
                      color: "#8F543F",
                    }}
                  >
                    {t("ดูรายละเอียด", "Details")}
                  </span>
                  <span style={{ color: "#B4735F", fontSize: 20 }}>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── MEDICAL TEAM ── */}
        <div style={{ position: "relative", background: "#FAF3EE", overflow: "hidden" }}>
          <img
            src="/assets/team-bg.png"
            alt=""
            aria-hidden
            width={3168}
            height={1344}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.5, pointerEvents: "none" }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg,rgba(250,243,238,.55),rgba(250,243,238,.15) 40%,rgba(250,243,238,.55))",
              pointerEvents: "none",
            }}
          />
          <div className="aa-wrap" style={{ position: "relative", padding: "clamp(56px,8vw,100px) 0" }}>
            <div data-rv style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 18 }}>
              <div>
                <div style={{ font: "500 12px 'Luxia','Noto Sans Thai',sans-serif", letterSpacing: ".3em", color: "#B4735F" }}>MEDICAL TEAM</div>
                <h2 style={{ margin: "14px 0 0", fontWeight: 600, fontSize: "clamp(28px,3.4vw,42px)", color: "#33241E" }}>
                  {t("ทีมแพทย์ของเรา", "Our Doctors")}
                </h2>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 18, marginTop: 36 }}>
              {/* แสดงแพทย์ครบทุกท่าน — เดิม slice(0,5) ทำให้หมอโอมหายไปหลังเพิ่มหมออาทเข้ามาเป็นคนแรก */}
              {DOCTORS.map((d) => (
                <div
                  key={d.img}
                  data-rv
                  className="aa-hv-card"
                  style={{ background: "linear-gradient(180deg,#fff,#FBF1EA)", border: "1px solid #F0E1D8", borderRadius: 24, overflow: "hidden" }}
                >
                  <div style={{ background: "radial-gradient(120% 90% at 50% 100%,#EFD3C2 0%,#FAF3EE 70%)", padding: "22px 20px 0" }}>
                    <Image
                      src={d.img}
                      alt={t(`${d.nick} — ${d.full}`, `${d.nick} (${d.full}) — The Art Aesthetic doctor`)}
                      width={480}
                      height={547}
                      sizes="(max-width: 640px) 92vw, (max-width: 1100px) 45vw, 240px"
                      style={{ display: "block", width: "100%", height: "auto", aspectRatio: "1/1.14", objectFit: "contain", objectPosition: "bottom" }}
                    />
                  </div>
                  <div style={{ padding: "16px 20px 20px" }}>
                    <div style={{ font: "600 16.5px 'Luxia','Noto Sans Thai',sans-serif", color: "#33241E" }}>{d.nick}</div>
                    <div style={{ font: "400 12.5px/1.5 'Luxia','Noto Sans Thai',sans-serif", color: "#33241E", marginTop: 4 }}>{d.full}</div>
                    <div style={{ font: "300 11.5px/1.55 'Luxia','Noto Sans Thai',sans-serif", color: "#8F7266", marginTop: 7 }}>{d.deg}</div>
                    <div style={{ font: "300 11.5px/1.55 'Luxia','Noto Sans Thai',sans-serif", color: "#A08876", marginTop: 1 }}>{d.lic}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── VIDEO REVIEWS ── */}
        <div className="aa-wrap" style={{ padding: "clamp(56px,8vw,100px) 0 clamp(40px,6vw,70px)" }}>
          <div data-rv style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 18 }}>
            <div>
              <div style={{ font: "500 12px 'Luxia','Noto Sans Thai',sans-serif", letterSpacing: ".3em", color: "#B4735F" }}>VIDEO REVIEWS</div>
              <h2 style={{ margin: "14px 0 0", fontWeight: 600, fontSize: "clamp(28px,3.4vw,42px)", color: "#33241E" }}>
                {t("คลิปรีวิวจากผู้รับบริการจริง", "Real Client Video Reviews")}
              </h2>
            </div>
            <div style={{ font: "300 13px 'Luxia','Noto Sans Thai',sans-serif", color: "#8F7266" }}>{t("เลื่อนดูเพิ่มเติม →", "Scroll for more →")}</div>
          </div>
          <div className="aa-rail" data-rv style={{ display: "flex", gap: 16, overflowX: "auto", padding: "28px 4px 18px", transitionDelay: ".1s" }}>
            {vids(lang).map((v, i) => (
              <div
                key={`${v.img}-${i}`}
                className="home-vid"
                style={{
                  flex: "none",
                  position: "relative",
                  width: 190,
                  aspectRatio: "9/16",
                  borderRadius: 18,
                  overflow: "hidden",
                  boxShadow: "0 14px 30px rgba(107,74,60,.18)",
                }}
              >
                <Image src={v.img} alt={v.cap} fill sizes="190px" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(46,33,28,0) 55%,rgba(46,33,28,.65))" }} />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden>
                    <path d="M13 8 1 15V1l12 7Z" fill="#A96A55" />
                  </svg>
                </div>
                <div style={{ position: "absolute", left: 12, right: 12, bottom: 12, color: "#fff", font: "400 12.5px/1.5 'Luxia','Noto Sans Thai',sans-serif" }}>
                  {v.cap}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 4, font: "300 12.5px 'Luxia','Noto Sans Thai',sans-serif", color: "#A08876" }}>{disclaimer(lang)}</div>
        </div>

        {/* ── FREE CONSULTATION (dark banner + QR) ── */}
        <div className="aa-wrap" style={{ padding: "0 0 clamp(56px,8vw,100px)" }}>
          <div
            data-rv
            style={{
              position: "relative",
              overflow: "hidden",
              background: "linear-gradient(120deg,#2B1C16,#4A2F24)",
              borderRadius: 32,
              padding: "clamp(44px,6vw,80px) clamp(24px,5vw,80px)",
              textAlign: "center",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: -120,
                right: -80,
                width: 340,
                height: 340,
                borderRadius: "50%",
                background: "radial-gradient(circle,rgba(229,183,157,.25),rgba(229,183,157,0) 70%)",
              }}
            />
            <div style={{ position: "relative" }}>
              <div style={{ font: "500 12px 'Luxia','Noto Sans Thai',sans-serif", letterSpacing: ".32em", color: "#E5B79D" }}>FREE CONSULTATION</div>
              <h2
                style={{
                  margin: "16px auto 0",
                  maxWidth: 640,
                  fontWeight: 600,
                  fontSize: "clamp(28px,3.6vw,44px)",
                  lineHeight: 1.3,
                  color: "#FBF3ED",
                }}
              >
                {t("เริ่มต้นความมั่นใจของคุณวันนี้ ปรึกษาแพทย์ฟรี ไม่มีค่าใช้จ่าย", "Start your confidence today — consult our doctors for free")}
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginTop: 32 }}>
                <LineButton lang={lang} on="dark" label={`LINE ${LINE_ID}`} />
                <TelButton lang={lang} on="dark" />
              </div>
              <div style={{ display: "flex", justifyContent: "center", marginTop: 22 }}>
                <QrCard lang={lang} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
