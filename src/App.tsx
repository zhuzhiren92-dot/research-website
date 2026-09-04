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
        <section id="home" className={sectionClass('home')}>
          <div className="hero-overlay" />
          <div className="hero-flow ct-field" aria-hidden="true">
            <svg className="ct-network" viewBox="0 0 1200 720" role="presentation">
              <defs>
                <linearGradient id="forceGradient" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0b5cff" />
                  <stop offset="54%" stopColor="#05b8d9" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
                <filter id="ctGlow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <g className="ct-slice-rings">
                <circle cx="760" cy="225" r="182" />
                <circle cx="760" cy="225" r="132" />
                <circle cx="760" cy="225" r="86" />
                <circle cx="958" cy="420" r="150" />
                <circle cx="958" cy="420" r="104" />
                <circle cx="548" cy="455" r="124" />
              </g>
              <g className="ct-grid-lines">
                <path d="M430 90 C565 142 650 180 742 238 C850 306 932 346 1092 388" />
                <path d="M390 336 C526 298 610 286 735 312 C865 340 965 326 1110 262" />
                <path d="M470 588 C618 506 694 468 814 466 C930 464 1014 516 1128 610" />
              </g>
              <g className="tracking-traces">
                <path d="M518 374 C594 326 658 300 742 322 C824 342 876 302 942 246" />
                <path d="M612 498 C676 452 750 426 828 450 C906 474 988 446 1072 386" />
                <path d="M660 192 C716 246 768 278 842 272 C910 268 966 218 1038 164" />
              </g>
              <g className="force-chains">
                <path className="force-link force-link-main" d="M548 438 L642 374 L736 402 L824 338 L914 372 L1016 308" />
                <path className="force-link force-link-secondary" d="M664 518 L736 462 L822 484 L896 430 L980 460" />
                <path className="force-link force-link-secondary" d="M622 252 L704 308 L798 286 L884 228" />
              </g>
              <g className="ct-fragments">
                <path d="M720 162 L768 184 L750 232 L696 224 L680 188 Z" />
                <path d="M910 250 L954 272 L944 318 L896 322 L878 286 Z" />
                <path d="M820 516 L864 530 L850 574 L804 568 L790 536 Z" />
              </g>
              <g className="ct-particles">
                <circle className="ct-node node-large" cx="548" cy="438" r="46" />
                <circle className="ct-node-core" cx="548" cy="438" r="10" />
                <circle className="ct-node" cx="642" cy="374" r="34" />
                <circle className="ct-node-core" cx="642" cy="374" r="8" />
                <circle className="ct-node node-large" cx="736" cy="402" r="52" />
                <circle className="ct-node-core" cx="736" cy="402" r="10" />
                <circle className="ct-node" cx="824" cy="338" r="38" />
                <circle className="ct-node-core" cx="824" cy="338" r="8" />
                <circle className="ct-node node-large" cx="914" cy="372" r="58" />
                <circle className="ct-node-core" cx="914" cy="372" r="11" />
                <circle className="ct-node" cx="1016" cy="308" r="40" />
                <circle className="ct-node-core" cx="1016" cy="308" r="8" />
                <circle className="ct-node" cx="664" cy="518" r="30" />
                <circle className="ct-node" cx="822" cy="484" r="32" />
                <circle className="ct-node" cx="980" cy="460" r="36" />
                <circle className="ct-node" cx="622" cy="252" r="28" />
                <circle className="ct-node" cx="798" cy="286" r="30" />
                <circle className="ct-node" cx="884" cy="228" r="34" />
              </g>
            </svg>
            <span className="ct-scan-beam" />
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
              <button className="button tertiary" type="button" onClick={() => scrollToPanel(2)}>
                <Microscope size={18} />
                Research
              </button>
              <button className="button secondary" type="button" onClick={() => scrollToPanel(3)}>
                <BookOpen size={18} />
                Publications
              </button>
              <a className="button primary" href={profile.cvUrl} download="CV_EN_Zhu_Zhiren.pdf">
                <FileText size={18} />
                CV
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
