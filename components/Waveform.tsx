"use client";

import { useEffect, useRef } from "react";

// Deterministic heights so server and client render the same bars.
const BASE = [
  0.18, 0.3, 0.52, 0.4, 0.7, 0.95, 0.62, 0.8, 0.46, 0.34, 0.58, 0.88, 1, 0.72, 0.5, 0.66, 0.9, 0.6, 0.4, 0.55, 0.78,
  0.45, 0.3, 0.22, 0.38, 0.6, 0.84, 0.7, 0.48, 0.3, 0.2, 0.14, 0.26, 0.44, 0.68, 0.92, 0.74, 0.52, 0.36, 0.24, 0.42,
  0.64, 0.86, 0.58, 0.4, 0.28, 0.18, 0.12,
];

type Props = {
  bars?: number;
  interactive?: boolean;
  playhead?: boolean;
  label?: string;
};

export default function Waveform({ bars = 48, interactive = false, playhead = false, label = "Voice waveform" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const heights = Array.from({ length: bars }, (_, i) => BASE[i % BASE.length]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    el.classList.add("is-live");
    if (!interactive) return;

    const spans = Array.from(el.querySelectorAll<HTMLSpanElement>("span"));
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        spans.forEach((s, i) => {
          const d = Math.abs(i / (spans.length - 1) - x);
          const g = Math.exp(-(d * d) / 0.006);
          s.style.setProperty("--boost", String(1 + g * 0.45));
          s.style.setProperty("--lit", String(g));
        });
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      spans.forEach((s) => {
        s.style.setProperty("--boost", "1");
        s.style.setProperty("--lit", "0");
      });
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [interactive]);

  return (
    <div ref={ref} className="wave" role="img" aria-label={label}>
      {heights.map((h, i) => (
        <span key={i} style={{ ["--h" as string]: h, ["--i" as string]: i }} />
      ))}
      {playhead && <i className="wave__head" aria-hidden="true" />}
    </div>
  );
}
