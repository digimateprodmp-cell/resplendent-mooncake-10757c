"use client";

import { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import { openMailto } from "../../lib/formMailer";

const METHODS = [
  { icon: "✆", title: "WhatsApp", desc: "Fastest response — usually within the hour", href: "https://wa.me/" },
  { icon: "▦", title: "Calendly", desc: "Pick a slot that suits your family (connect your Calendly)", href: "https://calendly.com/" },
  { icon: "✉", title: "Email", desc: "hello@coachsandeep.com", href: "mailto:hello@coachsandeep.com" },
];

const STEPS = [
  ["We Respond Within 24h", "A WhatsApp confirmation with your session options — no waiting, no chasing."],
  ["The Strategy Session", "45 minutes: current position, potential, and a candid readiness picture."],
  ["Your Child's Roadmap", "A written summary with the recommended program and year-by-year plan."],
  ["You Decide", "No pressure. The roadmap is yours to keep — whichever way you choose."],
];

const COUNTRIES = ["USA", "UK", "Canada", "Australia", "Singapore", "Other / Not sure yet"];

export default function ContactClient() {
  const [sent, setSent] = useState(false);
  const [role, setRole] = useState("parent");

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = e.target;
    const fd = new FormData(f);
    const countries = fd.getAll("countries").join(", ") || "—";
    const nameLabel = role === "parent" ? "Parent's Name" : "Student's Name (self-inquiry)";

    const bodyLines = [
      `Inquiry from: ${role === "parent" ? "Parent" : "Student"}`,
      `${nameLabel}: ${f.fullName.value}`,
    ];
    if (role === "parent") {
      bodyLines.push(`Student's Name: ${f.studentName.value || "—"}`);
    }
    bodyLines.push(
      `Phone / WhatsApp: ${f.phone.value}`,
      `Email: ${f.email.value}`,
      `Student's Grade: ${f.grade.value}`,
      `Curriculum / Board: ${f.curriculum.value || "—"}`,
      `Target Countries: ${countries}`,
      `Target Intake Year: ${f.intake.value || "—"}`,
      `Interested Program: ${f.program.value || "—"}`,
      `Biggest concern right now: ${f.concern.value || "—"}`,
      `How they heard about us: ${f.source.value || "—"}`
    );

    openMailto({
      subject: `Strategy Session Request — ${f.fullName.value}`,
      bodyLines,
    });
    setSent(true);
  };

  return (
    <main>
      <Nav />

      <section
        className="section section--gradient"
        style={{ paddingTop: "clamp(140px, 16vw, 200px)", position: "relative", overflow: "hidden" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="contact-hero__photo"
          src="/contact/hero.jpg"
          alt=""
          onError={(e) => e.currentTarget.remove()}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Reveal className="shead shead--split">
            <div>
              <h1 className="h-display">
                One conversation. <span className="underline-accent">Ten years of advantage.</span>
              </h1>
              <span className="kicker-after">Book A Strategy Session</span>
            </div>
            <p className="lede text-muted">
              A 45-minute session with Coach Sandeep: your child&rsquo;s
              current position, their global potential, and the exact
              roadmap between the two.
            </p>
          </Reveal>

          <Reveal delay={1} className="contact-methods">
            {METHODS.map((m) => (
              <a
                className="contact-method"
                key={m.title}
                href={m.href}
                target={m.href.startsWith("http") ? "_blank" : undefined}
                rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span className="contact-method__icon">{m.icon}</span>
                <span className="contact-method__title">{m.title}</span>
                <span className="contact-method__desc">{m.desc}</span>
              </a>
            ))}
          </Reveal>

          <Reveal delay={2} className="assess__badges" style={{ marginTop: 40 }}>
            <span className="assess__badge" style={{ color: "var(--muted)" }}>No Obligation</span>
            <span className="assess__badge" style={{ color: "var(--muted)" }}>Parents + Student Welcome</span>
            <span className="assess__badge" style={{ color: "var(--muted)" }}>Online Or In Person</span>
          </Reveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <Reveal className="assess" style={{ margin: "0 auto", maxWidth: 720 }}>
            <div className="assess__body">
              <h3 className="serif" style={{ fontSize: 26, marginBottom: 12 }}>Request Your Session</h3>

              {sent ? (
                <p style={{ color: "var(--muted-dark)", lineHeight: 1.6 }}>
                  Your email app should now be open with everything filled
                  in — just hit send and we&rsquo;ll reply within 24 hours.
                </p>
              ) : (
                <>
                  <p style={{ color: "var(--muted-dark)", marginBottom: 28, lineHeight: 1.6 }}>
                    A few real details help us prepare a roadmap that actually
                    fits — not a generic pitch. We&rsquo;ll respond within 24
                    hours with available slots.
                  </p>

                  <div className="audtog__pills" style={{ marginBottom: 24 }} role="tablist" aria-label="Who is inquiring">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={role === "parent"}
                      className={`audtog__pill${role === "parent" ? " is-active" : ""}`}
                      onClick={() => setRole("parent")}
                    >
                      I&rsquo;m a Parent
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={role === "student"}
                      className={`audtog__pill${role === "student" ? " is-active" : ""}`}
                      onClick={() => setRole("student")}
                    >
                      I&rsquo;m a Student
                    </button>
                  </div>

                  <form className="contact-form" onSubmit={handleSubmit} key={role}>
                    <input
                      name="fullName"
                      type="text"
                      placeholder={role === "parent" ? "Parent's Name" : "Your Name"}
                      required
                    />
                    {role === "parent" && (
                      <input name="studentName" type="text" placeholder="Student's Name" required />
                    )}
                    <input name="phone" type="tel" placeholder="Phone / WhatsApp" required />
                    <input name="email" type="email" placeholder="Email" required />

                    <div className="contact-form__row">
                      <select name="grade" defaultValue="" required>
                        <option value="" disabled>Student&rsquo;s Current Grade</option>
                        <option>Grade 8</option>
                        <option>Grade 9</option>
                        <option>Grade 10</option>
                        <option>Grade 11</option>
                        <option>Grade 12</option>
                      </select>
                      <select name="curriculum" defaultValue="">
                        <option value="" disabled>Curriculum / Board</option>
                        <option>IB</option>
                        <option>IGCSE / Cambridge</option>
                        <option>CBSE</option>
                        <option>ICSE</option>
                        <option>State Board</option>
                        <option>American High School Diploma</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <span className="contact-form__label">Target Countries (select any)</span>
                    <div className="contact-form__checks">
                      {COUNTRIES.map((c) => (
                        <label className="contact-form__check" key={c}>
                          <input type="checkbox" name="countries" value={c} />
                          {c}
                        </label>
                      ))}
                    </div>

                    <div className="contact-form__row">
                      <select name="intake" defaultValue="">
                        <option value="" disabled>Target Intake Year</option>
                        <option>2026</option>
                        <option>2027</option>
                        <option>2028</option>
                        <option>2029</option>
                        <option>Not sure yet</option>
                      </select>
                      <select name="program" defaultValue="">
                        <option value="" disabled>Program You&rsquo;re Interested In</option>
                        <option>Young Achiever (Grade 8–9)</option>
                        <option>Future Global Leader (Grade 10–11)</option>
                        <option>Elite University Admission (Grade 12)</option>
                        <option>Test Prep Only</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>

                    <textarea name="concern" placeholder="What's your biggest concern right now?" rows={3} />

                    <select name="source" defaultValue="">
                      <option value="" disabled>How did you hear about us? (optional)</option>
                      <option>Instagram</option>
                      <option>Google Search</option>
                      <option>Referral / Word of Mouth</option>
                      <option>Event or Webinar</option>
                      <option>WhatsApp</option>
                      <option>Other</option>
                    </select>

                    <button type="submit" className="btn btn--dark">Request Strategy Session →</button>
                  </form>
                  <p style={{ marginTop: 18, fontSize: 12.5, color: "var(--muted-dark)" }}>
                    Your details stay private. No spam — ever.
                  </p>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal className="shead shead--center">
            <h2 className="h-xl">A journey parents can trust.</h2>
            <span className="kicker-after">What Happens Next</span>
          </Reveal>
          <div className="modules__grid" style={{ borderTop: "none", marginTop: 64 }}>
            {STEPS.map(([name, desc], i) => (
              <Reveal key={name} delay={(i % 4) + 1} className="module">
                <span className="fstage__num">{String(i + 1).padStart(2, "0")}</span>
                <div className="module__name" style={{ marginTop: 12 }}>{name}</div>
                <p className="module__desc">{desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={1} className="shead shead--center" style={{ marginTop: 96 }}>
            <p className="lede text-muted" style={{ margin: "0 auto 12px" }}>
              Get your child&rsquo;s Global University Readiness Score in 2
              minutes — free.
            </p>
            <span className="kicker-after">Not Ready To Talk Yet?</span>
            <div style={{ marginTop: 28 }}>
              <a href="/assessment" className="btn btn--ghost">Take The Readiness Assessment →</a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
