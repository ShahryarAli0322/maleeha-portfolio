import { about, education, hero, interests, skills, workshops, workshopsIntro } from "../data/content";
import concordiaLogo from "../assets/education/concordia-logo.png";
import lcwuCrest from "../assets/education/lcwu-crest.png";
import prideLogo from "../assets/education/pride-logo.png";
import gisGeospatial from "../assets/interests/gis-geospatial.jpg";
import spatialData from "../assets/interests/spatial-data.jpg";
import mapDigitisation from "../assets/interests/map-digitisation.jpg";
import environmentalMapping from "../assets/interests/environmental-mapping.jpg";
import remoteSensing from "../assets/interests/remote-sensing.jpg";
import geographyResearch from "../assets/interests/geography-research.jpg";

const schoolLogos = {
  lcwu: lcwuCrest,
  concordia: concordiaLogo,
  pride: prideLogo,
} as const;

const interestPhotos = {
  gis: gisGeospatial,
  spatial: spatialData,
  digitisation: mapDigitisation,
  environment: environmentalMapping,
  sensing: remoteSensing,
  research: geographyResearch,
} as const;

function EducationIcon({ name }: { name: "cap" | "book" | "doc" | "building" }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "cap":
      return (
        <svg {...common}>
          <path d="M3 10l9-5 9 5-9 5-9-5z" />
          <path d="M7 12v4c2 1.4 4 2 5 2s3-.6 5-2v-4" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M5 5h10a3 3 0 013 3v11H8a3 3 0 00-3 3V5z" />
          <path d="M5 19a3 3 0 013-3h13" />
        </svg>
      );
    case "doc":
      return (
        <svg {...common}>
          <path d="M7 3h7l5 5v13H7V3z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h8M9 17h6" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M4 20V9l8-5 8 5v11" />
          <path d="M9 20v-6h6v6" />
          <path d="M4 20h16" />
        </svg>
      );
  }
}

