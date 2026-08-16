"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";

const STEPS = [
  { grade: "Grade 8", quote: "“I don’t know what I want.”" },
  { grade: "Grade 10", quote: "“Everyone else has already started.”" },
  { grade: "Grade 12", quote: "Applications. Panic. Confusion." },
  { grade: "Admission Season", quote: "Too late." },
];

export default function Story() {
  const spineFill = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const fill = spineFill.current;
    if (!section || !fill) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(
        Math.max((vh * 0.7 - rect.top) / rect.height, 0),
        1
      );
      fill.style.height = `${progress * 100}%`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="section section--deep">
      <div className="container">
        <Reveal className="shead shead--center" style={{ maxWidth: 640 }}>
          <p className="pull-lede" style={{ margin: "0 auto", textAlign: "left" }}>
            How futures quietly slip away.
          </p>
          <span className="kicker-after">The Story Repeats Every Year</span>
        </Reveal>

        <div className="story" ref={sectionRef} style={{ marginTop: 80 }}>
          <div className="story__spine">
            <div className="story__spine-fill" ref={spineFill} />
          </div>

          {STEPS.map((s, i) => (
            <Reveal key={s.grade} className="story__step">
              {i % 2 === 0 ? (
                <>
                  <div className="story__left">
                    <div className="story__grade">{s.grade}</div>
                    <div className="story__quote">{s.quote}</div>
                  </div>
                  <div className="story__dot" />
                  <div />
                </>
              ) : (
                <>
                  <div />
                  <div className="story__dot" />
                  <div>
                    <div className="story__grade">{s.grade}</div>
                    <div className="story__quote">{s.quote}</div>
                  </div>
                </>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="shead shead--center" delay={1}>
          <h2 className="h-lg" style={{ marginTop: 96 }}>
            Don&rsquo;t let this be <strong className="text-gold">your</strong> story.
          </h2>
          <div style={{ marginTop: 40 }}>
            <a href="/assessment" className="btn btn--gold">
              Start the Journey Early
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
