import type { Metadata } from "next";
import Projects from "@/components/Projects";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Project Work" };

export default function ProjectWork() {
  return (
    <main className="main">
      <section className="page-head">
        <div className="eyebrow">// project work</div>
        <h1 className="h1">Project Work</h1>
      </section>
      <Projects />
      <a className="mono" href={site.repos} target="_blank" rel="noreferrer" style={{ color: "var(--mint)", fontSize: 14 }}>./all-repositories ↗</a>
    </main>
  );
}
