"use client";

import { useEffect, useState } from "react";

/**
 * Shown only when the visitor arrived by clicking the "Mumbai — The Origin"
 * marker on the homepage globe (flagged via sessionStorage right before the
 * route change in Hero.jsx). Direct visitors to /about never see this —
 * it's a narrative handoff, not a permanent banner.
 */
export default function JourneyBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("journeyOrigin") === "mumbai") {
        setShow(true);
        sessionStorage.removeItem("journeyOrigin");
      }
    } catch {}
  }, []);

  if (!show) return null;

  return (
    <div className="journey-banner">
      <span className="journey-banner__dot" />
      You just traced the path from Mumbai. Here&rsquo;s the person at the other end of it.
    </div>
  );
}
