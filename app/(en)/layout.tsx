import type { Metadata } from "next";
import RootShell from "@/components/chrome/RootShell";
import { SITE_URL } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Art Aesthetic Clinic — Filler, Botox, Thread Lift & Skin Lifting in Bangkok | by The Art",
    template: "%s | The Art Aesthetic",
  },
  description:
    "The Art Aesthetic — hospital-grade aesthetic clinic by The Art plastic-surgery hospital group. Filler, Botox, thread lift, Thermage, HIFU, Pico laser and IV drips, performed by doctors. Free consultation.",
  icons: { icon: "/assets/logo-art.png" },
  openGraph: {
    siteName: "The Art Aesthetic",
    locale: "en_US",
    type: "website",
    images: ["/assets/hero-hospital.jpg"],
  },
};

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RootShell lang="en">{children}</RootShell>
      </body>
    </html>
  );
}
