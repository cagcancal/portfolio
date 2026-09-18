import Link from "next/link";
import Navbar from "@/components/navbar";

const topics = [
  "Engineering Geology",
  "Rock Mechanics",
  "Natural Hazards",
  "GIS & Remote Sensing",
  "Machine Learning",
  "Risk & Uncertainty",
];

export default function IdeasPage() {
  return (
    <main>
      <Navbar />

      <section className="section-shell ideas-page-hero">
        <div className="eyebrow">Ideas / Research Notes</div>

        <div className="ideas-hero-grid">
          <h1>
            A notebook for
            <br />
            academic ideas.
          </h1>

          <div>
            <p>
              This is a space for short essays, research notes, methods,
              questions and works in progress. The aim is to keep the writing
              lighter than a journal paper while still being thoughtful,
              technical and useful.
            </p>

            <div className="topic-list">
              {topics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell ideas-feed">
        <div className="feed-heading">
          <span>Latest notes</span>
          <span>Independent academic writing</span>
        </div>

        <article className="note-card featured-note">
          <div className="note-meta">
            <span>STARTING POINT</span>
            <span>COMING SOON</span>
          </div>

          <h2>Research notes, methods & open questions</h2>

          <p>
            Future posts will appear here as they are published. Each note can
            include a title, abstract, reading time, topic tags, figures,
            references and a full article page — in a clean Medium-like
            reading layout.
          </p>
        </article>

        <div className="empty-note">
          <span>01</span>
          <div>
            <h3>No published research notes yet.</h3>
            <p>
              The platform is ready. The first article can be added whenever
              the first draft is ready.
            </p>
          </div>
        </div>
      </section>

      <footer className="section-shell site-footer">
        <span>ÇAĞCAN ÇAL</span>
        <span>Ideas & Research Notes</span>
        <Link href="/">Return home ↑</Link>
      </footer>
    </main>
  );
}
