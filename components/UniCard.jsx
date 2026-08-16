"use client";

/**
 * Shared university card — used on the homepage overview (Universities.jsx)
 * and the full /universities page. Layers a real campus photo (if one
 * exists at /universities/<slug>.jpg or .png) behind the existing
 * name/country card. If no slug is given, or the file is missing (e.g. a
 * school that isn't part of the tracked photo set), it falls back
 * silently to the plain text card — never a broken image icon.
 */
export default function UniCard({ name, place, slug }) {
  return (
    <div className="uni">
      {slug && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="uni__photo"
          src={`/universities/${slug}.jpg`}
          alt=""
          onError={(e) => {
            const img = e.currentTarget;
            if (!img.dataset.fb) {
              img.dataset.fb = "1";
              img.src = `/universities/${slug}.png`;
            } else {
              img.remove();
            }
          }}
        />
      )}
      <div className="uni__body">
        <div className="uni__name">{name}</div>
        <div className="uni__country">{place}</div>
      </div>
    </div>
  );
}
