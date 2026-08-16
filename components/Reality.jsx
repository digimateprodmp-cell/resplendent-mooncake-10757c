import Reveal from "./Reveal";

const QUALITIES = [
  {
    icon: "◈",
    title: "Leadership",
    desc: "Universities track initiative — roles held, teams built, change created.",
  },
  {
    icon: "✦",
    title: "Innovation",
    desc: "Original projects and creative problem-solving signal a builder's mind.",
  },
  {
    icon: "◎",
    title: "Communication",
    desc: "Essays, interviews, and public speaking decide who gets remembered.",
  },
  {
    icon: "❖",
    title: "Research",
    desc: "Independent inquiry and published work separate applicants from admits.",
  },
  {
    icon: "▲",
    title: "Entrepreneurship",
    desc: "Ventures — however small — prove ownership, grit, and real-world impact.",
  },
  {
    icon: "◉",
    title: "Social Impact",
    desc: "The world's best universities admit students who improve the world around them.",
  },
];

export default function Reality() {
  return (
    <section className="section section--light" id="reality">
      <div className="container">
        <Reveal className="shead">
          <h2 className="h-xl">
            Good marks are <span className="underline-accent">no longer enough</span>.
          </h2>
          <p className="lede text-muted-dark">
            The world&rsquo;s leading universities look far beyond academics. They
            search for students who are already shaping the world around them.
          </p>
          <span className="kicker-after kicker-after--dark">The Changing Reality</span>
        </Reveal>

        <div className="reality__grid">
          {QUALITIES.map((q, i) => (
            <Reveal key={q.title} delay={(i % 3) + 1} className="reality__cell">
              <div className="reality__icon">{q.icon}</div>
              <h3>{q.title}</h3>
              <p>{q.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
