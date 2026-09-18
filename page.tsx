import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section id="about" className="section-shell preview-section">
        <div className="eyebrow">01 / About</div>

        <div className="preview-grid">
          <h2>
            Engineering judgment,
            <br />
            data & earth systems.
          </h2>

          <div>
            <p className="section-copy">
              I work at the intersection of geological engineering, rock
              mechanics, probabilistic methods and geospatial technologies.
              My research interests extend toward natural hazards, remote
              sensing and machine learning.
            </p>

            <a className="text-link" href="#research">
              Explore research
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
