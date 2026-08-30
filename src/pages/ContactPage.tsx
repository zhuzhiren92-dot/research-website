import { Github, Mail, MapPin, Send } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../content/profile';

export default function ContactPage() {
  return (
    <section className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Collaboration and correspondence"
          description="Replace the draft email and office information with public contact details before sharing the site widely."
        />
        <div className="contact-layout">
          <div className="contact-main">
            <h2>{profile.name}</h2>
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
              <strong>Imaging, analysis workflows, reproducibility</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
