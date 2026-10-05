import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AIData } from './components/AIData';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { portfolioData } from './data/portfolioData';
import { FileText, X, Check, Copy } from 'lucide-react';

export type PaletteType = 'sapphire' | 'emerald' | 'violet' | 'amber';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('sg_theme');
    return (saved as 'dark' | 'light') || 'dark';
  });

  const [palette, setPalette] = useState<PaletteType>(() => {
    const saved = localStorage.getItem('sg_palette');
    return (saved as PaletteType) || 'sapphire';
  });

  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-palette', palette);
    localStorage.setItem('sg_theme', theme);
    localStorage.setItem('sg_palette', palette);
  }, [theme, palette]);

  useEffect(() => {
    document.documentElement.classList.add('js-motion');
    const revealTargets = document.querySelectorAll<HTMLElement>('.hero-section, .section');

    if (!('IntersectionObserver' in window)) {
      revealTargets.forEach((target) => target.classList.add('is-visible'));
      return () => document.documentElement.classList.remove('js-motion');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    revealTargets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('js-motion');
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const expectedResumePath = 'src/assets/resume/Sri_Ganesh_Kumar_Resume.pdf';

  const handleResumeClick = () => {
    const resumeUrl = portfolioData.profile.resumeUrl;
    fetch(resumeUrl, { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          window.open(resumeUrl, '_blank');
        } else {
          setResumeModalOpen(true);
        }
      })
      .catch(() => {
        setResumeModalOpen(true);
      });
  };

  const copyResumePath = () => {
    navigator.clipboard.writeText(expectedResumePath);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="portfolio-app" data-theme={theme} data-palette={palette}>
      {/* Dynamic Ambient Glow Orbs in Background */}
      <div className="ambient-container" aria-hidden="true">
        <div className="ambient-glow ambient-glow-1"></div>
        <div className="ambient-glow ambient-glow-2"></div>
        <div className="ambient-glow ambient-glow-3"></div>
      </div>

      {/* Sticky Navigation with Palette Switcher & Theme Toggle */}
      <Navbar
        onResumeClick={handleResumeClick}
        theme={theme}
        onToggleTheme={toggleTheme}
        palette={palette}
        onSelectPalette={setPalette}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onResumeClick={handleResumeClick} />
        <About />
        <Skills />
        <Projects />
        <AIData />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Informative Resume Setup Modal */}
      {resumeModalOpen && (
        <div className="modal-overlay" onClick={() => setResumeModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div className="arch-icon-wrap" style={{ width: '34px', height: '34px' }}>
                  <FileText size={18} />
                </div>
                <h3 className="modal-title">Resume File Setup</h3>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setResumeModalOpen(false)}
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              The portfolio is pre-configured to download and view your official resume. To enable this button, place your PDF at:
            </p>

            <div
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                padding: '0.85rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                color: 'var(--accent-primary)',
                wordBreak: 'break-all'
              }}
            >
              <span>{expectedResumePath}</span>
              <button
                onClick={copyResumePath}
                title="Copy relative file path"
                style={{ padding: '0.35rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem' }}
              >
                {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button
                onClick={() => setResumeModalOpen(false)}
                className="btn btn-primary btn-sm"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
