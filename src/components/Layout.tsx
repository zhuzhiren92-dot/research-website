import { ArrowUpRight, Github, Mail } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';
import { profile } from '../content/profile';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Biography', to: '/biography' },
  { label: 'Research', to: '/research' },
  { label: 'Publications', to: '/publications' },
  { label: 'Projects', to: '/projects' },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' },
];

export default function Layout() {
  return (
    <div className="site-shell">
      <div className="ambient-flow" aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <header className="site-header">
        <NavLink className="brand" to="/" aria-label="Go to home page">
          <span className="brand-mark">{profile.name.slice(0, 1)}</span>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.title}</small>
          </span>
        </NavLink>
        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div>
          <strong>{profile.name}</strong>
          <p>{profile.heroLine}</p>
        </div>
        <div className="footer-links" aria-label="Footer links">
          <a href={`mailto:${profile.contact.email}`} title="Send email">
            <Mail size={17} />
            {profile.contact.email}
          </a>
          <a href="https://github.com/zhuzhiren92-dot" title="Open GitHub profile">
            <Github size={17} />
            GitHub
          </a>
          <a href="#top" title="Back to top">
            <ArrowUpRight size={17} />
            Top
          </a>
        </div>
      </footer>
    </div>
  );
}



