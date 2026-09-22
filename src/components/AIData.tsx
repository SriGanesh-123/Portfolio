import { Brain, Cpu, Server, Network } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AIData: React.FC = () => {
  const { aiRagPipeline } = portfolioData;

  const getStepColorClass = (idx: number) => {
    if (idx < 2) return 'amber';
    if (idx < 4) return 'violet';
    if (idx < 6) return 'cyan';
    return 'emerald';
  };

  return (
    <section id="ai-data" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Brain size={14} />
            <span>Architecture & Deep-Dive</span>
          </div>
          <h2 className="section-title">AI & Data Engineering Architecture</h2>
          <p className="section-subtitle">
            System diagrams and workflow designs powering legacy code intelligence, knowledge graph modeling, and distributed data pipelines.
          </p>
        </div>

        {/* AI & RAG Pipeline Architecture Visual */}
        <div className="pipeline-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Knowledge Graph & RAG Code Intelligence Pipeline
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                End-to-end dataflow transforming raw legacy code artifacts into structured graph relationships and vector embeddings.
              </p>
            </div>
            <span className="tech-chip cyan" style={{ padding: '0.45rem 0.95rem', fontSize: '0.85rem' }}>
              <Network size={16} />
              <span>Multi-Hop Retrieval</span>
            </span>
          </div>

          {/* 8-Step Architectural Workflow Grid */}
          <div className="pipeline-grid">
            {aiRagPipeline.map((step, idx) => (
              <div key={step.step} className="pipeline-step-card">
                <div className="step-num-badge">STEP {step.step}</div>
                <h4 className="step-name">{step.name}</h4>
                <p className="step-detail">{step.detail}</p>
                <span className={`step-badge tech-chip ${getStepColorClass(idx)}`}>
                  {step.badge}
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem', padding: '1.15rem 1.35rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-medium)', display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
              Orchestration Stack:
            </span>
            <span className="tech-chip cyan">LangGraph</span>
            <span className="tech-chip violet">Neo4j Graph Database</span>
            <span className="tech-chip featured">Qdrant / Pinecone</span>
            <span className="tech-chip">Tree-Sitter AST</span>
            <span className="tech-chip emerald">Sentence Transformers</span>
            <span className="tech-chip cyan">NVIDIA NIM Inference</span>
          </div>
        </div>

        {/* Two-Column Deep-Dive: Medallion Architecture + Backend Architecture */}
        <div className="arch-columns-grid">
          {/* Column 1: Data Engineering & Medallion Pipeline */}
          <div className="arch-column-card">
            <div className="arch-col-header">
              <div className="arch-icon-wrap" style={{ background: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-emerald)', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                <Cpu size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Data Engineering & Medallion Design
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                  PySpark, Spark, Hadoop & Databricks Architecture
                </p>
              </div>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.35rem', lineHeight: 1.65 }}>
              Structured data lakehouse methodology organizing raw batch data into refined, business-ready models across three distinct medallion stages:
            </p>

            <div className="medallion-layers-stack">
              <div className="medallion-layer">
                <span className="layer-indicator layer-bronze"></span>
                <div className="layer-info">
                  <h4 style={{ color: '#f59e0b' }}>Bronze Layer (Raw Ingestion)</h4>
                  <p>Append-only landing zone storing raw legacy extracts, source files, and transactional records with full schema preservation.</p>
                </div>
              </div>

              <div className="medallion-layer">
                <span className="layer-indicator layer-silver"></span>
                <div className="layer-info">
                  <h4 style={{ color: '#cbd5e1' }}>Silver Layer (Cleaned & Conformed)</h4>
                  <p>Cleansed, deduplicated, and validated data enriched with relational keys and unified schemas ready for ad-hoc querying.</p>
                </div>
              </div>

              <div className="medallion-layer">
                <span className="layer-indicator layer-gold"></span>
                <div className="layer-info">
                  <h4 style={{ color: '#fbbf24' }}>Gold Layer (Business Aggregations)</h4>
                  <p>Curated star schemas, operational data stores (ODS), enterprise data warehouses (EDW), and data marts for reporting.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="tech-chip emerald">PySpark</span>
              <span className="tech-chip emerald">Databricks</span>
              <span className="tech-chip">ETL Pipelines</span>
              <span className="tech-chip">ODS / EDW</span>
              <span className="tech-chip">Data Mart</span>
            </div>
          </div>

          {/* Column 2: Backend Architecture & Services */}
          <div className="arch-column-card">
            <div className="arch-col-header">
              <div className="arch-icon-wrap" style={{ background: 'rgba(59, 130, 246, 0.15)', color: 'var(--accent-hover)', borderColor: 'rgba(59, 130, 246, 0.3)' }}>
                <Server size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Enterprise Backend & Database Architecture
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent-hover)', fontWeight: 600 }}>
                  Java Servlets, Tomcat, MySQL & REST Services
                </p>
              </div>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.35rem', lineHeight: 1.65 }}>
              Modular server-side engineering focused on strong separation of concerns, transactional reliability, and deterministic state management:
            </p>

            <div className="medallion-layers-stack">
              <div className="medallion-layer">
                <span className="layer-indicator" style={{ background: 'var(--accent-gradient)', boxShadow: '0 0 10px rgba(59, 130, 246, 0.7)' }}></span>
                <div className="layer-info">
                  <h4 style={{ color: 'var(--accent-hover)' }}>Controller & Servlet Layer</h4>
                  <p>HTTP request handling, input validation, and business rule orchestration via Java Servlets on Apache Tomcat.</p>
                </div>
              </div>

              <div className="medallion-layer">
                <span className="layer-indicator" style={{ background: 'linear-gradient(135deg, #8b5cf6, #c084fc)', boxShadow: '0 0 10px rgba(139, 92, 246, 0.7)' }}></span>
                <div className="layer-info">
                  <h4 style={{ color: 'var(--accent-violet)' }}>Service & Domain Engine</h4>
                  <p>Core algorithmic logic, timetable constraint solvers, attendance verification, and .NET/C# API integrations.</p>
                </div>
              </div>

              <div className="medallion-layer">
                <span className="layer-indicator" style={{ background: 'linear-gradient(135deg, #06b6d4, #38bdf8)', boxShadow: '0 0 10px rgba(6, 182, 212, 0.7)' }}></span>
                <div className="layer-info">
                  <h4 style={{ color: 'var(--accent-cyan)' }}>Persistence & Database Layer</h4>
                  <p>Relational ACID storage in MySQL and PostgreSQL with parameterized queries, indices, and foreign key referential integrity.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="tech-chip featured">Java JSP/Servlets</span>
              <span className="tech-chip featured">Apache Tomcat</span>
              <span className="tech-chip cyan">MySQL / PostgreSQL</span>
              <span className="tech-chip">REST APIs</span>
              <span className="tech-chip">.NET C#</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
