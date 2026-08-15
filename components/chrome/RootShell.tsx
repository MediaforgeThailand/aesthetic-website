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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* เหลือเฉพาะ Playfair Display สำหรับตัวเลขตกแต่ง .aa-pfi — ตัวอักษรอื่นใช้ Luxia (ละติน) / Noto Sans Thai (ไทย) ที่ self-host */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap"
        rel="stylesheet"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CLINIC_JSONLD) }} />
      <FxScripts />
      <SiteShell lang={lang}>{children}</SiteShell>
    </>
  );
}
