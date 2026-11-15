"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, FileText } from "lucide-react";
import { profile } from "@/content/site";

const links = [
  { id: "story", label: "Story" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    const apply = () => {
      document.documentElement.dataset.theme = next;
      setTheme(next);
    };
    try {
      localStorage.setItem("rp-theme", next);
    } catch {}
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (doc.startViewTransition && !reduce) doc.startViewTransition(apply);
    else apply();
  };

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap nav__in">
        <a href="#top" className="nav__brand" aria-label="Rivan Permana, back to top">
          <span className="nav__glyph" aria-hidden="true">
            {[0.5, 0.9, 0.6, 1, 0.4].map((h, i) => (
              <i key={i} style={{ height: `${h * 100}%` }} />
            ))}
          </span>
          Rivan Permana
        </a>
        <nav aria-label="Sections">
          <ul className="nav__links">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} aria-current={active === l.id ? "true" : undefined}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav__actions">
          <button className="icon-btn" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "dark" ? <Sun aria-hidden="true" strokeWidth={1.5} /> : <Moon aria-hidden="true" strokeWidth={1.5} />}
          </button>
          <a className="rp-btn rp-btn--secondary rp-btn--sm" href={profile.cv} download>
            <FileText aria-hidden="true" strokeWidth={1.5} />
            CV
          </a>
        </div>
      </div>
    </header>
  );
}
