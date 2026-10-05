import React, { useState } from 'react';
import { ArrowRight, Mail, FileText, Database, Server, Brain, MapPin, Terminal, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
  const [imageError, setImageError] = useState(false);
  const [activeTab, setActiveTab] = useState<'rag' | 'java' | 'spark'>('rag');
  const { profile } = portfolioData;

  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const codeSnippets = {
    rag: `// KAIRIX Knowledge Graph & RAG Pipeline
from langgraph.graph import StateGraph
from sentence_transformers import SentenceTransformer

embed_model = SentenceTransformer("all-MiniLM-L6-v2")
graph = Neo4jGraph(url="bolt://localhost:7687")

def retrieve_code_context(state: RAGState):
    ast_nodes = parse_tree_sitter(state.legacy_code)
    vector_hits = qdrant.search(collection="cobol_chunks", query=state.query)
    graph_ctx = graph.query_relationships(nodes=ast_nodes)
    return {"context": graph_ctx + vector_hits}`,

    java: `// College Timetable Generator Servlet
@WebServlet("/generateTimetable")
public class TimetableServlet extends HttpServlet {
    private TimetableEngine solver = new TimetableEngine();

    protected void doPost(HttpServletRequest req, HttpServletResponse res) {
        List<Constraint> rules = db.loadConstraints(departmentId);
        Schedule result = solver.solveWithoutConflicts(faculty, slots, rooms);
        db.saveSchedule(result);
        req.setAttribute("schedule", result);
        dispatcher.forward(req, res);
    }
}`,

    spark: `// PySpark Medallion Lakehouse Processing
from pyspark.sql import SparkSession
from pyspark.sql.functions import col, current_timestamp

spark = SparkSession.builder.appName("InsuranceMedallion").getOrCreate()

# Bronze -> Silver Transformation
raw_df = spark.read.format("delta").load("/bronze/tfg_policies")
silver_df = (raw_df.filter(col("POLSTATUS") == "ACTIVE")
                   .withColumn("processed_at", current_timestamp()))
silver_df.write.format("delta").mode("append").save("/silver/policies")`
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Personal Introduction & Actions */}
          <div className="hero-content">
            {/* Overline Badge */}
            <div className="hero-badge">
              <span className="status-dot"></span>
              <span>HELLO, I'M SRI GANESH</span>
              <Sparkles size={14} style={{ color: 'var(--accent-amber)', marginLeft: '4px' }} />
            </div>

            {/* Main Title & Role with Gradient Text */}
            <h1 className="hero-title">
              <span className="gradient-text">{profile.name}</span>
            </h1>

            <div className="hero-role">
              <span className="hero-role-pill">
                <Brain size={15} style={{ color: 'var(--accent-cyan)' }} />
                <span>AI & RAG Systems</span>
              </span>
              <span className="hero-role-pill">
                <Server size={15} style={{ color: 'var(--accent-primary)' }} />
                <span>Backend Java Developer</span>
              </span>
              <span className="hero-role-pill">
                <Database size={15} style={{ color: 'var(--accent-emerald)' }} />
                <span>Data Engineering</span>
              </span>
            </div>

            {/* Tagline */}
            <p className="hero-tagline">{profile.tagline}</p>

            {/* Action Buttons */}
            <div className="hero-cta-group">
              <button
                onClick={() => handleScrollTo('projects')}
                className="btn btn-primary"
              >
                <span>View My Work</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="btn btn-secondary"
              >
                <Mail size={18} />
                <span>Let's Connect</span>
              </button>

              <button
                onClick={onResumeClick}
                className="btn btn-outline"
                title="Download Sri Ganesh's Resume"
              >
                <FileText size={18} />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Status & Location Meta */}
            <div className="hero-status-row">
              <div className="hero-status-item">
                <span className="status-dot"></span>
                <span>Active Project Implementer</span>
              </div>
              <div className="hero-status-item">
                <MapPin size={16} style={{ color: 'var(--accent-rose)' }} />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Multi-Tab Code Console & Stack Preview */}
          <div className="hero-visual-wrapper">
            <div className="hero-visual-card">
              {/* Header with macOS-style window controls */}
              <div className="hero-terminal-header">
                <div className="terminal-dots">
                  <span className="terminal-dot"></span>
                  <span className="terminal-dot"></span>
                  <span className="terminal-dot"></span>
                </div>
                <div className="terminal-title">
                  <Terminal size={14} style={{ color: 'var(--accent-cyan)' }} />
                  <span>sriganesh-core-stack.ts</span>
                </div>
                <span className="tech-chip featured" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>
                  Live Interactive
                </span>
              </div>

              {/* Code Tab Switchers */}
              <div className="terminal-tabs-row" role="tablist" aria-label="Code examples">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'rag'}
                  onClick={() => setActiveTab('rag')}
                  className={`terminal-tab-btn ${activeTab === 'rag' ? 'active' : ''}`}
                >
                  ⚡ KAIRIX (LangGraph + RAG)
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'java'}
                  onClick={() => setActiveTab('java')}
                  className={`terminal-tab-btn ${activeTab === 'java' ? 'active' : ''}`}
                >
                  ☕ Timetable (Java Servlet)
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'spark'}
                  onClick={() => setActiveTab('spark')}
                  className={`terminal-tab-btn ${activeTab === 'spark' ? 'active' : ''}`}
                >
                  📊 Medallion (PySpark)
                </button>
              </div>

              {/* Real Code Body */}
              <pre className="terminal-code-body">
                <code>{codeSnippets[activeTab]}</code>
              </pre>

              {/* Profile Avatar Frame & Core Stack Quick Preview */}
              <div className="hero-architecture-preview">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <div className="profile-avatar-frame" style={{ width: '68px', height: '68px', marginBottom: 0, flexShrink: 0 }}>
                    {!imageError ? (
                      <img
                        src={profile.profileImage}
                        alt={profile.name}
                        className="profile-img"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <span className="profile-monogram" style={{ fontSize: '1.5rem' }}>SG</span>
                    )}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {profile.name}
                    </h3>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                      Coimbatore, Tamil Nadu &bull; Software Professional
                    </p>
                    <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.35rem', flexWrap: 'wrap' }}>
                      <span className="tech-chip cyan" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>Neo4j / RAG</span>
                      <span className="tech-chip featured" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>Java / Tomcat</span>
                      <span className="tech-chip emerald" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>PySpark / ETL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
