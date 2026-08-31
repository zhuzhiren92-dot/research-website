import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Github,
  Mail,
  Microscope,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../content/profile';

export default function HomePage() {
  return (
    <>
      <section
        id="top"
        className="hero"
        style={{ backgroundImage: `url(${profile.heroImage})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-flow" aria-hidden="true">
          {Array.from({ length: 16 }, (_, index) => (
            <span key={index} />
          ))}
        </div>
        <div className="hero-inner">
          <h1>{profile.name}</h1>
          <p className="hero-line">{profile.heroLine}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <Link className="button primary" to="/research">
              <Microscope size={18} />
              Research
            </Link>
            <Link className="button" to="/publications">
              <BookOpen size={18} />
              Publications
            </Link>
          </div>
        </div>
      </section>

      <section className="content-band">
        <div className="container quick-grid">
          <div className="profile-panel">
            <img src={profile.portrait} alt={`${profile.name} profile placeholder`} />
            <div>
              <span className="eyebrow">Current Profile</span>
              <h2>{profile.title}</h2>
              <p>{profile.affiliation}</p>
              <p>{profile.location}</p>
            </div>
          </div>
          <div className="focus-panel">
            <span className="eyebrow">Focus Areas</span>
            <ul className="pill-list">
              {profile.focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Research"
            title="From experiments to defensible measurements"
            description="The site is organized around research themes, active projects, selected publications, and short updates."
          />
          <div className="theme-grid">
            {profile.researchThemes.map((theme) => (
              <article className="theme-card" key={theme.title}>
                <FlaskConical size={22} />
                <h3>{theme.title}</h3>
                <p>{theme.summary}</p>
                <ul>
                  {theme.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-band">
        <div className="container split-section">
          <div>
            <SectionHeader
              eyebrow="Latest"
              title="Recent updates"
              description="Short notes keep the website alive without turning it into a blog system."
            />
            <div className="timeline compact">
              {profile.news.slice(0, 3).map((item) => (
                <article key={`${item.date}-${item.title}`}>
                  <time>{item.date}</time>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <aside className="contact-strip">
            <span className="eyebrow">Connect</span>
            <h2>Collaboration and contact</h2>
            <p>{profile.contact.collaboration}</p>
            <div className="stacked-actions">
              <a className="button primary" href={`mailto:${profile.contact.email}`}>
                <Mail size={18} />
                Email
              </a>
              <a className="button" href="https://github.com/zhuzhiren92-dot">
                <Github size={18} />
                GitHub
              </a>
              <Link className="text-link" to="/contact">
                Full contact details
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}



