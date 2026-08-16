"use client";

import { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import PhotoSlot from "../../components/PhotoSlot";

const PROGRAMS = [
  {
    tag: "Program 01 · Grade 8 – 9",
    slug: "young-achiever",
    title: "Young Achiever Program",
    desc: "For families who understand that extraordinary futures begin before everyone else starts thinking about them.",
    items: [
      "Career exploration & interest mapping",
      "Personality development",
      "Confidence building",
      "Communication skills",
      "Foundation planning",
    ],
    cta: "Explore Program →",
    modules: [
      ["Discovery Lab", "Psychometric assessment, strengths mapping, career compass."],
      ["Voice & Presence", "Public speaking foundations, storytelling, stage confidence."],
      ["Curiosity Projects", "First guided projects built around genuine interests."],
      ["Foundation Roadmap", "The 5-year plan, aligned with parents each quarter."],
    ],
  },
  {
    tag: "Program 02 · Grade 10 – 11",
    slug: "future-global-leader",
    title: "Future Global Leader Program",
    desc: "The acceleration years — where a good student becomes an undeniable candidate.",
    items: [
      "Profile development",
      "Leadership activities",
      "Research opportunities",
      "Global exposure",
      "University planning",
    ],
    cta: "Apply Now →",
    modules: [
      ["Leadership Engine", "Initiatives founded, roles held, measurable impact created."],
      ["Research Track", "Mentored research projects with publication pathways."],
      ["Global Exposure", "International programs, competitions, and summer schools."],
      ["University Strategy", "Early shortlisting, positioning, and readiness scoring."],
    ],
  },
  {
    tag: "Program 03 · Grade 12",
    slug: "elite-university-admission",
    title: "Elite University Admission",
    desc: "The decisive year, executed with strategy, precision, and calm — not panic.",
    items: [
      "University shortlisting",
      "Application strategy",
      "Essay guidance",
      "Interview preparation",
      "Admission mentorship",
    ],
    cta: "Start Your Application Journey →",
    modules: [
      ["Strategic Shortlist", "Reach, match, and safety — engineered to the student's brand."],
      ["Essay Mastery", "Personal statements and supplementals admissions officers remember."],
      ["Interview Room", "Mock interviews, recorded feedback, confidence under pressure."],
      ["Decision & Beyond", "Offer strategy, scholarships, and pre-departure mentoring."],
    ],
  },
];

const FAQS = [
  {
    q: "Isn't Grade 8 too early to think about universities?",
    a: "It's too early to apply — and exactly the right time to build. The profiles that win Ivy League admissions are built over 4–5 years of leadership, research, and achievement. Starting in Grade 12 means competing against students who started in Grade 8.",
  },
  {
    q: "How is this different from a study-abroad agency?",
    a: "Agencies process applications. We build applicants. This is a long-term mentorship ecosystem — personality discovery, skill development, leadership building, and only then, admission strategy.",
  },
  {
    q: "How involved are parents in the journey?",
    a: "Deeply, but efficiently: monthly progress reports, a live student dashboard, and scheduled strategy calls. Full visibility, zero guesswork.",
  },
  {
    q: "Does my child work with one mentor or many?",
    a: "One dedicated mentor per student, for consistency and trust — supported by specialists for research, essays, and interviews when needed.",
  },
  {
    q: "What if my child doesn't know what they want yet?",
    a: "That's the starting point, not a problem. Stage one of the framework — Discover — exists precisely to answer that question with evidence, not guesswork.",
  },
];

export default function ProgramsClient() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main>
      <Nav />

      <section className="section section--gradient" style={{ paddingTop: "clamp(140px, 16vw, 200px)" }}>
        <div className="container">
          <Reveal className="shead">
            <p className="pull-lede">
              Three programs. One ecosystem. Every student enters at their
              grade — and exits globally competitive.
            </p>
            <span className="kicker-after">Programs</span>
            <h1 className="h-display" style={{ marginTop: 28 }}>
              Choose your child&rsquo;s <span className="underline-accent">transformation journey.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {PROGRAMS.map((p, i) => (
        <section key={p.title} className={`section ${i % 2 === 0 ? "section--dark" : "section--deep"}`}>
          <div className="container">
            <Reveal className="fstage-detail">
              <span className="fstage__num">{p.tag}</span>
              <h2 className="h-lg" style={{ margin: "16px 0 20px" }}>{p.title}</h2>
              <p className="lede text-muted" style={{ marginBottom: 28 }}>{p.desc}</p>

              <PhotoSlot
                src={`/programs/${p.slug}.jpg`}
                caption={`${p.title} — real session photo coming soon`}
                style={{ marginBottom: 28 }}
              />

              <ul className="program__list" style={{ marginBottom: 0 }}>
                {p.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a href="/contact" className="btn btn--gold" style={{ marginTop: 32 }}>{p.cta}</a>

              <div className="modules__grid">
                {p.modules.map(([name, desc]) => (
                  <div className="module" key={name}>
                    <div className="module__name">{name}</div>
                    <p className="module__desc">{desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section section--light">
        <div className="container">
          <Reveal className="shead">
            <h2 className="h-xl">Before you decide.</h2>
            <span className="kicker-after kicker-after--dark">Questions Parents Ask</span>
          </Reveal>

          <div className="journey journey--light" style={{ marginTop: 56 }}>
            {FAQS.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div className={`journey__item${isOpen ? " is-open" : ""}`} key={f.q}>
                  <button
                    className="journey__head"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="journey__label" style={{ fontSize: 18 }}>{f.q}</span>
                    <span className="journey__toggle">{isOpen ? "−" : "+"}</span>
                  </button>
                  <div className="journey__body" style={{ maxHeight: isOpen ? "220px" : "0px" }}>
                    <p>{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal className="shead shead--center">
            <h2 className="h-xl">
              Not sure which program <span className="underline-accent">fits your child?</span>
            </h2>
            <p className="lede text-muted">Take the assessment, or talk to Coach Sandeep directly.</p>
            <span className="kicker-after">Still Deciding?</span>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 40, flexWrap: "wrap" }}>
              <a href="/assessment" className="btn btn--gold">Get Your Readiness Score →</a>
              <a href="/contact" className="btn btn--ghost">Book Strategy Session</a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
