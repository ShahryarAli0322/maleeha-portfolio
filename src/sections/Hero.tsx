import mapTerrain from "../assets/interests/gis-geospatial.jpg";
import { about, hero, site } from "../data/content";

const [firstName, ...lastNameParts] = site.name.split(" ");
const lastName = lastNameParts.join(" ");

function FactIcon({ name }: { name: (typeof hero.facts)[number]["icon"] }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    preserveAspectRatio: "xMidYMid meet",
    "aria-hidden": true as const,
  };

  switch (name) {
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 20.4s5.2-4.8 5.2-8.7a5.2 5.2 0 1 0-10.4 0c0 3.9 5.2 8.7 5.2 8.7Z" />
          <circle cx="12" cy="11.4" r="1.7" />
        </svg>
      );
    case "study":
      return (
        <svg {...common}>
          <path d="M4 10.2 12 6l8 4.2-8 4.2L4 10.2Z" />
          <path d="M7.2 12.6v3.1c0 .5 2.1 1.8 4.8 1.8s4.8-1.3 4.8-1.8v-3.1" />
        </svg>
      );
    case "work":
      return (
        <svg {...common}>
          <rect x="4" y="8.2" width="16" height="10.6" rx="1.5" />
          <path d="M9 8.2V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.2" />
          <path d="M4 13h16" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M9 8 5.2 12 9 16" />
          <path d="M15 8 18.8 12 15 16" />
        </svg>
      );
  }
}

function HeroMap() {
  return (
    <div className="hero-stage" aria-hidden="true">
      <img className="hero-stage-photo" src={mapTerrain} alt="" />
      <svg className="hero-stage-grid" viewBox="0 0 1440 820" preserveAspectRatio="none">
        {Array.from({ length: 19 }, (_, index) => (
          <line key={`v-${index}`} x1={80 * index} y1="0" x2={80 * index} y2="820" />
        ))}
        {Array.from({ length: 12 }, (_, index) => (
          <line key={`h-${index}`} x1="0" y1={74 * index} x2="1440" y2={74 * index} />
        ))}
      </svg>
      <svg className="hero-globe" viewBox="0 0 220 220">
        <circle cx="110" cy="110" r="104" />
        <circle cx="110" cy="110" r="78" />
        <ellipse cx="110" cy="110" rx="38" ry="104" />
        <ellipse cx="110" cy="110" rx="78" ry="104" />
        <ellipse cx="110" cy="110" rx="104" ry="38" />
        <ellipse cx="110" cy="110" rx="104" ry="78" />
        <line x1="110" y1="6" x2="110" y2="214" />
        <line x1="6" y1="110" x2="214" y2="110" />
      </svg>
      <div className="hero-pin">
        <span className="hero-pin-pulse" />
        <span className="hero-pin-dot" />
        <span className="hero-pin-label">{hero.mapLabel}</span>
      </div>
      <p className="hero-script">{hero.mapLabel}, Pakistan</p>
      <div className="hero-stage-fade" />
    </div>
  );
}

