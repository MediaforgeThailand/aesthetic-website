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

      {/* ไม่มีการเรียกฟอนต์จาก CDN ใด ๆ แล้ว — CI ระบุสองฟอนต์ Luxia + Noto Sans Thai และ self-host ทั้งคู่
          เดิมโหลด Playfair Display จาก Google Fonts ทุกหน้า (234 หน้า) ทั้งที่วาดตัวอักษรจริงแค่ 26 หน้า
          และวาดแค่ตัวเลขตกแต่ง ตัดออกตามที่เจ้าของเว็บยืนยัน 15 ส.ค. 2569
          ตัวเลข .aa-pfi ตกไปใช้ Luxia ซึ่งเป็นฟอนต์ display อยู่แล้ว — ดู app/globals.css */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CLINIC_JSONLD) }} />
      <FxScripts />
      <SiteShell lang={lang}>{children}</SiteShell>
    </>
  );
}
