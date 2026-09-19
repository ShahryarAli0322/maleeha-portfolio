import environmentalMapping from "../assets/interests/environmental-mapping.jpg";
import mapDigitisation from "../assets/interests/map-digitisation.jpg";
import { academicExperience, academicIntro, hero } from "../data/content";

const academicPhotos = {
  digitisation: mapDigitisation,
  environment: environmentalMapping,
} as const;

function AcademicMark({
  name,
}: {
  name: "layers" | "pin" | "chart" | "book" | "edit" | "leaf" | "folder";
}) {
  const common = {
    width: 24,
    height: 24,
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
          <path d="M12 4.8 4.8 8.5 12 12.2l7.2-3.7L12 4.8Z" />
          <path d="M4.8 12.2 12 15.9l7.2-3.7" />
          <path d="M4.8 15.8 12 19.5l7.2-3.7" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 20.4s5.2-4.8 5.2-8.7a5.2 5.2 0 1 0-10.4 0c0 3.9 5.2 8.7 5.2 8.7Z" />
          <circle cx="12" cy="11.4" r="1.7" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M5 19V10" />
          <path d="M10.5 19V6" />
          <path d="M16 19v-7" />
          <path d="M21 19H3" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M5 5.5h6.2A2.8 2.8 0 0 1 14 8.3V19a2.4 2.4 0 0 0-2.4-2.4H5V5.5Z" />
          <path d="M19 5.5h-6.2A2.8 2.8 0 0 0 10 8.3V19a2.4 2.4 0 0 1 2.4-2.4H19V5.5Z" />
        </svg>
      );
    case "edit":
      return (
        <svg {...common}>
          <path d="M5 19h14" />
          <path d="M7.2 15.6 16.4 6.4a1.6 1.6 0 0 1 2.2 2.2L9.4 17.8 5.8 18.6l.8-3.6Z" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M6 16c6 0 10-4.2 11.2-11.2C10.2 6 6 10 6 16Z" />
          <path d="M9.2 12.8 6 19" />
        </svg>
      );
    case "folder":
      return (
        <svg {...common}>
          <path d="M4 7.5h5l1.6 1.8H20V17a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17V7.5Z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M7 17 17 7" />
          <path d="M9 7h8v8" />
        </svg>
      );
  }
}

export function Projects() {
  return (
    <section className="block projects-section" id="projects" aria-labelledby="projects-title">
      <div className="projects-stage" aria-hidden="true">
        <svg className="projects-stage-grid" viewBox="0 0 1440 820" preserveAspectRatio="none">
          {Array.from({ length: 19 }, (_, index) => (
            <line key={`v-${index}`} x1={80 * index} y1="0" x2={80 * index} y2="820" />
          ))}
          {Array.from({ length: 12 }, (_, index) => (
            <line key={`h-${index}`} x1="0" y1={74 * index} x2="1440" y2={74 * index} />
          ))}
        </svg>
        <div className="projects-stage-map">
          <img src={environmentalMapping} alt="" />
        </div>
        <svg className="projects-globe" viewBox="0 0 280 280">
          <circle cx="140" cy="140" r="128" />
          <circle cx="140" cy="140" r="96" />
          <ellipse cx="140" cy="140" rx="46" ry="128" />
          <ellipse cx="140" cy="140" rx="96" ry="128" />
          <ellipse cx="140" cy="140" rx="128" ry="46" />
          <ellipse cx="140" cy="140" rx="128" ry="96" />
        </svg>
      </div>
      <div className="projects-compass" aria-hidden="true">
        <b>N</b>
        <span className="projects-compass-ring">
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
      <p className="projects-coords">
        <span className="projects-coords-mark">+</span>
        <span>
          <span>{hero.coordinates[0]}</span>
          <span>{hero.coordinates[1]}</span>
        </span>
      </p>

      <div className="sheet projects-shell">
        <div className="about-kicker-row">
          <span className="section-index">04</span>
          <span className="about-kicker-line" />
          <span>Academic projects & GIS experience</span>
        </div>
        <h2 id="projects-title">
          Academic Projects & <em>GIS Experience</em>
        </h2>
        <p className="projects-intro">{academicIntro}</p>

        <div className="academic-grid">
          {academicExperience.map((item) => (
            <article className="academic-card" key={item.id}>
              <div className="academic-card-visual">
                <img src={academicPhotos[item.photo]} alt="" />
                <span className="academic-card-badge">
                  <AcademicMark name={item.id === "coursework" ? "book" : "folder"} />
                  {item.badge}
                </span>
                <span className="academic-card-overlay">{item.overlay}</span>
              </div>
              <div className="academic-card-body">
                <h3>{item.title}</h3>
                <p>{item.context}</p>
                <ul className="academic-points">
                  {item.bullets.map((bullet) => (
                    <li key={bullet.text}>
                      <span>
                        <AcademicMark name={bullet.icon} />
                      </span>
                      {bullet.text}
                    </li>
                  ))}
                </ul>
                <div className="academic-card-foot">
                  <ul className="academic-tags">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <b>{item.number}</b>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
