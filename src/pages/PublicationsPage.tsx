import { ArrowUpRight, BookOpen } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../content/profile';

export default function PublicationsPage() {
  return (
    <section className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Publications"
          title="Selected papers and manuscripts"
          description="Replace the placeholders with verified titles, authors, venues, years, DOI links, code links, and PDF links."
        />
        <div className="publication-list">
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
              <div className="paper-links">
                {paper.links?.map((link) => (
                  <a key={link.label} href={link.href}>
                    <BookOpen size={16} />
                    {link.label}
                    <ArrowUpRight size={15} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="section-divider" />

        <div className="table-wrap">
          <table>
            <caption>Publication profile fields to complete</caption>
            <thead>
              <tr>
                <th>Field</th>
                <th>Recommended Content</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Representative papers</td>
                <td>5-10 verified publications with DOI or project links</td>
                <td>src/content/profile.ts</td>
              </tr>
              <tr>
                <td>Full bibliography</td>
                <td>Google Scholar, ORCID, or institutional profile URL</td>
                <td>Profile links</td>
              </tr>
              <tr>
                <td>Manuscripts</td>
                <td>Preprints, accepted papers, or under-review work if public</td>
                <td>Publication list</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
