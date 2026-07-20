const services = [
  {
    title: "ดูแลผิวหน้า",
    description:
      "ทรีตเมนต์บำรุงผิวลึกถึงชั้นผิว ฟื้นฟูผิวหมองคล้ำ ให้ผิวกระจ่างใสอย่างเป็นธรรมชาติ",
  },
  {
    title: "เลเซอร์",
    description:
      "เทคโนโลยีเลเซอร์มาตรฐานสากล แก้ปัญหาฝ้า กระ จุดด่างดำ และรูขุมขนกว้าง",
  },
  {
    title: "ฟิลเลอร์ & โบท็อกซ์",
    description:
      "ปรับรูปหน้าและลดริ้วรอยด้วยผลิตภัณฑ์แท้ ฉีดโดยแพทย์ผู้เชี่ยวชาญเฉพาะทาง",
  },
  {
    title: "ปรึกษาแพทย์",
    description:
      "วางแผนการดูแลผิวเฉพาะบุคคล ประเมินปัญหาผิวโดยแพทย์ ไม่มีค่าใช้จ่าย",
  },
];

const highlights = [
  { value: "10+", label: "ปีประสบการณ์" },
  { value: "20,000+", label: "ลูกค้าไว้วางใจ" },
  { value: "100%", label: "ผลิตภัณฑ์ของแท้" },
];

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-blush-100 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-semibold tracking-wide text-blush-700">
            AESTHETIC
          </a>
          <div className="hidden gap-8 text-sm font-medium text-stone-600 sm:flex">
            <a href="#services" className="hover:text-blush-600">
              บริการ
            </a>
            <a href="#about" className="hover:text-blush-600">
              เกี่ยวกับเรา
            </a>
            <a href="#contact" className="hover:text-blush-600">
              ติดต่อ
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-blush-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blush-700"
          >
            จองคิว
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
        <p className="mb-4 rounded-full border border-blush-200 bg-white px-4 py-1 text-sm text-blush-700">
          คลินิกความงามครบวงจร
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
          สวยอย่างมั่นใจ ดูแลโดยแพทย์ผู้เชี่ยวชาญ
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-light text-stone-600">
          ให้เราดูแลผิวของคุณด้วยเทคโนโลยีทันสมัยและทีมแพทย์เฉพาะทาง
          ออกแบบโปรแกรมเฉพาะบุคคล เพื่อผลลัพธ์ที่เป็นธรรมชาติ
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-blush-600 px-8 py-3 font-medium text-white transition hover:bg-blush-700"
          >
            ปรึกษาฟรี
          </a>
          <a
            href="#services"
            className="rounded-full border border-blush-300 bg-white px-8 py-3 font-medium text-blush-700 transition hover:bg-blush-100"
          >
            ดูบริการทั้งหมด
          </a>
        </div>
        <dl className="mt-16 grid w-full max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label}>
              <dt className="text-3xl font-semibold text-blush-600">{item.value}</dt>
              <dd className="mt-1 text-sm text-stone-500">{item.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-semibold text-stone-900">
            บริการของเรา
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center font-light text-stone-600">
            ครบทุกเรื่องความงาม ด้วยมาตรฐานทางการแพทย์
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-blush-100 bg-blush-50 p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blush-100"
              >
                <h3 className="text-lg font-semibold text-blush-700">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-stone-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-stone-900">
              ทำไมต้องเลือกเรา
            </h2>
            <ul className="mt-6 space-y-4 text-stone-600">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blush-500" />
                ดูแลโดยแพทย์ผู้เชี่ยวชาญด้านผิวหนังและความงามโดยเฉพาะ
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blush-500" />
                ใช้ผลิตภัณฑ์และเครื่องมือของแท้ ผ่านการรับรองมาตรฐาน
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blush-500" />
                ออกแบบโปรแกรมดูแลเฉพาะบุคคล ตามปัญหาผิวของคุณ
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blush-500" />
                ติดตามผลหลังการรักษาอย่างใกล้ชิด
              </li>
            </ul>
          </div>
          <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-gradient-to-br from-blush-100 to-blush-200 text-blush-400">
            <span className="text-sm">พื้นที่สำหรับรูปภาพคลินิก</span>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="bg-blush-700 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold">พร้อมเริ่มดูแลผิวของคุณแล้วหรือยัง?</h2>
          <p className="mt-4 font-light text-blush-100">
            ปรึกษาแพทย์ฟรี ไม่มีค่าใช้จ่าย — ทักหาเราได้ทุกช่องทาง
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:020000000"
              className="rounded-full bg-white px-8 py-3 font-medium text-blush-700 transition hover:bg-blush-100"
            >
              โทร 02-000-0000
            </a>
            <a
              href="#"
              className="rounded-full border border-blush-300 px-8 py-3 font-medium text-white transition hover:bg-blush-600"
            >
              LINE Official
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blush-100 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-stone-500 sm:flex-row">
          <span>© 2026 Aesthetic Clinic. All rights reserved.</span>
          <span>เปิดทุกวัน 10:00 – 20:00 น.</span>
        </div>
      </footer>
    </main>
  );
}
