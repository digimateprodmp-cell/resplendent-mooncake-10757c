"use client";

import { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import { openMailto } from "../../lib/formMailer";

/**
 * Recurring event *types* rather than invented one-off dates — honest
 * placeholder pattern until real sessions are scheduled and dated.
 */
const EVENTS = [
  {
    tag: "Monthly",
    title: "Parent Q&A Session",
    desc: "An open session for parents to ask anything about the process — no pitch, just answers.",
  },
  {
    tag: "Seasonal",
    title: "University Application Masterclass",
    desc: "A deep dive on shortlisting, essays, and interviews for Grade 11–12 families.",
  },
  {
    tag: "Announced Closer To Date",
    title: "Global University Fair (Virtual)",
    desc: "Meet program representatives and hear directly from currently admitted students.",
  },
  {
    tag: "Bi-Weekly",
    title: "Live Office Hours With Coach Sandeep",
    desc: "A drop-in session, first come first served — bring your specific question.",
  },
];

export default function EventsClient() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <main>
      <Nav />

      <section
        className="section section--deep"
        style={{ paddingTop: "clamp(140px, 16vw, 200px)", position: "relative", overflow: "hidden" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="events-hero__photo"
          src="/events/hero.jpg"
          alt=""
          onError={(e) => e.currentTarget.remove()}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Reveal className="shead shead--center">
            <h1 className="h-display">
              Learn <span className="underline-accent">before</span> you commit.
            </h1>
            <p className="lede text-muted" style={{ marginTop: 28, marginLeft: "auto", marginRight: "auto" }}>
              Free webinars, masterclasses, and live sessions for parents
              and students — dates are announced as they're scheduled.
            </p>
            <span className="kicker-after">Upcoming Events</span>
          </Reveal>

          <div className="event__grid">
            {EVENTS.map((e, i) => (
              <Reveal key={e.title} delay={(i % 4) + 1} className="event-card">
                <span className="event-card__tag">{e.tag}</span>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <Reveal className="shead shead--center">
            <h2 className="h-xl">Join the waitlist.</h2>
            <p className="lede text-muted-dark" style={{ margin: "0 auto 12px" }}>
              We&rsquo;ll email you as soon as the next session date is confirmed.
            </p>
            <span className="kicker-after kicker-after--dark">Don&rsquo;t Miss The Next One</span>
          </Reveal>

          <Reveal delay={1} style={{ maxWidth: 480, margin: "0 auto" }}>
            {joined ? (
              <p style={{ textAlign: "center", color: "var(--muted-dark)" }}>
                Your email app should be open — just hit send and you&rsquo;re on the list.
              </p>
            ) : (
              <form
                className="footer__news"
                style={{ maxWidth: 420, margin: "0 auto" }}
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!email) return;
                  openMailto({
                    subject: "Event Waitlist Signup",
                    bodyLines: [`Add to event waitlist: ${email}`],
                  });
                  setJoined(true);
                }}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ color: "var(--ink)", background: "#fff", borderColor: "rgba(16,35,59,0.15)" }}
                />
                <button type="submit">Join</button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
