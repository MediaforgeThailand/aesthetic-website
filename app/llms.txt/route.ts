import { getAllClonePages } from "@/lib/clone-content";
import { txData } from "@/lib/tx-data";
import {
  BRANCH_ADDR,
  COMPANY_NAME,
  COMPANY_REG,
  LICENSE_ADS,
  LICENSE_HOSPITAL,
  LINE_ID,
  LINE_URL,
  SITE_URL,
  TEL_DISPLAY,
  TX_SLUGS,
  TxKey,
} from "@/lib/site";

export const dynamic = "force-static";

const BRANCH_NAMES = ["กรุงเทพฯ · ดอนเมือง", "กรุงเทพฯ · ลาดพร้าว", "พัทยา"];

/** llms.txt — โครงเว็บสำหรับ AI answer engines (AEO) */
export function GET() {
  const tx = txData("th");
  const landing = (Object.keys(TX_SLUGS) as TxKey[])
    .map((k) => `- [${tx[k].name} (${tx[k].en})](${SITE_URL}/${TX_SLUGS[k]}/): ${tx[k].lead.slice(0, 140)}`)
    .join("\n");
  const clones = getAllClonePages()
    .map((p) => `- [${p.th.title}](${SITE_URL}${encodeURI(p.path)}): ${p.th.metaDesc.slice(0, 140)}`)
    .join("\n");

  const body = `# The Art Aesthetic

> คลินิกความงามมาตรฐานโรงพยาบาล ภายใต้เครือโรงพยาบาลศัลยกรรมตกแต่ง The Art (The Art Plastic Surgery Hospital) ให้บริการฉีดฟิลเลอร์ โบท็อกซ์ ร้อยไหม Thermage HIFU Pico Laser IV Drip และทรีตเมนต์ผิว โดยแพทย์ทุกเคส สาขา: กรุงเทพฯ ดอนเมือง · กรุงเทพฯ ลาดพร้าว · พัทยา เปิดทุกวัน 10:00–20:00 น. โทร ${TEL_DISPLAY} LINE ${LINE_ID} (${LINE_URL})

Hospital-grade aesthetic clinic in Bangkok & Pattaya, Thailand — under The Art plastic-surgery hospital group. Filler, Botox, thread lifts, Thermage, HIFU, Pico laser, IV drips, performed by doctors. English pages under ${SITE_URL}/en/

## โปรแกรมหลัก (Treatment landing pages)
${landing}

## ปัญหาผิวและความรู้ (Concerns & guides)
${clones}

## หน้าอื่น ๆ
- [รีวิวก่อน–หลัง](${SITE_URL}/reviews/): รีวิวเคสจริง ฟิลเลอร์ โบท็อกซ์ ร้อยไหม ยกกระชับ (ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล)
- [โปรโมชั่น](${SITE_URL}/promotions/): แพ็กเกจพร้อมราคา ระบุรหัสแพ็กเกจและวันสิ้นสุดทุกรายการ
- [ทีมแพทย์](${SITE_URL}/doctors/): แพทย์ประจำคลินิกพร้อมเลขใบประกอบวิชาชีพ
- [ติดต่อ/สาขา](${SITE_URL}/contact/): ที่อยู่ เวลาเปิด ช่องทางติดต่อ

## สาขา (ที่อยู่)
${BRANCH_ADDR.map((b, i) => `- ${BRANCH_NAMES[i]}: ${b.street.th} ${b.locality.th} ${b.postalCode}`).join("\n")}

## ข้อมูลตามกฎหมาย
- ${COMPANY_NAME} (${COMPANY_REG})
- ${LICENSE_HOSPITAL}
${LICENSE_ADS.map((n) => `- ${n}`).join("\n")}
- ผลลัพธ์ของหัตถการขึ้นอยู่กับแต่ละบุคคล ควรปรึกษาแพทย์ก่อนรับบริการ
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
