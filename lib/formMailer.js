/**
 * Phase 4 — real (zero-vendor) form wiring.
 *
 * Every form on the site was previously visual-only (onSubmit just called
 * preventDefault). This opens the visitor's own email client with a
 * pre-filled message to the team inbox — no third-party form service,
 * no API keys, nothing that requires picking a CRM before it can work.
 *
 * Swap the destination address, or replace this with a CRM/Sheet
 * integration, once that decision is made.
 */
export const TEAM_EMAIL = "hello@coachsandeep.com";

export function openMailto({ to = TEAM_EMAIL, subject, bodyLines = [] }) {
  const body = bodyLines.filter(Boolean).join("\n");
  const url = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}
