import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

const researchAreas = [
  {
    number: "01",
    title: "Rock Mechanics",
    text: "Rock mass behaviour, engineering characterization, underground excavation response and observational approaches.",
  },
  {
    number: "02",
    title: "Engineering Geology",
    text: "Field-based geological and geotechnical investigation, site characterization and engineering interpretation.",
  },
  {
    number: "03",
    title: "Natural Hazards",
    text: "Landslides, hazard assessment, susceptibility mapping and risk-informed decision making.",
  },
  {
    number: "04",
    title: "GIS & Remote Sensing",
    text: "Spatial analysis and geospatial workflows for engineering geology and natural hazard applications.",
  },
  {
    number: "05",
    title: "Data-driven Geoscience",
    text: "Machine learning, interpretable models and probabilistic methods for geoscientific prediction and uncertainty.",
  },
];

const projectExperience = [
  {
    label: "Field / Investigation",
    title: "Feasibility & Site Investigation",
    text: "Field-based geological and geotechnical data collection for feasibility studies, site investigations and engineering planning.",
  },
  {
    label: "Field / Operations",
    title: "Geotechnical Drilling",
    text: "Conducting and supervising geotechnical drilling operations and supporting the interpretation of subsurface conditions.",
  },
  {
    label: "Engineering / Reporting",
    title: "Technical Assessment",
    text: "Preparing technical reports, feasibility assessments and geotechnical design recommendations based on field and investigation data.",
  },
  {
    label: "Team / Risk",
    title: "Interdisciplinary Project Support",
    text: "Working with geology, hydrogeology and mining engineering teams and contributing data used in project planning and risk analysis.",
  },
];

const experience = [
  {
    date: "Aug 2023 — Present",
    title: "Geological Engineer",
    place: "General Directorate of Mineral Research and Exploration (MTA)",
    location: "Ankara · Türkiye",
  },
  {
    date: "Sep 2022 — Dec 2022",
    title: "Teaching Assistant · Engineering Rock Mechanics",
    place: "University of Toronto · MIN329 / CIV1499",
    location: "Toronto · Canada",
  },
  {
    date: "Aug 2022 — Sep 2022",
    title: "Teaching Assistant · Geology Field Camp for Engineers",
    place: "University of Toronto · MIN400",
    location: "Sudbury · Canada",
  },
];

