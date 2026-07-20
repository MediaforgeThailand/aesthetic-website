import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aesthetic Clinic — ดูแลผิวและความงามครบวงจร",
  description:
    "คลินิกความงามครบวงจร ดูแลโดยแพทย์ผู้เชี่ยวชาญ โปรแกรมดูแลผิวหน้า เลเซอร์ ฟิลเลอร์ และโบท็อกซ์",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={prompt.className}>{children}</body>
    </html>
  );
}
