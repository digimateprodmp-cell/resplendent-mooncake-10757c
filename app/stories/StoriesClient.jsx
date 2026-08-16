"use client";

import { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import StudentJourney from "../../components/StudentJourney";

const STORIES = [
  { name: "Ananya M.", role: "Joined Grade 9", result: "Admitted · Stanford", category: "Student Journeys", bg: "linear-gradient(135deg, #14335c 0%, #071b34 100%)" },
  { name: "Vihaan R.", role: "Joined Grade 8", result: "Admitted · MIT", category: "Student Journeys", bg: "linear-gradient(135deg, #0d3a2b 0%, #081c33 100%)" },
  { name: "Ishaan T.", role: "Joined Grade 10", result: "Admitted · Oxford", category: "Student Journeys", bg: "linear-gradient(135deg, #3b2f14 0%, #0a1830 100%)" },
  { name: "Zara K.", role: "Grade 11 (current)", result: "Research published · 2 national awards", category: "Student Journeys", bg: "linear-gradient(135deg, #071b34 0%, #040f1f 100%)" },
  { name: "Mr. & Mrs. Kapoor", role: "Parent interview", result: "Son admitted · Oxford", category: "Parent Voices", bg: "linear-gradient(135deg, #3b2f14 0%, #0a1830 100%)" },
  { name: "Dr. Sharma", role: "Parent interview", result: "Daughter admitted · NUS", category: "Parent Voices", bg: "linear-gradient(135deg, #14335c 0%, #071b34 100%)" },
  { name: "The Menon Family", role: "Parent interview", result: "Son admitted · Imperial", category: "Parent Voices", bg: "linear-gradient(135deg, #0a1830 0%, #071b34 100%)" },
  { name: "Mrs. Iyer", role: "Parent interview", result: "Daughter · Full scholarship, Toronto", category: "Parent Voices", bg: "linear-gradient(135deg, #0d3a2b 0%, #081c33 100%)" },
  { name: "Decision Day", role: "Acceptance reaction", result: "The moment the offer arrived", category: "Milestone Moments", bg: "linear-gradient(135deg, #071b34 0%, #040f1f 100%)" },
  { name: "National Debate Finals", role: "Competition win", result: "First place", category: "Milestone Moments", bg: "linear-gradient(135deg, #3b2f14 0%, #0a1830 100%)" },
  { name: "Research Symposium", role: "Research showcase", result: "Grade 11 paper presented", category: "Milestone Moments", bg: "linear-gradient(135deg, #0a1830 0%, #071b34 100%)" },
  { name: "First Day At Campus", role: "Campus arrival", result: "Where it all led", category: "Milestone Moments", bg: "linear-gradient(135deg, #14335c 0%, #071b34 100%)" },
];

const FILTERS = ["All", "Student Journeys", "Parent Voices", "Milestone Moments"];

export default function StoriesClient() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? STORIES : STORIES.filter((s) => s.category === filter);

  return (
    <main>
      <Nav />

      <section
        className="section section--gradient stories-hero"
        style={{ paddingTop: "clamp(140px, 16vw, 200px)", position: "relative", overflow: "hidden" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="stories-hero__photo"
          src="/stories/hero.jpg"
          alt=""
          onError={(e) => e.currentTarget.remove()}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Reveal className="shead">
            <p className="pull-lede">
              Every thumbnail below is a family that made one decision early —
              and a student who became impossible to ignore.
            </p>
            <span className="kicker-after">Success Stories</span>
            <h1 className="h-display" style={{ marginTop: 28 }}>
              They started confused. <span className="underline-accent">They finished admitted.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <StudentJourney />

      <section className="section section--light">
        <div className="container">
          <div className="testis__filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`testis__filter${filter === f ? " is-active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="testis">
            {visible.map((s, i) => (
              <Reveal key={s.name} delay={(i % 3) + 1} className="testi">
                <div className="testi__bg" style={{ background: s.bg }} />
                <div className="testi__overlay" />
                <div className="testi__play">▶</div>
                <span className="testi__category">{s.category}</span>
                <div className="testi__meta">
                  <span className="testi__result">{s.result}</span>
                  <div className="testi__name">{s.name}</div>
                  <div className="testi__role">{s.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal className="shead shead--center">
            <h2 className="h-xl">
              Vihaan R. — <span className="underline-accent">Grade 8 to MIT.</span>
            </h2>
            <span className="kicker-after">Featured Journey</span>
          </Reveal>

          <Reveal delay={1} className="feature-journey">
            <div className="feature-journey__block">
              <h4>Before</h4>
              <p>
                Strong at maths, invisible everywhere else. &ldquo;He never
                speaks up,&rdquo; teachers said. No direction, no profile, no
                plan.
              </p>
            </div>
            <div className="feature-journey__block">
              <h4>The Journey</h4>
              <p>
                Discovery mapping revealed a systems-thinking mind. Robotics
                club founded in Grade 9. State championship by Grade 10.
                Mentored research on low-cost prosthetics in Grade 11 —
                published, then presented internationally.
              </p>
            </div>
            <div className="feature-journey__block">
              <h4>The Achievement</h4>
              <p>
                Admitted to MIT, Class of 2029 — with an application no
                committee could ignore, built over four deliberate years.
              </p>
            </div>
          </Reveal>

          <Reveal delay={2} className="quoteblock" style={{ marginTop: 24 }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>In His Words</span>
            <blockquote>
              &ldquo;Coach Sandeep didn&rsquo;t get me into MIT. He built the
              version of me that MIT wanted.&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="section section--gradient">
        <div className="container">
          <Reveal className="shead shead--center">
            <h2 className="h-xl">
              The next story <span className="underline-accent">could be yours.</span>
            </h2>
            <p className="lede text-muted">
              Every one of these journeys began with a single strategy session.
            </p>
            <span className="kicker-after">Your Turn</span>
            <div style={{ marginTop: 40 }}>
              <a href="/contact" className="btn btn--gold">Book Your Strategy Session →</a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
