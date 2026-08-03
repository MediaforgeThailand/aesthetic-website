import type { Metadata } from "next";
import RootShell from "@/components/chrome/RootShell";
import { SITE_URL } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Art Aesthetic คลินิกความงามครบวงจร ฉีดฟิลเลอร์ โบท็อกซ์ ร้อยไหม ยกกระชับ | by The Art",
    template: "%s | The Art Aesthetic",
  },
  description:
    "The Art Aesthetic คลินิกความงามมาตรฐานโรงพยาบาลเฉพาะทางศัลยกรรมตกแต่ง ฉีดฟิลเลอร์ โบท็อกซ์ ร้อยไหม Thermage HIFU Pico Laser IV Drip โดยทีมแพทย์ ปรึกษาฟรี",
  icons: { icon: "/assets/logo-art.png" },
  openGraph: {
    siteName: "The Art Aesthetic",
    locale: "th_TH",
    type: "website",
    images: ["/assets/hero-hospital.jpg"],
  },
};

export default function ThRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <RootShell lang="th">{children}</RootShell>
      </body>
    </html>
  );
}
