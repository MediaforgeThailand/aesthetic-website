"use client";

import { useRef } from "react";
import Image from "next/image";
import { Lang } from "@/lib/i18n";
import { disclaimer, revItems } from "@/lib/shared-data";

/**
 * รีวิว carousel (COMPONENTS.md §7) — ใช้ทั้งหน้าแรกและหน้ารีวิว
 * drag (เมาส์) + scroll-snap + ปุ่มลูกศรบนเดสก์ท็อป + disclaimer ใต้แถวเสมอ
 */
export default function ReviewRail({ lang }: { lang: Lang }) {
  const items = revItems(lang);
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
    top: "calc((100% - 44px)*0.42)",
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

  return (
    <div>
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
          id="aa-rev-rail"
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
          {items.map((rv) => (
            <div key={rv.img} data-card style={{ flex: "none", width: "clamp(262px,78vw,346px)", scrollSnapAlign: "center" }}>
              <div
                style={{
                  position: "relative",
                  borderRadius: 24,
                  overflow: "hidden",
                  background: "#EFD3C2",
                  boxShadow: "0 18px 42px rgba(107,74,60,.18)",
                  aspectRatio: "1/1",
                }}
              >
                <Image
                  src={rv.img}
                  alt={rv.title}
                  fill
                  sizes="(max-width: 640px) 78vw, 346px"
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
                  REVIEW
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginTop: 14, padding: "0 4px" }}>
                <div style={{ font: "600 15.5px 'Luxia','Noto Sans Thai',sans-serif", color: "#33241E" }}>{rv.title}</div>
                <span
                  style={{
                    flex: "none",
                    padding: "5px 13px",
                    borderRadius: 999,
                    background: "#fff",
                    border: "1px solid #F0DCCF",
                    font: "500 11px 'Luxia','Noto Sans Thai',sans-serif",
                    letterSpacing: ".05em",
                    color: "#8F543F",
                  }}
                >
                  {rv.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 6, font: "300 12.5px 'Luxia','Noto Sans Thai',sans-serif", color: "#A08876" }}>{disclaimer(lang)}</div>
    </div>
  );
}
