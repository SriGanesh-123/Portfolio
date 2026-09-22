import { Award, BookOpen, PlusCircle } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Professional Growth</span>
          </div>
          <h2 className="section-title">Certifications & Continuous Learning</h2>
          <p className="section-subtitle">
            Structured development roadmap focused on backend engineering, data architectures, and AI systems. Ready for official credential verification.
          </p>
        </div>

        {/* Ready-to-populate Certification Cards Grid */}
        <div className="placeholder-grid">
          <div className="placeholder-card">
            <div className="channel-icon-wrap">
              <BookOpen size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                Self-Directed Technical Deep Dives
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                Hands-on practical exploration across PySpark, Databricks Medallion Architecture, Neo4j Graph Databases, and Vector Retrieval pipelines.
              </p>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                <span className="tech-chip">PySpark</span>
                <span className="tech-chip">Databricks</span>
                <span className="tech-chip">Neo4j</span>
                <span className="tech-chip">Qdrant</span>
              </div>
            </div>
          </div>

          <div className="placeholder-card" style={{ borderColor: 'var(--border-medium)', background: '#ffffff' }}>
            <div className="channel-icon-wrap" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-muted)' }}>
              <PlusCircle size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                Official Certifications Slot
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                Structured configuration ready in <code>portfolioData.ts</code>. You can easily link AWS, Databricks, Java, or AI certifications as they are earned.
              </p>
              <span className="tech-chip" style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
                Ready to link credentials
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
