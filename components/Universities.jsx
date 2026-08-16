import Reveal from "./Reveal";
import UniCard from "./UniCard";

const UNIS = [
  ["Harvard", "USA", "harvard"],
  ["Oxford", "UK", "oxford"],
  ["Stanford", "USA", "stanford"],
  ["MIT", "USA", "mit"],
  ["Cambridge", "UK", "cambridge"],
  ["Yale", "USA", "yale"],
  ["Imperial", "UK", "imperial"],
  ["NUS", "Singapore", "nus"],
];

export default function Universities() {
  return (
    <section className="section section--deep unis" id="universities">
      {/* ambient world backdrop */}
      <div className="unis__globe" aria-hidden="true">
        <div
          style={{
            position: "absolute",
            inset: "-20%",
            background:
              "radial-gradient(circle at 50% 60%, rgba(36,88,232,0.16) 0%, transparent 45%), radial-gradient(circle at 20% 20%, rgba(199,161,74,0.08) 0%, transparent 35%), radial-gradient(circle at 80% 30%, rgba(36,88,232,0.1) 0%, transparent 30%)",
          }}
        />
        <svg
          viewBox="0 0 800 800"
          style={{
            position: "absolute",
            left: "50%",
            top: "55%",
            width: "min(900px, 120vw)",
            transform: "translate(-50%, -50%)",
            opacity: 0.35,
          }}
        >
          <g fill="none" stroke="rgba(36,88,232,0.5)" strokeWidth="0.7">
            <circle cx="400" cy="400" r="300" />
            <ellipse cx="400" cy="400" rx="300" ry="120" />
            <ellipse cx="400" cy="400" rx="300" ry="220" />
            <ellipse cx="400" cy="400" rx="120" ry="300" />
            <ellipse cx="400" cy="400" rx="220" ry="300" />
            <line x1="100" y1="400" x2="700" y2="400" />
          </g>
          <g fill="#c7a14a">
            <circle cx="290" cy="250" r="4" />
            <circle cx="430" cy="215" r="4" />
            <circle cx="530" cy="330" r="4" />
            <circle cx="360" cy="480" r="4" />
            <circle cx="560" cy="500" r="4" />
            <circle cx="240" cy="400" r="4" />
          </g>
        </svg>
      </div>

      <div className="container unis__content">
        <Reveal className="shead shead--center">
          <span className="eyebrow">The Destination</span>
          <h2 className="h-xl">
            Preparing students for institutions that <em className="text-gold italic">shape the future</em>.
          </h2>
          <p className="lede text-muted">
            Admission is not about applying. It&rsquo;s about becoming the type
            of student these universities are searching for.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="unis__logos">
            {UNIS.map(([name, country, slug]) => (
              <UniCard key={name} name={name} place={country} slug={slug} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={2} className="unis__proof">
          <div className="unis__proof-stat">
            <strong>95%</strong>
            <span>Admission Success</span>
          </div>
          <div className="unis__proof-stat">
            <strong>1200+</strong>
            <span>Students Guided</span>
          </div>
          <div className="unis__proof-stat">
            <strong>50+</strong>
            <span>Countries Reached</span>
          </div>
          <a href="/assessment" className="btn btn--ghost">
            See Where You Could Go →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
