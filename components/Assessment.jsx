"use client";

import { useState } from "react";
import Reveal from "./Reveal";

/**
 * Future Readiness Assessment — the site's signature interactive feature.
 * 6 questions → weighted Global University Readiness Score + dimension
 * breakdown → strategy session CTA.
 */

const QUESTIONS = [
  {
    dim: "Runway",
    q: "Which grade is your child currently in?",
    options: [
      { label: "Grade 8 or below", pts: 100 },
      { label: "Grade 9", pts: 85 },
      { label: "Grade 10", pts: 65 },
      { label: "Grade 11", pts: 45 },
      { label: "Grade 12", pts: 25 },
    ],
  },
  {
    dim: "Academics",
    q: "How would you describe their academic performance?",
    options: [
      { label: "Consistently top of class (90%+)", pts: 100 },
      { label: "Strong — usually 80–90%", pts: 80 },
      { label: "Good, but inconsistent", pts: 55 },
      { label: "Struggling to stay motivated", pts: 30 },
    ],
  },
  {
    dim: "Leadership",
    q: "Has your child held any leadership roles or led an initiative?",
    options: [
      { label: "Yes — led multiple projects or teams", pts: 100 },
      { label: "One meaningful role so far", pts: 70 },
      { label: "Participates, but doesn't lead yet", pts: 40 },
      { label: "Not yet", pts: 15 },
    ],
  },
  {
    dim: "Extracurriculars",
    q: "Beyond school, what does their profile include today?",
    options: [
      { label: "Competitions, research, or a personal project", pts: 100 },
      { label: "Regular clubs, sports, or arts", pts: 65 },
      { label: "Occasional activities", pts: 40 },
      { label: "Mostly academics only", pts: 15 },
    ],
  },
  {
    dim: "Communication",
    q: "How confident are they at public speaking and expressing ideas?",
    options: [
      { label: "Very confident — debates, MUNs, stage", pts: 100 },
      { label: "Comfortable in small groups", pts: 65 },
      { label: "Hesitant, but willing", pts: 40 },
      { label: "Avoids it", pts: 15 },
    ],
  },
  {
    dim: "Clarity",
    q: "Does your child have a clear career direction?",
    options: [
      { label: "Yes — clear field and target universities", pts: 100 },
      { label: "Broad interests, nothing decided", pts: 60 },
      { label: "Changes their mind often", pts: 40 },
      { label: "No idea yet — and that worries us", pts: 20 },
    ],
  },
];

function verdictFor(score) {
  if (score >= 80)
    return {
      title: "Strong Foundation — Time to Aim Higher",
      advice:
        "Your child already has real assets. With the right strategy, the gap between 'strong applicant' and 'unmissable applicant' can be closed systematically.",
    };
  if (score >= 60)
    return {
      title: "Promising — But the Clock Matters",
      advice:
        "There's clear potential here, and enough runway to build a world-class profile — if the building starts now, not in Grade 12.",
    };
  if (score >= 40)
    return {
      title: "Early Signals — A Plan Changes Everything",
      advice:
        "This is exactly the profile that transforms most dramatically with structured mentorship. The raw material is there; the roadmap isn't yet.",
    };
  return {
    title: "The Best Time to Start Was Yesterday",
    advice:
      "Nothing here is a verdict on your child — it's a verdict on the absence of a plan. Every extraordinary profile started at zero. What matters is starting.",
  };
}

