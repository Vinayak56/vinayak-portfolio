import type { Metadata } from "next";

export const metadata: Metadata = { title: "Achievements" };

export default function Achievements() {
  return (
    <main className="main">
      <section className="page-head">
        <div className="eyebrow">// achievements</div>
        <h1 className="h1">Achievements</h1>
        <p className="lead">Competition wins and recognition for the systems I've built.</p>
      </section>

      <section className="card card-pad feature">
        <div className="info">
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span aria-hidden="true" style={{ flex: "0 0 56px", height: 56, borderRadius: 16, background: "#26200d", border: "1px solid #73612a", display: "flex", alignItems: "center", justifyContent: "center", color: "#f5d36a" }}>
              <svg width="30" height="30" viewBox="0 0 24 24"><path d="M7 4h10v5a5 5 0 0 1-10 0V4Z M7 6H4v1a3 3 0 0 0 3 3 M17 6h3v1a3 3 0 0 1-3 3 M12 14v4 M8 20h8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <div className="eyebrow" style={{ fontSize: 13 }}>// competition win</div>
          </div>
          <div style={{ fontSize: "clamp(44px,7vw,72px)", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--mint)", lineHeight: 1 }}>1st place</div>
          <h2 style={{ margin: 0, fontSize: "clamp(24px,3vw,34px)", letterSpacing: "-0.025em", lineHeight: 1.2 }}>XZIBIT National-Level Project Competition</h2>
          <div className="row" style={{ gap: 8 }}>
            {["Major Software Projects", "Project: Augmented Humanoid"].map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
          <p style={{ margin: 0, color: "#b4b4b4", fontSize: 16 }}>Awarded First Prize in the Major Software Projects category at XZIBIT, a national-level project competition. The winning project was the Augmented Humanoid Counsellor for Mental Health, an LSTM-based NLP model inside an immersive Unity application.</p>
          <div><a className="btn btn-primary" href="/certificates/xzibit-winner.pdf" target="_blank" rel="noreferrer">./view-certificate <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="art">
          <a className="cert-img" href="/certificates/xzibit-winner.pdf" target="_blank" rel="noreferrer" aria-label="Open the XZIBIT winner certificate PDF" style={{ alignSelf: "center", width: "100%" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/certificates/xzibit-winner.jpg" alt="XZIBIT certificate of achievement: first prize, Major Software Projects" loading="lazy" />
          </a>
        </div>
      </section>
    </main>
  );
}
