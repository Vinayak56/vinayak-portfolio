import type { Metadata } from "next";

export const metadata: Metadata = { title: "Certifications" };

const certs = [
  {
    n: "01",
    name: "Python Programmer Track",
    org: "DataCamp",
    when: "March 2021",
    img: "/certificates/datacamp.jpg",
    pdf: "/certificates/datacamp.pdf",
    tags: ["Python", "Data skills"],
  },
  {
    n: "02",
    name: "STAR Certified Professional: Cyber Secure User",
    org: "Star Certification",
    when: "June 2020",
    img: "/certificates/scsu.jpg",
    pdf: "/certificates/star-scsu.pdf",
    tags: ["Cybersecurity"],
  },
  {
    n: "03",
    name: "C Training, Certificate of Completion",
    org: "Spoken Tutorial Project, IIT Bombay",
    when: "April 2020",
    img: "/certificates/spoken-tutorial.jpg",
    pdf: "/certificates/spoken-tutorial.pdf",
    tags: ["C programming", "IIT Bombay"],
  },
];

export default function Certifications() {
  return (
    <main className="main">
      <section className="page-head">
        <div className="eyebrow">// certifications</div>
        <h1 className="h1">Certifications</h1>
        <p className="lead">Verified credentials in Python, cybersecurity and C programming. Tap any certificate to open the PDF.</p>
      </section>

      <section className="row" style={{ gap: 24 }}>
        {certs.map((c) => (
          <div key={c.n} className="card stack" style={{ flex: "1 1 320px", minWidth: 0, padding: 24, gap: 16 }}>
            <a className="cert-img" href={c.pdf} target="_blank" rel="noreferrer" aria-label={`Open ${c.name} certificate PDF`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={`${c.name} certificate`} loading="lazy" />
            </a>
            <div className="eyebrow" style={{ fontSize: 12.5 }}>// certificate {c.n}</div>
            <h3 style={{ margin: 0, fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1.25 }}>{c.name}</h3>
            <div className="muted" style={{ fontSize: 15 }}>{c.org} · {c.when}</div>
            <div className="row" style={{ gap: 8 }}>
              {c.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            <div><a className="mono" href={c.pdf} target="_blank" rel="noreferrer" style={{ fontSize: 14, color: "var(--mint)" }}>view-pdf ↗</a></div>
          </div>
        ))}
      </section>
    </main>
  );
}
