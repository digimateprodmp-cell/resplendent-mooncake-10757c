"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const STAGES = [
  {
    label: "Profile Building",
    desc: "Interests, strengths, and personality mapped into a long-term plan — the foundation everything else is built on.",
  },
  {
    label: "Research",
    desc: "Independent projects, papers, or competitions that prove original thinking rather than just good grades.",
  },
  {
    label: "Test Prep",
    desc: "SAT/ACT strategy built around the student's actual timeline — not generic drilling.",
  },
  {
    label: "Essay & Narrative",
    desc: "The personal statement and supplementals shaped from years of real material, not invented in a panic.",
  },
  {
    label: "Interview",
    desc: "Mock interviews and communication coaching until the student's story is second nature to tell.",
  },
  {
    label: "Acceptance",
    desc: "Applications submitted with a strategy behind every choice — reach, match, and safety schools alike.",
  },
  {
    label: "University Life",
    desc: "Orientation, coursework planning, and the transition support most consultancies stop offering the day the offer letter arrives.",
  },
  {
    label: "Career",
    desc: "Internships, majors, and long-term direction — because university was never the finish line.",
  },
];

export default function StudentJourney() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section section--deep" id="student-journey">
      <div className="container">
        <Reveal className="shead shead--center">
          <span className="eyebrow">The Journey, Step By Step</span>
          <h2 className="h-xl">
            From first conversation to <em className="text-gold italic">campus and beyond</em>.
          </h2>
          <p className="lede text-muted">
            Every student's path looks different in the details — the stages
            don&rsquo;t. Click through to see what each one actually involves.
          </p>
        </Reveal>

        <Reveal delay={1} className="journey">
          {STAGES.map((s, i) => {
            const isOpen = open === i;
            return (
              <div className={`journey__item${isOpen ? " is-open" : ""}`} key={s.label}>
                <button
                  className="journey__head"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="journey__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="journey__label">{s.label}</span>
                  <span className="journey__toggle">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="journey__body" style={{ maxHeight: isOpen ? "160px" : "0px" }}>
                  <p>{s.desc}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
