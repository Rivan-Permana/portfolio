"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { chapters } from "@/content/site";

// Turns "text [[key phrase]] text" into text with a <mark>.
function Rich({ text }: { text: string }) {
  const parts = text.split(/(\[\[.+?\]\])/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("[[") ? <mark key={i}>{p.slice(2, -2)}</mark> : <Fragment key={i}>{p}</Fragment>
      )}
    </>
  );
}

export default function Story() {
  const root = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLElement>(null);
  const [active, setActive] = useState(chapters[0].key);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = Math.min(1, Math.max(0, (vh * 0.5 - r.top) / r.height));
        bar.current?.style.setProperty("--p", p.toFixed(3));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id.replace("ch-", ""))),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    el.querySelectorAll(".chapter").forEach((c) => io.observe(c));
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <div className="story" ref={root}>
      <aside className="story__rail" aria-label="Chapters">
        <div className="story__progress" aria-hidden="true">
          <i ref={bar} />
        </div>
        <ol className="story__nav">
          {chapters.map((c) => (
            <li key={c.key}>
              <a href={`#ch-${c.key}`} aria-current={active === c.key ? "true" : undefined}>
                <span className="num">{c.n}</span>
                {c.label}
              </a>
            </li>
          ))}
        </ol>
      </aside>
      <div>
        {chapters.map((c) => (
          <article key={c.key} id={`ch-${c.key}`} className="chapter" aria-labelledby={`h-${c.key}`}>
            <span className="rp-label chapter__n">
              Chapter {c.n} · {c.label}
            </span>
            <h3 id={`h-${c.key}`} className="chapter__h">
              {c.title}
            </h3>
            {c.body.map((p, i) => (
              <p key={i}>
                <Rich text={p} />
              </p>
            ))}
          </article>
        ))}
      </div>
    </div>
  );
}
