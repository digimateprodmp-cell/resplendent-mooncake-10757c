"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";

/** Final CTA — starfield night sky rendered on a lightweight 2D canvas. */
export default function Finale() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;

    const stars = [];
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      stars.length = 0;
      const n = Math.floor((canvas.width * canvas.height) / 9000);
      for (let i = 0; i < n; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.4 + 0.3,
          tw: Math.random() * Math.PI * 2,
          sp: 0.4 + Math.random() * 1.2,
          gold: Math.random() < 0.12,
        });
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const tick = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        const a = 0.25 + 0.55 * Math.abs(Math.sin(t * 0.0006 * s.sp + s.tw));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * window.devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = s.gold
          ? `rgba(227, 196, 122, ${a})`
          : `rgba(250, 251, 253, ${a * 0.8})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="finale">
      <canvas
        ref={canvasRef}
        className="finale__stars"
        style={{ width: "100%", height: "100%" }}
      />
      <div className="container finale__content">
        <Reveal>
          <h2 className="finale__title">
            The future won&rsquo;t wait.<br />
            <em className="text-gold italic">Will your child?</em>
          </h2>
          <p className="finale__sub">
            Every extraordinary story starts with one strategic conversation.
          </p>
          <a href="/contact" className="btn btn--gold" style={{ padding: "22px 48px", fontSize: 16 }}>
            Book Your Strategy Session
          </a>
        </Reveal>
      </div>
    </section>
  );
}
