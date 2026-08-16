"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const STAGES = [
  {
    grade: 8,
    badge: "Discover",
    title: "Interests surface. Strengths get named.",
    desc: "Interest mapping, strength assessments, and personality work reveal who the student actually is — years before anyone asks them to decide.",
    unlocks: ["Personal Profile", "Strength Map"],
    readiness: 15,
  },
  {
    grade: 9,
    badge: "Develop",
    title: "Skills compound. Confidence builds.",
    desc: "Skill workshops, foundation courses, and personality development turn raw potential into visible capability.",
    unlocks: ["Communication Skills", "Foundation Courses"],
    readiness: 32,
  },
  {
    grade: 10,
    badge: "Build",
    title: "Leadership becomes real.",
    desc: "Leadership roles, community service, and first initiated projects — the student stops participating and starts leading.",
    unlocks: ["Leadership Role", "First Project", "Community Impact"],
    readiness: 54,
  },
  {
    grade: 11,
    badge: "Achieve",
    title: "Achievements stack up.",
    desc: "Awards, competitions, research projects, and global exposure — the profile becomes impossible to overlook.",
    unlocks: ["Research Project", "National Award", "Global Exposure"],
    readiness: 78,
  },
  {
    grade: 12,
    badge: "Apply & Win",
    title: "The application writes itself.",
    desc: "Essays, interviews, and strategy built on five years of substance — not five weeks of panic.",
    unlocks: ["Powerful Essays", "Interview Ready", "Admission Offers"],
    readiness: 96,
  },
];

export default function Growth() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.dataset.idx);
            setActive(idx);
          }
        });
      },
      { threshold: 0.55, rootMargin: "-15% 0px -25% 0px" }
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const stage = STAGES[active];

  return (
    <section className="section section--light" id="journey">
      <div className="container">
        <Reveal className="shead">
          <h2 className="h-xl">
            Watch a student <span className="underline-accent">grow</span>.
          </h2>
          <p className="lede text-muted-dark">
            Scroll through five years of transformation. Top-university
            preparation begins years before applications — this is what
            compounding looks like.
          </p>
          <span className="kicker-after kicker-after--dark">Why Start Early</span>
        </Reveal>

        <div className="growth" style={{ marginTop: 80 }}>
          <div className="growth__sticky">
            <div className="growth__grade-display">
              <span>GRADE</span> {stage.grade}
            </div>
            <div
              className="gstep__badge"
              style={{ marginTop: 24 }}
            >
              {stage.badge}
            </div>
            <div className="growth__meter">
              <div className="growth__meter-label">
                <span>University Readiness</span>
                <span className="num">{stage.readiness}%</span>
              </div>
              <div className="growth__meter-bar">
                <div
                  className="growth__meter-fill"
                  style={{ width: `${stage.readiness}%` }}
                />
              </div>
            </div>
          </div>

          <div>
            {STAGES.map((s, i) => (
              <div
                key={s.grade}
                ref={(el) => (stepRefs.current[i] = el)}
                data-idx={i}
                className={`gstep${i === active ? " is-active" : ""}`}
              >
                <span className="gstep__badge">Grade {s.grade} — {s.badge}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="gstep__unlocks">
                  {s.unlocks.map((u) => (
                    <span className="gstep__unlock" key={u}>
                      ✓ {u}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
