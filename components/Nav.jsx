"use client";

import { useEffect, useState } from "react";

const LINKS = [
  ["About", "/about"],
  ["Framework", "/framework"],
  ["Programs", "/programs"],
  ["Test Prep", "/test-prep"],
  ["Universities", "/universities"],
  ["Success Stories", "/stories"],
  ["Resources", "/resources"],
  ["Readiness Score", "/assessment"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Below 900px the inline links are hidden (see .nav__links a:not(.nav__cta)
  // in globals.css) — previously with no replacement at all, so every page
  // link was simply unreachable on a phone. This drawer is that replacement.
  useEffect(() => {
    if (!menuOpen) return;
    document.body.classList.add("nav-drawer-open");
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("nav-drawer-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <nav className={`nav${scrolled ? " is-scrolled" : ""}${menuOpen ? " is-menu-open" : ""}`}>
      <div className="container nav__inner">
        <a href="/" className="nav__logo" onClick={() => setMenuOpen(false)}>
          Coach <span>Sandeep</span>
        </a>
        <div className="nav__links">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a href="/contact" className="btn btn--gold nav__cta">
            Book Strategy Session
          </a>
        </div>

        <button
          type="button"
          className="nav__burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-drawer"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`nav__drawer-scrim${menuOpen ? " is-visible" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <div id="nav-drawer" className={`nav__drawer${menuOpen ? " is-open" : ""}`}>
        {LINKS.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
        <a href="/contact" className="btn btn--gold nav__drawer-cta" onClick={() => setMenuOpen(false)}>
          Book Strategy Session
        </a>
      </div>
    </nav>
  );
}
