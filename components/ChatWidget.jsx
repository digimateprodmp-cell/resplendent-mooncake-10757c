"use client";

import { useEffect, useRef, useState } from "react";
import { QUICK_QUESTIONS, findAnswer } from "../lib/chatKnowledge";

const WELCOME = {
  from: "bot",
  text: "Hi! Ask me about programs, the framework, pricing, or how to get started.",
  link: null,
};

const FALLBACK = {
  from: "bot",
  text: "I don't have a canned answer for that yet — but the team can help directly.",
  link: null,
  fallback: true,
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  const send = (text) => {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { from: "user", text: q }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const match = findAnswer(q);
      setMessages((m) => [...m, match ? { from: "bot", ...match } : FALLBACK]);
      setTyping(false);
    }, 450);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      <button
        className="chatwidget__fab"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Ask a question"}
      >
        {open ? "×" : "?"}
      </button>

      {open && (
        <div className="chatwidget__panel">
          <div className="chatwidget__header">
            <div>
              <div className="chatwidget__title">Ask Coach Sandeep&rsquo;s Assistant</div>
              <div className="chatwidget__subtitle">Instant answers · not Coach Sandeep himself</div>
            </div>
            <button className="chatwidget__close" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
          </div>

          <div className="chatwidget__messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chatwidget__msg chatwidget__msg--${m.from}`}>
                <p>{m.text}</p>
                {m.link && (
                  <a href={m.link.href} className="chatwidget__msg-link">{m.link.label}</a>
                )}
                {m.fallback && (
                  <div className="chatwidget__msg-links">
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="chatwidget__msg-link">
                      Message on WhatsApp →
                    </a>
                    <a href="/contact" className="chatwidget__msg-link">Book a session →</a>
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="chatwidget__msg chatwidget__msg--bot chatwidget__msg--typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          <div className="chatwidget__chips">
            {QUICK_QUESTIONS.map((q) => (
              <button key={q} className="chatwidget__chip" onClick={() => send(q)}>
                {q}
              </button>
            ))}
          </div>

          <form className="chatwidget__inputrow" onSubmit={handleSubmit}>
            <input
              className="chatwidget__input"
              type="text"
              placeholder="Type a question…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Ask a question"
            />
            <button type="submit" className="chatwidget__send" aria-label="Send">→</button>
          </form>
        </div>
      )}
    </>
  );
}
