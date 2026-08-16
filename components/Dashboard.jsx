"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const METRICS = [
  { label: "Academic Score", value: "92", suffix: "▲ 6", pct: 92, color: "#2458e8" },
  { label: "Leadership", value: "84", suffix: "▲ 12", pct: 84, color: "#c7a14a" },
  { label: "Research", value: "76", suffix: "▲ 9", pct: 76, color: "#1faf7a" },
  { label: "Achievements", value: "18", suffix: "+3", pct: 70, color: "#e3c47a" },
  { label: "Communication", value: "88", suffix: "▲ 8", pct: 88, color: "#2458e8" },
  { label: "Global Exposure", value: "71", suffix: "▲ 15", pct: 71, color: "#1faf7a" },
];

const SIDE = [
  ["◆", "Overview", true],
  ["◈", "Academics", false],
  ["✦", "Leadership", false],
  ["❖", "Research", false],
  ["▲", "Achievements", false],
  ["◎", "Roadmap", false],
];

export default function Dashboard() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section section--dark">
      <div className="container">
        <Reveal className="shead shead--center">
          <h2 className="h-xl">
            A live dashboard of your child&rsquo;s <span className="underline-accent">rise</span>.
          </h2>
          <p className="lede text-muted">
            Parents don&rsquo;t get vague updates. They get a real-time growth
            system — every skill, project, and milestone measured.
          </p>
          <span className="kicker-after">Every Student Gets One</span>
        </Reveal>

        <Reveal className="dash" delay={1}>
          <div ref={ref}>
            <div className="dash__bar">
              <span className="dash__dot" style={{ background: "#ff5f57" }} />
              <span className="dash__dot" style={{ background: "#febc2e" }} />
              <span className="dash__dot" style={{ background: "#28c840" }} />
              <span className="dash__title">
                student-growth-system / aarav-mehta / grade-11
              </span>
            </div>
            <div className="dash__body">
              <div className="dash__side">
                {SIDE.map(([icon, label, active]) => (
                  <div
                    key={label}
                    className={`dash__side-item${active ? " is-active" : ""}`}
                  >
                    <span style={{ color: "#c7a14a", fontSize: 11 }}>{icon}</span>
                    {label}
                  </div>
                ))}
              </div>
              <div className="dash__main">
                <div className="dash__grid">
                  {METRICS.map((m) => (
                    <div className="dcard" key={m.label}>
                      <div className="dcard__label">{m.label}</div>
                      <div className="dcard__value">
                        {m.value} <span>{m.suffix}</span>
                      </div>
                      <div className="dcard__track">
                        <div
                          className="dcard__fill"
                          style={{
                            width: animated ? `${m.pct}%` : "0%",
                            background: m.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="dash__readiness">
                  <div>
                    <div className="dcard__label">Global University Readiness</div>
                    <p className="text-muted" style={{ fontSize: 14, maxWidth: "42ch", lineHeight: 1.6 }}>
                      On track for Ivy League & Oxbridge applications. Next
                      milestone: international research publication.
                    </p>
                  </div>
                  <div className="dash__readiness-score num">
                    {animated ? "82" : "0"}
                    <span style={{ fontSize: 22, color: "rgba(250,251,253,0.4)" }}>/100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
