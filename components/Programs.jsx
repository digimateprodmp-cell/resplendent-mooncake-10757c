import Reveal from "./Reveal";
import ProgramBg from "./ProgramBg";

const PROGRAMS = [
  {
    grade: "Grades 8 – 9",
    slug: "young-achiever",
    title: "Young Achiever Program",
    desc: "The foundation years. We map who your child is before the world tells them who to be — interests, strengths, personality, possibility.",
    items: [
      "Career exploration & interest mapping",
      "Personality & confidence development",
      "Communication foundations",
      "Long-term strategic planning",
    ],
    cta: "Explore the Program",
    bg: "radial-gradient(ellipse 90% 90% at 80% 20%, #14335c 0%, #071b34 60%, #040f1f 100%)",
    accent: "#2458e8",
  },
  {
    grade: "Grades 10 – 11",
    slug: "future-global-leader",
    title: "Future Global Leader Program",
    desc: "The building years. Leadership roles, research projects, competitions, global exposure — the substance that makes an application undeniable.",
    items: [
      "Profile & portfolio development",
      "Leadership activities & initiatives",
      "Research opportunities & mentorship",
      "University planning & positioning",
    ],
    cta: "Apply Now",
    bg: "radial-gradient(ellipse 90% 90% at 20% 30%, #3b2f14 0%, #0a1830 55%, #040f1f 100%)",
    accent: "#c7a14a",
  },
  {
    grade: "Grade 12",
    slug: "elite-university-admission",
    title: "Elite University Admission",
    desc: "The decisive year. Shortlisting, essays, interviews, strategy — every detail of the application engineered with a mentor beside them.",
    items: [
      "University shortlisting & strategy",
      "Essay & personal statement guidance",
      "Interview preparation",
      "End-to-end admission mentorship",
    ],
    cta: "Start Your Application Journey",
    bg: "radial-gradient(ellipse 90% 90% at 75% 70%, #0d3a2b 0%, #081c33 55%, #040f1f 100%)",
    accent: "#1faf7a",
  },
];

export default function Programs() {
  return (
    <div id="programs">
      {PROGRAMS.map((p) => (
        <section className="program" key={p.title}>
          <ProgramBg bg={p.bg} slug={p.slug} />
          <div className="container">
            <Reveal className="program__content">
              <span className="program__grade" style={{ color: p.accent }}>
                {p.grade}
              </span>
              <h2 className="program__title">{p.title}</h2>
              <p className="program__desc">{p.desc}</p>
              <ul className="program__list">
                {p.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="/contact" className="btn btn--gold">
                {p.cta}
              </a>
            </Reveal>
          </div>
        </section>
      ))}
    </div>
  );
}
