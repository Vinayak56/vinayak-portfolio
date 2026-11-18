import type { Metadata } from "next";
import Link from "next/link";
import Globe from "@/components/Globe";
import Skills from "@/components/Skills";

export const metadata: Metadata = { title: "About" };

const jobs = [
  {
    role: "DevOps & Cloud Engineer 2",
    when: "June 2023 – July 2026",
    points: [
      "Cut annual infrastructure overhead by $15,000+ by designing scalable AWS microservice architectures and automation across compute, networking, storage, monitoring, and security.",
      "Architected zero-downtime deployments across 3 active AWS regions for ConnectWise products, covering cloud infrastructure, containerized services, monitoring, security, and deployment automation.",
      "Eliminated 120 engineering hours per month and cut cloud provisioning costs by 25% with a self-service microservice platform that streamlined production codebase and infrastructure template generation.",
      "Accelerated deployment time by 70% across 80+ microservices by designing and managing GitLab CI/CD pipelines for testing, artifact management, and production deployments.",
      "Reduced QA dependency on live environments by 95% and lowered staging-server expenses with a centralized API mock server built on Karate, Docker, and AWS.",
    ],
  },
  {
    role: "Software Engineer Intern",
    when: "June 2022 – August 2022",
    points: [
      "Removed shared-testing bottlenecks by building an on-demand testing environment platform with Node.js and AWS that automated environment provisioning.",
      "Saved 720+ engineering hours per month across teams and improved release efficiency with backend services for authentication, configuration, and artifact management.",
    ],
  },
];

const B = ({ children }: { children: React.ReactNode }) => <b style={{ color: "#fff" }}>{children}</b>;
const Arrow = () => <span aria-hidden="true" className="mono" style={{ color: "var(--mint)" }}>→</span>;

