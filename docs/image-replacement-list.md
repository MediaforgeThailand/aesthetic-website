# รายการรูปที่ต้องเปลี่ยน — The Art Aesthetic

ตรวจเมื่อ 15 ส.ค. 2569 · ตรวจครบทุกไฟล์ภาพในเว็บ 79 ไฟล์ (ไม่รวม `/assets/clone/**` ที่ดึงมาจากเว็บหลักโดยตรง)

วิธีตรวจ: เปิดดูรูปทีละไฟล์ด้วยตา แล้วให้ผู้ตรวจอิสระอีกชุดตรวจซ้ำแบบพยายามค้าน (adversarial) ทุกไฟล์ที่ถูกตั้งข้อสงสัย
เกณฑ์ที่ใช้จับรูป AI: นิ้วมือผิดรูป/ขาดนิ้วโป้ง ข้อมือหายเข้าไปในเสื้อ กระดุมเบี้ยวขนาดไม่เท่ากัน ผิวไม่มีรูขุมขน
ตาสองข้างไม่สมมาตร ตัวอักษรบนป้าย/เครื่องมือเป็นตัวมั่ว สถาปัตยกรรมหรือเงาสะท้อนที่เป็นไปไม่ได้

**สรุป: ต้องหารูปจริงมาใส่ 23 ช่อง** — รูป AI ที่ใช้งานอยู่ 9 ช่อง + ช่อง placeholder ที่ยังว่าง 14 ช่อง
และมีไฟล์ AI ที่ไม่ได้ใช้แล้วอีก 15 ไฟล์ที่ลบทิ้งได้

---

## กลุ่ม A — รูป AI ที่ยังแสดงอยู่บนเว็บจริง (9 ไฟล์) 🔴 ด่วนที่สุด

กลุ่มนี้อันตรายที่สุดทางกฎหมาย เพราะเป็นการโฆษณาสถานพยาบาลด้วยภาพที่ไม่ใช่ของจริง
โดยเฉพาะ 6 ไฟล์แรกที่เป็น "หน้าหมอ" — คนไข้เข้าใจว่านี่คือแพทย์ที่จะมารักษาเขา

