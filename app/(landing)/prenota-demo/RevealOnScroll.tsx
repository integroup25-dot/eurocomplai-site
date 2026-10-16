"use client";

import { useEffect } from "react";

/** Comparsa delle sezioni [data-reveal] allo scroll, come nella landing statica. */
export default function RevealOnScroll() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".lp [data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    const frame = requestAnimationFrame(() => {
      nodes.forEach((n) => {
        const r = n.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) n.classList.add("is-visible");
      });
    });
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
