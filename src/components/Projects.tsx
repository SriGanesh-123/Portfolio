import React, { useState } from 'react';
import { FolderGit2 } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = projects.filter((project: ProjectItem) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai') return project.category.toLowerCase().includes('ai') || project.category.toLowerCase().includes('rag');
    if (activeFilter === 'backend') return project.category.toLowerCase().includes('java') || project.category.toLowerCase().includes('backend');
    return true;
  });

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Core Implementations</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Hands-on software systems engineered across AI/RAG knowledge pipelines, Java web backends, and relational database management.
          </p>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveFilter('all')}
              className={`btn btn-sm ${activeFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('ai')}
              className={`btn btn-sm ${activeFilter === 'ai' ? 'btn-primary' : 'btn-secondary'}`}
            >
              AI & RAG Intelligence
            </button>
            <button
              onClick={() => setActiveFilter('backend')}
              className={`btn btn-sm ${activeFilter === 'backend' ? 'btn-primary' : 'btn-secondary'}`}
            >
              Java & Backend Systems
            </button>
          </div>
        </div>

        {/* Projects List */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
