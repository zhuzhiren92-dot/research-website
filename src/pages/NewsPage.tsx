import SectionHeader from '../components/SectionHeader';
import { profile } from '../content/profile';

export default function NewsPage() {
  return (
    <section className="page">
      <div className="container narrow">
        <SectionHeader
          eyebrow="News"
          title="Research notes and updates"
          description="Keep this list selective: papers, experiments, talks, releases, awards, students, and public resources."
        />
        <div className="timeline">
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
  );
}
