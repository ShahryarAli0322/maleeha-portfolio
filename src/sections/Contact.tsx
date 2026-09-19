import { type FormEvent, useState } from "react";
import spatialData from "../assets/interests/spatial-data.jpg";
import { contact, hero, site } from "../data/content";
import { isEmailConfigured, sendContactEmail } from "../lib/email";

type FormStatus = "idle" | "sending" | "sent" | "error";

const messageLimit = 500;

function Icon({
  name,
}: {
  name: "mail" | "phone" | "pin" | "copy" | "user" | "briefcase" | "chat" | "send" | "download";
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
    preserveAspectRatio: "xMidYMid meet",
    "data-icon": name,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "mail":
      return (
        <svg {...common}>
          <rect x="4" y="6" width="16" height="12" rx="2" />
          <path d="M4.8 8.2 12 13l7.2-4.8" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M8.2 3.7h2.8c.7 0 1.2.5 1.3 1.2l.4 2.1c.1.5 0 1-.4 1.3l-1.2 1a13 13 0 0 0 4.6 4.6l1-1.2c.3-.4.8-.5 1.3-.4l2.1.4c.7.1 1.2.6 1.2 1.3v2.8c0 .8-.7 1.4-1.5 1.3A16.2 16.2 0 0 1 6.9 5.2c-.1-.8.5-1.5 1.3-1.5Z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 20.5s5.5-5.1 5.5-9.2a5.5 5.5 0 1 0-11 0c0 4.1 5.5 9.2 5.5 9.2Z" />
          <circle cx="12" cy="11.1" r="1.9" />
        </svg>
      );
    case "copy":
      return (
        <svg {...common}>
          <rect x="8" y="8" width="11" height="13" rx="1.2" />
          <path d="M6 16H5a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1" />
        </svg>
      );
    case "user":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5 19c1.2-3.2 3.4-4.8 7-4.8S17.8 15.8 19 19" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...common}>
          <rect x="3.5" y="8" width="17" height="12" rx="1.4" />
          <path d="M9 8V6.5A1.5 1.5 0 0110.5 5h3A1.5 1.5 0 0115 6.5V8" />
          <path d="M3.5 13h17" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M5 6h14v10H8l-3 3V6z" />
        </svg>
      );
    case "download":
      return (
        <svg {...common}>
          <path d="M12 4v10" />
          <path d="M8 10l4 4 4-4" />
          <path d="M5 18h14" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M5 12h11" />
          <path d="M12 6l7 6-7 6" />
          <path d="M5 7v10" />
        </svg>
      );
  }
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") {
      return;
    }

    setStatus("sending");

    try {
      await sendContactEmail({
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
        honey,
      });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="block contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-stage" aria-hidden="true">
        <svg className="contact-stage-grid" viewBox="0 0 1440 820" preserveAspectRatio="none">
          {Array.from({ length: 19 }, (_, index) => (
            <line key={`v-${index}`} x1={80 * index} y1="0" x2={80 * index} y2="820" />
          ))}
          {Array.from({ length: 12 }, (_, index) => (
            <line key={`h-${index}`} x1="0" y1={74 * index} x2="1440" y2={74 * index} />
          ))}
        </svg>
        <svg className="contact-globe" viewBox="0 0 280 280">
          <circle cx="140" cy="140" r="128" />
          <circle cx="140" cy="140" r="96" />
          <ellipse cx="140" cy="140" rx="46" ry="128" />
          <ellipse cx="140" cy="140" rx="96" ry="128" />
          <ellipse cx="140" cy="140" rx="128" ry="46" />
          <ellipse cx="140" cy="140" rx="128" ry="96" />
        </svg>
      </div>
      <div className="contact-compass" aria-hidden="true">
        <b>N</b>
        <span className="contact-compass-ring">
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
      <p className="contact-coords">
        <span className="contact-coords-mark">+</span>
        <span>
          <span>{hero.coordinates[0]}</span>
          <span>{hero.coordinates[1]}</span>
        </span>
      </p>

      <div className="sheet contact-shell">
        <div className="contact-intro">
          <img className="contact-intro-photo" src={spatialData} alt="" aria-hidden="true" />
          <div className="about-kicker-row">
            <span className="section-index">09</span>
            <span className="about-kicker-line" />
            <span>{contact.kicker}</span>
          </div>
          <h2 id="contact-title">
            Let’s <em>Connect</em>
          </h2>
          <p className="contact-lead">{contact.intro}</p>

          <ul className="contact-list">
            <li>
              <span className="contact-list-icon" aria-hidden="true"><Icon name="mail" /></span>
              <div>
                <span className="contact-list-label">Email</span>
                <div className="contact-email-row">
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                  <button type="button" className="contact-copy" onClick={copyEmail}>
                    <Icon name="copy" />
                    {copied ? "Copied" : "Copy email"}
                  </button>
                </div>
              </div>
            </li>
            <li>
              <span className="contact-list-icon" aria-hidden="true"><Icon name="phone" /></span>
              <div>
                <span className="contact-list-label">Phone</span>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              </div>
            </li>
            <li>
              <span className="contact-list-icon" aria-hidden="true"><Icon name="pin" /></span>
              <div>
                <span className="contact-list-label">Location</span>
                <strong>{site.location}</strong>
              </div>
            </li>
          </ul>

          <p className="contact-note">{contact.note}</p>

          {site.cvAvailable ? (
            <a className="btn btn-primary contact-cv" href={site.cvPath} download>
              <Icon name="download" />
              Download CV
            </a>
          ) : null}

          <div className="contact-open">
            <p>{contact.openToLabel}</p>
            <ul>
              {contact.openTo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-head">
            <h3>{contact.formTitle}</h3>
            <p>{contact.formIntro}</p>
          </div>
          <label className="form-honey" aria-hidden="true">
            Website
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honey}
              onChange={(event) => setHoney(event.target.value)}
            />
          </label>
          <label className="form-field">
            <span>
              Full name <abbr title="Required">*</abbr>
            </span>
            <span className="form-field-control">
              <Icon name="user" />
              <input
                name="user_name"
                autoComplete="name"
                placeholder="Your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </span>
          </label>
          <label className="form-field">
            <span>
              Email address <abbr title="Required">*</abbr>
            </span>
            <span className="form-field-control">
              <Icon name="mail" />
              <input
                type="email"
                name="user_email"
                autoComplete="email"
                placeholder="you@email.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </span>
          </label>
          <label className="form-field">
            <span>
              Subject <abbr title="Required">*</abbr>
            </span>
            <span className="form-field-control">
              <Icon name="briefcase" />
              <input
                name="subject"
                placeholder="Internship / Research / Collaboration"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                required
              />
            </span>
          </label>
          <label className="form-field">
            <span>
              Message <abbr title="Required">*</abbr>
            </span>
            <span className="form-field-control form-field-area">
              <Icon name="chat" />
              <textarea
                name="message"
                placeholder="Tell me how I can help..."
                maxLength={messageLimit}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </span>
            <small>
              {message.length}/{messageLimit}
            </small>
          </label>
          {status === "sent" ? (
            <p className="form-status form-status-ok" role="status">
              Thank you. Your message has been sent.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="form-status form-status-error" role="alert">
              {isEmailConfigured()
                ? `The message could not be sent. Please email ${site.email}.`
                : `Email sending is not set up yet. Please write to ${site.email}.`}
            </p>
          ) : null}
          <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
            <Icon name="send" />
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          <p className="form-footnote">{contact.formNote}</p>
        </form>
      </div>
    </section>
  );
}
