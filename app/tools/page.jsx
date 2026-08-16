import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: "Free AI Tools — Coach Sandeep Jadav",
  description:
    "Admission probability, university matching, scholarship search, and more — the tools our mentors use, built for parents and students.",
};

const TOOLS = [
  {
    icon: "◆",
    name: "Admission Probability Calculator",
    desc: "See your child's realistic odds at 50+ universities, based on real outcome data — not guesswork.",
  },
  {
    icon: "✦",
    name: "University Match Tool",
    desc: "Answer a few questions and get a shortlist of universities that actually fit — not just the famous ones.",
  },
  {
    icon: "◉",
    name: "Scholarship Finder",
    desc: "Surface merit- and need-based awards your child could realistically win, by country and program.",
  },
  {
    icon: "❖",
    name: "Profile Strength Meter",
    desc: "A live score across the same dimensions top universities evaluate — leadership, research, communication, and more.",
  },
  {
    icon: "▲",
    name: "Cost & ROI Calculator",
    desc: "True 4-year cost across countries and programs, compared honestly against outcomes.",
  },
  {
    icon: "◎",
    name: "Essay Review (AI-Assisted)",
    desc: "A first-pass structural read on personal statements and supplementals, before it goes to a human mentor.",
  },
];

export default function ToolsPage() {
  return (
    <main>
      <Nav />

      <section className="section section--gradient" style={{ paddingTop: "clamp(140px, 16vw, 200px)" }}>
        <div className="container">
          <Reveal className="shead shead--center">
            <h1 className="h-display">
              The same tools our mentors <span className="underline-accent">use with you.</span>
            </h1>
            <p className="lede text-muted" style={{ marginTop: 28, marginLeft: "auto", marginRight: "auto" }}>
              Six tools that turn guesswork into a plan — rolling out one at
              a time. Every one of them is designed to work the way a real
              mentor would think, not a generic quiz.
            </p>
            <span className="kicker-after">AI-Powered Tools</span>
          </Reveal>

          <div className="tools__grid">
            {TOOLS.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) + 1} className="tool-card">
                <span className="tool-card__badge">Coming Soon</span>
                <div className="tool-card__icon">{t.icon}</div>
                <h3>{t.name}</h3>
                <p>{t.desc}</p>
                <a href="/contact" className="tool-card__link">Notify Me →</a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal className="shead shead--center">
            <h2 className="h-xl">
              Want a human instead of an <span className="underline-accent">algorithm</span>, right now?
            </h2>
            <p className="lede text-muted">
              Every tool here is paired with a real mentor once a program starts.
            </p>
            <span className="kicker-after">Skip The Wait</span>
            <div style={{ marginTop: 40 }}>
              <a href="/contact" className="btn btn--gold">Book Strategy Session →</a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
