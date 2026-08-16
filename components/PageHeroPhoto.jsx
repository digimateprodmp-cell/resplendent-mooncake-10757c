"use client";

/**
 * Silent-fallback background photo for page headers built as Server
 * Components (they export `metadata`, so they can't hold an onError
 * handler directly — that requires a Client Component). Renders nothing
 * visible if the file at `src` is missing.
 */
export default function PageHeroPhoto({ src, className }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={className} src={src} alt="" onError={(e) => e.currentTarget.remove()} />
  );
}
