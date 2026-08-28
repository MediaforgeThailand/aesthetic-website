import { NextRequest, NextResponse } from "next/server";

/**
 * Language auto-detection:
 * - ผู้ใช้ที่ browser ไม่มีภาษาไทยใน Accept-Language → พาไป /en ตั้งแต่เข้าครั้งแรก (302)
 * - จำการเลือกด้วย cookie `lang` (ตัวสลับภาษาบน header เขียน cookie นี้ด้วย)
 * - ถ้าคำขอมาจากลิงก์บนหน้าเว็บเราเอง (referer โดเมนเดียวกัน) = ผู้ใช้เลือกภาษานั้นเอง
 *   → ยึดตาม URL เสมอ แล้วอัปเดต cookie ตาม ห้าม redirect ตาม cookie เดิม
 *   มิฉะนั้นคนที่กด EN แล้วกด TH กลับ จะถูกเด้งกลับอังกฤษตลอด (bug 28 ส.ค. 2569)
 * - Search-engine / social bots ไม่ถูก redirect เด็ดขาด (SEO ต้อง index ได้ทั้งสองภาษา)
 */

const BOT_RE =
  /bot|crawler|spider|slurp|bingpreview|googlebot|google-inspectiontool|baiduspider|yandex|duckduckbot|facebookexternalhit|meta-externalagent|linebot|whatsapp|telegrambot|twitterbot|linkedinbot|pinterest|lighthouse|headlesschrome|pagespeed/i;

const YEAR = 60 * 60 * 24 * 365;

const remember = (res: NextResponse, lang: "th" | "en") => {
  res.cookies.set("lang", lang, { path: "/", maxAge: YEAR, sameSite: "lax" });
  return res;
};

/** คำขอนี้เกิดจากการกดลิงก์บนหน้าเว็บของเราเองหรือไม่ */
const fromOwnSite = (req: NextRequest) => {
  const referer = req.headers.get("referer");
  if (!referer) return false;
  try {
    return new URL(referer).host === req.headers.get("host");
  } catch {
    return false;
  }
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // คำขอ RSC / prefetch ของ Next ไม่ใช่การเปิดหน้าจริง — ห้าม redirect เพราะ router
  // จะ cache คำตอบไว้ตั้งแต่ก่อนผู้ใช้กดปุ่ม แล้วเด้งกลับภาษาเดิมทันทีที่กดสลับ
  if (req.headers.has("rsc")) return NextResponse.next();

  const ua = req.headers.get("user-agent") ?? "";
  if (BOT_RE.test(ua)) return NextResponse.next();

  const cookie = req.cookies.get("lang")?.value;
  const chosenHere = fromOwnSite(req);

  // เส้นทางอังกฤษ: ไม่ redirect อยู่แล้ว แค่จำภาษาที่ผู้ใช้เพิ่งกดเลือก
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const res = NextResponse.next();
    return chosenHere && cookie !== "en" ? remember(res, "en") : res;
  }

  if (cookie === "th") return NextResponse.next();

  // กดสลับกลับมาไทยจากหน้าในเว็บเอง → ยึดตาม URL ทันที ไม่ต้องรอ JS เขียน cookie
  if (chosenHere) return remember(NextResponse.next(), "th");

  const toEn = () => {
    const url = req.nextUrl.clone();
    url.pathname = pathname === "/" ? "/en/" : `/en${pathname}`;
    return url;
  };

  if (cookie === "en") return NextResponse.redirect(toEn(), 302);

  // ยังไม่เคยเลือกภาษา → ดูจากภาษาเบราว์เซอร์
  const acceptLanguage = req.headers.get("accept-language") ?? "";
  const prefersThai = /(^|[,\s])th\b/i.test(acceptLanguage);

  if (acceptLanguage && !prefersThai) return remember(NextResponse.redirect(toEn(), 302), "en");

  const res = NextResponse.next();
  return acceptLanguage ? remember(res, "th") : res;
}

export const config = {
  // ข้าม static assets / ไฟล์ทุกชนิด / API
  matcher: ["/((?!_next|api|assets|.*\\..*).*)"],
};
