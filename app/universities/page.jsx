import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import UniCard from "../../components/UniCard";

export const metadata = {
  title: "Universities — Coach Sandeep Jadav | Harvard, Oxford, Stanford, MIT Preparation",
  description:
    "Preparing students for the institutions that shape the future: Harvard, Oxford, Stanford, MIT, Cambridge, Yale, Imperial, NUS and more.",
};

const REGIONS = [
  {
    name: "United States",
    unis: [
      ["Harvard", "Cambridge, MA", "harvard"],
      ["Stanford", "California", "stanford"],
      ["MIT", "Cambridge, MA", "mit"],
      ["Yale", "New Haven, CT", "yale"],
      ["Princeton", "New Jersey", "princeton"],
      ["Columbia", "New York", "columbia"],
    ],
  },
  {
    name: "United Kingdom",
    unis: [
      ["Oxford", "Oxford", "oxford"],
      ["Cambridge", "Cambridge", "cambridge"],
      ["Imperial", "London", "imperial"],
      ["LSE", "London", "lse"],
    ],
  },
  {
    name: "Asia-Pacific & Beyond",
    unis: [
      ["NUS", "Singapore", "nus"],
      ["NTU", "Singapore", "ntu"],
      ["HKU", "Hong Kong", null],
      ["Toronto", "Canada", "toronto"],
    ],
  },
];

const LOOKFOR = [
  { icon: "◆", title: "Intellectual Vitality", desc: "Curiosity that produced real research, projects, and original thinking." },
  { icon: "✦", title: "Demonstrated Leadership", desc: "Not titles — initiatives founded, teams led, change created." },
  { icon: "◉", title: "A Coherent Story", desc: "Every activity, award, and essay pointing to one unmistakable identity." },
  { icon: "❖", title: "Impact On Others", desc: "Service and social contribution with measurable outcomes." },
];

export default function UniversitiesPage() {
  return (
    <main>
      <Nav />

      <section className="section section--deep unis" style={{ paddingTop: "clamp(140px, 16vw, 200px)" }}>
        <div className="container unis__content">
          <Reveal className="shead shead--split">
            <div>
              <h1 className="h-display">
                Institutions that <span className="underline-accent">shape the future.</span>
              </h1>
              <span className="kicker-after">Global University Vision</span>
            </div>
            <p className="lede text-muted">
              We don&rsquo;t just aim at these universities. We build the
              kind of student they compete to admit.
            </p>
          </Reveal>

          {REGIONS.map((r, ri) => (
            <Reveal key={r.name} delay={(ri % 3) + 1} className="region">
              <h3 className="region__label">{r.name}</h3>
              <div className="unis__logos">
                {r.unis.map(([name, place, slug]) => (
                  <UniCard key={name} name={name} place={place} slug={slug} />
                ))}
              </div>
            </Reveal>
          ))}

          <Reveal delay={2} className="unis__proof">
            <div className="unis__proof-stat"><strong>95%</strong><span>Admission Success</span></div>
            <div className="unis__proof-stat"><strong>1200+</strong><span>Students Guided</span></div>
            <div className="unis__proof-stat"><strong>50+</strong><span>Countries Reached</span></div>
            <a href="/assessment" className="btn btn--ghost">See Where You Could Go →</a>
          </Reveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <Reveal className="shead shead--center">
            <h2 className="h-xl">Beyond the marksheet.</h2>
            <span className="kicker-after kicker-after--dark">What They Actually Look For</span>
          </Reveal>
          <div className="reality__grid">
            {LOOKFOR.map((q, i) => (
              <Reveal key={q.title} delay={(i % 3) + 1} className="reality__cell">
                <div className="reality__icon">{q.icon}</div>
                <h3>{q.title}</h3>
                <p>{q.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={1} className="quoteblock" style={{ marginTop: 80, color: "var(--ink)" }}>
            <blockquote style={{ color: "var(--ink)" }}>
              &ldquo;Admission is not only about applying. It is about
              becoming the type of student top universities look for.&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal className="shead shead--center">
            <h2 className="h-xl">
              Which campus will <span className="underline-accent">your child</span> call home?
            </h2>
            <p className="lede text-muted">Start the journey years before the application.</p>
            <span className="kicker-after">Every Great Journey Starts Early</span>
            <div style={{ marginTop: 40 }}>
              <a href="/contact" className="btn btn--gold">Book Your Strategy Session →</a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