export default function About() {
  return (
    <main className="main" style={{ gap: 104, paddingTop: 40 }}>
      {/* About me + globe */}
      <section className="row" style={{ gap: "40px 48px", alignItems: "center" }}>
        <div className="stack" style={{ flex: "1 1 440px", minWidth: 0, gap: 22 }}>
          <div className="status">
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><circle cx="5" cy="5" r="3.5" fill="#6ee7b7" /></svg>
            available_for_hire <span style={{ color: "#6a8f80" }}>·</span> software engineer
          </div>
          <h1 className="h1" style={{ fontSize: "clamp(44px,7vw,76px)" }}>About me</h1>
          <p style={{ margin: 0, fontSize: "clamp(21px,2.6vw,28px)", lineHeight: 1.3, color: "#f2f2f2", letterSpacing: "-0.02em", fontWeight: 600 }}>
            I build scalable backend systems and cloud infrastructure, and the automation that keeps them shipping.
          </p>
          <p className="body">For three years I was a DevOps and cloud engineer at ConnectWise, building the scalable systems and infrastructure behind production microservices and working across the backend. The results:</p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontSize: 16.5, color: "#c9c9c9" }}>
            <li style={{ display: "flex", gap: 12 }}><Arrow /><span>Automated delivery for <B>80+ microservices</B> and made deployments <B>70% faster</B>.</span></li>
            <li style={{ display: "flex", gap: 12 }}><Arrow /><span>Shipped <B>zero-downtime releases across 3 AWS regions</B>.</span></li>
            <li style={{ display: "flex", gap: 12 }}><Arrow /><span>Built a self-service platform that saves <B>120 engineering hours a month</B> and cut cloud provisioning costs by <B>25%</B>.</span></li>
          </ul>
          <p className="body">As a software engineer I&apos;m drawn to scalable backend systems, distributed systems, cloud infrastructure, automation that removes manual work, and AI that makes a real impact. I&apos;m also a published researcher, and my team&apos;s project won 1st place at a national competition.</p>
          <p className="body" style={{ color: "#d4d4d4" }}>Now I&apos;m pursuing my MS in Computer Science at USC in Los Angeles, and I&apos;m ready for my next challenge: a software engineering role where I can build systems that scale.</p>
          <div className="row" style={{ gap: 8, marginTop: 4 }}>
            {["Backend systems", "Distributed systems", "Cloud infrastructure", "Impactful AI", "Automation"].map((t) => <span key={t} className="pill">{t}</span>)}
          </div>
          <div className="row" style={{ gap: 12, marginTop: 6 }}>
            <Link className="btn btn-primary" href="/contact">./hire-me</Link>
            <Link className="btn btn-ghost" href="/project-work">./see-my-work</Link>
            <a className="btn btn-ghost" href="/Vinayak_Unde_Resume.pdf" download="Vinayak_Unde_Resume.pdf" style={{ borderColor: "rgba(110,231,183,0.45)", color: "var(--mint)" }}>
              ./resume.pdf <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </div>
        <div style={{ flex: "1 1 400px", minWidth: 0, display: "flex", justifyContent: "center" }}>
          <Globe />
        </div>
      </section>

      {/* Work experience */}
      <section className="stack" style={{ gap: 36 }}>
        <div className="stack" style={{ gap: 12 }}>
          <div className="eyebrow" style={{ fontSize: 13 }}>// work experience</div>
          <h2 className="h2">Building scalable systems at ConnectWise</h2>
        </div>
        <div style={{ position: "relative", display: "flex", gap: 24, alignItems: "flex-start" }}>
          <div className="timeline-line" aria-hidden="true" />
          <div style={{ flex: "0 0 64px", display: "flex", justifyContent: "center" }}>
            {/* Swap this mark for the official ConnectWise icon: put the SVG in /public and use <img>. */}
            <div className="logo-box" aria-hidden="true" style={{ position: "relative", zIndex: 1, width: 64, height: 64, borderRadius: 18, background: "#0b0f1d", border: "1px solid #2d5a49" }}>
              <svg width="36" height="36" viewBox="0 0 30 30"><circle cx="15" cy="15" r="11" fill="none" stroke="#6ee7b7" strokeWidth="4" strokeDasharray="52 18" strokeLinecap="round" transform="rotate(40 15 15)" /><circle cx="15" cy="15" r="3" fill="#6ee7b7" /></svg>
            </div>
          </div>
          <div className="stack" style={{ flex: "1 1 0", minWidth: 0, gap: 24 }}>
            <div style={{ paddingTop: 4 }}>
              <h3 style={{ margin: 0, fontSize: 26, letterSpacing: "-0.02em" }}>ConnectWise</h3>
              <div style={{ color: "#8f8f8f", fontSize: 15, marginTop: 2 }}>Mumbai, India · June 2022 – July 2026</div>
            </div>
            {jobs.map((j) => (
              <div key={j.role} className="card job stack" style={{ borderRadius: 20, padding: "clamp(20px,3vw,30px)", gap: 14 }}>
                <div className="row" style={{ gap: "4px 16px", justifyContent: "space-between", alignItems: "baseline" }}>
                  <h4 style={{ margin: 0, fontSize: 19, fontWeight: 600 }}>{j.role}</h4>
                  <div className="mono muted" style={{ fontSize: 13 }}>{j.when}</div>
                </div>
                <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="stack" style={{ gap: 32 }}>
        <div className="stack" style={{ gap: 12 }}>
          <div className="eyebrow" style={{ fontSize: 13 }}>// education</div>
          <h2 className="h2">Where I studied</h2>
        </div>
        <div className="row" style={{ gap: 20 }}>
          <div className="card stack" style={{ flex: "1 1 440px", minWidth: 0, padding: 28, gap: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div className="logo-box" aria-hidden="true" style={{ flex: "0 0 60px", height: 60, borderRadius: 16, background: "#2a0f14", border: "1px solid #7a2a34", color: "#ffcc4d" }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4 2 9l10 5 10-5-10-5Z" /><path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5" /><path d="M22 9v6" /></svg>
              </div>
              <div style={{ minWidth: 0 }}>
                <h3 style={{ margin: 0, fontSize: 22, letterSpacing: "-0.01em" }}>University of Southern California</h3>
                <div className="mono muted" style={{ fontSize: 13, marginTop: 2 }}>Los Angeles, CA · August 2026 – May 2028</div>
              </div>
            </div>
            <div style={{ color: "#d4d4d4", fontSize: 17, fontWeight: 500 }}>Master of Science in Computer Science</div>
            <div style={{ color: "#a1a1a1", fontSize: 15.5 }}>Advanced graduate study in computer science, building on my backend and cloud engineering experience to design systems that scale.</div>
          </div>
          <div className="card stack" style={{ flex: "1 1 440px", minWidth: 0, padding: 28, gap: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div className="logo-box" aria-hidden="true" style={{ flex: "0 0 60px", height: 60, borderRadius: 16, background: "#0d1426", border: "1px solid #243a73", color: "var(--blue)" }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5 12 4l9 5.5" /><path d="M4 9.5h16" /><path d="M6 12v6M10 12v6M14 12v6M18 12v6" /><path d="M3 20h18" /></svg>
              </div>
              <div style={{ minWidth: 0 }}>
                <h3 style={{ margin: 0, fontSize: 22, letterSpacing: "-0.01em" }}>University of Mumbai</h3>
                <div className="mono muted" style={{ fontSize: 13, marginTop: 2 }}>Mumbai, India · August 2019 – May 2023</div>
              </div>
            </div>
            <div style={{ color: "#d4d4d4", fontSize: 17, fontWeight: 500 }}>Bachelor of Engineering in Computer Engineering · GPA 9.4</div>
            <div style={{ color: "#a1a1a1", fontSize: 15.5 }}>Data Structures &amp; Algorithms, Software Engineering, Artificial Intelligence, Distributed Computing, Operating Systems, Natural Language Processing, Database Management</div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="stack" style={{ gap: 32 }}>
        <div className="stack" style={{ gap: 12 }}>
          <div className="eyebrow" style={{ fontSize: 13 }}>// skills</div>
          <h2 className="h2">What I work with</h2>
          <p className="body muted">Tap a category to explore it.</p>
        </div>
        <Skills />
      </section>

      <section>
        <Link className="card row" href="/research" style={{ alignItems: "center", justifyContent: "space-between", gap: "16px 32px", padding: "clamp(24px,4vw,36px)", color: "var(--fg)" }}>
          <div className="stack" style={{ gap: 6, minWidth: 0 }}>
            <div className="eyebrow" style={{ fontSize: 13 }}>// research, achievements &amp; certifications</div>
            <div style={{ fontSize: "clamp(20px,2.6vw,28px)", fontWeight: 600, letterSpacing: "-0.02em" }}>A published paper, a copyright, and a national win</div>
          </div>
          <span className="mono" style={{ fontSize: 14, color: "var(--mint)" }}>./see-research <span aria-hidden="true">→</span></span>
        </Link>
      </section>
    </main>
  );
}
