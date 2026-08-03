"use client";

import { useEffect } from "react";

/** Parallax เบา ๆ ให้วงกลม gradient ในฮีโร่ (element ที่มี data-plx) */
export default function HeroFx() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("#aa-hero [data-plx]"));
    if (!els.length) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        els.forEach((el) => {
          const f = parseFloat(el.dataset.plx || "0");
          el.style.transform = `translate3d(0, ${Math.round(y * f * 10) / 10}px, 0)`;
        });
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
