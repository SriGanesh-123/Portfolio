import { Trophy, Star, PlusCircle } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={14} />
            <span>Milestones & Impact</span>
          </div>
          <h2 className="section-title">Technical Milestones</h2>
          <p className="section-subtitle">
            Notable engineering achievements, open source contributions, and project deliveries.
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="placeholder-grid">
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div className="skill-icon-wrap">
                <Star size={18} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  End-to-End Legacy Code Graph Extraction
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 600 }}>KAIRIX Intelligence System</span>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Successfully designed a multi-step parser and knowledge graph extraction pipeline parsing legacy mainframe and insurance programs into Neo4j nodes and semantic vector embeddings.
            </p>
          </div>

          <div className="placeholder-card" style={{ borderColor: 'var(--border-medium)', background: '#ffffff' }}>
            <div className="channel-icon-wrap" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-muted)' }}>
              <PlusCircle size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                Additional Milestones & Honors Slot
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Space allocated for hackathons, academic distinctions, competitions, or enterprise recognitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
