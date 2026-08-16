"use client";

import { useEffect, useRef } from "react";

/**
 * Wraps children in a slow fade-up reveal triggered on scroll.
 * Usage: <Reveal delay={1}> ... </Reveal>
 */
export default function Reveal({ children, delay = 0, as: Tag = "div", className = "", ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delayClass = delay ? ` reveal-delay-${delay}` : "";
  return (
    <Tag ref={ref} className={`reveal${delayClass} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
