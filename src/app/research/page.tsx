import type { Metadata } from "next";
import { PaperArt, CopyrightArt } from "@/components/Illustrations";

export const metadata: Metadata = { title: "Research" };

export default function Research() {
  return (
    <main className="main">
      <section className="page-head">
        <div className="eyebrow">// research</div>
        <h1 className="h1">Research</h1>
        <p className="lead">A peer-reviewed paper on an AI counselor for mental health, and the copyright that protects it.</p>
      </section>

      <section className="card card-pad feature">
        <div className="info">
          <div className="eyebrow" style={{ fontSize: 13 }}>// published paper</div>
          <h2 style={{ margin: 0, fontSize: "clamp(26px,3.4vw,38px)", letterSpacing: "-0.025em", lineHeight: 1.15 }}>Augmented Humanoid Counselor for Mental Health using LSTM Neural Network</h2>
          <div className="row" style={{ gap: 8 }}>
            {["GRENZE International Journal of Engineering and Technology", "Vol. 10, Issue 1 (November 2024)", "Scopus indexed"].map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
          <p style={{ margin: 0, color: "#b4b4b4", fontSize: 16 }}>We built a virtual counselor that combines natural language processing and augmented reality to hold supportive mental health conversations. Of the neural conversational models we tested (LSTM, bidirectional LSTM, and LSTM with attention), the attention-based LSTM gave the most interactive and relatable responses.</p>
          <div><a className="btn btn-primary" href="https://thegrenze.com/abstract/journal/2126" target="_blank" rel="noreferrer">./read-the-paper <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="art"><div className="art-frame"><PaperArt /></div></div>
      </section>

      <section className="card card-pad feature">
        <div className="info">
          <div className="eyebrow" style={{ fontSize: 13 }}>// registered copyright</div>
          <h2 style={{ margin: 0, fontSize: "clamp(26px,3.4vw,38px)", letterSpacing: "-0.025em", lineHeight: 1.15 }}>Augmented Humanoid Counselor for Mental Health</h2>
          <div className="row" style={{ gap: 8 }}>
            {["L-135528/2023", "Copyright Office, Government of India", "Applied 19 Aug 2023"].map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
          <p style={{ margin: 0, color: "#b4b4b4", fontSize: 16 }}>Registered with the Copyright Office of the Government of India. The work covers an augmented humanoid counselor that holds compassionate mental health conversations by combining natural language processing with augmented reality, powered by an LSTM model with an attention layer.</p>
          <div><a className="btn btn-primary" href="https://drive.google.com/file/d/1k07oU0SE68DKbjJ9RKAGUmIboAVCMo4M/view?usp=drive_link" target="_blank" rel="noreferrer">./view-copyright <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="art"><div className="art-frame"><CopyrightArt /></div></div>
      </section>
    </main>
  );
}
