"use client";

import { useState } from "react";
import Reveal from "./Reveal";

/**
 * A quick "who's reading this" fork right after the hero — not a rewrite of
 * the whole homepage (that lives in ParentTrust further down), just an
 * honest, fast way for a parent or a student to see the five things that
 * matter most to them before scrolling further.
 */
const CONTENT = {
  student: {
    label: "For Students",
    items: [
      { icon: "◆", text: "A real shot at the university you actually want" },
      { icon: "✦", text: "Scholarships that make it financially possible" },
      { icon: "◉", text: "Leadership that goes beyond a school certificate" },
      { icon: "↗", text: "Competitions & Olympiads worth putting on paper" },
      { icon: "❖", text: "Research and internships before you even apply" },
    ],
  },
  parent: {
    label: "For Parents",
    items: [
      { icon: "◆", text: "One dedicated mentor — not a rotating cast" },
      { icon: "✦", text: "A weekly view of progress, not a monthly guess" },
      { icon: "◉", text: "A realistic roadmap for cost and scholarships" },
      { icon: "↗", text: "Safety and wellbeing that comes before outcomes" },
      { icon: "❖", text: "A plan that looks past admission day" },
    ],
  },
};

export default function AudienceToggle() {
  const [audience, setAudience] = useState("student");
  const active = CONTENT[audience];

  return (
    <section className="section section--light audtog">
      <div className="container">
        <Reveal className="audtog__head">
          <h2 className="h-lg">Who&rsquo;s reading this right now?</h2>
          <div className="audtog__pills" role="tablist" aria-label="Choose your perspective">
            <button
              type="button"
              role="tab"
              aria-selected={audience === "student"}
              className={`audtog__pill${audience === "student" ? " is-active" : ""}`}
              onClick={() => setAudience("student")}
            >
              I&rsquo;m a Student
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={audience === "parent"}
              className={`audtog__pill${audience === "parent" ? " is-active" : ""}`}
              onClick={() => setAudience("parent")}
            >
              I&rsquo;m a Parent
            </button>
          </div>
        </Reveal>

        <div className="audtog__grid" key={audience}>
          {active.items.map((item, i) => (
            <Reveal key={item.text} delay={(i % 5) + 1} className="audtog__item">
              <span className="audtog__icon">{item.icon}</span>
              <span>{item.text}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
