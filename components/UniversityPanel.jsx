"use client";

import { useEffect } from "react";

/**
 * Slide-in panel opened by clicking a university chip on the hero globe.
 * Content is deliberately honest: a real, already-published testimonial
 * when one exists for that school (see Testimonials.jsx), otherwise a
 * plain "coming soon" line — never an invented student name, photo, or
 * scholarship figure. No university logo (trademark/endorsement risk);
 * the same plain-typography initial mark used throughout the site instead.
 */
export default function UniversityPanel({ uni, onClose }) {
  useEffect(() => {
    if (!uni) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [uni, onClose]);

  if (!uni) return null;

  return (
    <div className="unipanel__scrim" onClick={onClose}>
      <aside className="unipanel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="unipanel__close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="unipanel__hero">
          <span className="unipanel__initial">
            {uni.short.charAt(0)}
            {uni.slug && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`/universities/${uni.slug}.jpg`}
                alt=""
                onError={(e) => {
                  const img = e.currentTarget;
                  if (!img.dataset.fb) {
                    img.dataset.fb = "1";
                    img.src = `/universities/${uni.slug}.png`;
                  } else {
                    img.remove();
                  }
                }}
              />
            )}
          </span>
        </div>

        <div className="unipanel__body">
          <span className="unipanel__region">{uni.region}</span>
          <h2>{uni.name}</h2>
          <div className="unipanel__meta">
            <span>{uni.country}</span>
            {uni.tier && <span className="unipanel__tier">{uni.tier}</span>}
          </div>

          <h4>Known For</h4>
          <p>{uni.programs}</p>

          <h4>Success Stories</h4>
          {uni.story ? (
            <blockquote className="unipanel__quote">
              &ldquo;{uni.story.quote}&rdquo;
              <cite>
                — {uni.story.name}, {uni.story.role} · {uni.story.result}
              </cite>
            </blockquote>
          ) : (
            <p className="unipanel__soon">
              Success stories from students preparing for {uni.short} are coming
              soon. Explore real outcomes from other universities on the{" "}
              <a href="/stories">Success Stories</a> page today.
            </p>
          )}

          <h4>How Coach Sandeep Prepares Students For Reaches Like This</h4>
          <p>
            Every application to a university at this level is built on years,
            not months — leadership, research, and a profile shaped from Grade
            8 onward. See the full{" "}
            <a href="/framework">Framework</a> this is built on.
          </p>

          <a href="/contact" className="btn btn--gold unipanel__cta">
            Book Your Strategy Session →
          </a>
        </div>
      </aside>
    </div>
  );
}
