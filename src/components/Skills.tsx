"use client";
import { useState } from "react";
import { skillCategories } from "@/data/skills";

const ease = "cubic-bezier(0.22,1,0.36,1)";

export default function Skills() {
  const [active, setActive] = useState(0);
  return (
    <div className="row" style={{ gap: 20 }}>
      <div role="tablist" aria-label="Skill categories" className="stack" style={{ flex: "1 1 280px", minWidth: 0, gap: 12 }}>
        {skillCategories.map((c, i) => (
          <button key={c.name} role="tab" aria-selected={i === active} className={`skcat${i === active ? " on" : ""}`} onClick={() => setActive(i)}>
            <span className="badge">0{i + 1}</span>
            <span style={{ minWidth: 0 }}>
              <span style={{ display: "block", fontSize: 16, fontWeight: 600 }}>{c.name}</span>
              <span className="mono muted" style={{ display: "block", fontSize: 13 }}>{c.chips.length} skills</span>
            </span>
          </button>
        ))}
      </div>

      <div className="card" style={{ flex: "2 1 420px", minWidth: 0, padding: "clamp(20px,3vw,32px)", display: "grid", minHeight: 280, borderRadius: 20 }}>
        {skillCategories.map((c, i) => {
          const on = i === active;
          return (
            <div
              key={c.name}
              className="stackpanel stack"
              aria-hidden={!on}
              style={{
                gap: 18,
                opacity: on ? 1 : 0,
                transform: `translateY(${on ? 0 : 14}px) scale(${on ? 1 : 0.98})`,
                filter: `blur(${on ? 0 : 5}px)`,
                pointerEvents: on ? "auto" : "none",
                visibility: on ? "visible" : "hidden",
                transition: `opacity .55s ${ease}, transform .55s ${ease}, filter .55s ${ease}, visibility 0s linear ${on ? "0s" : ".55s"}`,
              }}
            >
              <div className="eyebrow" style={{ fontSize: 13 }}>// {c.name}</div>
              <p style={{ margin: 0, color: "#b4b4b4", fontSize: 16 }}>{c.blurb}</p>
              <div className="row" style={{ gap: 10 }}>
                {c.chips.map((t, k) => (
                  <span key={t} style={{ display: "inline-flex", opacity: on ? 1 : 0, transform: `translateY(${on ? 0 : 10}px)`, transition: `opacity .5s ${ease} ${on ? k * 0.04 : 0}s, transform .5s ${ease} ${on ? k * 0.04 : 0}s` }}>
                    <span className="skchip">{t}</span>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
