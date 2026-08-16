import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import PageHeroPhoto from "../../components/PageHeroPhoto";

export const metadata = {
  title: "Test Prep — SAT, ACT, AP, PSAT, TOEFL, GRE, UCAT | Coach Sandeep Jadav",
  description:
    "Structured test preparation across SAT, ACT, AP, PSAT, TOEFL, GRE, and UCAT — built around each student's real timeline and profile, not generic drilling.",
};

/**
 * Real, factual descriptions of each exam itself — not fabricated results
 * or invented pass rates. Test names are trademarks of their respective
 * owners; see the disclaimer below the grid.
 */
const EXAMS = [
  {
    icon: "◆",
    name: "SAT®",
    desc: "The primary standardized test for US undergraduate admissions — Reading, Writing, and Math. Strategy built around your child's actual timeline, not generic drilling.",
  },
  {
    icon: "✦",
    name: "ACT®",
    desc: "An alternative to the SAT, widely accepted by US universities, with an optional Science section. We help students choose — and prepare for — whichever plays to their strengths.",
  },
  {
    icon: "◉",
    name: "AP®",
    desc: "Subject-specific Advanced Placement exams that can earn college credit and show admissions committees genuine academic rigor.",
  },
  {
    icon: "❖",
    name: "PSAT",
    desc: "The practice and qualifying test typically taken in Grade 9–10 — also the gateway to National Merit recognition in the US.",
  },
  {
    icon: "▲",
    name: "TOEFL",
    desc: "English-proficiency testing required by many universities for non-native speakers, prepared for alongside the rest of the profile, not instead of it.",
  },
  {
    icon: "◎",
    name: "GRE®",
    desc: "The standardized test for graduate school admissions, for students already planning ahead toward a master's or PhD.",
  },
  {
    icon: "⌘",
    name: "UCAT",
    desc: "The aptitude test used by UK medical and dental schools as part of undergraduate admissions.",
  },
];

export default function TestPrepPage() {
  return (
    <main>
      <Nav />

      <section
        className="section section--gradient"
        style={{ paddingTop: "clamp(140px, 16vw, 200px)", position: "relative", overflow: "hidden" }}
      >
        <PageHeroPhoto className="testprep-hero__photo" src="/test-prep/hero.jpg" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Reveal className="shead shead--center">
            <h1 className="h-display">
              Score well. <span className="underline-accent">Build a profile too.</span>
            </h1>
            <p className="lede text-muted" style={{ marginTop: 28, marginLeft: "auto", marginRight: "auto" }}>
              Test prep here isn&rsquo;t a separate business — it&rsquo;s one part of
              the same long-term plan, timed around each student&rsquo;s real
              schedule instead of a last-minute cram.
            </p>
            <span className="kicker-after">Test Preparation</span>
          </Reveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="resource__grid">
            {EXAMS.map((e, i) => (
              <Reveal key={e.name} delay={(i % 3) + 1} className="resource-card">
                <div className="ptrust__icon">{e.icon}</div>
                <h3>{e.name}</h3>
                <p>{e.desc}</p>
                <a href="/contact" className="tool-card__link">Talk To A Mentor About This →</a>
              </Reveal>
            ))}
          </div>

          <p style={{ marginTop: 56, fontSize: 12, lineHeight: 1.7, color: "var(--muted-dark)", maxWidth: 720 }}>
            SAT®, AP®, and GRE® are registered trademarks of the College Board
            and ETS respectively. ACT® is a registered trademark of ACT, Inc.
            UCAT is administered by the UCAT Consortium. Coach Sandeep Jadav
            is not affiliated with or endorsed by any of these organizations.
          </p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal className="shead shead--center">
            <h2 className="h-xl">
              Not sure which test fits your child <span className="underline-accent">best?</span>
            </h2>
            <p className="lede text-muted">
              A strategy session covers exam choice and timing, alongside everything else.
            </p>
            <span className="kicker-after">Still Deciding?</span>
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
