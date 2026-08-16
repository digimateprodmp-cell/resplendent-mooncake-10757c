import Reveal from "./Reveal";

const PILLARS = [
  {
    icon: "◆",
    title: "Weekly Progress Reports",
    desc: "You never have to ask how it's going — a structured update arrives every week, mapped to the same dashboard you can see live.",
  },
  {
    icon: "✦",
    title: "One Dedicated Mentor",
    desc: "No rotating cast of counsellors. Your child works with a consistent mentor who knows their story end to end.",
  },
  {
    icon: "◉",
    title: "Full Transparency",
    desc: "Every milestone, every project, every score is visible — nothing is filtered before it reaches you.",
  },
  {
    icon: "↗",
    title: "Direct Communication Access",
    desc: "A direct line to your child's mentor when something comes up — not a support ticket queue.",
  },
  {
    icon: "❖",
    title: "Financial & Scholarship Planning",
    desc: "Realistic cost mapping and scholarship strategy woven into the university shortlist from day one.",
  },
  {
    icon: "▲",
    title: "Visa & Relocation Support",
    desc: "Guidance through the practical realities of studying abroad, not just the application itself.",
  },
  {
    icon: "◎",
    title: "Student Safety & Wellbeing",
    desc: "A mentorship relationship built on trust and boundaries — your child's wellbeing comes before outcomes.",
  },
  {
    icon: "⌘",
    title: "Career-Horizon Planning",
    desc: "University is a milestone, not the destination — every roadmap looks past graduation day.",
  },
];

export default function ParentTrust() {
  return (
    <section className="section section--light" id="for-parents">
      <div className="container">
        <Reveal className="shead shead--split">
          <div>
            <span className="eyebrow">For Parents</span>
            <h2 className="h-xl">
              What you&rsquo;re actually <strong>signing up for</strong>.
            </h2>
          </div>
          <p className="lede text-muted-dark">
            Not a coaching class. A long-term partnership built around your
            child — and built to keep you informed every step of the way.
          </p>
        </Reveal>

        <div className="ptrust__grid">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) + 1} className="ptrust__card">
              <div className="ptrust__icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
