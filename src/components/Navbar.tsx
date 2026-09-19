import { useEffect, useState } from "react";
import { nav, site, socials } from "../data/content";

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

export function SocialLinks({ className = "social-links" }: { className?: string }) {
  return (
    <ul className={className}>
      {socials.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            data-network={item.id}
            aria-label={`${item.label} profile`}
          >
            <SocialMark name={item.id} />
          </a>
        </li>
      ))}
    </ul>
  );
}

function SocialMark({ name }: { name: (typeof socials)[number]["id"] }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
  };

  if (name === "linkedin") {
    return (
      <svg {...common} fill="currentColor">
        <path d="M6.5 9.2H9v9.1H6.5V9.2zM7.7 5.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM11 9.2h2.4v1.24h.03c.34-.64 1.16-1.32 2.4-1.32 2.56 0 3.04 1.68 3.04 3.87v5.31H16.5v-4.7c0-1.12-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.48v4.78H11V9.2z" />
      </svg>
    );
  }

  return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="16.7" cy="7.3" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="sheet footer-inner">
        <span>
          {site.name} · {site.headlinePrimary}
        </span>
        <SocialLinks />
        <span>Lahore, Pakistan</span>
      </div>
    </footer>
  );
}
