"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Scroll-reveal + counter runtime, ported from the design reference. */
export default function FxScripts() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.add("rv-init");

    const reveal = (el: Element) => {
      el.classList.add("rv-on");
      const counters = el.matches("[data-count]")
        ? [el]
        : Array.from(el.querySelectorAll("[data-count]:not(.cnt-done)"));
      counters.forEach((n) => {
        if (n.classList.contains("cnt-done")) return;
        n.classList.add("cnt-done");
        const node = n as HTMLElement;
        const end = Number(node.dataset.count) || 0;
        const suf = node.dataset.suf || "";
        const t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min(1, (t - t0) / 950);
          node.textContent = Math.round(end * (p * (2 - p))) + suf;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    };

    const sweep = () => {
      const vh = window.innerHeight || 800;
      document.querySelectorAll("[data-rv]:not(.rv-on)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.96 && r.bottom > 0) reveal(el);
      });
      document.querySelectorAll("[data-count]:not(.cnt-done)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.96 && r.bottom > 0) reveal(el);
      });
    };

    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
    );
    document.querySelectorAll("[data-rv]:not(.rv-on)").forEach((el) => io.observe(el));

    sweep();
    window.addEventListener("scroll", sweep, { passive: true });
    window.addEventListener("resize", sweep, { passive: true });
    const timer = setInterval(sweep, 600);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", sweep);
      window.removeEventListener("resize", sweep);
      clearInterval(timer);
    };
  }, [pathname]);

  return null;
}
