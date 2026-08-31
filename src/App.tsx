import type { CSSProperties } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Activity,
  BookOpen,
  CheckCircle2,
  FlaskConical,
  Github,
  GraduationCap,
  ListChecks,
  Mail,
  MapPin,
  Microscope,
  Send,
} from 'lucide-react';
import SectionHeader from './components/SectionHeader';
import { profile } from './content/profile';

const panels = [
  { id: 'home', label: 'Home' },
  { id: 'biography', label: 'Biography' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'projects', label: 'Projects' },
  { id: 'news', label: 'News' },
  { id: 'contact', label: 'Contact' },
] as const;

const navStep = 54;

type PanelId = (typeof panels)[number]['id'];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const wheelLockRef = useRef(false);

  const scrollToPanel = useCallback((index: number) => {
    const panel = panels[index];
    if (!panel) {
      return;
    }

    const element = document.getElementById(panel.id);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setActiveIndex(index);
    element?.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  }, []);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) {
          return;
        }

        const index = panels.findIndex((panel) => panel.id === visible.target.id);
        if (index >= 0) {
          setActiveIndex(index);
        }
      },
      { root, threshold: [0.62] },
    );

    panels.forEach((panel) => {
      const element = document.getElementById(panel.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) {
      return;
    }

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 16) {
        return;
      }

      event.preventDefault();
      if (wheelLockRef.current) {
        return;
      }

      const direction = event.deltaY > 0 ? 1 : -1;
      const nextIndex = Math.max(
        0,
        Math.min(panels.length - 1, activeIndexRef.current + direction),
      );

      if (nextIndex === activeIndexRef.current) {
        return;
      }

      wheelLockRef.current = true;
      scrollToPanel(nextIndex);
      window.setTimeout(() => {
        wheelLockRef.current = false;
      }, 850);
    };

    root.addEventListener('wheel', onWheel, { passive: false });
    return () => root.removeEventListener('wheel', onWheel);
  }, [scrollToPanel]);

  const sectionClass = (id: PanelId) => {
    const index = panels.findIndex((panel) => panel.id === id);
    return `snap-section ${id}-screen ${activeIndex === index ? 'is-active' : ''}`;
  };

  const navStyle = {
    '--indicator-y': `${activeIndex * navStep}px`,
  } as CSSProperties;

  return (
    <div className="one-page-shell">
      <div className="ambient-flow" aria-hidden="true">
        {Array.from({ length: 22 }, (_, index) => (
          <span key={index} />
        ))}
      </div>

      <nav className="side-nav" aria-label="Section navigation" style={navStyle}>
        <span className="side-nav-indicator" aria-hidden="true" />
        {panels.map((panel, index) => (
          <button
            key={panel.id}
            type="button"
            className={activeIndex === index ? 'active' : undefined}
            onClick={() => scrollToPanel(index)}
            aria-current={activeIndex === index ? 'true' : undefined}
          >
            {panel.label}
          </button>
        ))}
      </nav>

      <div className="snap-scroll" ref={scrollRef}>
        <section
          id="home"
          className={sectionClass('home')}
          style={{ backgroundImage: `url(${profile.heroImage})` }}
        >
          <div className="hero-overlay" />
          <div className="hero-flow" aria-hidden="true">
            {Array.from({ length: 20 }, (_, index) => (
              <span key={index} />
            ))}
          </div>
          <div className="panel-content home-content">
            <h1>{profile.name}</h1>
            <p className="hero-role">{profile.heroLine}</p>
            <ul className="hero-keywords" aria-label="Research keywords">
              {profile.heroKeywords.map((keyword) => (
                <li key={keyword}>{keyword}</li>
              ))}
            </ul>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-actions">
              <button className="button primary" type="button" onClick={() => scrollToPanel(2)}>
                <Microscope size={18} />
                Research
              </button>
              <button className="button" type="button" onClick={() => scrollToPanel(3)}>
                <BookOpen size={18} />
                Publications
              </button>
            </div>
          </div>
        </section>

        <section id="biography" className={sectionClass('biography')}>
          <div className="panel-content two-zone biography-layout">
            <div>
              <SectionHeader
                eyebrow="Biography"
                title="Research profile and expertise"
                description="Geotechnical researcher exploring the particle-scale mechanics of granular materials through advanced imaging, data-driven methods, and computational modelling."
              />
              <div className="prose compact-prose">
                {profile.biography.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <aside className="biography-card">
              <img src={profile.portrait} alt={`${profile.name} portrait`} />
              <div className="fact-list">
                <div>
                  <GraduationCap size={20} />
                  <span>Affiliation</span>
                  <strong>
                    Postdoctoral Fellow
                    <br />
                    School of Architecture and Civil Engineering
                    <br />
                    City University of Hong Kong
                  </strong>
                </div>
                <div>
                  <ListChecks size={20} />
                  <span>Methods</span>
                  <strong>{profile.methods.join(' / ')}</strong>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="research" className={sectionClass('research')}>
          <div className="panel-content">
            <SectionHeader
              eyebrow="Research"
              title="Research directions"
              description="Particle-scale observation, quantitative reconstruction, and computational modelling for crushable granular geomaterials."
            />
            <div className="theme-grid snap-grid">
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

        <section id="publications" className={sectionClass('publications')}>
          <div className="panel-content">
            <SectionHeader
              eyebrow="Publications"
              title="Selected papers and manuscripts"
              description="Replace placeholders with verified titles, authors, venues, years, DOI links, code links, and PDF links."
            />
            <div className="publication-list compact-list">
              {profile.publications.map((paper) => (
                <article className="publication-item" key={`${paper.year}-${paper.title}`}>
                  <div className="publication-year">{paper.year}</div>
                  <div>
                    <h2>{paper.title}</h2>
                    <p className="authors">{paper.authors}</p>
                    <p>{paper.venue}</p>
                    <div className="meta-row">
                      {paper.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className={sectionClass('projects')}>
          <div className="panel-content">
            <SectionHeader
              eyebrow="Projects"
              title="Experiments, tools, and workflows"
              description="Use project entries for completed experiments, active methods, software tools, datasets, and public academic materials."
            />
            <div className="project-grid snap-grid">
              {profile.projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="card-topline">
                    <Activity size={20} />
                    <span>{project.status}</span>
                  </div>
                  <h2>{project.title}</h2>
                  <p>{project.summary}</p>
                  <ul>
                    {project.outcomes.slice(0, 2).map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                  <div className="meta-row">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="news" className={sectionClass('news')}>
          <div className="panel-content narrow-panel">
            <SectionHeader
              eyebrow="News"
              title="Research notes and updates"
              description="Keep this list selective: papers, experiments, talks, releases, awards, students, and public resources."
            />
            <div className="timeline compact-list">
              {profile.news.map((item) => (
                <article key={`${item.date}-${item.title}`}>
                  <time>{item.date}</time>
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={sectionClass('contact')}>
          <div className="panel-content two-zone contact-layout">
            <div className="contact-main">
              <SectionHeader
                eyebrow="Contact"
                title="Collaboration and correspondence"
                description="Replace draft email and office information with public contact details before sharing the site widely."
              />
              <p>{profile.contact.collaboration}</p>
              <div className="contact-actions">
                <a className="button primary" href={`mailto:${profile.contact.email}`}>
                  <Mail size={18} />
                  Email
                </a>
                <a className="button" href="https://github.com/zhuzhiren92-dot">
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </div>
            <div className="contact-details">
              <div>
                <Mail size={20} />
                <span>Email</span>
                <strong>{profile.contact.email}</strong>
              </div>
              <div>
                <MapPin size={20} />
                <span>Office</span>
                <strong>{profile.contact.office}</strong>
              </div>
              <div>
                <Send size={20} />
                <span>Best Topics</span>
                <strong>Granular micromechanics, X-ray micro-CT, AI-enabled geomechanics</strong>
              </div>
              <div>
                <CheckCircle2 size={20} />
                <span>Status</span>
                <strong>Personal website draft ready for verified CV content</strong>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
