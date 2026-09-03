import type { CSSProperties } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Activity,
  Bell,
  Building2,
  BookOpen,
  Cpu,
  ExternalLink,
  FileText,
  FlaskConical,
  GraduationCap,
  Home as HomeIcon,
  Layers,
  ListChecks,
  Mail,
  MapPin,
  Microscope,
  Network,
  Phone,
  UserRound,
} from 'lucide-react';
import SectionHeader from './components/SectionHeader';
import { profile } from './content/profile';

const panels = [
  { id: 'home', label: 'Home', Icon: HomeIcon },
  { id: 'biography', label: 'Biography', Icon: UserRound },
  { id: 'research', label: 'Research', Icon: Network },
  { id: 'publications', label: 'Publications', Icon: BookOpen },
  { id: 'projects', label: 'Projects', Icon: Activity },
  { id: 'news', label: 'News', Icon: Bell },
  { id: 'contact', label: 'Contact', Icon: Mail },
] as const;

const navStep = 70;
const researchIcons = [Microscope, Layers, FlaskConical, Cpu] as const;

type PanelId = (typeof panels)[number]['id'];

function canScrollInside(element: HTMLElement, deltaY: number) {
  const canScrollDown = element.scrollTop + element.clientHeight < element.scrollHeight - 2;
  const canScrollUp = element.scrollTop > 2;

  return deltaY > 0 ? canScrollDown : canScrollUp;
}

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

    activeIndexRef.current = index;
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

      const target = event.target as Element | null;
      const nestedScroll = target?.closest('.scroll-window') as HTMLElement | null;
      if (nestedScroll && canScrollInside(nestedScroll, event.deltaY)) {
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
        {Array.from({ length: 24 }, (_, index) => (
          <span key={index} />
        ))}
      </div>

      <nav className="side-nav" aria-label="Section navigation" style={navStyle}>
        <span className="side-nav-indicator" aria-hidden="true" />
        {panels.map((panel, index) => {
          const Icon = panel.Icon;
          return (
            <button
              key={panel.id}
              type="button"
              className={activeIndex === index ? 'active' : undefined}
              onClick={() => scrollToPanel(index)}
              aria-current={activeIndex === index ? 'true' : undefined}
            >
              <Icon size={23} strokeWidth={activeIndex === index ? 2.35 : 1.75} />
              <span>{panel.label}</span>
            </button>
          );
        })}
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
                研究
              </button>
              <button className="button secondary" type="button" onClick={() => scrollToPanel(3)}>
                <BookOpen size={18} />
                出版物
              </button>
              <a className="button tertiary" href={profile.cvUrl} download="CV_EN_Zhu_Zhiren.pdf">
                <FileText size={18} />
                简历
              </a>
            </div>
            <div className="hero-metrics" aria-label="Research metrics">
              {profile.heroMetrics.map((metric) => (
                <div className="hero-metric" key={`${metric.value}-${metric.label.join('-')}`}>
                  <strong>{metric.value}</strong>
                  <span>
                    {metric.label.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
            <div className="hero-workflow" aria-label="Research workflow">
              {profile.researchWorkflow.map((step, index) => (
                <span key={step}>
                  {step}
                  {index < profile.researchWorkflow.length - 1 && <i aria-hidden="true">→</i>}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="biography" className={sectionClass('biography')}>
          <div className="panel-content designed-layout biography-design">
            <div className="design-copy biography-copy">
              <SectionHeader
                eyebrow="Biography"
                title="Research profile and expertise"
                description="Geotechnical researcher exploring the particle-scale mechanics of granular materials through advanced imaging, data-driven methods, and computational modelling."
              />
              <div className="biography-prose">
                {profile.biography.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <aside className="profile-board" aria-label="Biography details">
              <div className="portrait-frame">
                <img src={profile.portrait} alt={`${profile.name} portrait`} />
              </div>
              <div className="bio-facts">
                <div className="bio-fact-row">
                  <Building2 size={25} />
                  <span>Affiliation</span>
                  <strong>
                    School of Architecture and Civil Engineering
                    <br />
                    City University of Hong Kong
                  </strong>
                </div>
                <div className="bio-fact-row">
                  <UserRound size={25} />
                  <span>Position</span>
                  <strong>Postdoctoral Fellow</strong>
                </div>
                <div className="bio-fact-row">
                  <GraduationCap size={25} />
                  <span>Education</span>
                  <strong className="stacked-lines">
                    {profile.education.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </strong>
                </div>
                <div className="bio-fact-row">
                  <ListChecks size={25} />
                  <span>Methods</span>
                  <strong className="stacked-lines">
                    {profile.methodStack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </strong>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="research" className={sectionClass('research')}>
          <div className="panel-content research-design">
            <div className="research-copy">
              <SectionHeader
                eyebrow="Research"
                title="Research directions"
                description="My research integrates experimental geomechanics, X-ray imaging, and computational analysis to study granular geomaterials from particle to specimen scale."
              />
              <span className="section-rule" aria-hidden="true" />
            </div>
            <div className="research-card-grid">
              {profile.researchThemes.map((theme, index) => {
                const Icon = researchIcons[index] ?? FlaskConical;
                return (
                  <article className={`research-card accent-${index + 1}`} key={theme.title}>
                    <div className="research-icon">
                      <Icon size={46} strokeWidth={1.75} />
                    </div>
                    <h3>{theme.title}</h3>
                    <span className="card-rule" aria-hidden="true" />
                    <ul>
                      {theme.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="publications" className={sectionClass('publications')}>
          <div className="panel-content designed-layout publications-design">
            <div className="design-copy">
              <SectionHeader
                eyebrow="Publications"
                title="Selected papers and manuscripts"
                description="A compact publication index for verified journal papers, conference papers, preprints, datasets, and code-linked manuscripts."
              />
              <div className="section-metrics" aria-label="Publication summary">
                <div>
                  <strong>{profile.publications.length}</strong>
                  <span>records</span>
                </div>
                <div>
                  <strong>DOI</strong>
                  <span>ready</span>
                </div>
              </div>
            </div>
            <div className="scroll-window publication-window" aria-label="Publication list">
              {profile.publications.map((paper) => (
                <article className="publication-tile" key={`${paper.year}-${paper.title}-${paper.venue}`}>
                  <div className="publication-year">{paper.year}</div>
                  <div className="publication-body">
                    <h3>{paper.title}</h3>
                    <p className="authors">{paper.authors}</p>
                    <p>{paper.venue}</p>
                    <div className="meta-row">
                      {paper.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <a className="icon-link" href={paper.links?.[0]?.href ?? '#'} aria-label="Publication link">
                    <ExternalLink size={18} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className={sectionClass('projects')}>
          <div className="panel-content designed-layout projects-design">
            <div className="design-copy">
              <SectionHeader
                eyebrow="Projects"
                title="Experiments, tools, and workflows"
                description="A vertical project board for experiments, methods, datasets, software workflows, and public academic materials."
              />
              <div className="project-focus">
                {profile.focusAreas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </div>
            <div className="scroll-window project-window" aria-label="Project list">
              {profile.projects.map((project) => (
                <article className="project-tile" key={project.title}>
                  <div className="card-topline">
                    <Activity size={18} />
                    <span>{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="meta-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="news" className={sectionClass('news')}>
          <div className="panel-content designed-layout news-design">
            <div className="design-copy">
              <SectionHeader
                eyebrow="News"
                title="Research notes and updates"
                description="A selective stream for paper progress, experiments, talks, releases, awards, and collaboration milestones."
              />
              <div className="news-orbit" aria-hidden="true">
                <FileText size={34} />
              </div>
            </div>
            <div className="scroll-window news-window" aria-label="News list">
              {profile.news.map((item) => (
                <article className="news-tile" key={`${item.date}-${item.title}`}>
                  <time>{item.date}</time>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={sectionClass('contact')}>
          <div className="panel-content contact-design contact-reference">
            <div className="contact-main">
              <SectionHeader
                eyebrow="Contact"
                title={"Collaboration\nand contact"}
                description={profile.contact.collaboration}
              />
              <div className="contact-actions">
                <a className="button primary" href={`mailto:${profile.contact.email}`}>
                  <Mail size={18} />
                  Email
                </a>
                <a className="button orcid-button" href={profile.contact.orcidUrl}>
                  <span className="orcid-dot">iD</span>
                  ORCID
                </a>
              </div>
            </div>
            <div className="contact-card" aria-label="Contact details">
              <div className="contact-row">
                <span className="row-icon"><Mail size={24} /></span>
                <span>Email</span>
                <strong>{profile.contact.email}</strong>
              </div>
              <div className="contact-row">
                <span className="row-icon"><Phone size={24} /></span>
                <span>Phone</span>
                <strong>{profile.contact.phone}</strong>
              </div>
              <div className="contact-row">
                <span className="row-icon"><UserRound size={24} /></span>
                <span>Affiliation</span>
                <strong>{profile.contact.affiliation}</strong>
              </div>
              <div className="contact-row">
                <span className="row-icon"><MapPin size={24} /></span>
                <span>Address</span>
                <strong>{profile.contact.address}</strong>
              </div>
              <div className="contact-row">
                <span className="row-icon orcid-icon">iD</span>
                <span>ORCID</span>
                <strong>{profile.contact.orcid}</strong>
              </div>
              <div className="contact-row">
                <span className="row-icon"><Network size={24} /></span>
                <span>Research Topics</span>
                <strong>{profile.contact.researchTopics}</strong>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
