import Link from "next/link";
import { site } from "@/data/site";

const LinkedIn = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" /></svg>
);
const GitHub = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" /></svg>
);
const Mail = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="m3 7 9 6 9-6" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>
);

const iconLink: React.CSSProperties = { display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44 };

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wave1" aria-hidden="true" />
      <div className="wave2" aria-hidden="true" />
      <div className="container row" style={{ position: "relative", padding: "72px 24px 48px", gap: "48px 40px" }}>
        <div className="stack" style={{ flex: "1 1 260px", minWidth: 0, gap: 20 }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 12, color: "#c4c4c4", fontSize: 20, fontWeight: 500 }}>
            <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 10, background: "#101a2e", color: "var(--mint)", fontWeight: 700, fontSize: 15 }}>VU</span>
            Vinayak Unde
          </Link>
          <a href={`mailto:${site.email}`} style={{ fontSize: 15, wordBreak: "break-word" }}>{site.email}</a>
          <div className="row" style={{ gap: 8 }}>
            <a href={site.linkedin} aria-label="LinkedIn" style={iconLink}><LinkedIn /></a>
            <a href={site.github} aria-label="GitHub" style={iconLink}><GitHub /></a>
            <a href={`mailto:${site.email}`} aria-label="Email" style={iconLink}><Mail /></a>
          </div>
        </div>

        <nav aria-label="General" style={{ flex: "1 1 160px" }}>
          <div className="h">General</div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <a href="/Vinayak_Unde_Resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
        </nav>

        <nav aria-label="Portfolio" style={{ flex: "1 1 240px" }}>
          <div className="h">Portfolio</div>
          <Link href="/project-work">Project work</Link>
          <Link href="/research">Research</Link>
          <Link href="/achievements">Achievements</Link>
          <Link href="/certifications">Certifications</Link>
        </nav>

        <nav aria-label="Elsewhere" style={{ flex: "1 1 180px" }}>
          <div className="h">Elsewhere</div>
          <a href={site.github}>GitHub ↗</a>
          <a href={site.linkedin}>LinkedIn ↗</a>
          <a href={site.repos}>Repositories ↗</a>
          <a href={`mailto:${site.email}`}>Email ↗</a>
        </nav>
      </div>
      <div className="container row" style={{ position: "relative", padding: "0 24px 40px", gap: "8px 24px", justifyContent: "space-between", color: "#9a9a9a", fontSize: 14 }}>
        <span>© {new Date().getFullYear()} Vinayak Unde</span>
        <span>{site.location}</span>
      </div>
    </footer>
  );
}
