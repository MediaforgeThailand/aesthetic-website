# รายการรูปที่ต้องเปลี่ยน — The Art Aesthetic

ตรวจเมื่อ 15 ส.ค. 2569 · ตรวจครบทุกไฟล์ภาพในเว็บ 79 ไฟล์ (ไม่รวม `/assets/clone/**` ที่ดึงมาจากเว็บหลักโดยตรง)

วิธีตรวจ: เปิดดูรูปทีละไฟล์ด้วยตา แล้วให้ผู้ตรวจอิสระอีกชุดตรวจซ้ำแบบพยายามค้าน (adversarial) ทุกไฟล์ที่ถูกตั้งข้อสงสัย
เกณฑ์ที่ใช้จับรูป AI: นิ้วมือผิดรูป/ขาดนิ้วโป้ง ข้อมือหายเข้าไปในเสื้อ กระดุมเบี้ยวขนาดไม่เท่ากัน ผิวไม่มีรูขุมขน
ตาสองข้างไม่สมมาตร ตัวอักษรบนป้าย/เครื่องมือเป็นตัวมั่ว สถาปัตยกรรมหรือเงาสะท้อนที่เป็นไปไม่ได้

**สรุป: ต้องหารูปจริงมาใส่ 11 ช่อง** — รูป AI ที่ใช้งานอยู่ 6 ช่อง (รูปหมอทั้งหมด) + ช่อง placeholder ที่ยังว่าง 5 ช่อง
และมีไฟล์ AI ที่ไม่ได้ใช้แล้วอีก 15 ไฟล์ที่ลบทิ้งได้

> **แก้ไข 15 ส.ค. 2569 (รอบสอง)** — ฉบับแรกของเอกสารนี้จัดรูปจริง 9 ไฟล์เป็น placeholder ผิดพลาด
> (hero-doctors, who-team, method-inject, method-machine, method-treatment, tx-face-inject,
> tx-injection, tx-lip-filler, slide-diamond) ทั้งหมดเป็นภาพถ่ายจริง คืนกลับเข้าเว็บแล้วใน commit 6c34449
> เกณฑ์ที่ใช้ตอนแรกเข้มเกินไป คือตัดภาพสต็อกของจริงทิ้งด้วย ทั้งที่โจทย์คือห้ามใช้ภาพ AI เท่านั้น

> **แก้ไข 15 ส.ค. 2569 (รอบสาม)** — ภาพอาคาร 4 ไฟล์ (`hero-hospital.jpg`, `bg-building.jpg`,
> `hospital-side2.jpg`, `hospital-side.jpg`) **คืนกลับเป็นไฟล์ต้นฉบับจากชุดออกแบบเดิมแล้ว**
> ไฟล์ที่ผมเปลี่ยนเข้าไปตอนตรวจรอบแรกต่างหากที่เป็นภาพ AI — สังเกตจากป้ายชื่อบนดาดฟ้าอาคาร
> ที่เรนเดอร์ออกมาเป็นตัวหนังสือมั่วอ่านไม่ออก ส่วนไฟล์ต้นฉบับป้าย "ART" อ่านออกชัดเจน
> จึงตัด A7–A9 ออกจากรายการนี้ เหลือเฉพาะรูปหมอ 6 ใบที่ยังต้องถ่ายใหม่

---

## กลุ่ม A — รูป AI ที่ยังแสดงอยู่บนเว็บจริง (6 ไฟล์) 🔴 ด่วนที่สุด

กลุ่มนี้อันตรายที่สุดทางกฎหมาย เพราะเป็นการโฆษณาสถานพยาบาลด้วยภาพที่ไม่ใช่ของจริง
ทั้ง 6 ไฟล์เป็น "หน้าหมอ" — คนไข้เข้าใจว่านี่คือแพทย์ที่จะมารักษาเขา