const education = [
  {
    date: "Sep 2026 — Present",
    degree: "PhD · Geological Engineering",
    school: "Hacettepe University",
    location: "Ankara · Türkiye",
  },
  {
    date: "Sep 2021 — Jun 2023",
    degree: "MASc · Civil Engineering",
    school: "University of Toronto",
    location: "Toronto · Canada",
  },
  {
    date: "Sep 2015 — Jun 2019",
    degree: "BSc · Geological Engineering",
    school: "Hacettepe University",
    location: "Ankara · Türkiye",
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section id="about" className="section-shell section-block">
        <div className="eyebrow">01 / About</div>
        <div className="split-grid">
          <h2>
            Field experience,
            <br />
            engineering judgment
            <br />
            & research.
          </h2>

          <div>
            <p className="section-copy">
              I am a geological engineer and researcher working across
              engineering geology, rock mechanics, geotechnical investigation
              and geospatial methods.
            </p>
            <p className="section-copy">
              My current academic direction focuses on natural hazards,
              probabilistic approaches, GIS, remote sensing and data-driven
              methods in geosciences.
            </p>

            <div className="mini-facts">
              <span>MTA · Geological Engineer</span>
              <span>Hacettepe University · PhD</span>
              <span>University of Toronto · MASc</span>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="section-shell section-block">
        <div className="eyebrow">02 / Research</div>
        <div className="split-grid">
          <h2>
            Research
            <br />
            interests.
          </h2>

          <div className="research-list">
            {researchAreas.map((item) => (
              <article className="research-item" key={item.number}>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="section-shell section-block">
        <div className="eyebrow">03 / Publications</div>
        <div className="split-grid">
          <h2>
            Selected
            <br />
            publications.
          </h2>

          <div className="publication-list">
            <article className="publication-card">
              <div className="publication-meta">
                <span>2024</span>
                <span>Conference Paper</span>
              </div>
              <h3>
                The observational method under Eurocode 7: a novel
                probabilistic traffic light scheme
              </h3>
              <p className="publication-authors">Çal, C. · Harrison, J. P.</p>
              <p>
                ISRM EUROCK 2024 · New Challenges in Rock Mechanics and Rock
                Engineering
              </p>
            </article>

            <article className="publication-card">
              <div className="publication-meta">
                <span>2023</span>
                <span>MASc Dissertation</span>
              </div>
              <h3>
                Considering the Observational Approach in a Probabilistic
                Setting
              </h3>
              <p className="publication-authors">Çal, C.</p>
              <p>University of Toronto · Civil Engineering</p>
            </article>
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell section-block">
        <div className="section-heading-row">
          <div>
            <div className="eyebrow">04 / Project Experience</div>
            <h2>
              Work across field,
              <br />
              data & engineering.
            </h2>
          </div>
          <p className="section-copy project-intro">
            Named projects can be added here as the portfolio develops. For
            now, this section reflects the project responsibilities documented
            in my professional experience.
          </p>
        </div>

        <div className="project-grid">
          {projectExperience.map((project) => (
            <article className="project-card" key={project.title}>
              <span>{project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section-shell section-block">
        <div className="eyebrow">05 / Experience & Education</div>

        <div className="experience-columns">
          <div>
            <h2 className="column-title">Experience</h2>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={item.title}>
                  <div className="timeline-date">{item.date}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.place}</p>
                    <span>{item.location}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="column-title">Education</h2>
            <div className="timeline">
              {education.map((item) => (
                <article className="timeline-item" key={item.degree}>
                  <div className="timeline-date">{item.date}</div>
                  <div>
                    <h3>{item.degree}</h3>
                    <p>{item.school}</p>
                    <span>{item.location}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="award-note">
              <span>2019 — 2023</span>
              <p>
                Fully funded Study Abroad Program scholarship · Ministry of
                National Education of Türkiye
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="eyebrow">06 / Methods & Tools</div>
        <div className="split-grid">
          <h2>
            Technical
            <br />
            toolkit.
          </h2>

          <div className="skills-grid">
            <div>
              <span>Programming</span>
              <p>Python · R · MATLAB</p>
            </div>
            <div>
              <span>Research & Technical</span>
              <p>LaTeX · Inkscape · Technical reporting</p>
            </div>
            <div>
              <span>Languages</span>
              <p>Turkish · Native<br />English · Advanced</p>
            </div>
          </div>
        </div>
      </section>

      <section id="ideas" className="section-shell section-block ideas-teaser">
        <div className="eyebrow">07 / Ideas & Research Notes</div>
        <div className="split-grid">
          <h2>
            Notes on ideas,
            <br />
            methods & open
            <br />
            questions.
          </h2>

          <div>
            <p className="section-copy">
              A writing space for short academic essays, research ideas,
              methodological notes and works in progress — designed as a
              personal, research-focused alternative to Medium.
            </p>
            <a className="text-link" href="/ideas">
              Visit Ideas & Research Notes
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell section-block contact-section">
        <div className="eyebrow">08 / Contact</div>
        <div className="split-grid">
          <h2>
            Research,
            <br />
            collaboration
            <br />
            & conversation.
          </h2>

          <div>
            <p className="section-copy">
              For research collaboration, academic discussion or professional
              inquiries, feel free to get in touch.
            </p>

            <div className="contact-links">
              <a className="text-link" href="mailto:cagcan.cal@mail.utoronto.ca">
                Email <span aria-hidden="true">↗</span>
              </a>
              <a
                className="text-link"
                href="https://www.linkedin.com/in/cagcancal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a
                className="text-link"
                href="https://github.com/cagcancal"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="section-shell site-footer">
        <span>ÇAĞCAN ÇAL</span>
        <span>Geological Engineer · Researcher</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
