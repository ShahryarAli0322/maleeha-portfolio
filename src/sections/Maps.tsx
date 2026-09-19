import mapTerrain from "../assets/interests/remote-sensing.jpg";
import { hero, mapPlaceholders, mapsIntro } from "../data/content";

function MapMark({
  name,
}: {
  name: "pin" | "layers" | "edit" | "book";
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
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 20.4s5.2-4.8 5.2-8.7a5.2 5.2 0 1 0-10.4 0c0 3.9 5.2 8.7 5.2 8.7Z" />
          <circle cx="12" cy="11.4" r="1.7" />
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
    case "edit":
      return (
        <svg {...common}>
          <path d="M5 19h14" />
          <path d="M7.2 15.6 16.4 6.4a1.6 1.6 0 0 1 2.2 2.2L9.4 17.8 5.8 18.6l.8-3.6Z" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M5 5.5h6.2A2.8 2.8 0 0 1 14 8.3V19a2.4 2.4 0 0 0-2.4-2.4H5V5.5Z" />
          <path d="M19 5.5h-6.2A2.8 2.8 0 0 0 10 8.3V19a2.4 2.4 0 0 1 2.4-2.4H19V5.5Z" />
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

function MapSlot() {
  return (
    <svg className="map-slot-art" viewBox="0 0 320 220" aria-hidden="true">
      {Array.from({ length: 9 }, (_, index) => (
        <line key={`v-${index}`} x1={36 * index} y1="0" x2={36 * index} y2="220" />
      ))}
      {Array.from({ length: 7 }, (_, index) => (
        <line key={`h-${index}`} x1="0" y1={36 * index} x2="320" y2={36 * index} />
      ))}
      <circle cx="168" cy="108" r="46" />
      <circle cx="168" cy="108" r="22" />
      <path d="M168 62 174 108 168 98 162 108 Z" />
      <path d="M24 196h86" />
      <path d="M24 191v10M67 193v6M110 191v10" />
    </svg>
  );
}

export function Maps() {
  return (
    <section className="block maps-section" id="maps" aria-labelledby="maps-title">
      <div className="maps-stage" aria-hidden="true">
        <svg className="maps-stage-grid" viewBox="0 0 1440 820" preserveAspectRatio="none">
          {Array.from({ length: 19 }, (_, index) => (
            <line key={`v-${index}`} x1={80 * index} y1="0" x2={80 * index} y2="820" />
          ))}
          {Array.from({ length: 12 }, (_, index) => (
            <line key={`h-${index}`} x1="0" y1={74 * index} x2="1440" y2={74 * index} />
          ))}
        </svg>
        <div className="maps-stage-map">
          <img src={mapTerrain} alt="" />
        </div>
        <svg className="maps-globe" viewBox="0 0 280 280">
          <circle cx="140" cy="140" r="128" />
          <circle cx="140" cy="140" r="96" />
          <ellipse cx="140" cy="140" rx="46" ry="128" />
          <ellipse cx="140" cy="140" rx="96" ry="128" />
          <ellipse cx="140" cy="140" rx="128" ry="46" />
          <ellipse cx="140" cy="140" rx="128" ry="96" />
        </svg>
      </div>
      <div className="maps-compass" aria-hidden="true">
        <b>N</b>
        <span className="maps-compass-ring">
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
      <p className="maps-coords">
        <span className="maps-coords-mark">+</span>
        <span>
          <span>{hero.coordinates[0]}</span>
          <span>{hero.coordinates[1]}</span>
        </span>
      </p>

      <div className="sheet maps-shell">
        <div className="about-kicker-row">
          <span className="section-index">05</span>
          <span className="about-kicker-line" />
          <span>Maps & visual work</span>
        </div>
        <h2 id="maps-title">
          Maps & <em>Visual Work</em>
        </h2>
        <p className="maps-intro">{mapsIntro}</p>

        <div className="maps-grid">
          {mapPlaceholders.map((item) => (
            <article className="map-frame" key={item.id}>
              <div className="map-frame-copy">
                <span className="map-frame-badge">
                  <MapMark name={item.icon} />
                  {item.label}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul className="map-frame-tags">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="map-frame-visual">
                <MapSlot />
                <span className="map-frame-slot-label">Map file to be added</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
