import { Lang } from "@/lib/i18n";
import { BRANCH_ADDR, FACEBOOK_URL, LINE_URL, SITE_URL, TEL_DISPLAY } from "@/lib/site";
import FxScripts from "@/components/fx/FxScripts";
import SiteShell from "./SiteShell";

/** ที่อยู่สาขาแบบ schema.org — ค่ามาจาก lib/site.ts (ตรงกับเว็บหลัก) ห้าม hardcode ซ้ำ */
const postalAddress = (i: number) => {
  const b = BRANCH_ADDR[i];
  return {
    "@type": "PostalAddress",
    streetAddress: b.street.en,
    addressLocality: b.locality.en,
    addressRegion: b.region.en,
    postalCode: b.postalCode,
    addressCountry: "TH",
  };
};

const CLINIC_JSONLD = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "The Art Aesthetic",
  alternateName: "The Art Aesthetic Clinic — by The Art Hospital & Clinic",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo-art.png`,
  image: `${SITE_URL}/assets/hero-hospital.jpg`,
  telephone: TEL_DISPLAY,
  address: postalAddress(0),
  sameAs: [FACEBOOK_URL, LINE_URL],
  medicalSpecialty: "Dermatology",
  parentOrganization: { "@type": "Hospital", name: "The Art Plastic Surgery Hospital" },
  department: [
    { "@type": "MedicalClinic", name: "The Art Aesthetic — Don Mueang", telephone: TEL_DISPLAY, address: postalAddress(0) },
    { "@type": "MedicalClinic", name: "The Art Aesthetic — Lat Phrao", telephone: TEL_DISPLAY, address: postalAddress(1) },
    { "@type": "MedicalClinic", name: "The Art Aesthetic — Pattaya", telephone: TEL_DISPLAY, address: postalAddress(2) },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "10:00",
    closes: "20:00",
  },
};

/** Shared <body> content for both language root layouts. */
export default function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <>
      {/* โหลดฟอนต์ CI ก่อน — สองไฟล์นี้คือฟอนต์ที่ใช้จริงทุกหน้า (Luxia = ละติน, Noto = ไทย)
          ไม่ preload ตัวอื่นเพราะ latin/latin-ext subset ของ Noto ใช้เฉพาะอักขระที่ Luxia ไม่มี */}
      <link rel="preload" href="/assets/fonts/LuxiaRegular.woff" as="font" type="font/woff" crossOrigin="anonymous" />
      <link rel="preload" href="/assets/fonts/NotoSansThai-thai.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

      {/* Playfair Display = ฟอนต์ตัวที่สาม ใช้เฉพาะตัวเลขตกแต่ง .aa-pfi (01/02/03, ลำดับใน Top 5,
          เลขขั้นตอนในหน้าหัตถการ และเลข 404) — ตัวอักษรอื่นทั้งเว็บใช้ Luxia / Noto Sans Thai ที่ self-host
          หมายเหตุ: CI ที่ตกลงกันไว้ระบุสองฟอนต์ ตัวนี้จึงเป็นข้อยกเว้นที่ต้องให้เจ้าของเว็บเคาะว่าจะเก็บไว้ไหม
          ถ้าเก็บ ควรย้ายไป next/font/google เพื่อ self-host ตอน build จะได้ไม่ต้องยิงขอ Google ทุกครั้งที่เปิดหน้า
          ital,wght ต้องมี 1,600 ด้วย เพราะ TxLandingPage ใช้ .aa-pfi ที่ fontWeight 600 คู่กับ font-style:italic
          ถ้าไม่ประกาศ เบราว์เซอร์จะหล่นไปใช้ italic 500 แล้วปลอมตัวหนาให้ ซึ่งหนาเกินจริงราว 50% */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap"
        rel="stylesheet"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CLINIC_JSONLD) }} />
      <FxScripts />
      <SiteShell lang={lang}>{children}</SiteShell>
    </>
  );
}
