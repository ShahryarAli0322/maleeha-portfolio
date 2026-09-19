import { useEffect, useState } from "react";
import { nav, site } from "../data/content";

const sectionIds = nav.map((item) => item.href.slice(1));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("home");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setCurrent(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={open ? "nav nav-open" : "nav"} aria-label="Primary">
      <div className="nav-inner">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-kicker">GIS · Geography</span>
          <span className="brand-name">{site.name}</span>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <ul className="nav-links" id="site-nav">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={current === item.href.slice(1) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="sheet footer-inner">
        <span>
          {site.name} · {site.headlinePrimary}
        </span>
        <span>Lahore, Pakistan</span>
      </div>
    </footer>
  );
}
