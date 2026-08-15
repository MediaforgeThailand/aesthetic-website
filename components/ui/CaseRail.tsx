"use client";

import { useRef } from "react";
import Image from "next/image";
import { Lang, tr } from "@/lib/i18n";
import { BaCase, concernLabel, concernTag } from "@/lib/ba-cases";
import { disclaimer } from "@/lib/shared-data";

/**
 * แถวภาพเคสจริงก่อน–หลัง (แถวที่สองของ Real Client Reviews)
 * ใช้ท่าเดียวกับ ReviewRail — drag ด้วยเมาส์ + scroll-snap + ปุ่มลูกศรบนเดสก์ท็อป
 * ต่างกันที่การ์ดเป็นภาพแนวนอน 4:3 เพราะไฟล์มีก่อน–หลังอยู่ในภาพเดียวกันแล้ว
 */
export default function CaseRail({ lang, items }: { lang: Lang; items: BaCase[] }) {
  const t = tr(lang);
  const railRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ x: 0, s: 0, on: false });

  const scrollByCard = (dir: number) => () => {
    const r = railRef.current;
    if (!r) return;
    const card = r.querySelector("[data-card]");
    const step = card ? card.getBoundingClientRect().width + 18 : r.clientWidth * 0.8;
    r.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget;
    drag.current = { x: e.clientX, s: r.scrollLeft, on: true };
    r.style.scrollBehavior = "auto";
    r.style.cursor = "grabbing";
  };
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.on) return;
    e.preventDefault();
    e.currentTarget.scrollLeft = drag.current.s - (e.clientX - drag.current.x);
  };
  const onUp = (e: React.PointerEvent<HTMLDivElement>) => {
    drag.current.on = false;
    e.currentTarget.style.cursor = "grab";
    e.currentTarget.style.scrollBehavior = "smooth";
  };

  const arrowStyle = (side: "left" | "right"): React.CSSProperties => ({
    position: "absolute",
    [side]: 6,
    top: "calc((100% - 44px)*0.40)",
    zIndex: 3,
    width: 50,
    height: 50,
    borderRadius: "50%",
    border: "1px solid #D9B7A3",
    background: "rgba(255,255,255,.75)",
    opacity: 0.7,
    color: "#8F543F",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 22px rgba(107,74,60,.16)",
  });

  if (!items.length) return null;

  return (
    <div>
      {/* ซ้ำกับใน ReviewRail โดยตั้งใจ — หน้าที่ใช้ CaseRail เดี่ยว ๆ จะได้มี hover ของปุ่มด้วย */}
      <style>{`.aa-revbtn{transition:opacity .25s,transform .25s}.aa-revbtn:hover{opacity:1 !important;transform:translateY(-2px)}`}</style>
      <div style={{ position: "relative" }}>
        <button type="button" onClick={scrollByCard(-1)} aria-label="Previous" className="aa-m-hide aa-revbtn" style={arrowStyle("left")}>
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none" aria-hidden>
            <path d="M9.5 1.5 2 9l7.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button type="button" onClick={scrollByCard(1)} aria-label="Next" className="aa-m-hide aa-revbtn" style={arrowStyle("right")}>
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none" aria-hidden>
            <path d="M1.5 1.5 9 9l-7.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div
          ref={railRef}
          data-rv
          className="aa-rail"
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerLeave={onUp}
          style={{
            display: "flex",
            gap: 18,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollPaddingInline: "clamp(12px,7vw,66px)",
            padding: "30px clamp(12px,7vw,66px) 18px",
            marginTop: 14,
            cursor: "grab",
            transitionDelay: ".08s",
          }}
        >
          {items.map((c) => (
            <div key={c.img} data-card style={{ flex: "none", width: "clamp(300px,86vw,438px)", scrollSnapAlign: "center" }}>
              <div
                style={{
                  position: "relative",
                  borderRadius: 24,
                  overflow: "hidden",
                  background: "#EFD3C2",
                  boxShadow: "0 18px 42px rgba(107,74,60,.18)",
                  aspectRatio: "1072/800",
                }}
              >
                <Image
                  src={c.img}
                  alt={`${t("เคสจริงก่อน–หลัง", "Real before and after case")} — ${concernLabel(lang, c.concern)}`}
                  fill
                  sizes="(max-width: 640px) 86vw, 438px"
                  draggable={false}
                  style={{ objectFit: "cover", pointerEvents: "none" }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 14,
                    top: 14,
                    padding: "6px 14px",
                    borderRadius: 999,
                    background: "rgba(46,33,28,.62)",
                    backdropFilter: "blur(6px)",
                    color: "#F6E8E1",
                    font: "500 11px 'Luxia','Noto Sans Thai',sans-serif",
                    letterSpacing: ".14em",
                  }}
                >
                  {concernTag(c.concern)}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginTop: 14, padding: "0 4px" }}>
                <div style={{ font: "600 15.5px 'Luxia','Noto Sans Thai',sans-serif", color: "#33241E" }}>{concernLabel(lang, c.concern)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 6, font: "300 12.5px 'Luxia','Noto Sans Thai',sans-serif", color: "#A08876" }}>{disclaimer(lang)}</div>
    </div>
  );
}
