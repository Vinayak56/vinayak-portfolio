import Link from "next/link";
import { directory } from "@/data/site";

const Dots = () => (
  <>
    <span className="dot" style={{ background: "#ff5f57" }} />
    <span className="dot" style={{ background: "#febc2e" }} />
    <span className="dot" style={{ background: "#28c840" }} />
  </>
);

export default function Home() {
  return (
    <main>
      <section className="container row" style={{ padding: "56px 24px 72px", gap: "48px 56px", alignItems: "center" }}>
        <div className="stack" style={{ flex: "1 1 440px", minWidth: 0, gap: 24 }}>
          <div className="status">
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <circle cx="5" cy="5" r="3.5" fill="#6ee7b7" />
              <circle cx="5" cy="5" r="3.5" fill="none" stroke="#6ee7b7">
                <animate attributeName="r" values="3.5;9;3.5" dur="2s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
            available_for_hire <span style={{ color: "#6a8f80" }}>·</span> software engineer roles
          </div>
          <h1 style={{ margin: 0, fontSize: "clamp(48px,7.5vw,92px)", lineHeight: 0.98, letterSpacing: "-0.045em", fontWeight: 700 }}>
            Vinayak<br />Unde
          </h1>
          <p className="lead" style={{ maxWidth: 540 }}>
            Software engineer building scalable backend systems, distributed systems and cloud infrastructure that help engineering teams ship faster. Looking for my next software engineer role.
          </p>
          <div className="row" style={{ gap: 12, marginTop: 4 }}>
            <Link className="btn btn-primary" href="/project-work">./view-project-work</Link>
            <Link className="btn btn-ghost" href="/contact">./contact</Link>
          </div>
          <div className="mono muted" style={{ fontSize: 13 }}>MS Computer Science @ USC · Los Angeles, CA</div>
        </div>

        <div className="term code" style={{ flex: "1 1 440px", minWidth: 0, borderRadius: 16 }}>
          <div className="term-bar"><Dots /><span className="term-title">vinayak.js</span></div>
          <div className="stack" style={{ padding: "16px 0 8px" }}>
            <div className="row" style={{ flexWrap: "nowrap" }}><span className="ln">1</span><span><span className="kw">const</span> vinayak = {"{"}</span></div>
            <div className="row" style={{ flexWrap: "nowrap" }}><span className="ln">2</span><span style={{ whiteSpace: "pre-wrap" }}>  <span className="key">role</span>: <span className="str">&quot;Software Engineer&quot;</span>,</span></div>
            <div className="row" style={{ flexWrap: "nowrap" }}><span className="ln">3</span><span style={{ whiteSpace: "pre-wrap" }}>  <span className="key">studying</span>: <span className="str">&quot;MS Computer Science, USC&quot;</span>,</span></div>
            <div className="row" style={{ flexWrap: "nowrap" }}><span className="ln">4</span><span style={{ whiteSpace: "pre-wrap" }}>  <span className="key">previously</span>: <span className="str">&quot;DevOps &amp; Cloud Eng 2, ConnectWise&quot;</span>,</span></div>
            <div className="row" style={{ flexWrap: "nowrap" }}><span className="ln">5</span><span style={{ whiteSpace: "pre-wrap" }}>  <span className="key">loves</span>: [<span className="str">&quot;Distributed systems&quot;</span>, <span className="str">&quot;Cloud infrastructure&quot;</span>],</span></div>
            <div className="row" style={{ flexWrap: "nowrap" }}><span className="ln">6</span><span style={{ whiteSpace: "pre-wrap" }}>  <span className="key">builds</span>: [<span className="str">&quot;Scalable backend systems&quot;</span>, <span className="str">&quot;Automation&quot;</span>],</span></div>
            <div className="row" style={{ flexWrap: "nowrap" }}><span className="ln">7</span><span>{"};"}</span></div>
          </div>
          <div className="stack" style={{ padding: "14px 20px 18px", borderTop: "1px solid #1f1f24", background: "#080a0d", color: "#c4c4c4" }}>
            <div><span className="ok">$</span> node vinayak.js --status</div>
            <div><span className="ok">[ok]</span> open to: software engineer roles</div>
            <div><span className="ok">[ok]</span> based in: Los Angeles, CA</div>
            <div><span className="ok">[ok]</span> focus: scalable backend, distributed systems, cloud infrastructure</div>
            <div><span className="ok">[ok]</span> now: MS Computer Science @ USC</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="ok">$</span>
              <span className="cursor" style={{ width: 9, height: 16, margin: 0 }} aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: "24px 24px 120px" }}>
        <div className="term">
          <div className="term-bar"><Dots /><span className="term-title">~/portfolio</span></div>
          <div className="mono" style={{ padding: "22px 28px 10px", fontSize: 15, color: "#c4c4c4" }}>
            <span style={{ color: "var(--mint)" }}>$</span> ls ~/portfolio
          </div>
          <nav aria-label="Portfolio directory" className="stack" style={{ paddingBottom: 12 }}>
            {directory.map((d) => (
              <Link key={d.href} href={d.href} className="lsrow">
                <span className="nm" style={{ color: d.color }}>{d.name}</span>
                <span className="txt">{d.text}</span>
                <span className="arr" aria-hidden="true">→</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}
