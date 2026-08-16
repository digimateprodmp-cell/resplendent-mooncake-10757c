"use client";

import { useEffect } from "react";

const N8N_CHAT_CSS = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
const N8N_CHAT_JS = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";

// Real Production Chat URL from the workflow's "When chat message received"
// trigger node (workflow is published/active).
const WEBHOOK_URL = "https://manishamahimkar.app.n8n.cloud/webhook/615cb5e4-d468-4fbf-91f3-a46806a3479a/chat";

/**
 * n8n-hosted chat widget (Phase 5) — runs alongside the existing code-only
 * FAQ bubble (ChatWidget.jsx, bottom-left) rather than replacing it, per
 * explicit instruction. Loaded client-side only: the CSS/JS come straight
 * from n8n's CDN bundle and createChat() injects its own floating button +
 * panel into the page, same as the inline <script type="module"> snippet
 * would, just done the Next.js-safe way (no raw <script> tag in JSX).
 *
 * Positioning: n8n's own CSS custom properties push its toggle button up
 * above the WhatsApp sticky FAB (bottom-right, 22px/56px) so the two never
 * stack — see the ".n8n-chat" overrides in globals.css.
 */
export default function N8nChat() {
  useEffect(() => {
    let cancelled = false;

    if (!document.querySelector(`link[data-n8n-chat-css]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = N8N_CHAT_CSS;
      link.setAttribute("data-n8n-chat-css", "true");
      document.head.appendChild(link);
    }

    import(/* webpackIgnore: true */ N8N_CHAT_JS)
      .then((mod) => {
        if (cancelled) return;
        mod.createChat({
          webhookUrl: WEBHOOK_URL,
          // Mirrors the trigger node's own "Initial Message(s)" field so the
          // greeting matches what's configured in n8n.
          initialMessages: ["Hi there! 👋", "How can I help you today?"],
        });
      })
      .catch((err) => {
        // Keep this silent for visitors — the rest of the site (including
        // the existing FAQ widget) should never be affected by this widget
        // failing to load. Still logged for us to notice during testing.
        console.warn("n8n chat widget failed to load:", err);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
