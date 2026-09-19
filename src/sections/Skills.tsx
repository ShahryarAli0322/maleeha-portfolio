import skillsTree from "../assets/skills/skills-tree.jpg";
import { skills } from "../data/content";

export function Skills() {
  return (
    <section className="block skills-section" id="skills" aria-labelledby="skills-title">
      <div className="sheet">
        <div className="about-kicker-row">
          <span className="section-index">02</span>
          <span className="about-kicker-line" />
          <h2 id="skills-title">GIS & Technical Skills</h2>
        </div>
        <figure className="skills-figure">
          <img
            className="skills-visual"
            src={skillsTree}
            alt="Skill tree of GIS and technical skills: GIS and Geospatial including ArcGIS and QGIS at beginner level, map digitisation, georeferencing, layer editing, spatial data handling, map visualisation, and environmental mapping; Programming and Data including introductory workshop-based Python and data collection and documentation; Microsoft Office including Word, PowerPoint, and basic Excel."
            width={1600}
            height={900}
          />
          <div className="skills-figure-fade" aria-hidden="true" />
        </figure>
        <div className="visually-hidden">
          {skills.groups.map((group) => (
            <section key={group.id}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}>
                    {item.name}
                    {item.level ? ` — ${item.level}` : ""}
                    {item.detail ? ` (${item.detail})` : ""}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
