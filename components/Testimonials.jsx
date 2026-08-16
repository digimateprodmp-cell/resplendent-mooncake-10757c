import Reveal from "./Reveal";

/** Condensed preview for the Home page — matches the live site's 5-card set. Full categorized wall lives on /stories. */
const STORIES = [
  {
    name: "Ananya M.",
    role: "Student · Grade 12",
    result: "Admitted · Stanford",
    quote: "In Grade 9 I couldn't speak in front of ten people. By Grade 12 I had founded a robotics nonprofit.",
    bg: "linear-gradient(135deg, #14335c 0%, #071b34 100%)",
  },
  {
    name: "Mr. & Mrs. Kapoor",
    role: "Parents",
    result: "Son admitted · Oxford",
    quote: "For the first time, someone gave us a plan instead of promises. Every month we could see the growth.",
    bg: "linear-gradient(135deg, #3b2f14 0%, #0a1830 100%)",
  },
  {
    name: "Vihaan R.",
    role: "Student · Started Grade 8",
    result: "Admitted · MIT",
    quote: "Coach Sandeep didn't get me into MIT. He built the version of me that MIT wanted.",
    bg: "linear-gradient(135deg, #0d3a2b 0%, #081c33 100%)",
  },
  {
    name: "Dr. Sharma",
    role: "Parent",
    result: "Daughter admitted · NUS",
    quote: "The dashboard meant we never had to ask — we could just see it.",
    bg: "linear-gradient(135deg, #071b34 0%, #040f1f 100%)",
  },
  {
    name: "Zara K.",
    role: "Student · Grade 11",
    result: "Research published · 2 national awards",
    quote: "I didn't know I had a research mind until someone gave me the roadmap to find out.",
    bg: "linear-gradient(135deg, #0a1830 0%, #071b34 100%)",
  },
];

export default function Testimonials() {
  return (
    <section className="section section--light" id="stories">
      <div className="container">
        <Reveal className="shead">
          <h2 className="h-xl">
            Real students. Real <span className="underline-accent">transformations</span>.
          </h2>
          <p className="lede text-muted-dark">
            Press play. Hear it from the families who lived it.
          </p>
          <span className="kicker-after kicker-after--dark">Success Stories</span>
        </Reveal>

        <div className="testis">
          {STORIES.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) + 1} className="testi">
              <div className="testi__bg" style={{ background: s.bg }} />
              <div className="testi__overlay" />
              <div className="testi__play">▶</div>
              <div className="testi__meta">
                <span className="testi__result">{s.result}</span>
                <div className="testi__name">{s.name}</div>
                <div className="testi__role">{s.role}</div>
                <p className="testi__quote">&ldquo;{s.quote}&rdquo;</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ marginTop: 56, textAlign: "center" }}>
          <a href="/stories" className="btn btn--ghost" style={{ borderColor: "rgba(16,35,59,0.2)", color: "var(--ink)" }}>
            All Success Stories →
          </a>
        </div>
      </div>
    </section>
  );
}
