# Coach Sandeep — Future Architects Website

Cinematic Next.js website for the Global Student Success Ecosystem.
Theme: Harvard × Apple × MasterClass × SpaceX.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production build: `npm run build && npm start`.

## What's inside

- **Hero** — Three.js particle field (5,200 particles) with cursor gravity: the pointer acts as a gravity well, particles flow toward it and spring back. GSAP text intro.
- **Stats strip** — animated counters (8+ years, 1200+ students, 50+ countries, 95%).
- **The Changing Reality** — six qualities, icons light up on scroll.
- **Story timeline** — Grade 8 → admission season, gold spine fills as you scroll.
- **Global Success Framework™** — five-stage roadmap, panels expand on hover.
- **Programs** — three full-screen premium panels (Grades 8–9, 10–11, 12).
- **Why Start Early** — sticky scroll animation: grade counter, badges unlock, readiness meter climbs 15% → 96%.
- **Student Dashboard** — SaaS-style mockup (Notion/Linear look) with animated metrics.
- **Universities** — immersive globe backdrop, logos glow on hover.
- **Testimonials** — Netflix-style video cards.
- **Future Readiness Assessment** — working 6-question quiz → Global University Readiness Score with dimension breakdown → booking CTA.
- **Final CTA** — twinkling starfield: "The Future Won't Wait. Will Your Child?"

## To customize

- Booking links: search for `calendly.com` and `wa.me` and replace with real URLs.
- Testimonials/stats: edit the data arrays at the top of each component in `components/`.
- Colors/typography: CSS variables in `app/globals.css` (`--navy`, `--gold`, etc.).
- Replace gradient placeholders in Programs/Testimonials with real photography (research labs, debate, robotics, libraries — no stock smiling students).
