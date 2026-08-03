"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Before–After slider (reference: dc-import "BeforeAfter", aspect-ratio 386/560)
 * — ภาพ before เป็นฐาน, ภาพ after ถูก clip ตามตำแหน่งตัวเลื่อน (range input โปร่งใสคุมทั้งการ์ด)
 */
export default function BaSlider({
  before,
  after,
  altBefore,
  altAfter,
  ariaLabel,
}: {
  before: string;
  after: string;
  altBefore: string;
  altAfter: string;
  ariaLabel: string;
}) {
  const [pos, setPos] = useState(50);
  const label = (text: string, side: "left" | "right") => (
    <span
      style={{
        position: "absolute",
        bottom: 10,
        ...(side === "left" ? { left: 10 } : { right: 10 }),
        padding: "4px 10px",
        borderRadius: 999,
        background: "rgba(46,33,28,.55)",
        color: "#FBF3ED",
        font: "500 10px 'Prompt',sans-serif",
        letterSpacing: ".18em",
        pointerEvents: "none",
      }}
    >
      {text}
    </span>
  );
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "386/560",
        borderRadius: 18,
        overflow: "hidden",
        background: "#F5E7DE",
        boxShadow: "0 18px 42px rgba(107,74,60,.16)",
        userSelect: "none",
      }}
    >
      <Image src={before} alt={altBefore} fill sizes="(max-width: 980px) 92vw, 44vw" style={{ objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 0 0 ${pos}%)` }}>
        <Image src={after} alt={altAfter} fill sizes="(max-width: 980px) 92vw, 44vw" style={{ objectFit: "cover" }} />
      </div>
      {/* เส้นแบ่ง + ปุ่มจับ */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${pos}%`,
          width: 2,
          marginLeft: -1,
          background: "rgba(255,255,255,.85)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: `${pos}%`,
          transform: "translate(-50%,-50%)",
          width: 34,
          height: 34,
          borderRadius: "50%",
          background: "#fff",
          border: "1px solid #E3C2AF",
          boxShadow: "0 6px 16px rgba(43,28,22,.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          color: "#8F543F",
          fontSize: 11,
          pointerEvents: "none",
        }}
      >
        ◂ ▸
      </div>
      {label("BEFORE", "left")}
      {label("AFTER", "right")}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        aria-label={ariaLabel}
        onChange={(e) => setPos(Number(e.target.value))}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          margin: 0,
          opacity: 0,
          cursor: "ew-resize",
        }}
      />
    </div>
  );
}
