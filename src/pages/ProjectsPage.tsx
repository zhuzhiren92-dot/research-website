import { Activity, ArrowUpRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../content/profile';

export default function ProjectsPage() {
  return (
    <section className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title="Experiments, tools, and reproducible workflows"
          description="Use project entries for completed experiments, active methods, software tools, datasets, and public academic materials."
        />
        <div className="project-grid">
          {profile.projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="card-topline">
                <Activity size={20} />
                <span>{project.status}</span>
              </div>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <ul>
                {project.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <div className="meta-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className="text-link" href="#top">
                Project details
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
