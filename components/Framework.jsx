import Reveal from "./Reveal";
import PhotoSlot from "./PhotoSlot";

const STAGES = [
  {
    num: "01",
    name: "Discover",
    items: ["Student personality", "Natural strengths", "Interests", "Career possibilities"],
    deliverable: "Personalized Student Profile",
  },
  {
    num: "02",
    name: "Design",
    items: ["Personalized roadmap", "Academic strategy", "Skill plan", "Goal alignment"],
    deliverable: "Custom Growth Blueprint",
  },
  {
    num: "03",
    name: "Develop",
    items: ["Leadership skills", "Communication", "Research projects", "Real experiences"],
    deliverable: "Competencies Portfolio",
  },
  {
    num: "04",
    name: "Differentiate",
    items: ["Personal story", "Achievement portfolio", "Global-ready profile", "Unique identity"],
    deliverable: "Unique Student Brand",
  },
  {
    num: "05",
    name: "Destination",
    items: ["University selection", "Application strategy", "Interview prep", "Admission roadmap"],
    deliverable: "Admission Success Roadmap",
  },
];

export default function Framework() {
  return (
    <section className="section section--gradient" id="framework">
      <div className="container">
        <Reveal className="shead shead--split">
          <div>
            <span className="eyebrow">Global Success Framework™</span>
            <h2 className="h-xl">
              An engineered path from potential to <strong>admission</strong>.
            </h2>
          </div>
          <p className="lede text-muted">
            Five precision-built stages. Each one compounds the last — like a
            production line for globally competitive students.
          </p>
        </Reveal>

        <Reveal delay={1} style={{ marginTop: 48 }}>
          <PhotoSlot
            src="/framework/hero.jpg"
            caption="The Global Success Framework™ in session — photo coming soon"
            tall
          />
        </Reveal>

        <div className="framework__track">
          {STAGES.map((s, i) => (
            <Reveal key={s.num} delay={(i % 5) + 1} className="fstage">
              <div className="fstage__num">STAGE {s.num}</div>
              <div className="fstage__name">{s.name}</div>
              <ul className="fstage__items">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="fstage__deliverable">→ {s.deliverable}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
