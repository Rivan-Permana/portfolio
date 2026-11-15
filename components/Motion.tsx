"use client";

import { useEffect } from "react";

// Adds .is-in to [data-reveal] and .chapter elements as they enter the viewport.
// Elements are already visible at rest (opacity 0.4 → 1), never hidden.
export default function Motion() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal], .chapter");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return null;
}
