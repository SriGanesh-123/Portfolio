import React from 'react';
import { Github, ExternalLink, Brain, Server, Database } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getCategoryIcon = () => {
    if (project.category.toLowerCase().includes('ai') || project.category.toLowerCase().includes('rag')) {
      return <Brain size={16} style={{ color: 'var(--accent-cyan)' }} />;
    }
    if (project.category.toLowerCase().includes('java') || project.category.toLowerCase().includes('web')) {
      return <Server size={16} style={{ color: 'var(--accent-primary)' }} />;
    }
    return <Database size={16} style={{ color: 'var(--accent-emerald)' }} />;
  };

  const getChipStyle = (tech: string) => {
    const t = tech.toLowerCase();
    if (t.includes('neo4j') || t.includes('rag') || t.includes('langgraph') || t.includes('python')) {
      return 'cyan';
    }
    if (t.includes('spark') || t.includes('pyspark') || t.includes('mysql') || t.includes('database')) {
      return 'emerald';
    }
    if (t.includes('java') || t.includes('servlet') || t.includes('tomcat')) {
      return 'featured';
    }
    return '';
  };

  return (
    <article className="project-card">
      {/* Top Meta: Number & Category */}
      <div className="project-card-top">
        <div className="project-badge-group">
          <span className="project-number">{project.number}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            {getCategoryIcon()}
            <span className="project-category-badge">{project.category}</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="project-title">{project.title}</h3>

      {/* Description */}
      <p className="project-description">{project.description}</p>

      {/* Features List if available */}
      {project.features && project.features.length > 0 && (
        <div className="project-features-list">
          {project.features.map((feature, idx) => (
            <div key={idx} className="feature-item">
              <span className="feature-bullet"></span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      )}

      {/* Technology Chips */}
      <div className="project-tech-tags">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className={`tech-chip ${getChipStyle(tech)}`}>
            {tech}
          </span>
        ))}
      </div>

      {/* Action Footer */}
      <div className="project-card-footer">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary btn-sm"
          title={`View ${project.title} on GitHub`}
        >
          <Github size={16} />
          <span>View on GitHub</span>
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            title={`Open live demo of ${project.title}`}
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </article>
  );
};