export function Education() {
  return (
    <section className="block education-section" id="education" aria-labelledby="education-title">
      <div className="education-stage" aria-hidden="true">
        <svg className="education-stage-grid" viewBox="0 0 1440 820" preserveAspectRatio="none">
          {Array.from({ length: 19 }, (_, index) => (
            <line key={`v-${index}`} x1={80 * index} y1="0" x2={80 * index} y2="820" />
          ))}
          {Array.from({ length: 12 }, (_, index) => (
            <line key={`h-${index}`} x1="0" y1={74 * index} x2="1440" y2={74 * index} />
          ))}
        </svg>
        <div className="education-stage-map">
          <img src={geographyResearch} alt="" />
        </div>
        <svg className="education-globe" viewBox="0 0 280 280">
          <circle cx="140" cy="140" r="128" />
          <circle cx="140" cy="140" r="96" />
          <ellipse cx="140" cy="140" rx="46" ry="128" />
          <ellipse cx="140" cy="140" rx="96" ry="128" />
          <ellipse cx="140" cy="140" rx="128" ry="46" />
          <ellipse cx="140" cy="140" rx="128" ry="96" />
        </svg>
      </div>
      <div className="education-compass" aria-hidden="true">
        <b>N</b>
        <span className="education-compass-ring">
          <b>W</b>
          <svg viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="17.5" />
            <path d="M24 9.5 26.6 24 24 21.4 21.4 24 Z" />
            <path d="M24 38.5 21.4 24 24 26.6 26.6 24 Z" />
          </svg>
          <b>E</b>
        </span>
        <b>S</b>
      </div>
      <p className="education-coords">
        <span className="education-coords-mark">+</span>
        <span>
          <span>{hero.coordinates[0]}</span>
          <span>{hero.coordinates[1]}</span>
        </span>
      </p>

      <div className="sheet education-shell">
        <div className="about-kicker-row">
          <span className="section-index">06</span>
          <span className="about-kicker-line" />
          <span>Education</span>
        </div>
        <h2 id="education-title">Education</h2>
        <p className="education-intro">{about.lead}</p>

        <ol className="education-track">
          {education.map((item) => (
            <li className="education-row" key={item.title}>
              <div className="education-node">
                <span className="education-node-icon">
                  <EducationIcon name={item.icon} />
                </span>
                <span className="education-node-date">{item.dates}</span>
              </div>
              <article className={`education-card${item.details ? " education-card-primary" : ""}`}>
                <div className="education-card-copy">
                  <h3>{item.title}</h3>
                  <p className="education-school">{item.institution}</p>
                  <p className="muted">{item.summary}</p>
                </div>
                {item.details ? (
                  <div className="education-courses">
                    <p className="education-courses-label">
                      <EducationIcon name="book" />
                      {item.detailsLabel}
                    </p>
                    <ul className="education-tags">
                      {item.details.map((course) => (
                        <li key={course}>{course}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <aside className={`education-place${item.image ? " education-place-photo" : ""}`} aria-label={item.place}>
                  {item.image ? (
                    <img src={schoolLogos[item.image.id]} alt={item.image.alt} />
                  ) : (
                    <>
                      <span className="education-place-icon" aria-hidden="true">
                        <EducationIcon name="building" />
                      </span>
                      <strong>{item.place}</strong>
                      <span>{item.city}</span>
                    </>
                  )}
                </aside>
              </article>
            </li>
          ))}
        </ol>

        <p className="education-footer">
          <span className="education-footer-quote" aria-hidden="true">
            “
          </span>
          <span>{about.paragraphs[0].split(".")[0]}.</span>
          <span className="education-path" aria-hidden="true">
            {skills.path.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </span>
        </p>
      </div>
    </section>
  );
}

export function Workshops() {
  return (
    <section className="block workshops-section" id="workshops" aria-labelledby="workshops-title">
      <div className="workshops-stage" aria-hidden="true">
        <svg className="workshops-stage-grid" viewBox="0 0 1440 820" preserveAspectRatio="none">
          {Array.from({ length: 19 }, (_, index) => (
            <line key={`v-${index}`} x1={80 * index} y1="0" x2={80 * index} y2="820" />
          ))}
          {Array.from({ length: 12 }, (_, index) => (
            <line key={`h-${index}`} x1="0" y1={74 * index} x2="1440" y2={74 * index} />
          ))}
        </svg>
        <div className="workshops-stage-map">
          <img src={spatialData} alt="" />
        </div>
        <svg className="workshops-globe" viewBox="0 0 280 280">
          <circle cx="140" cy="140" r="128" />
          <circle cx="140" cy="140" r="96" />
          <ellipse cx="140" cy="140" rx="46" ry="128" />
          <ellipse cx="140" cy="140" rx="96" ry="128" />
          <ellipse cx="140" cy="140" rx="128" ry="46" />
          <ellipse cx="140" cy="140" rx="128" ry="96" />
        </svg>
      </div>
      <div className="workshops-compass" aria-hidden="true">
        <b>N</b>
        <span className="workshops-compass-ring">
          <b>W</b>
          <svg viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="17.5" />
            <path d="M24 9.5 26.6 24 24 21.4 21.4 24 Z" />
            <path d="M24 38.5 21.4 24 24 26.6 26.6 24 Z" />
          </svg>
          <b>E</b>
        </span>
        <b>S</b>
      </div>
      <p className="workshops-coords">
        <span className="workshops-coords-mark">+</span>
        <span>
          <span>{hero.coordinates[0]}</span>
          <span>{hero.coordinates[1]}</span>
        </span>
      </p>

      <div className="sheet workshops-shell">
        <div className="about-kicker-row">
          <span className="section-index">07</span>
          <span className="about-kicker-line" />
          <span>Workshops & professional development</span>
        </div>
        <h2 id="workshops-title">
          Workshops & Professional <em>Development</em>
        </h2>
        <p className="workshops-intro">{workshopsIntro}</p>

        <ol className="workshop-track">
          {workshops.map((item) => (
            <li className="workshop-row" key={item.id}>
              <div className="workshop-node">
                <span>{item.number}</span>
              </div>
              <article className="workshop-card">
                <div className="workshop-card-copy">
                  <span className="workshop-badge">{item.badge}</span>
                  <h3>{item.title}</h3>
                  <p className="workshop-meta">
                    <EducationIcon name="building" />
                    {item.institution}
                  </p>
                  {item.dates ? (
                    <p className="workshop-date">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <rect x="4" y="6" width="16" height="14" rx="1.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
                        <path d="M8 4v4M16 4v4M4 10h16" fill="none" stroke="currentColor" strokeWidth="1.7" />
                      </svg>
                      {item.dates}
                    </p>
                  ) : null}
                  {item.summary ? <p className="workshop-summary">{item.summary}</p> : null}
                  {item.bullets.length > 0 ? (
                    <ul className="workshop-points">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                  <ul className="workshop-tags">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <aside className="workshop-visual" aria-hidden="true">
                  <span className={`workshop-mark workshop-mark-${item.mark}`}>
                    {item.mark === "code" ? (
                      <svg viewBox="0 0 64 64">
                        <path d="M32 10c-8.4 0-12.6 4-14.2 8.6C16.4 22.4 16 26.8 20.8 30c3.6 2.4 8.4 2.2 12.4 2.2h6.6c4.6 0 8.4 2.6 8.4 7.2 0 4.8-4.2 7.6-10.2 7.6" />
                        <circle cx="26" cy="20" r="2.2" />
                        <path d="M32 54c8.4 0 12.6-4 14.2-8.6C47.6 41.6 48 37.2 43.2 34c-3.6-2.4-8.4-2.2-12.4-2.2h-6.6c-4.6 0-8.4-2.6-8.4-7.2 0-4.8 4.2-7.6 10.2-7.6" />
                        <circle cx="38" cy="44" r="2.2" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 64 64">
                        <circle cx="32" cy="32" r="18" />
                        <ellipse cx="32" cy="32" rx="8" ry="18" />
                        <path d="M14 32h36M18 22h28M18 42h28" />
                      </svg>
                    )}
                  </span>
                </aside>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function InterestIcon({
  name,
}: {
  name: "layers" | "chart" | "map" | "leaf" | "satellite" | "globe";
}) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "layers":
      return (
        <svg {...common}>
          <path d="M12 3l9 4.5-9 4.5L3 7.5 12 3z" />
          <path d="M3 12l9 4.5L21 12" />
          <path d="M3 16.5L12 21l9-4.5" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="M8 16v-5" />
          <path d="M12 16V8" />
          <path d="M16 16v-8" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M9 4l6 2 5-2v16l-5 2-6-2-5 2V6l5-2z" />
          <path d="M9 4v16" />
          <path d="M15 6v16" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M5 19c8-1 13-7 14-14-7 1-13 6-14 14z" />
          <path d="M8 16c3-3 6-6 9-8" />
        </svg>
      );
    case "satellite":
      return (
        <svg {...common}>
          <path d="M7 7l3 3" />
          <path d="M14 14l3 3" />
          <rect x="9.2" y="9.2" width="5.6" height="5.6" rx="0.6" transform="rotate(45 12 12)" />
          <path d="M5 9L3 7l2-2 2 2" />
          <path d="M15 19l2 2 2-2-2-2" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16" />
          <path d="M12 4c2.5 2.8 3.8 5.8 3.8 8S14.5 17.2 12 20c-2.5-2.8-3.8-5.8-3.8-8S9.5 6.8 12 4z" />
        </svg>
      );
  }
}

export function Interests() {
  return (
    <section className="block interests-section" id="interests" aria-labelledby="interests-title">
      <div className="sheet">
        <header className="education-head">
          <div>
            <div className="section-head">
              <span className="section-index">08</span>
              <h2 id="interests-title">Areas of Interest</h2>
              <p>Directions I am developing through study, internship work, and further training.</p>
            </div>
          </div>
          <aside className="education-note">
            <span className="education-note-icon" aria-hidden="true">
              <InterestIcon name="leaf" />
            </span>
            <p>{about.lead}</p>
          </aside>
        </header>

        <div className="interest-grid">
          {interests.map((item) => (
            <article
              className={`interest-card interest-card-${item.id}${item.image ? " interest-card-has-photo" : ""}`}
              key={item.id}
            >
              {item.image ? (
                <img
                  className="interest-card-photo"
                  src={interestPhotos[item.image.id]}
                  alt=""
                  aria-hidden="true"
                />
              ) : null}
              <div className="interest-card-copy">
                <p className="interest-card-index">{item.number}</p>
                <span className="interest-card-icon" aria-hidden="true">
                  <InterestIcon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className="interest-card-visual" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
