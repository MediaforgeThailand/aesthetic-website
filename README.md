# The Art Aesthetic — Website

เว็บไซต์ standalone ของแบรนด์ **THE ART AESTHETIC** (คลินิกในเครือ รพ.ศัลยกรรมตกแต่ง The Art)
ใช้เป็น property สำหรับ **SEO / SEM** โดยเฉพาะ — สองภาษา ไทย/อังกฤษ

> เอกสารนี้คือสถานะจริงของ codebase
> ไฟล์ `design_handoff_seo_landing_pages/` (ใน handoff zip) เป็น **design brief ก่อนเริ่มโปรเจกต์**
> ตัว framework และฟอนต์ในนั้นเป็นข้อเสนอตอนยังไม่มี codebase — ตัดสินใจจริงดูที่นี่

## Stack

| ชั้น | ของที่ใช้ |
|---|---|
| Framework | Next.js 15 — App Router (`trailingSlash: true`) |
| UI | React 19 — Server Components เป็นหลัก |
| ภาษา | TypeScript 5.8 (`strict: true`) |
| Runtime | Node.js ≥ 20 |
| Styling | ไม่มี CSS framework — `app/globals.css` ไฟล์เดียว + inline style |
| Dependencies | `next`, `react`, `react-dom` เท่านั้น (+ `sharp` ที่มากับ Next) |
| Database | **ไม่มี** — ไม่มี DB / ORM / CMS / API route / auth |
| Env var | `NEXT_PUBLIC_SITE_URL` ตัวเดียว (ไม่ใช่ secret) — ทับโดเมนสำหรับ preview/staging<br>ถ้าไม่ตั้ง จะใช้โดเมน production `https://aesthetics.artsurgery.co.th` จาก `lib/site.ts` |

ฟอนต์ตาม CI (ตั้งแต่ 15 ส.ค. 2569): **Luxia** = ตัวอักษรละติน · **Noto Sans Thai** = ตัวอักษรไทย
self-host ทั้งคู่ที่ `public/assets/fonts/` — DB Heavent เป็น CI เดิม ถอดออกหมดแล้ว

เบราว์เซอร์เลือกฟอนต์รายตัวอักษร ลำดับ `'Luxia','Noto Sans Thai'` จึงแยกสองภาษาให้เอง
เพราะ Luxia ไม่มี glyph ไทยเลย

> `font-size-adjust:0.5 !important` บน `.aa-root *` คือสิ่งที่ทำให้สลับฟอนต์ได้โดยขนาดไม่เพี้ยน
> **ห้ามลบ** — ต้องมี `!important` เพราะ `font:` shorthand รีเซ็ตค่านี้ตามสเปก
> ดูคอมเมนต์เต็มใน `app/globals.css`

**ไม่มีการโหลดฟอนต์จาก CDN ใด ๆ ทั้งเว็บ** — เดิมโหลด Playfair Display จาก Google Fonts
สำหรับตัวเลขตกแต่ง `.aa-pfi` ตัดออกแล้ว 15 ส.ค. 2569 ให้เหลือสองฟอนต์ตาม CI

น้ำหนักฟอนต์: Luxia มีไฟล์จริงแค่ **400** (Regular) กับ **500** (Display) จึงประกาศ
`font-weight:400 500` ให้ Noto Sans Thai ด้วย เพื่อให้ไทยกับอังกฤษหนักเท่ากันในบรรทัดเดียวกัน
**ห้ามประกาศ 300 หรือ 600 เพิ่ม** ถ้าไม่ได้เพิ่มไฟล์ฟอนต์ Luxia จริง ไม่งั้นไทยจะหนา/บางกว่าอังกฤษ

## โครงสร้าง

```
app/(th)/…          หน้าไทย   — อยู่ที่ราก /
app/(en)/en/…       หน้าอังกฤษ — อยู่ใต้ /en/
components/         UI (client component เฉพาะส่วน interactive)
content/clone/      คอนเทนต์บทความ/หน้า clone — JSON 98 ไฟล์
lib/tx-data.ts      ข้อมูลหัตถการ + landing page (TH/EN)
lib/clone-content.ts  ตัวอ่าน JSON ด้วย fs ตอน build แล้ว cache
middleware.ts       auto-detect ภาษา
docs/redirects.csv  redirect map จากโดเมนเดิม (ตั้งที่ชั้น hosting ไม่ใช่ในโค้ด)
```

## Rendering

- **SSG 100%** — build ล่าสุด prerender ~238 routes
- ทุก dynamic route ตั้ง `dynamicParams = false` → **ไม่มี SSR / ISR / data fetching ตอน runtime**
- คอนเทนต์อ่านจากไฟล์ในรีโปตอน build ไม่มีการต่อ network ใด ๆ ขณะ serve
- Client component มีแค่: header, lang toggle, before/after slider, FAQ accordion, concern tabs

## i18n

`middleware.ts` ตรวจภาษาผู้ใช้:
- ไม่มีไทยใน `Accept-Language` → 302 ไป `/en` ตั้งแต่ครั้งแรก
- จำการเลือกด้วย cookie `lang` (ตัวสลับภาษาบน header เขียน cookie นี้)
- **bot ของ search engine / social ไม่ถูก redirect เด็ดขาด** — SEO ต้อง index ได้ทั้งสองภาษา

## Build & Deploy

```bash
npm ci
npm run build
npm start          # Node server, port 3000
```

วาง nginx (หรือ reverse proxy อื่น) + TLS ไว้ข้างหน้า

**ข้อควรระวังตอน self-host**

- **ยัง export เป็น static HTML ล้วนไม่ได้** — `middleware.ts` ใช้ร่วมกับ `output: 'export'` ไม่ได้
  จึงต้องมี Node process รัน เสิร์ฟด้วย nginx static เฉย ๆ ไม่ได้
  (ถ้าอยากได้ static ล้วน ต้องย้าย logic ภาษาไปทำที่ nginx/CDN แทน)
- **`trailingSlash: true`** — reverse proxy ห้ามตัด slash ท้าย URL ไม่งั้นเกิด redirect loop
- **`next/image` ใช้ optimizer ในตัว** ต้องมี `sharp` บนเครื่อง prod (ถ้า base image เป็น Alpine ระวัง musl/glibc)
- `public/` ~17MB (รูป clone 5.2MB)
- ไม่มี env var หรือ secret ที่ต้องตั้ง

ถ้าจะเข้า Docker / ไม่อยากลง `node_modules` บนเครื่อง prod เพิ่ม `output: 'standalone'`
ใน `next.config.ts` แล้วรัน `node .next/standalone/server.js`

## ยังไม่มี database

ตอนนี้ตั้งใจให้ไม่มี — ทุกอย่างเป็น static เพื่อความเร็วของหน้า landing ที่ยิง SEM

ถ้าจะเพิ่มระบบจัดการบทความในอนาคต:
- โครงคอนเทนต์ปัจจุบันเป็น JSON block (`CloneBlock` ใน `lib/clone-content.ts`)
  ย้ายเข้า Postgres เป็น `jsonb` ได้เกือบ 1:1 ไม่ต้องรื้อ schema
- **อย่าเปลี่ยนหน้าบทความไปเป็น SSR** — ใช้ ISR/SSG ต่อ ไม่งั้นกระทบ LCP และ Quality Score ของโฆษณา

## ช่องทางติดต่อ (ค่าจริง ห้ามเปลี่ยน)

- LINE: `@theartaesthetics` → https://line.me/R/ti/p/@theartaesthetics
- โทร: 02-666-4666
- Facebook: https://www.facebook.com/aesthetics.theartclinic
