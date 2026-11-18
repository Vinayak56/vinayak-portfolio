import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, bg: "#0d1b17", bd: "#1d4a3a", fg: "var(--mint)",
    icon: <><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="m3 7 9 6 9-6" fill="none" stroke="currentColor" strokeWidth="1.8" /></> },
  { label: "LinkedIn", value: "in/vinayakunde ↗", href: site.linkedin, bg: "#0d1426", bd: "#243a73", fg: "var(--blue)",
    icon: <path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" /> },
  { label: "GitHub", value: "Vinayak56 ↗", href: site.github, bg: "#1a1426", bd: "#433073", fg: "var(--violet)",
    icon: <path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" /> },
  { label: "Based in", value: "Los Angeles, California", href: undefined, bg: "#26180d", bd: "#73492a", fg: "var(--amber)",
    icon: <><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" /></> },
];

export default function Contact() {
  return (
    <main className="main">
      <section className="page-head" style={{ gap: 20 }}>
        <div className="eyebrow">$ ./say-hello</div>
        <h1 className="h1" style={{ fontSize: "clamp(44px,8vw,84px)" }}>Let&apos;s talk.</h1>
        <p className="lead">Open to software engineer roles building scalable backend systems, distributed systems and cloud infrastructure, and to impactful AI work. The fastest way to reach me is email.</p>
      </section>

      <section className="row" style={{ gap: 24 }}>
        <div className="stack" style={{ flex: "1 1 380px", minWidth: 0, gap: 16 }}>
          {channels.map((c) => {
            const inner = (
              <>
                <span className="ic" aria-hidden="true" style={{ background: c.bg, border: `1px solid ${c.bd}`, color: c.fg }}>
                  <svg width="24" height="24" viewBox="0 0 24 24">{c.icon}</svg>
                </span>
                <span style={{ minWidth: 0 }}>
                  <span className="mono muted" style={{ display: "block", fontSize: 12.5 }}>{c.label}</span>
                  <span style={{ display: "block", fontSize: 17, fontWeight: 500, wordBreak: "break-word" }}>{c.value}</span>
                </span>
              </>
            );
            return c.href ? (
              <a key={c.label} href={c.href} className="card channel" style={{ borderRadius: 18 }}>{inner}</a>
            ) : (
              <div key={c.label} className="card channel" style={{ borderRadius: 18 }}>{inner}</div>
            );
          })}
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
