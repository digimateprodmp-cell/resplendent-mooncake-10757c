import Reveal from "./Reveal";

/**
 * Placeholder press/media strip. Swap the MENTIONS array for real
 * publication or award names + logos once available — the dashed
 * slot styling is intentional so it's obvious what needs replacing
 * and never mistaken for a broken image.
 */
const MENTIONS = [
  "Featured Publication",
  "Education Media",
  "Industry Recognition",
  "Podcast Feature",
  "Press Mention",
];

export default function PressBar() {
  return (
    <section className="pressbar">
      <div className="container pressbar__inner">
        <Reveal className="pressbar__label">
          <span className="eyebrow" style={{ marginBottom: 0 }}>
            As Recognized By
          </span>
        </Reveal>
        <Reveal delay={1} className="pressbar__row">
          {MENTIONS.map((m) => (
            <div className="pressbar__slot" key={m}>
              {m}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
