"use client";

/**
 * The full-bleed background behind each homepage program block. The
 * gradient (`bg`) is the real, always-present background — a photo is
 * layered on top at low opacity purely as an enhancement. If the photo
 * at /programs/<slug>.jpg is missing, it removes itself and the
 * gradient looks exactly as it did before — no visual regression.
 */
export default function ProgramBg({ bg, slug }) {
  return (
    <div className="program__bg" style={{ background: bg }}>
      {slug && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="program__photo"
          src={`/programs/${slug}.jpg`}
          alt=""
          onError={(e) => e.currentTarget.remove()}
        />
      )}
    </div>
  );
}
