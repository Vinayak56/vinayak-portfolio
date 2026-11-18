"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import { LeafArt, PharmacyArt, BrainArt, WheatArt, BooksArt, GroceryArt } from "./ProjectArt";

const art = [LeafArt, PharmacyArt, BrainArt, WheatArt, BooksArt, GroceryArt];

/**
 * Projects with two views:
 *  - overview (default): every project as a tile, like a gallery
 *  - detail: one project, opened from the left contents list or a tile
 * Panels sit in one grid cell. Moving between them reveals the next panel with a directional
 * clip-path wipe (forward = from below, back = from above), while a mint sweep line crosses the stage.
 */
export default function Projects() {
  const [active, setActive] = useState<number | null>(null); // null = overview
  const [dir, setDir] = useState<1 | -1>(1);
  const [tick, setTick] = useState(0);

  const pos = (a: number | null) => (a === null ? 0 : a + 1); // overview sits before project 01
  const go = (next: number | null) => {
    if (next === active) return;
    setDir(pos(next) > pos(active) ? 1 : -1);
    setActive(next);
    setTick((t) => t + 1);
  };
  const cur = pos(active);

  // off-screen state for a panel depends on where it is relative to the current one
  const panelStyle = (idx: number): React.CSSProperties => {
    const on = idx === cur;
    const above = idx < cur;
    return {
      gridArea: "1 / 1",
      minWidth: 0,
      opacity: on ? 1 : 0,
      clipPath: on ? "inset(-40px -40px -40px -40px)" : above ? "inset(-40px -40px 100% -40px)" : "inset(100% -40px -40px -40px)",
      transform: on ? "none" : `translateY(${above ? -48 : 48}px) scale(0.97)`,
      filter: on ? "none" : "blur(8px)",
      pointerEvents: on ? "auto" : "none",
      visibility: on ? "visible" : "hidden",
      transition: `opacity .7s var(--ease), clip-path .9s var(--ease), transform .9s var(--ease), filter .7s var(--ease), visibility 0s linear ${on ? "0s" : ".9s"}`,
    };
  };

  return (
    <section className="row" style={{ gap: "32px 40px", alignItems: "flex-start" }}>
      <nav aria-label="Projects" className="stack" style={{ flex: "0 1 290px", minWidth: 240, gap: 6 }}>
        <button className={`lrow${active === null ? " on" : ""}`} aria-pressed={active === null} onClick={() => go(null)} style={{ marginBottom: 6 }}>
          <span className="mono" style={{ fontSize: 13, color: active === null ? "var(--mint)" : "#7d7d8a" }}>00</span>
          <span style={{ flex: "1 1 0", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "var(--font-mono), monospace", color: "var(--mint)" }}>Contents</span>
        </button>
        {projects.map((p, i) => (
          <button key={p.title} className={`lrow${i === active ? " on" : ""}`} aria-pressed={i === active} onClick={() => go(i)}>
            <span className="mono" style={{ fontSize: 13, color: i === active ? "var(--mint)" : "#7d7d8a" }}>0{i + 1}</span>
            <span style={{ flex: "1 1 0", minWidth: 0, fontSize: 16, fontWeight: 500, letterSpacing: "-0.01em", lineHeight: 1.3 }}>{p.title}</span>
          </button>
        ))}
      </nav>

      <div className="stage" style={{ flex: "1 1 520px", minWidth: 0 }}>
        {/* sweep line: re-mounts on every change so the animation replays */}
        {tick > 0 && <span key={tick} className={`sweep ${dir === 1 ? "down" : "up"}`} aria-hidden="true" />}

        <div style={{ display: "grid" }}>
          {/* overview */}
          <div aria-hidden={cur !== 0} style={panelStyle(0)} className={`pp${cur === 0 ? " on" : ""}`}>
            <div className="tiles">
              {projects.map((p, i) => {
                const Art = art[i];
                return (
                  <button key={p.title} className="tile" onClick={() => go(i)} style={{ ["--i" as string]: i } as React.CSSProperties} aria-label={`Open ${p.title}`}>
                    <span className="tile-art"><Art /></span>
                    <span className="tile-body">
                      <span className="mono" style={{ fontSize: 12, color: "var(--mint)" }}>0{i + 1} · {p.label.replace("// ", "")}</span>
                      <span className="tile-title">{p.title}</span>
                      <span className="tile-go mono" aria-hidden="true">view project →</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* details */}
          {projects.map((p, i) => {
            const Art = art[i];
            const on = cur === i + 1;
            return (
              <div key={p.title} aria-hidden={!on} style={panelStyle(i + 1)} className={`pp${on ? " on" : ""}`}>
                <div className="row" style={{ alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 14 }}>
                  <button className="chip-btn mono" onClick={() => go(null)}>← all projects</button>
                  <div className="row" style={{ gap: 8, alignItems: "center" }}>
                    <span className="mono muted" style={{ fontSize: 13 }}>0{i + 1} / 0{projects.length}</span>
                    <button className="chip-btn mono" disabled={i === 0} onClick={() => go(i - 1)} aria-label="Previous project">←</button>
                    <button className="chip-btn mono" disabled={i === projects.length - 1} onClick={() => go(i + 1)} aria-label="Next project">→</button>
                  </div>
                </div>
                <article className="card split" style={{ borderRadius: 24, overflow: "hidden" }}>
                  <div className="pimg"><Art /></div>
                  <div className="stack stagger" style={{ gap: 14, padding: "24px 26px 26px" }}>
                    <div className="mono" style={{ fontSize: 13, color: "var(--mint)" }}>{p.label}</div>
                    <h3 style={{ margin: 0, fontSize: "clamp(26px,3.4vw,38px)", letterSpacing: "-0.025em", lineHeight: 1.12 }}>{p.title}</h3>
                    <p style={{ margin: 0, color: "#b4b4b4", fontSize: 16, lineHeight: 1.65 }}>{p.desc}</p>
                    <p style={{ margin: 0, color: "#8f8f8f", fontSize: 15, lineHeight: 1.65 }}>{p.desc2}</p>
                    <div className="row" style={{ gap: 8 }}>
                      {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <div className="mono" style={{ padding: "12px 16px", border: "1px solid #232328", borderRadius: 12, background: "#0a0b0e", fontSize: 12.5, color: "#a1a1a1", wordBreak: "break-all" }}>
                      <span style={{ color: "var(--mint)" }}>$</span> git clone github.com/Vinayak56/{p.repo}
                    </div>
                    <a href={`https://github.com/Vinayak56/${p.repo}`} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, minHeight: 44, fontSize: 15, fontWeight: 500, color: "var(--mint)" }}>
                      View on GitHub <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
