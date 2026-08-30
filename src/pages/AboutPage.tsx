import { GraduationCap, ListChecks } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../content/profile';

export default function AboutPage() {
  return (
    <section className="page">
      <div className="container">
        <SectionHeader
          eyebrow="About"
          title="A concise academic profile"
          description="Use this page for biography, training, research identity, and method-level expertise."
        />
        <div className="about-layout">
          <div className="prose">
            {profile.biography.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="fact-list">
            <div>
              <GraduationCap size={20} />
              <span>Affiliation</span>
              <strong>{profile.affiliation}</strong>
            </div>
            <div>
              <ListChecks size={20} />
              <span>Research Role</span>
              <strong>{profile.title}</strong>
            </div>
          </aside>
        </div>

        <div className="section-divider" />

        <div className="two-column">
          <div>
            <span className="eyebrow">Methods</span>
            <h2>Practical research toolkit</h2>
          </div>
          <ul className="method-list">
            {profile.methods.map((method) => (
              <li key={method}>{method}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
