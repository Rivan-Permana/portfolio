"use client";

import { useState } from "react";
import { flushSync } from "react-dom";
import { ArrowUpRight } from "lucide-react";
import { projects, tracks, type Project, type Track } from "@/content/site";

type Filter = "All" | Track;

function Card({ p }: { p: Project }) {
  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <article
      className={`rp-card${p.featured ? " rp-card--featured" : ""}`}
      onPointerMove={onMove}
      style={{ viewTransitionName: `card-${p.id}` } as React.CSSProperties}
    >
      <div className="rp-card__top">
        <span className="rp-card__ctx">{p.context}</span>
        {p.status ? <span className="rp-status">{p.status}</span> : <span className="rp-meta">{p.dates}</span>}
      </div>
      <div className="rp-card__body">
        <div className="rp-card__col">
          <h3 className="rp-card__title">{p.name}</h3>
          <p className="rp-card__line">{p.line}</p>
          {p.id === "midas" && (
            <div className="flow" aria-label="Pipeline: recording, quality check, models, report">
              <span>voice.wav</span>
              <i />
              <span>audio QC</span>
              <i />
              <span>models</span>
              <i />
              <span>report.pdf</span>
            </div>
          )}
        </div>
        <div className="rp-card__col">
          <p className="rp-card__desc">{p.detail}</p>
          <span className="rp-card__role">
            {p.role}
            {p.status ? ` · ${p.dates}` : ""}
          </span>
        </div>
      </div>
      <div className="rp-card__tags">
        {p.stack.map((s) => (
          <span key={s} className="rp-tag">
            {s}
          </span>
        ))}
        {p.href && (
          <a className="rp-card__go" href={p.href} target="_blank" rel="noreferrer" style={{ marginLeft: "auto" }}>
            Source <ArrowUpRight aria-hidden="true" strokeWidth={1.5} />
          </a>
        )}
      </div>
    </article>
  );
}

export default function Work() {
  const [filter, setFilter] = useState<Filter>("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.tracks.includes(filter));

  const choose = (f: Filter) => {
    if (f === filter) return;
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (doc.startViewTransition && !reduce) doc.startViewTransition(() => flushSync(() => setFilter(f)));
    else setFilter(f);
  };

  const options: Filter[] = ["All", ...tracks];

  return (
    <>
      <div className="work__bar">
        <div className="rp-pills" role="group" aria-label="Filter projects by track">
          {options.map((o) => {
            const n = o === "All" ? projects.length : projects.filter((p) => p.tracks.includes(o)).length;
            return (
              <button key={o} className="rp-pill" aria-pressed={filter === o} onClick={() => choose(o)}>
                {o} <span className="count num">{n}</span>
              </button>
            );
          })}
        </div>
        <span className="rp-meta" aria-live="polite">
          Showing {shown.length} of {projects.length}
        </span>
      </div>
      <div className="grid">
        {shown.map((p) => (
          <Card key={p.id} p={p} />
        ))}
      </div>
    </>
  );
}
