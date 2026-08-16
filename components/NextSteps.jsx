import Reveal from "./Reveal";

/**
 * Multi-CTA strategy: gives visitors a lower-commitment path alongside
 * "Book Strategy Session". The "Download the Free Guide" card is a
 * genuine Phase 3 deliverable (Free Resources library) — labeled
 * "Coming Soon" honestly rather than linked to a guide that doesn't exist yet.
 */
const STEPS = [
  {
    tag: "2 Minutes",
    title: "Free Profile Evaluation",
    desc: "Take the Global University Readiness Assessment and see exactly where your child stands today.",
    cta: "Start the Assessment →",
    href: "/assessment",
  },
  {
    tag: "15 Minutes",
    title: "Talk to an Expert",
    desc: "A direct conversation with Coach Sandeep's team — no pressure, no pitch.",
    cta: "Message on WhatsApp →",
    href: "https://wa.me/",
  },
  {
    tag: "Explore",
    title: "See the Universities",
    desc: "Browse the institutions this framework is built to prepare students for.",
    cta: "Explore Universities →",
    href: "/universities",
  },
  {
    tag: "Coming Soon",
    title: "Download the Free Guide",
    desc: "A parent's roadmap to starting early, grade by grade — from the Free Resources library.",
    cta: "Ask About It →",
    href: "/contact",
  },
];

export default function NextSteps() {
  return (
    <section className="section section--deep">
      <div className="container">
        <Reveal className="shead shead--center">
          <h2 className="h-lg">
            Start with whatever feels <span className="underline-accent">right</span> today.
          </h2>
          <span className="kicker-after">Not Ready To Book Yet?</span>
        </Reveal>

        <div className="nsteps__grid">
          {STEPS.map((s, i) => {
            const external = s.href.startsWith("http");
            return (
              <Reveal key={s.title} delay={(i % 4) + 1} className="nsteps__card">
                <span className="nsteps__tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a
                  href={s.href}
                  className="nsteps__link"
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  {s.cta}
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
