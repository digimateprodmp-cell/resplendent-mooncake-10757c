"use client";

import { useEffect, useState } from "react";

/**
 * Site-wide sticky CTA layer (Phase 4):
 * - A persistent WhatsApp floating button (all screen sizes).
 * - A mobile-only bottom bar (WhatsApp + Book Session) that fades in
 *   once the visitor has scrolled past the hero, so it never competes
 *   with the hero's own CTAs.
 */
export default function StickyCTA() {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="stickycta__fab"
        aria-label="Message on WhatsApp"
      >
        ✆
      </a>

      <div className={`stickycta__bar${showBar ? " is-visible" : ""}`}>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="stickycta__bar-btn stickycta__bar-btn--ghost"
        >
          WhatsApp
        </a>
        <a href="/contact" className="stickycta__bar-btn stickycta__bar-btn--gold">
          Book Session
        </a>
      </div>
    </>
  );
}
