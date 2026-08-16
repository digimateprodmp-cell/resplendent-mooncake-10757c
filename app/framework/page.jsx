import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import PhotoSlot from "../../components/PhotoSlot";

export const metadata = {
  title: "The Global Success Framework™ — Coach Sandeep Jadav",
  description:
    "Five stages from potential discovery to global university readiness: Discover, Design, Develop, Differentiate, Destination.",
};

const STAGES = [
  {
    num: "01",
    name: "Discover",
    tagline: "Before any strategy: who is this student, really?",
    focus: ["Student personality", "Natural strengths", "Interests", "Career possibilities"],
    how: [
      "Psychometric & interest mapping",
      "Strength assessment sessions",
      "1:1 discovery conversations",
      "Parent alignment session",
    ],
    deliverable: "Personalized Student Profile",
  },
  {
    num: "02",
    name: "Design",
    tagline: "A multi-year blueprint built around the student — not a template.",
    focus: ["Personalized growth roadmap", "Academic strategy", "Skill development plan", "Goal alignment"],
    how: [
      "Year-by-year milestone planning",
      "Subject & curriculum strategy",
      "Skill gap analysis",
      "Quarterly targets set",
    ],
    deliverable: "Custom Growth Blueprint",
  },
  {
    num: "03",
    name: "Develop",
    tagline: "Where potential becomes capability, through real experiences.",
    focus: ["Leadership skills", "Communication", "Research projects", "Real-world experiences"],
    how: [
      "Leadership roles & initiatives",
      "Public speaking & debate training",
      "Mentored research projects",
      "Community impact programs",
    ],
    deliverable: "Developed Competencies Portfolio",
  },
  {
    num: "04",
    name: "Differentiate",
    tagline: "Thousands of applicants have marks. One has this story.",
    focus: ["Strong personal story", "Achievement portfolio", "Global-ready profile", "Unique identity"],
    how: [
      "Narrative & positioning workshops",
      "Awards & competition strategy",
      "Global program placements",
      "Portfolio curation",
    ],
    deliverable: "Unique Student Brand",
  },
  {
    num: "05",
    name: "Destination",
    tagline: "The application season — executed with total confidence.",
    focus: ["University selection", "Application strategy", "Interview preparation", "Admission roadmap"],
    how: [
      "Strategic university shortlisting",
      "Essay & SOP mastery",
      "Mock interviews with feedback",
      "Scholarship & aid strategy",
    ],
    deliverable: "Admission Success Roadmap",
  },
];

export default function FrameworkPage() {
  return (
    <main>
      <Nav />

      <section className="section section--gradient" style={{ paddingTop: "clamp(140px, 16vw, 200px)" }}>
        <div className="container">
          <Reveal className="shead shead--split">
            <div>
              <h1 className="h-display">
                Excellence isn&rsquo;t an accident. <span className="underline-accent">It&rsquo;s a system.</span>
              </h1>
            </div>
            <p className="lede text-muted">
              Five engineered stages take a student from &ldquo;I don&rsquo;t
              know what I want&rdquo; to an admission offer from a top global
              university. This is the Global Success Framework™.
            </p>
          </Reveal>

          <Reveal delay={1} style={{ marginTop: 48 }}>
            <PhotoSlot
              src="/framework/hero.jpg"
              caption="The Global Success Framework™ in session — photo coming soon"
              tall
            />
          </Reveal>
        </div>
      </section>

      {STAGES.map((s, i) => (
        <section
          key={s.num}
          className={`section ${i % 2 === 0 ? "section--dark" : "section--deep"}`}
        >
          <div className="container">
            <Reveal className="fstage-detail">
              <div className="fstage-detail__head">
                <span className="fstage__num">STAGE {s.num}</span>
                <h2 className="h-lg">{s.name}</h2>
                <p className="lede text-muted">{s.tagline}</p>
              </div>
              <div className="fstage-detail__body">
                <div>
                  <h4 className="fstage-detail__label">Focus Areas</h4>
                  <ul className="fstage__items">
                    {s.focus.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="fstage-detail__label">How It Works</h4>
                  <ul className="fstage__items">
                    {s.how.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                </div>
              </div>
              <div className="fstage__deliverable">→ {s.deliverable}</div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section section--light">
        <div className="container">
          <Reveal className="shead shead--center">
            <h2 className="h-xl">
              Which stage is <span className="underline-accent">your child</span> at?
            </h2>
            <p className="lede text-muted-dark">
              Take the 2-minute Future Readiness Assessment and find out.
            </p>
            <span className="kicker-after kicker-after--dark">Find Your Starting Point</span>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 40, flexWrap: "wrap" }}>
              <a href="/assessment" className="btn btn--gold">Get Your Readiness Score →</a>
              <a href="/contact" className="btn btn--ghost" style={{ borderColor: "rgba(16,35,59,0.25)", color: "var(--ink)" }}>
                Book Strategy Session
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
