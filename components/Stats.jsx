"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { end: 8, suffix: "+", label: "Years of Mentorship" },
  { end: 1200, suffix: "+", label: "Students Guided" },
  { end: 50, suffix: "+", label: "Countries Reached" },
  { end: 95, suffix: "%", label: "Admission Success" },
];

function Counter({ end, suffix }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1800;
          const t0 = performance.now();
          const step = (now) => {
            const p = Math.min((now - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 4);
            setVal(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="stats">
      {STATS.map((s) => (
        <div className="stat" key={s.label}>
          <div className="stat__num">
            <Counter end={s.end} suffix={s.suffix} />
          </div>
          <div className="stat__label">{s.label}</div>
        </div>
      ))}
    </section>
  );
}
