"use client";
import { useState } from "react";
import { site } from "@/data/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  // Builds a mailto: link, so the form works on a static site with no backend.
  const body = (msg ? msg + "\n\n" : "") + (name ? "— " + name : "");
  const href = `mailto:${site.email}?subject=${encodeURIComponent(subject || "Hello from your portfolio")}&body=${encodeURIComponent(body)}`;

  const label = { fontFamily: "var(--font-mono), monospace", fontSize: 13, color: "#a1a1a1" } as const;
  return (
    <div className="term" style={{ flex: "1.2 1 420px", minWidth: 0, borderRadius: 20 }}>
      <div className="term-bar">
        <span className="dot" style={{ background: "#ff5f57" }} />
        <span className="dot" style={{ background: "#febc2e" }} />
        <span className="dot" style={{ background: "#28c840" }} />
        <span className="term-title">new-message.txt</span>
      </div>
      <div className="stack" style={{ padding: "clamp(20px,3vw,32px)", gap: 18 }}>
        <div className="stack" style={{ gap: 8 }}>
          <label htmlFor="c-name" style={label}>your name</label>
          <input id="c-name" type="text" placeholder="Vinayak U" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="stack" style={{ gap: 8 }}>
          <label htmlFor="c-subject" style={label}>subject</label>
          <input id="c-subject" type="text" placeholder="Let's work together" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </div>
        <div className="stack" style={{ gap: 8 }}>
          <label htmlFor="c-msg" style={label}>message</label>
          <textarea id="c-msg" rows={6} placeholder="Tell me a bit about what you have in mind, and how I can reach you." value={msg} onChange={(e) => setMsg(e.target.value)} />
        </div>
        <div>
          <a className="btn btn-primary" href={href}>./send-message <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  );
}
