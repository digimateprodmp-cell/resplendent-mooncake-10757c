import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import MeetTheMentors from "../../components/MeetTheMentors";
import Reveal from "../../components/Reveal";
import JourneyBanner from "../../components/JourneyBanner";
import PhotoSlot from "../../components/PhotoSlot";

export const metadata = {
  title: "About Coach Sandeep Jadav — The Vision Behind Future Global Achievers",
  description:
    "The founder story, mission, and philosophy behind the Global Student Success Ecosystem.",
};

const PHILOSOPHY = [
  {
    icon: "◆",
    title: "Clarity Before Strategy",
    desc: "Every journey begins with discovering who the student is — not which university is trending.",
  },
  {
    icon: "✦",
    title: "Years, Not Months",
    desc: "Exceptional profiles are compounded from Grade 8 — never assembled in a Grade 12 panic.",
  },
  {
    icon: "◉",
    title: "One Mentor, One Student",
    desc: "Consistent, personalized guidance — not a rotating cast of counsellors.",
  },
  {
    icon: "↗",
    title: "Globally Aspirational",
    desc: "World-class ambition with deep local understanding of students and families.",
  },
];

export default function About() {
  return (
    <main>
      <Nav />
      <JourneyBanner />

      <section className="section section--gradient" style={{ paddingTop: "clamp(140px, 16vw, 200px)" }}>
        <div className="container">
          <Reveal className="shead">
            <h1 className="h-display">
              The Vision Behind <span className="underline-accent">Future Global Achievers</span>.
            </h1>
            <p className="lede text-muted">
              Coach Sandeep Jadav is not a consultant. He is the architect of
              a system that turns potential into admission letters.
            </p>
            <span className="kicker-after">About The Founder</span>
          </Reveal>

          <Reveal delay={1} className="portrait portrait--photo">
            <img src="/founder/coach-sandeep.jpg" alt="Coach Sandeep Jadav" />
          </Reveal>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal className="shead">
            <p className="pull-lede">
              Marksheets were excellent. Profiles were empty. Direction was
              missing.
            </p>
            <span className="kicker-after">The Founder Story</span>
          </Reveal>
          <Reveal delay={1} style={{ maxWidth: 720, marginTop: 40 }}>
            <h3 className="h-lg" style={{ marginBottom: 24 }}>
              Built from a gap nobody was filling.
            </h3>
            <p className="lede text-muted" style={{ marginBottom: 20 }}>
              Year after year, Coach Sandeep watched brilliant students lose
              global opportunities — not because they lacked ability, but
              because they started too late.
            </p>
            <p className="lede text-muted">
              The traditional education system prepares students for exams.
              The world&rsquo;s best universities select students prepared
              for life. That gap became his mission — and the Global Student
              Success Ecosystem was born.
            </p>
          </Reveal>
          <Reveal delay={2} className="mentor__stats" style={{ marginTop: 40 }}>
            <span>8+ Years Mentoring</span>
            <span>1200+ Students</span>
            <span>50+ Countries</span>
          </Reveal>

          <Reveal delay={3} style={{ marginTop: 48 }}>
            <PhotoSlot
              src="/founder/coach-sandeep-session.jpg"
              caption="Coach Sandeep with students — photo coming soon"
              tall
            />
          </Reveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <Reveal className="shead shead--center">
            <h2 className="h-xl">
              Don&rsquo;t sell admissions. <span className="underline-accent">Build futures.</span>
            </h2>
            <span className="kicker-after kicker-after--dark">Mission &amp; Philosophy</span>
          </Reveal>
          <div className="ptrust__grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {PHILOSOPHY.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) + 1} className="ptrust__card">
                <div className="ptrust__icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MeetTheMentors />

      <section className="section section--deep">
        <div className="container">
          <Reveal className="quoteblock">
            <span className="eyebrow">A Message To Parents</span>
            <blockquote>
              &ldquo;This is the difference between selling admissions and
              building futures. Your child doesn&rsquo;t need another
              coaching class. They need an architect.&rdquo;
            </blockquote>
            <cite>— Coach Sandeep Jadav</cite>
          </Reveal>

          <Reveal delay={1} className="portrait portrait--video">
            <span className="portrait__mark">▶</span>
            <span className="portrait__caption">
              Founder video message — direct-to-camera · 90 seconds · parents &amp; students
            </span>
          </Reveal>

          <Reveal delay={2} className="shead shead--center" style={{ marginTop: 64 }}>
            <h2 className="h-lg">Meet Coach Sandeep.</h2>
            <p className="lede text-muted" style={{ margin: "16px auto 32px" }}>
              One conversation can change the next ten years.
            </p>
            <a href="/contact" className="btn btn--gold">
              Book Your Strategy Session →
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