export default function Assessment() {
  const [step, setStep] = useState(-1); // -1 intro, 0..5 questions, 6 result
  const [answers, setAnswers] = useState([]);

  const answer = (pts) => {
    const next = [...answers];
    next[step] = pts;
    setAnswers(next);
    setStep(step + 1);
  };

  const back = () => setStep(step - 1);
  const restart = () => {
    setAnswers([]);
    setStep(-1);
  };

  const score =
    answers.length === QUESTIONS.length
      ? Math.round(answers.reduce((a, b) => a + b, 0) / QUESTIONS.length)
      : 0;
  const verdict = verdictFor(score);
  const progress = step < 0 ? 0 : Math.min((step / QUESTIONS.length) * 100, 100);

  const ringCirc = 2 * Math.PI * 96;

  return (
    <section className="section section--gradient" id="assessment">
      <div className="container">
        <Reveal className="shead shead--center">
          <h2 className="h-xl">
            How ready is your child for a <span className="underline-accent">global future?</span>
          </h2>
          <p className="lede text-muted">
            A 2-minute assessment. A personalized Global University Readiness
            Score. Complete clarity on where to begin.
          </p>
          <span className="kicker-after">Future Readiness Assessment</span>
        </Reveal>

        <Reveal delay={1}>
          <div className="assess">
            <div className="assess__progress">
              <div
                className="assess__progress-fill"
                style={{ width: `${step >= QUESTIONS.length ? 100 : progress}%` }}
              />
            </div>

            <div className="assess__body">
              {/* ---------- Intro ---------- */}
              {step === -1 && (
                <div className="assess__intro">
                  <h3 className="serif">Discover Your Child&rsquo;s Readiness Score</h3>
                  <p>
                    Six questions. Two minutes. You&rsquo;ll receive a score
                    across the exact dimensions top universities evaluate —
                    and see precisely where the gaps are.
                  </p>
                  <div className="assess__badges">
                    <span className="assess__badge">6 QUESTIONS</span>
                    <span className="assess__badge">2 MINUTES</span>
                    <span className="assess__badge">INSTANT SCORE</span>
                  </div>
                  <button className="btn btn--dark" onClick={() => setStep(0)}>
                    Begin Assessment →
                  </button>
                </div>
              )}

              {/* ---------- Questions ---------- */}
              {step >= 0 && step < QUESTIONS.length && (
                <div>
                  <div className="assess__qnum">
                    Question {step + 1} / {QUESTIONS.length} — {QUESTIONS[step].dim}
                  </div>
                  <div className="assess__question">{QUESTIONS[step].q}</div>
                  <div className="assess__options">
                    {QUESTIONS[step].options.map((o) => (
                      <button
                        key={o.label}
                        className="assess__option"
                        onClick={() => answer(o.pts)}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                  {step > 0 && (
                    <button className="assess__back" onClick={back}>
                      ← Previous question
                    </button>
                  )}
                </div>
              )}

              {/* ---------- Result ---------- */}
              {step >= QUESTIONS.length && (
                <div>
                  <div className="assess__score-ring">
                    <svg viewBox="0 0 220 220" width="220" height="220">
                      <circle
                        cx="110" cy="110" r="96"
                        fill="none"
                        stroke="rgba(16,35,59,0.08)"
                        strokeWidth="14"
                      />
                      <circle
                        cx="110" cy="110" r="96"
                        fill="none"
                        stroke={score >= 60 ? "#1faf7a" : "#c7a14a"}
                        strokeWidth="14"
                        strokeLinecap="round"
                        strokeDasharray={ringCirc}
                        strokeDashoffset={ringCirc * (1 - score / 100)}
                        transform="rotate(-90 110 110)"
                        style={{ transition: "stroke-dashoffset 1.6s cubic-bezier(0.16,1,0.3,1)" }}
                      />
                    </svg>
                    <div className="assess__score-num">
                      <strong>{score}</strong>
                      <span>Readiness Score</span>
                    </div>
                  </div>

                  <div className="assess__verdict">{verdict.title}</div>
                  <p className="assess__advice">{verdict.advice}</p>

                  <div className="assess__breakdown">
                    {QUESTIONS.map((q, i) => (
                      <div className="assess__dim" key={q.dim}>
                        <span className="assess__dim-label">{q.dim}</span>
                        <div className="assess__dim-bar">
                          <div
                            className="assess__dim-fill"
                            style={{ width: `${answers[i]}%` }}
                          />
                        </div>
                        <span className="assess__dim-num">{answers[i]}</span>
                      </div>
                    ))}
                  </div>

                  <div className="assess__cta-row">
                    <a
                      className="btn btn--gold"
                      href="https://calendly.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Your Strategy Session
                    </a>
                    <button className="btn btn--ghost" style={{ color: "#10233b", borderColor: "rgba(16,35,59,0.25)" }} onClick={restart}>
                      Retake Assessment
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
