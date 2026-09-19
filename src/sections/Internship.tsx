import { useRef } from "react";
import gisGeospatial from "../assets/interests/gis-geospatial.jpg";
import { hero, internship } from "../data/content";

function InternMark({
  name,
}: {
  name: "building" | "calendar" | "layers" | "cursor" | "layout" | "arrow" | "map" | "certificate";
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
    case "building":
      return (
        <svg {...common}>
          <path d="M5 20V7.2L12 4l7 3.2V20" />
          <path d="M9 20v-5h6v5" />
          <path d="M9.2 9.2h.1M12 9.2h.1M14.8 9.2h.1M9.2 12.2h.1M12 12.2h.1M14.8 12.2h.1" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="4" y="6" width="16" height="14" rx="1.6" />
          <path d="M8 4v4M16 4v4M4 10h16" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="M12 4.8 4.8 8.5 12 12.2l7.2-3.7L12 4.8Z" />
          <path d="M4.8 12.2 12 15.9l7.2-3.7" />
          <path d="M4.8 15.8 12 19.5l7.2-3.7" />
        </svg>
      );
    case "cursor":
      return (
        <svg {...common}>
          <path d="M6 4.8 18.2 12l-6.1 1.4L9.8 19.6 6 4.8Z" />
        </svg>
      );
    case "layout":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="14" rx="1.5" />
          <path d="M4 9.2h16M10 9.2V19" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M9 5.2 4.8 7.2v11.4L9 16.6l6 2.2 4.2-2V5.2L15 7.2 9 5.2Z" />
          <path d="M9 5.2v11.4M15 7.2v11.6" />
        </svg>
      );
    case "certificate":
      return (
        <svg {...common}>
          <rect x="5" y="4.5" width="14" height="15" rx="1.4" />
          <path d="M8.2 9h7.6M8.2 12.2h7.6M8.2 15.4h4.4" />
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

export function Internship() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openCertificate() {
    dialogRef.current?.showModal();
  }

  function closeCertificate() {
    dialogRef.current?.close();
  }

  return (
    <section className="block internship-section" id="experience" aria-labelledby="experience-title">
      <div className="internship-stage" aria-hidden="true">
        <svg className="internship-stage-grid" viewBox="0 0 1440 820" preserveAspectRatio="none">
          {Array.from({ length: 19 }, (_, index) => (
            <line key={`v-${index}`} x1={80 * index} y1="0" x2={80 * index} y2="820" />
          ))}
          {Array.from({ length: 12 }, (_, index) => (
            <line key={`h-${index}`} x1="0" y1={74 * index} x2="1440" y2={74 * index} />
          ))}
        </svg>
        <div className="internship-stage-map">
          <img src={gisGeospatial} alt="" />
        </div>
        <svg className="internship-globe" viewBox="0 0 280 280">
          <circle cx="140" cy="140" r="128" />
          <circle cx="140" cy="140" r="96" />
          <ellipse cx="140" cy="140" rx="46" ry="128" />
          <ellipse cx="140" cy="140" rx="96" ry="128" />
          <ellipse cx="140" cy="140" rx="128" ry="46" />
          <ellipse cx="140" cy="140" rx="128" ry="96" />
        </svg>
      </div>
      <div className="internship-compass" aria-hidden="true">
        <b>N</b>
        <span className="internship-compass-ring">
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
      <p className="internship-coords">
        <span className="internship-coords-mark">+</span>
        <span>
          <span>{hero.coordinates[0]}</span>
          <span>{hero.coordinates[1]}</span>
        </span>
      </p>

      <div className="sheet internship-shell">
        <div className="about-kicker-row">
          <span className="section-index">03</span>
          <span className="about-kicker-line" />
          <span>Internship experience</span>
        </div>
        <h2 id="experience-title">
          Internship <em>Experience</em>
        </h2>
        <p className="internship-intro">{internship.summary}</p>

        <article className="internship-card">
          <div className="internship-card-copy">
            <span className="internship-role-icon">
              <InternMark name="building" />
            </span>
            <div>
              <h3>{internship.role}</h3>
              <p className="internship-org">{internship.organization}</p>
              <p className="internship-dates">
                <InternMark name="calendar" />
                {internship.dates}
              </p>
              <p className="internship-note">
                Professional internship experience, distinct from university coursework.
              </p>
              <ul className="internship-tags">
                {internship.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="internship-points">
            {internship.bullets.map((bullet) => (
              <li key={bullet.text}>
                <span>
                  <InternMark name={bullet.icon} />
                </span>
                {bullet.text}
              </li>
            ))}
          </ul>

          <div className="internship-region" aria-hidden="true">
            <svg viewBox="0 0 200 240">
              <path d="M96 16c22-5 46 4 62 22 14 16 28 32 32 54 4 22-2 38-14 52-10 12-14 30-20 50-8 24-24 40-44 44s-40-8-48-26c-8-18-22-30-38-42-16-14-20-32-14-50 6-20 4-40 14-58 12-22 36-42 70-46Z" />
              <circle cx="156" cy="96" r="4.2" />
            </svg>
            <b>Punjab</b>
          </div>
        </article>

        <div className="internship-gallery">
          <button
            type="button"
            className="certificate-tile"
            onClick={openCertificate}
            aria-label="View internship certificate at full size"
          >
            <img
              src={internship.certificate.src}
              alt={internship.certificate.alt}
              width={1024}
              height={704}
            />
            <span className="certificate-tile-overlay">
              <span className="certificate-tile-title">
                <InternMark name="certificate" />
                Internship Certificate
              </span>
              <span className="certificate-tile-action">
                View full size
                <InternMark name="arrow" />
              </span>
            </span>
          </button>
          {internship.gallery.map((item) => (
            <div className="intern-placeholder" key={item.id}>
              <span className="intern-placeholder-mark">
                <InternMark name={item.id === "digitisation" ? "layers" : "map"} />
              </span>
              <span className="intern-placeholder-overlay">
                <span className="certificate-tile-title">
                  <InternMark name={item.id === "digitisation" ? "layers" : "map"} />
                  {item.label}
                </span>
                <span className="intern-placeholder-hint">To be added</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="certificate-dialog"
        aria-labelledby="certificate-dialog-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) closeCertificate();
        }}
      >
        <div className="certificate-dialog-bar">
          <h3 id="certificate-dialog-title">Internship Certificate</h3>
          <button type="button" className="certificate-close" onClick={closeCertificate}>
            Close
          </button>
        </div>
        <img
          src={internship.certificate.src}
          alt={internship.certificate.alt}
          width={1024}
          height={704}
        />
      </dialog>
    </section>
  );
}
