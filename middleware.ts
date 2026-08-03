import { NextRequest, NextResponse } from "next/server";

/**
 * Language auto-detection:
 * - ผู้ใช้ที่ browser ไม่มีภาษาไทยใน Accept-Language → พาไป /en ตั้งแต่เข้าครั้งแรก (302)
 * - จำการเลือกด้วย cookie `lang` (ตัวสลับภาษาบน header เขียน cookie นี้)
 * - Search-engine / social bots ไม่ถูก redirect เด็ดขาด (SEO ต้อง index ได้ทั้งสองภาษา)
 */

const BOT_RE =
  /bot|crawler|spider|slurp|bingpreview|googlebot|google-inspectiontool|baiduspider|yandex|duckduckbot|facebookexternalhit|meta-externalagent|linebot|whatsapp|telegrambot|twitterbot|linkedinbot|pinterest|lighthouse|headlesschrome|pagespeed/i;

const YEAR = 60 * 60 * 24 * 365;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // เส้นทางอังกฤษ: ไม่ต้องทำอะไร
  if (pathname === "/en" || pathname.startsWith("/en/")) return NextResponse.next();

  const ua = req.headers.get("user-agent") ?? "";
  if (BOT_RE.test(ua)) return NextResponse.next();

  const toEn = () => {
    const url = req.nextUrl.clone();
    url.pathname = pathname === "/" ? "/en/" : `/en${pathname}`;
    return url;
  };

  const cookie = req.cookies.get("lang")?.value;
  if (cookie === "th") return NextResponse.next();
  if (cookie === "en") return NextResponse.redirect(toEn(), 302);

  // ยังไม่เคยเลือกภาษา → ดูจากภาษาเบราว์เซอร์
  const acceptLanguage = req.headers.get("accept-language") ?? "";
  const prefersThai = /(^|[,\s])th\b/i.test(acceptLanguage);

  if (acceptLanguage && !prefersThai) {
    const res = NextResponse.redirect(toEn(), 302);
    res.cookies.set("lang", "en", { path: "/", maxAge: YEAR, sameSite: "lax" });
    return res;
  }

  const res = NextResponse.next();
  if (acceptLanguage) res.cookies.set("lang", "th", { path: "/", maxAge: YEAR, sameSite: "lax" });
  return res;
}

export const config = {
  // ข้าม static assets / ไฟล์ทุกชนิด / API
  matcher: ["/((?!_next|api|assets|.*\\..*).*)"],
};