| # | ไฟล์ | ขนาดที่ต้องได้ | แสดงที่หน้า | ตำแหน่งบนหน้า | หลักฐานว่าเป็น AI |
|---|---|---|---|---|---|
| A1 | `dc-art.png` | 640×740 PNG พื้นใส | [/doctors/](https://aesthetic-website.vercel.app/doctors/) · [/](https://aesthetic-website.vercel.app/) | การ์ดหมอใบที่ 1 + แถบทีมแพทย์หน้าแรก | มือมี 4 นิ้ว **ไม่มีนิ้วโป้ง** ไม่มีข้อนิ้ว ไม่มีข้อมือ กระดุมปลายแขน 3 เม็ดขนาดไม่เท่ากัน |
| A2 | `dc-top.png` | 640×740 PNG พื้นใส | [/doctors/](https://aesthetic-website.vercel.app/doctors/) · [/](https://aesthetic-website.vercel.app/) | การ์ดหมอใบที่ 2 + หน้าแรก | แขนซ้ายจบลงโดยไม่มีมือ มือขวาไม่มีนิ้วโป้ง กระดุมปลายแขนเป็นวงมั่ว |
| A3 | `dc-pluem.png` | 640×740 PNG พื้นใส | [/doctors/](https://aesthetic-website.vercel.app/doctors/) · [/](https://aesthetic-website.vercel.app/) | การ์ดหมอใบที่ 3 + หน้าแรก | ภาพเดียวกับ `dr-pluem.png` ในชุดม็อกอัพเดิม แค่ขยายขนาด |
| A4 | `dc-jan.png` | 640×740 PNG พื้นใส | [/doctors/](https://aesthetic-website.vercel.app/doctors/) · [/](https://aesthetic-website.vercel.app/) | การ์ดหมอใบที่ 4 + หน้าแรก | ผิวไม่มีรูขุมขน ขนตาเบลอเป็นปื้น ท่าและชุดเป็นเทมเพลตเดียวกับอีก 5 ใบเป๊ะ |
| A5 | `dc-jelly.png` | 640×740 PNG พื้นใส | [/doctors/](https://aesthetic-website.vercel.app/doctors/) · [/](https://aesthetic-website.vercel.app/) | การ์ดหมอใบที่ 5 + หน้าแรก | เหมือน A4 |
| A6 | `dc-ohm.png` | 640×740 PNG พื้นใส | [/doctors/](https://aesthetic-website.vercel.app/doctors/) · [/](https://aesthetic-website.vercel.app/) | การ์ดหมอใบที่ 6 | มือไม่มีนิ้วโป้ง นิ้วเชื่อมติดกัน |

> ทั้ง 6 ใบขึ้นทั้งหน้า `/doctors/` และแถบทีมแพทย์บนหน้าแรก (เดิมหน้าแรกตัดเหลือ 5 ใบทำให้หมอโอมหาย
> แก้แล้วใน commit 6c34449 — ตอนนี้แสดงครบทุกท่าน)

---

## กลุ่ม A2 — โลโก้ "THE ART CLINIC" เก่าฝังในเนื้อรูป 🔴

เจอจากการตรวจ CI ทั้งเว็บ 15 ส.ค. 2569 — **แก้ด้วยโค้ดไม่ได้ ต้องรีทัชรูปหรือถ่ายใหม่**
ไฟล์โลโก้ในเว็บเปลี่ยนเป็นอันใหม่ครบแล้ว แต่รูปถ่ายที่ใช้เป็นเนื้อหายังมีตราเก่าฝังอยู่ในพิกเซล

| ที่ไหน | จำนวน | แก้ยังไง |
|---|---|---|
| `ba/undereye-a.jpg`, `undereye-b.jpg`, `chin-a.jpg`, `chin-b.jpg` | 4 | นางแบบคาดผ้าคาดผมปัก "THE ART CLINIC" — **ถ่ายใหม่เท่านั้น** (ใบ undereye คือการ์ดแรกสุดของหน้า /reviews/) |
| แบนเนอร์ `review*` / `slide*` ใน `/assets/clone/` | ~63 | ตราเก่าเป็น overlay แบนที่มุมภาพ — ให้กราฟิก export ใหม่ หรือแปะตราใหม่ทับ |
| `clone/16383/reduce-fat-arms.webp` | 1 | ฝังคำว่า "THE ART SURGERY HOSPITAL" ซึ่งเป็นอีกแบรนด์ |

กระทบราว **60–90 route** ⚠️ ตำแหน่งตราไม่เหมือนกันทุกไฟล์ (บางใบมุมขวาบน บางใบมุมขวาล่าง)
**อย่าไล่จากชื่อไฟล์** ให้เปิดดูภาพจริงทั้งโฟลเดอร์ `public/assets/clone/` และ `public/assets/ba/`

รายละเอียดเต็มใน [ci-audit.md](ci-audit.md)

---

## กลุ่ม B — ช่องว่างที่รอรูปจริง (5 ไฟล์) 🟡

ตอนนี้แสดงเป็นกรอบเส้นประสีครีมพร้อมข้อความบอกว่าต้องใส่รูปอะไร ขนาดเท่าไหร่
**ไม่ผิดกฎหมาย** เพราะไม่ได้หลอกใคร แต่การ์ดโปรโมชั่นยังไม่มีรูป
ทั้ง 5 ไฟล์นี้เป็นไฟล์ที่สร้างใหม่ ไม่เคยมีรูปต้นฉบับมาก่อน (แพ็กเกจใน Excel ไม่มีรูปแนบมา)

| # | ไฟล์ | ขนาดที่ต้องได้ | แสดงที่หน้า | ต้องการรูปอะไร |
|---|---|---|---|---|
| B1 | `promo/hifu.jpg` | 1080×810 | [/promotions/](https://aesthetic-website.vercel.app/promotions/) · [/hifu/](https://aesthetic-website.vercel.app/hifu/) · [/ultraformer/](https://aesthetic-website.vercel.app/ultraformer/) · [/thermage/](https://aesthetic-website.vercel.app/thermage/) | การ์ดโปร Ultraformer III S 200 ช็อต |
| B2 | `promo/pico.jpg` | 1080×810 | [/promotions/](https://aesthetic-website.vercel.app/promotions/) · [/pico-laser/](https://aesthetic-website.vercel.app/pico-laser/) | การ์ดโปร Pico 1 แถม 1 |
| B3 | `promo/ivdrip.jpg` | 1080×810 | [/promotions/](https://aesthetic-website.vercel.app/promotions/) · [/iv-drip/](https://aesthetic-website.vercel.app/iv-drip/) | การ์ดโปร Aura White IV Drip 5 ครั้ง |
| B4 | `promo/diamond.jpg` | 1080×810 | [/promotions/](https://aesthetic-website.vercel.app/promotions/) · [/diamond-baby-face/](https://aesthetic-website.vercel.app/diamond-baby-face/) | การ์ดโปร Diamond Baby Face 4 ครั้ง |
| B5 | `promo/underarm.jpg` | 1080×810 | [/promotions/](https://aesthetic-website.vercel.app/promotions/) · [/underarm-laser/](https://aesthetic-website.vercel.app/underarm-laser/) | การ์ดโปรกำจัดขนไดโอด 8 ครั้ง |

---

## กลุ่ม C — ไฟล์ AI/ม็อกอัพที่ไม่ได้ใช้แล้ว ลบทิ้งได้ (15 ไฟล์) ⚪

ยืนยันแล้วว่าไม่มีโค้ดส่วนไหนอ้างถึง (`refs=0`) เหลืออยู่เปล่า ๆ กินพื้นที่ repo

```
hero-model.jpg      tx-filler-hero.jpg
doc-jan.png   doc-jelly.png   doc-ohm.png   doc-pluem.png   doc-top.png
dr-art.png    dr-bom.png      dr-jan.png    dr-jelly.png    dr-meen.png
dr-ploy.png   dr-pluem.png    dr-yongyee.png
```

หมายเหตุ: `dr-bom / dr-meen / dr-ploy / dr-yongyee` เป็นหมอที่ไม่มีอยู่ในทีม Aesthetics
มาจากชุดม็อกอัพเดิม ไม่ควรเก็บไว้

---

## รูปที่ตรวจแล้วว่าเป็นของจริง — ไม่ต้องแก้ (59 ไฟล์) ✅

- **`ba/*.jpg` ทั้ง 10 ไฟล์** (ก่อน–หลัง) — เห็นผ้าคาดผมปัก "THE ART CLINIC" ชัดเจน
  มีวันที่ภาษาไทยสะกดถูกต้อง (AI มักเขียนภาษาไทยเพี้ยน) มีรูขุมขน ไฝ ขนตาจริง
- **`rv-filler-1..6.jpg`** — การ์ดรีวิวมีโลโก้ THE ART CLINIC และหมายเหตุ
  "รูปที่ใช้รีวิวได้รับการอนุญาตแล้ว" ครบ
- **`rev/*.jpg`, `promo/filler|lip-filler|botox|thread.jpg`** — ดึงจาก art-hospital.com มีแบรนด์ THE ART
- **`tour/room1-3.jpg`** — ภาพถ่ายจริงของคลินิก
- **ภาพอาคาร 4 ไฟล์** `hero-hospital.jpg` · `bg-building.jpg` · `hospital-side2.jpg` · `hospital-side.jpg`
  — ไฟล์ต้นฉบับจากชุดออกแบบเดิม ป้าย "ART" หน้าอาคารอ่านออกถูกต้อง ไม่มีตัวหนังสือมั่ว
- **`logo-*.png`, `line-icon.png`** — โลโก้/ไอคอน ไม่ใช่ภาพถ่าย
- **9 ไฟล์ที่คืนกลับมา** — `hero-doctors.png` และ `who-team.png` เป็นภาพหมู่ทีมแพทย์ใส่เสื้อกาวน์ THE ART
  ที่อ่านโลโก้ออกชัด มือและนิ้วครบถูกต้อง · `method-machine.png` เป็นเครื่อง Ultraformer III ของจริง
  (หน้าจอขึ้น "3.0 J" และ "START" อ่านออกถูกต้อง) · `method-inject/treatment` และ `tx-*` เป็นภาพหัตถการ
  ที่มือ นิ้ว และเข็มถูกต้องตามกายวิภาค

**2 ไฟล์ที่ยังสรุปไม่ได้** (ผู้ตรวจชุดที่สองให้ผล "ไม่แน่ใจ"):
`ba/lips-a.jpg` (ครอปแคบเกินจนไม่เหลือเบาะแส) และ `blue-model.png` (นางแบบ ใช้เป็นภาพประกอบ ไม่ได้อ้างว่าเป็นคนไข้)

---

## ข้อควรรู้ก่อนถ่ายรูปใหม่

1. **รูปหมอ (A1–A6)** คืองานเร่งด่วนที่เหลืออยู่กลุ่มเดียว ต้องเป็นรูปแพทย์ตัวจริงทั้ง 6 ท่านตามที่ระบุใน `lib/shared-data.ts`
   ถ่ายท่าเดียวกัน ฉากเดียวกัน แล้วตัดพื้นหลังเป็น PNG โปร่งใส ขนาด 640×740
2. **ห้ามใช้ภาพ AI เด็ดขาด** ส่วนภาพสต็อกของจริงใช้ได้ (กฎหมายไม่ได้ห้าม) แต่ถ้าถ่ายที่คลินิกเราเองจะดีกว่า
   — บางไฟล์ในหมวด "ของจริง" ยังเป็นภาพสต็อกอยู่ ทยอยเปลี่ยนได้ ไม่ใช่เรื่องเร่งด่วน
3. **ภาพคนไข้ทุกภาพ** ต้องมีหนังสือยินยอมเป็นลายลักษณ์อักษร (ดูตัวอย่างการใส่หมายเหตุใน `rv-filler-*.jpg`)
4. ใส่ไฟล์ทับที่เดิมโดยใช้ **ชื่อไฟล์เดิมเป๊ะ** แล้ว deploy — ไม่ต้องแก้โค้ดเลย
