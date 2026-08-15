"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";

/**
 * แถบเปรียบเทียบก่อน–หลัง (reference: dc-import "BeforeAfter")
 * ภาพ after เป็นพื้นหลัง ภาพ before ถูก clip จากซ้ายตามตำแหน่งแฮนเดิล
 * ลาก/แตะ/ลูกศรคีย์บอร์ด ผ่าน <input type="range"> โปร่งใสที่คลุมทั้งภาพ
 */
export default function BaSlider({
  before,
  after,
  label,
  aspect,
  minHeight,
  radius = 18,
  sizes,
}: {
  before: string;
  after: string;
  label: string;
  aspect: string;
  minHeight?: number;
  radius?: number;
  sizes: string;
}) {
  const [pos, setPos] = useState(50);

  const pill: CSSProperties = {
    position: "absolute",
    top: 12,
    padding: "5px 12px",
    borderRadius: 999,
    background: "rgba(46,33,28,.55)",
    backdropFilter: "blur(6px)",
    color: "#F6E8E1",
    font: "500 10.5px 'Luxia','Noto Sans Thai',sans-serif",
    letterSpacing: ".14em",
    pointerEvents: "none",
    zIndex: 2,
  };

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: radius,
        background: "#EFD3C2",
        aspectRatio: aspect,
        minHeight,
        userSelect: "none",
      }}
    >
      <Image src={after} alt={`${label} — after`} fill sizes={sizes} draggable={false} style={{ objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt={`${label} — before`} fill sizes={sizes} draggable={false} style={{ objectFit: "cover" }} />
      </div>
      <span style={{ ...pill, left: 12 }}>BEFORE</span>
      <span style={{ ...pill, right: 12 }}>AFTER</span>
      {/* เส้นแบ่ง */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${pos}%`,
          width: 2,
          transform: "translateX(-1px)",
          background: "rgba(255,255,255,.92)",
          boxShadow: "0 0 10px rgba(43,28,22,.35)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
      {/* ปุ่มจับ */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: `${pos}%`,
          transform: "translate(-50%,-50%)",
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "rgba(255,255,255,.92)",
          border: "1px solid #D9B7A3",
          boxShadow: "0 8px 22px rgba(107,74,60,.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          color: "#8F543F",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" aria-hidden="true">
          <path d="M6 1 1.5 6 6 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" aria-hidden="true">
          <path d="M1 1l4.5 5L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={label}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          margin: 0,
          opacity: 0,
          cursor: "ew-resize",
          zIndex: 3,
          WebkitAppearance: "none",
          appearance: "none",
        }}
      />
    </div>
  );
}
