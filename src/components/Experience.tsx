import { Briefcase, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { learningJourney, mainframeProject } = portfolioData;

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Technical Journey</span>
          </div>
          <h2 className="section-title">Experience & Technical Learning</h2>
          <p className="section-subtitle">
            A practical track record of engineering projects, deep domain investigations into legacy insurance mainframe systems, and continuous modern technology implementation.
          </p>
        </div>

        {/* Learning & Project Journey Timeline */}
        <div className="experience-timeline">
          {learningJourney.map((milestone, idx) => (
            <div key={idx} className="timeline-card">
              <div className="timeline-header">
                <h3 className="timeline-title">{milestone.title}</h3>
                <span className={`timeline-badge ${milestone.type}`}>
                  {milestone.type === 'project' ? 'Technical Project Focus' : 'Skill Implementation & Learning'}
                </span>
              </div>
              <div className="timeline-area">{milestone.area}</div>
              <p className="timeline-desc">{milestone.description}</p>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {milestone.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Mainframe & Legacy Modernization Subsection */}
        <div className="mainframe-highlight-box">
          <div className="mainframe-header-row">
            <div>
              <div className="mainframe-badge">
                <Terminal size={14} />
                <span>Specialized Domain Exploration</span>
              </div>
              <h3 style={{ fontSize: '1.65rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.75rem' }}>
                {mainframeProject.domain}
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--accent-primary)', fontWeight: 600, marginTop: '0.25rem' }}>
                {mainframeProject.subtitle}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {mainframeProject.technologies.map((tech, idx) => (
                <span key={idx} className="tech-chip featured">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '900px' }}>
            {mainframeProject.description}
          </p>

          {/* Known COBOL Programs Grid */}
          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Core COBOL Programs & Batch Job Routines Analyzed
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Structured program extraction and business logic mapping conducted across insurance lifecycle stages:
            </p>

            <div className="mainframe-grid">
              {mainframeProject.programs.map((program, idx) => (
                <div key={idx} className="program-card">
                  <div className="program-name">{program.name}</div>
                  <div className="program-category">{program.category}</div>
                  <p className="program-purpose">{program.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