export function Hero() {
  return (
    <header className="hero" id="home">
      <HeroMap />
      <p className="kicker hero-kicker">{hero.kicker}</p>
      <p className="hero-fields">{hero.fields.join("  ·  ")}</p>
      <div className="hero-compass" aria-hidden="true">
        <b>N</b>
        <svg viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="17.5" />
          <path d="M24 9.5 26.6 24 24 21.4 21.4 24 Z" />
          <path d="M24 38.5 21.4 24 24 26.6 26.6 24 Z" />
        </svg>
      </div>
      <p className="hero-coords">
        <span>{hero.coordinates[0]}</span>
        <span>{hero.coordinates[1]}</span>
      </p>
      <div className="sheet hero-grid">
        <div className="hero-copy-block">
          <p className="hero-hello">{hero.hello}</p>
          <h1>
            {firstName} <em>{lastName}</em>
          </h1>
          <p className="hero-sub">
            <strong>{site.headlinePrimary}</strong>
            {site.headlineSecondary}
          </p>
          <p className="hero-copy">{hero.intro}</p>
          <div className="hero-focus">
            <p>
              <span className="hero-focus-dot" />
              {hero.focusLabel}
            </p>
            <ul>
              {hero.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#experience">
              Explore My Work
              <span aria-hidden="true">→</span>
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact Me
            </a>
            {site.cvAvailable ? (
              <a className="btn btn-ghost" href={site.cvPath} download>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 4v10" />
                  <path d="M8 10l4 4 4-4" />
                  <path d="M5 18h14" />
                </svg>
                Download CV
              </a>
            ) : (
              <span className="btn btn-ghost">CV PDF placeholder</span>
            )}
          </div>
        </div>
        <div className="hero-facts-wrap">
          <aside className="hero-facts" aria-label="Quick facts">
            <ul>
              {hero.facts.map((fact) => (
                <li key={fact.label}>
                  <span className="hero-fact-icon"><FactIcon name={fact.icon} /></span>
                  <div className="hero-fact-text">
                    <span>{fact.label}</span>
                    <strong>{fact.title}</strong>
                    {fact.detail ? <small>{fact.detail}</small> : null}
                    {fact.meta ? <small>{fact.meta}</small> : null}
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
      <a className="hero-scroll" href="#about">
        <span>Scroll</span>
        <span>Down</span>
      </a>
    </header>
  );
}

export function About() {
  return (
    <section className="block about-section" id="about" aria-labelledby="about-title">
      <div className="about-stage" aria-hidden="true">
        <svg className="about-stage-grid" viewBox="0 0 1440 820" preserveAspectRatio="none">
          {Array.from({ length: 19 }, (_, index) => (
            <line key={`v-${index}`} x1={80 * index} y1="0" x2={80 * index} y2="820" />
          ))}
          {Array.from({ length: 12 }, (_, index) => (
            <line key={`h-${index}`} x1="0" y1={74 * index} x2="1440" y2={74 * index} />
          ))}
        </svg>
        <svg className="about-globe" viewBox="0 0 320 320">
          <circle cx="160" cy="160" r="148" />
          <circle cx="160" cy="160" r="112" />
          <ellipse cx="160" cy="160" rx="52" ry="148" />
          <ellipse cx="160" cy="160" rx="112" ry="148" />
          <ellipse cx="160" cy="160" rx="148" ry="52" />
          <ellipse cx="160" cy="160" rx="148" ry="112" />
          <path d="M86 92c18-10 42-8 58 8 14 14 18 34 8 52-12 22-38 28-58 18-16-8-26-28-22-46 2-12 8-24 14-32Z" />
          <path d="M168 78c22-6 48 2 62 22 12 18 10 42-4 58-16 18-44 20-64 8-18-10-26-34-18-54 4-12 12-26 24-34Z" />
          <path d="M132 176c26-4 54 8 64 32 8 18 2 40-16 50-22 12-50 4-66-16-12-16-10-40 2-52 4-6 10-12 16-14Z" />
        </svg>
      </div>
      <p className="about-fields">{hero.fields.join("  ·  ")}</p>
      <div className="about-compass" aria-hidden="true">
        <b>N</b>
        <svg viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="17.5" />
          <path d="M24 9.5 26.6 24 24 21.4 21.4 24 Z" />
          <path d="M24 38.5 21.4 24 24 26.6 26.6 24 Z" />
        </svg>
      </div>
      <p className="about-coords">
        <span>{hero.coordinates[0]}</span>
        <span>{hero.coordinates[1]}</span>
      </p>

      <div className="sheet about-shell">
        <div className="about-kicker-row">
          <span className="section-index">01</span>
          <span className="about-kicker-line" />
          <span>{about.indexLabel}</span>
        </div>

        <div className="about-layout">
          <div className="about-main">
            <p className="about-eyebrow">{about.kicker}</p>
            <h2 id="about-title">
              {about.title}
              <em>{about.titleAccent}</em>
            </h2>
            <p className="about-tags">{about.tags.join("  ·  ")}</p>
            <div className="prose">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="about-journey">
              <p>{about.journeyLabel}</p>
              <ol>
                {about.journey.map((step) => (
                  <li key={step.title}>
                    <span className="about-journey-icon">
                      <AboutMark name={step.icon} />
                    </span>
                    <strong>{step.title}</strong>
                    <small>{step.text}</small>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="about-aside" aria-label="Languages, working approach, and focus">
            <div className="about-float">
              <article className="about-panel">
                <h3>
                  <span className="about-panel-icon">
                    <AboutMark name="globe" />
                  </span>
                  Languages
                </h3>
                <dl className="lang-list">
                  {about.languages.map((language) => (
                    <div className="lang-row" key={language.name}>
                      <dt>{language.name}</dt>
                      <dd>{language.level}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </div>
            <div className="about-float about-float-delay">
              <article className="about-panel">
                <h3>
                  <span className="about-panel-icon">
                    <AboutMark name="gear" />
                  </span>
                  Working approach
                </h3>
                <ul className="chip-list">
                  {about.workingApproach.map((item) => (
                    <li className="chip" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <div className="about-float about-float-delay-2">
              <article className="about-panel about-panel-focus">
                <h3>
                  <span className="about-panel-icon">
                    <AboutMark name="target" />
                  </span>
                  {about.focusLabel}
                </h3>
                <ul className="about-focus-list">
                  {about.focus.map((item) => (
                    <li key={item.label}>
                      <span>
                        <AboutMark name={item.icon} />
                      </span>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function AboutMark({
  name,
}: {
  name: "book" | "layers" | "pin" | "code" | "globe" | "gear" | "target" | "leaf" | "chart" | "search";
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
    case "book":
      return (
        <svg {...common}>
          <path d="M5 5.5h6.2A2.8 2.8 0 0 1 14 8.3V19a2.4 2.4 0 0 0-2.4-2.4H5V5.5Z" />
          <path d="M19 5.5h-6.2A2.8 2.8 0 0 0 10 8.3V19a2.4 2.4 0 0 1 2.4-2.4H19V5.5Z" />
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
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 20.4s5.2-4.8 5.2-8.7a5.2 5.2 0 1 0-10.4 0c0 3.9 5.2 8.7 5.2 8.7Z" />
          <circle cx="12" cy="11.4" r="1.7" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="M9 8 5.2 12 9 16" />
          <path d="M15 8 18.8 12 15 16" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16" />
          <ellipse cx="12" cy="12" rx="3.4" ry="8" />
        </svg>
      );
    case "gear":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 4.6v1.8M12 17.6v1.8M4.6 12h1.8M17.6 12h1.8M6.7 6.7l1.3 1.3M16 16l1.3 1.3M17.3 6.7 16 8M8 16l-1.3 1.3" />
        </svg>
      );
    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7.2" />
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M6 16c6 0 10-4.2 11.2-11.2C10.2 6 6 10 6 16Z" />
          <path d="M9.2 12.8 6 19" />
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
    default:
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.2" />
          <path d="M16 16.2 20 20" />
        </svg>
      );
  }
}
