import React from 'react';
import { Code, Server, Database, Cpu, Brain, Wrench, Cloud, Layers } from 'lucide-react';
import { portfolioData, SkillCategory } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skillsGrouped } = portfolioData;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code size={20} />;
      case 'Server':
        return <Server size={20} />;
      case 'Database':
        return <Database size={20} />;
      case 'Cpu':
        return <Cpu size={20} />;
      case 'Brain':
        return <Brain size={20} />;
      case 'Wrench':
        return <Wrench size={20} />;
      case 'Cloud':
      default:
        return <Cloud size={20} />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Curated technical domains and toolsets applied across backend architecture, data pipelines, database modeling, and AI workflows.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="skills-grid">
          {skillsGrouped.map((categoryGroup: SkillCategory, idx: number) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-category-header">
                <div className="skill-icon-wrap">
                  {getCategoryIcon(categoryGroup.iconName)}
                </div>
                <h3 className="skill-category-title">{categoryGroup.category}</h3>
              </div>

              <div className="skill-chips-wrap">
                {categoryGroup.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
