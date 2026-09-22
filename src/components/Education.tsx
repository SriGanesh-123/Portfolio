import { GraduationCap, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal foundation in information technology, computing architecture, and software principles.
          </p>
        </div>

        {/* Education Card */}
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div className="education-card">
            <div className="edu-icon-wrap">
              <GraduationCap size={30} />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <h3 className="edu-title">{education.degree}</h3>
                <span className="tech-chip featured">{education.degreeShort}</span>
              </div>

              <div className="edu-institution">{education.institution}</div>

              <div className="edu-location" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={15} />
                <span>{education.location}</span>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {education.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
