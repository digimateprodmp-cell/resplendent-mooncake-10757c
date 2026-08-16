"use client";

/**
 * Honest "photo, or a clearly-marked placeholder" slot — mirrors the
 * existing founder-video placeholder already on the About page. If
 * `src` fails to load (file missing — real photo not supplied yet),
 * it's removed and the dashed box + caption show through instead of a
 * broken image or an empty gap. Once a real file exists at `src`, it
 * shows automatically — no code change needed.
 */
export default function PhotoSlot({ src, alt = "", caption, tall = false, className = "", style }) {
  return (
    <div className={`photoslot${tall ? " photoslot--tall" : ""}${className ? " " + className : ""}`} style={style}>
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} onError={(e) => e.currentTarget.remove()} />
      )}
      <div className="photoslot__placeholder">
        <span className="photoslot__mark">+</span>
        {caption && <span className="photoslot__caption">{caption}</span>}
      </div>
    </div>
  );
}
