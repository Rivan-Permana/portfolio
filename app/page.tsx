import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import Nav from "@/components/Nav";
import Motion from "@/components/Motion";
import Waveform from "@/components/Waveform";
import Story from "@/components/Story";
import Work from "@/components/Work";
import CopyEmail from "@/components/CopyEmail";
import { activities, contact, education, experience, hero, profile, recognition, stack } from "@/content/site";

function Headline() {
  // "I build the part you don't see." with the last two words set in italic.
  const words = hero.headline.split(" ");
  const tail = 2;
  return (
    <h1 className="hero__h">
      {words.map((w, i) => {
        const inner = i >= words.length - tail ? <em>{w}</em> : w;
        return (
          <span key={i}>
            <span className="w" style={{ ["--i" as string]: i }}>
              {inner}
            </span>
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </h1>
  );
}

function SectionHead({ id, label, title, lede }: { id: string; label: string; title: string; lede?: string }) {
  return (
    <div className="section__head" data-reveal>
      <span className="rp-label">{label}</span>
      <div>
        <h2 id={id} className="section__title">{title}</h2>
        {lede && <p className="section__lede">{lede}</p>}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <Motion />
      <Nav />
      <main id="main">
        {/* Hero */}
        <section id="top" className="hero" aria-labelledby="hero-h">
          <div className="hero__grid" aria-hidden="true" />
          <div className="wrap hero__in">
            <p className="rp-label hero__eyebrow">{hero.eyebrow}</p>
            <div id="hero-h">
              <Headline />
            </div>
            <div className="hero__row">
              <div>
                <p className="hero__sub">{hero.sub}</p>
                <div className="hero__cta">
                  <a className="rp-btn rp-btn--primary" href="#work">
                    See the work <ArrowDown aria-hidden="true" strokeWidth={1.5} />
                  </a>
                  <a className="rp-btn rp-btn--secondary" href="#contact">
                    Get in touch
                  </a>
                </div>
                <p className="rp-status hero__status">{profile.status}</p>
              </div>
              <figure className="deck" style={{ margin: 0 }}>
                <div className="deck__bar">
                  <span className="deck__dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="rp-meta">participant_0142.wav</span>
                </div>
                <div className="deck__body">
                  <Waveform interactive playhead label="A voice recording waveform. Move the pointer across it to inspect the signal." />
                </div>
                <figcaption className="deck__foot rp-meta">
                  <span>
                    audio QC <b>passed</b>
                  </span>
                  <span>→ inference → report.pdf</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Story */}
        <section id="story" className="section" aria-labelledby="story-h">
          <div className="wrap">
            <SectionHead
              id="story-h"
              label="The story"
              title="How I ended up building the part you don't see."
              lede="Four short chapters. About three minutes to read."
            />
            <Story />
          </div>
        </section>

        <div className="wrap divider" aria-hidden="true">
          <Waveform bars={32} />
          <hr />
        </div>

        {/* Work */}
        <section id="work" className="section" aria-labelledby="work-h">
          <div className="wrap">
            <div className="section__head" data-reveal>
              <span className="rp-label">Selected work</span>
              <div>
                <h2 id="work-h" className="section__title">
                  Nine things I built, and what I did on each.
                </h2>
                <p className="section__lede">
                  Client work, internships and team projects. Filter by the track you&apos;re hiring for.
                </p>
              </div>
            </div>
            <Work />
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section" aria-labelledby="exp-h">
          <div className="wrap">
            <div className="section__head" data-reveal>
              <span className="rp-label">Experience</span>
              <div>
                <h2 id="exp-h" className="section__title">
                  Four organisations, four kinds of stakes.
                </h2>
              </div>
            </div>
            <div className="tl">
              {experience.map((r, i) => (
                <article key={r.org} className="rp-tl" data-reveal style={{ ["--d" as string]: i }}>
                  <div className="rp-tl__when">
                    <span className="rp-tl__dot" aria-hidden="true" />
                    <span className="rp-meta">{r.dates}</span>
                    <span className="rp-meta">{r.place}</span>
                  </div>
                  <div>
                    <h3 className="rp-tl__org">{r.org}</h3>
                    <p className="rp-tl__role">{r.title}</p>
                    {r.note && <p className="rp-tl__note">{r.note}</p>}
                    <ul>
                      {r.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                    <div className="rp-tl__tags">
                      {r.tags.map((t) => (
                        <span key={t} className="rp-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="section" aria-labelledby="stack-h">
          <div className="wrap">
            <div className="section__head" data-reveal>
              <span className="rp-label">Stack</span>
              <div>
                <h2 id="stack-h" className="section__title">
                  Tools I&apos;ve used in production, and where.
                </h2>
              </div>
            </div>
            <div className="stack">
              {stack.map((g, gi) => (
                <div key={g.group} className="stack__group" data-reveal style={{ ["--d" as string]: gi }}>
                  <span className="rp-label">{g.group}</span>
                  <div className="rp-stack">
                    {g.items.map((it) => (
                      <div key={it.name} className="rp-tile">
                        <span className="rp-tile__mark" aria-hidden="true">
                          {it.mark}
                        </span>
                        <span>
                          <span className="rp-tile__name" style={{ display: "block" }}>
                            {it.name}
                          </span>
                          <span className="rp-tile__use">{it.use}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Along the way */}
        <section className="section" aria-labelledby="along-h">
          <div className="wrap">
            <div className="section__head" data-reveal>
              <span className="rp-label">Along the way</span>
              <div>
                <h2 id="along-h" className="section__title">
                  Recognition, school and the rooms I helped start.
                </h2>
              </div>
            </div>
            <div className="ledger">
              <div className="ledger__col" data-reveal>
                <h3 className="rp-label">Recognition</h3>
                <ul>
                  {recognition.map((r) => (
                    <li key={r.what + r.who}>
                      <span>
                        <span className="ledger__what" style={{ display: "block" }}>
                          {r.what}
                        </span>
                        <span className="ledger__who">{r.who}</span>
                      </span>
                      <span className="rp-meta">{r.when}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ledger__col" data-reveal style={{ ["--d" as string]: 1 }}>
                <h3 className="rp-label">Education</h3>
                <ul>
                  {education.map((e) => (
                    <li key={e.school}>
                      <span>
                        <span className="ledger__what" style={{ display: "block" }}>
                          {e.school}
                        </span>
                        <span className="ledger__who">{e.what}</span>
                      </span>
                      <span className="rp-meta">{e.when}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="rp-label" style={{ marginTop: "var(--space-8)" }}>
                  Community
                </h3>
                <ul>
                  {activities.map((a) => (
                    <li key={a.who}>
                      <span>
                        <span className="ledger__what" style={{ display: "block" }}>
                          {a.who}
                        </span>
                        <span className="ledger__who">{a.what}</span>
                      </span>
                      <span className="rp-meta">{a.when}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact" aria-labelledby="contact-h">
          <div className="wrap" data-reveal>
            <span className="rp-label">Contact</span>
            <h2 id="contact-h" className="contact__h" style={{ marginTop: "var(--space-6)" }}>
              {contact.title}
            </h2>
            <p className="contact__sub">{contact.sub}</p>
            <a className="contact__mail" href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" strokeWidth={1.5} width={28} height={28} />
              {profile.email}
            </a>
            <div className="contact__row">
              <CopyEmail email={profile.email} />
              <a className="rp-btn rp-btn--secondary" href={profile.cv} download>
                Download CV (PDF)
              </a>
              <a className="rp-link" href={profile.linkedin} target="_blank" rel="noreferrer" style={{ marginLeft: "var(--space-3)" }}>
                LinkedIn <ArrowUpRight aria-hidden="true" strokeWidth={1.5} />
              </a>
              <a className="rp-link" href={profile.github} target="_blank" rel="noreferrer" style={{ marginLeft: "var(--space-3)" }}>
                GitHub <ArrowUpRight aria-hidden="true" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap footer">
        <span className="rp-meta">© 2026 Rivan Permana · {profile.location}</span>
        <span className="rp-meta">Built with Next.js · Set in Newsreader &amp; Geist</span>
      </footer>
    </>
  );
}
