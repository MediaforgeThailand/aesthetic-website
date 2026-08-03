"use client";

import { useState } from "react";
import type { TxFaq } from "@/lib/tx-data";

/** FAQ accordion — เปิดทีละข้อ ไอคอน +/− (คำตอบยัง render ใน DOM เสมอเพื่อ SEO) */
export default function FaqAccordion({ faqs }: { faqs: TxFaq[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 22 }}>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} style={{ border: "1px solid #F0E1D8", borderRadius: 18, background: "#fff", overflow: "hidden" }}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "18px 22px",
                textAlign: "left",
              }}
            >
              <span style={{ font: "500 15px 'Prompt',sans-serif", color: "#33241E" }}>{f.q}</span>
              <span
                aria-hidden
                style={{
                  flex: "none",
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "#FAF3EE",
                  color: "#8F543F",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                }}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              style={{
                display: isOpen ? "block" : "none",
                padding: "0 22px 20px",
                font: "300 14px/1.9 'Prompt',sans-serif",
                color: "#5D4A40",
              }}
            >
              {f.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