| # | ไฟล์ | ขนาดที่ต้องได้ | แสดงที่หน้า | ตำแหน่งบนหน้า | หลักฐานว่าเป็น AI |
|---|---|---|---|---|---|
| A1 | `dc-art.png` | 640×740 PNG พื้นใส | [/doctors/](https://aesthetic-website.vercel.app/doctors/) · [/](https://aesthetic-website.vercel.app/) | การ์ดหมอใบที่ 1 + แถบทีมแพทย์หน้าแรก | มือมี 4 นิ้ว **ไม่มีนิ้วโป้ง** ไม่มีข้อนิ้ว ไม่มีข้อมือ กระดุมปลายแขน 3 เม็ดขนาดไม่เท่ากัน |
| A2 | `dc-top.png` | 640×740 PNG พื้นใส | [/doctors/](https://aesthetic-website.vercel.app/doctors/) · [/](https://aesthetic-website.vercel.app/) | การ์ดหมอใบที่ 2 + หน้าแรก | แขนซ้ายจบลงโดยไม่มีมือ มือขวาไม่มีนิ้วโป้ง กระดุมปลายแขนเป็นวงมั่ว |
| A3 | `dc-pluem.png` | 640×740 PNG พื้นใส | [/doctors/](https://aesthetic-website.vercel.app/doctors/) · [/](https://aesthetic-website.vercel.app/) | การ์ดหมอใบที่ 3 + หน้าแรก | ภาพเดียวกับ `dr-pluem.png` ในชุดม็อกอัพเดิม แค่ขยายขนาด |
| A4 | `dc-jan.png` | 640×740 PNG พื้นใส | [/doctors/](https://aesthetic-website.vercel.app/doctors/) · [/](https://aesthetic-website.vercel.app/) | การ์ดหมอใบที่ 4 + หน้าแรก | ผิวไม่มีรูขุมขน ขนตาเบลอเป็นปื้น ท่าและชุดเป็นเทมเพลตเดียวกับอีก 5 ใบเป๊ะ |
| A5 | `dc-jelly.png` | 640×740 PNG พื้นใส | [/doctors/](https://aesthetic-website.vercel.app/doctors/) · [/](https://aesthetic-website.vercel.app/) | การ์ดหมอใบที่ 5 + หน้าแรก | เหมือน A4 |
| A6 | `dc-ohm.png` | 640×740 PNG พื้นใส | [/doctors/](https://aesthetic-website.vercel.app/doctors/) | การ์ดหมอใบที่ 6 (ใบเดียวที่ไม่ขึ้นหน้าแรก) | มือไม่มีนิ้วโป้ง นิ้วเชื่อมติดกัน |
| A7 | `hero-hospital.jpg` | 1920×1080 JPG | [/](https://aesthetic-website.vercel.app/) + **ทุกหน้า** | ภาพพื้นหลัง hero เต็มจอหน้าแรก **และเป็นภาพ OG ตอนแชร์ลิงก์ทุกหน้า** | อาคารเป็นภาพเรนเดอร์ AI — รูปที่คนเห็นเยอะที่สุดในเว็บ |
| A8 | `bg-building.jpg` | 1800×764 JPG | [/](https://aesthetic-website.vercel.app/) | ฉากหลังจาง ๆ (opacity 0.15) ใต้หัวข้อ WHAT WE SOLVE | อาคาร AI (ความเสี่ยงต่ำเพราะจางมาก แต่ควรเปลี่ยน) |
| A9 | `hospital-side2.jpg` | 2560×1086 JPG | [/](https://aesthetic-website.vercel.app/) | แถบภาพอาคารเต็มความกว้าง ใต้ OUR HOSPITAL | อาคาร AI |

> **A7 สำคัญเป็นพิเศษ** — ไฟล์นี้ถูกใช้เป็น `og:image` ของทุกหน้าในเว็บ เวลาแชร์ลิงก์ลง LINE / Facebook
> รูปที่เด้งขึ้นมาคือรูปนี้ เปลี่ยนไฟล์เดียวแก้ได้ทั้งเว็บ

---

## กลุ่ม B — ช่อง placeholder ที่รอรูปจริงอยู่ (14 ไฟล์) 🟡

ตอนนี้แสดงเป็นกรอบเส้นประสีครีมพร้อมข้อความบอกว่าต้องใส่รูปอะไร ขนาดเท่าไหร่
**ไม่ผิดกฎหมาย** เพราะไม่ได้หลอกใคร แต่หน้าเว็บยังไม่สมบูรณ์

| # | ไฟล์ | ขนาดที่ต้องได้ | แสดงที่หน้า | ต้องการรูปอะไร |
|---|---|---|---|---|
| B1 | `promo/hifu.jpg` | 1080×810 | [/promotions/](https://aesthetic-website.vercel.app/promotions/) · [/hifu/](https://aesthetic-website.vercel.app/hifu/) · [/ultraformer/](https://aesthetic-website.vercel.app/ultraformer/) · [/thermage/](https://aesthetic-website.vercel.app/thermage/) | การ์ดโปร Ultraformer III S 200 ช็อต |
| B2 | `promo/pico.jpg` | 1080×810 | [/promotions/](https://aesthetic-website.vercel.app/promotions/) · [/pico-laser/](https://aesthetic-website.vercel.app/pico-laser/) | การ์ดโปร Pico 1 แถม 1 |
| B3 | `promo/ivdrip.jpg` | 1080×810 | [/promotions/](https://aesthetic-website.vercel.app/promotions/) · [/iv-drip/](https://aesthetic-website.vercel.app/iv-drip/) | การ์ดโปร Aura White IV Drip 5 ครั้ง |
| B4 | `promo/diamond.jpg` | 1080×810 | [/promotions/](https://aesthetic-website.vercel.app/promotions/) · [/diamond-baby-face/](https://aesthetic-website.vercel.app/diamond-baby-face/) | การ์ดโปร Diamond Baby Face 4 ครั้ง |
| B5 | `promo/underarm.jpg` | 1080×810 | [/promotions/](https://aesthetic-website.vercel.app/promotions/) · [/underarm-laser/](https://aesthetic-website.vercel.app/underarm-laser/) | การ์ดโปรกำจัดขนไดโอด 8 ครั้ง |
| B6 | `hero-doctors.png` | 1146×657 PNG พื้นใส | [/](https://aesthetic-website.vercel.app/) | ภาพหมู่ทีมแพทย์ ตัดพื้นหลังออก วางทับ hero หน้าแรก (ทั้งจอคอมและมือถือ) |
| B7 | `who-team.png` | 1400×847 | [/](https://aesthetic-website.vercel.app/) | ภาพหมู่ทีมงาน ในส่วน ART & SCIENCE |
| B8 | `method-inject.jpg` | 2560×1706 | [/](https://aesthetic-website.vercel.app/) | ภาพการฉีดจริงที่คลินิก — การ์ด "ฉีด" ในแถว By Method |
| B9 | `method-machine.png` | 918×769 | [/](https://aesthetic-website.vercel.app/) · [/ultraformer/](https://aesthetic-website.vercel.app/ultraformer/) | ภาพเครื่องมือของเราเอง — การ์ด "เครื่อง" + hero หน้า Ultraformer |
| B10 | `method-treatment.jpg` | 2560×1707 | [/](https://aesthetic-website.vercel.app/) | ภาพห้องทรีตเมนต์ขณะใช้งานจริง — การ์ด "ทรีตเมนต์" |
| B11 | `tx-face-inject.jpg` | 900×600 | [/filler/](https://aesthetic-website.vercel.app/filler/) · [/dolly-eye/](https://aesthetic-website.vercel.app/dolly-eye/) | ภาพฉีดฟิลเลอร์บนใบหน้า — hero 2 หน้า |
| B12 | `tx-injection.jpg` | 900×600 | [/botox/](https://aesthetic-website.vercel.app/botox/) | ภาพขั้นตอนการฉีด — hero หน้าโบท็อกซ์ |
| B13 | `tx-lip-filler.jpg` | 900×600 | [/lip-filler/](https://aesthetic-website.vercel.app/lip-filler/) | ภาพฉีดฟิลเลอร์ปากโดยแพทย์ของเรา — hero หน้าฟิลเลอร์ปาก |
| B14 | `slide-diamond.png` | 1400×685 | [/diamond-baby-face/](https://aesthetic-website.vercel.app/diamond-baby-face/) | แบนเนอร์ Diamond Baby Face — hero |

> ไฟล์ B11–B14 และ B9 ยังถูกใช้เป็น `og:image` ของหน้านั้น ๆ ด้วย

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

## รูปที่ตรวจแล้วว่าเป็นของจริง — ไม่ต้องแก้ (50 ไฟล์) ✅

- **`ba/*.jpg` ทั้ง 10 ไฟล์** (ก่อน–หลัง) — เห็นผ้าคาดผมปัก "THE ART CLINIC" ชัดเจน
  มีวันที่ภาษาไทยสะกดถูกต้อง (AI มักเขียนภาษาไทยเพี้ยน) มีรูขุมขน ไฝ ขนตาจริง
- **`rv-filler-1..6.jpg`** — การ์ดรีวิวมีโลโก้ THE ART CLINIC และหมายเหตุ
  "รูปที่ใช้รีวิวได้รับการอนุญาตแล้ว" ครบ
- **`rev/*.jpg`, `promo/filler|lip-filler|botox|thread.jpg`** — ดึงจาก art-hospital.com มีแบรนด์ THE ART
- **`tour/room1-3.jpg`, `hospital-side.jpg`** — ภาพถ่ายจริงของคลินิก
- **`logo-*.png`, `line-icon.png`** — โลโก้/ไอคอน ไม่ใช่ภาพถ่าย

**2 ไฟล์ที่ยังสรุปไม่ได้** (ผู้ตรวจชุดที่สองให้ผล "ไม่แน่ใจ"):
`ba/lips-a.jpg` (ครอปแคบเกินจนไม่เหลือเบาะแส) และ `blue-model.png` (นางแบบ ใช้เป็นภาพประกอบ ไม่ได้อ้างว่าเป็นคนไข้)

---

## ข้อควรรู้ก่อนถ่ายรูปใหม่

1. **รูปหมอ (A1–A6)** ต้องเป็นรูปแพทย์ตัวจริงทั้ง 6 ท่านตามที่ระบุใน `lib/shared-data.ts`
   ถ่ายท่าเดียวกัน ฉากเดียวกัน แล้วตัดพื้นหลังเป็น PNG โปร่งใส ขนาด 640×740
2. **ห้ามใช้ภาพสต็อก** ที่ไม่ใช่คลินิกเรา — ผิดหลักเดียวกับภาพ AI
3. **ภาพคนไข้ทุกภาพ** ต้องมีหนังสือยินยอมเป็นลายลักษณ์อักษร (ดูตัวอย่างการใส่หมายเหตุใน `rv-filler-*.jpg`)
4. ใส่ไฟล์ทับที่เดิมโดยใช้ **ชื่อไฟล์เดิมเป๊ะ** แล้ว deploy — ไม่ต้องแก้โค้ดเลย
