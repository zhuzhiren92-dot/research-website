import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../content/profile';

export default function ResearchPage() {
  return (
    <section className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Research"
          title="Research directions"
          description="Each direction can hold a short research statement, experiment types, validation strategy, and related output."
        />
        <div className="research-stack">
          {profile.researchThemes.map((theme, index) => (
            <article className="research-row" key={theme.title}>
              <div className="row-index">{String(index + 1).padStart(2, '0')}</div>
              <div>
                <h2>{theme.title}</h2>
                <p>{theme.summary}</p>
                <ul>
                  {theme.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={17} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <a className="icon-link" href="#top" title="Jump to top">
                <ArrowUpRight size={19} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
