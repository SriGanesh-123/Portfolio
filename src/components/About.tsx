import React from 'react';
import { Server, Database, Brain, Code2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { profile } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server size={24} />;
      case 'Database':
        return <Database size={24} />;
      case 'Brain':
        return <Brain size={24} />;
      case 'Code2':
      default:
        return <Code2 size={24} />;
    }
  };

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <CheckCircle2 size={14} />
            <span>Profile & Mindset</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A developer dedicated to building reliable backend architectures, high-volume data workflows, and intelligent retrieval systems.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="about-narrative">
          {profile.summary.map((paragraph, index) => (
            <p key={index} className="about-text">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Four Engineering Pillars */}
        <div className="pillars-grid">
          {profile.highlights.map((pillar, index) => (
            <div key={index} className="pillar-card">
              <div className="pillar-icon-box">
                {getIcon(pillar.icon)}
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
