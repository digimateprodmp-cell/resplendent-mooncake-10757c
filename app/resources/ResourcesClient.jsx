"use client";

import { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import { openMailto } from "../../lib/formMailer";

const RESOURCES = [
  { icon: "◆", name: "SAT Guide", desc: "Score-band strategy for Grade 9–11 students, built around timeline, not panic." },
  { icon: "✦", name: "Scholarship Guide", desc: "A country-by-country map of merit- and need-based aid worth applying for." },
  { icon: "◉", name: "Application Checklist", desc: "Every document, deadline, and decision point, in the order you'll actually need them." },
  { icon: "❖", name: "Essay Templates", desc: "Structure guides for the personal statement and three common supplemental types." },
  { icon: "▲", name: "Country Guides", desc: "What actually makes admission different in the US, UK, Canada, and Singapore." },
  { icon: "◎", name: "Visa Guide", desc: "The practical realities of studying abroad, country by country." },
];

export default function ResourcesClient() {
  const [sentMap, setSentMap] = useState({});

  const handleSubmit = (e, resourceName) => {
    e.preventDefault();
    const email = e.target.elements.namedItem("email").value;
    openMailto({
      subject: `Guide Request — ${resourceName}`,
      bodyLines: [
        `Guide requested: ${resourceName}`,
        `Send to: ${email}`,
      ],
    });
    setSentMap((prev) => ({ ...prev, [resourceName]: true }));
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
          className="resources-hero__photo"
          src="/resources/hero.jpg"
          alt=""
          onError={(e) => e.currentTarget.remove()}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Reveal className="shead shead--center">
            <h1 className="h-display">
              Start building <span className="underline-accent">before you even talk to us.</span>
            </h1>
            <p className="lede text-muted" style={{ marginTop: 28, marginLeft: "auto", marginRight: "auto" }}>
              Six practical guides, free — the same frameworks our mentors
              use with paying families.
            </p>
            <span className="kicker-after">Free Resources</span>
          </Reveal>

          <div className="resource__grid">
            {RESOURCES.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) + 1} className="resource-card">
                <div className="ptrust__icon">{r.icon}</div>
                <h3>{r.name}</h3>
                <p>{r.desc}</p>
                {sentMap[r.name] ? (
                  <p style={{ fontSize: 13, color: "var(--muted-dark)", marginTop: 12 }}>
                    Your email app should be open — just hit send.
                  </p>
                ) : (
                  <form
                    className="resource-card__form"
                    onSubmit={(e) => handleSubmit(e, r.name)}
                  >
                    <input name="email" type="email" placeholder="Your email" required aria-label={`Email for ${r.name}`} />
                    <button type="submit">Send Me This Guide →</button>
                  </form>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal className="shead shead--center">
            <h2 className="h-xl">
              See what a <span className="underline-accent">full roadmap</span> looks like.
            </h2>
            <span className="kicker-after">Want More Than A Guide?</span>
            <div style={{ marginTop: 40, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/assessment" className="btn btn--gold">Take The Readiness Assessment →</a>
              <a href="/contact" className="btn btn--ghost">Book Strategy Session</a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
