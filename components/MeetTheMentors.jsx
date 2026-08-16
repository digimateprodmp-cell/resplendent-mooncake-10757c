import Reveal from "./Reveal";

/**
 * Coach Sandeep is the real, verifiable lead mentor — his card uses the
 * same bio facts already published on the About page (8+ years, 1200+
 * students, 50+ countries). The remaining cards are honestly labeled as
 * open specialist roles rather than inventing fictional team members —
 * swap them for real names/photos as the specialist network is built out.
 */
const SPECIALISTS = [
  {
    role: "Essay & Narrative Strategist",
    focus: "Personal statements, supplemental essays, application storytelling",
  },
  {
    role: "Research & STEM Mentor",
    focus: "Independent projects, published research, olympiad & competition prep",
  },
  {
    role: "Interview & Communication Coach",
    focus: "Mock interviews, public speaking, admissions-committee readiness",
  },
];

export default function MeetTheMentors() {
  return (
    <section className="section section--light" id="mentors">
      <div className="container">
        <Reveal className="shead">
          <span className="eyebrow">Meet The Team</span>
          <h2 className="h-xl">
            The people behind every <em className="text-gold italic">roadmap</em>.
          </h2>
          <p className="lede text-muted-dark">
            One mentor owns your child&rsquo;s journey end to end. A specialist
            network steps in exactly when it&rsquo;s needed — never a rotating
            cast of strangers.
          </p>
        </Reveal>

        <div className="mentors__grid">
          <Reveal delay={1} className="mentor mentor--lead">
            <div className="mentor__avatar mentor__avatar--photo" aria-hidden="true">
              <img src="/founder/coach-sandeep.jpg" alt="" />
            </div>
            <div className="mentor__name">Coach Sandeep Jadav</div>
            <div className="mentor__role">Founder &amp; Lead Mentor</div>
            <p className="mentor__bio">
              Architect of the Global Student Success Ecosystem. Believes in
              years, not months — and one mentor, not a rotating cast.
            </p>
            <div className="mentor__stats">
              <span>8+ yrs</span>
              <span>1200+ students</span>
              <span>50+ countries</span>
            </div>
          </Reveal>

          {SPECIALISTS.map((s, i) => (
            <Reveal key={s.role} delay={i + 2} className="mentor mentor--open">
              <div className="mentor__avatar mentor__avatar--open" aria-hidden="true">+</div>
              <div className="mentor__name">{s.role}</div>
              <div className="mentor__role mentor__role--open">Specialist Network · Joining Soon</div>
              <p className="mentor__bio">{s.focus}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
