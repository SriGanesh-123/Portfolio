import React from 'react';
import { Linkedin, Github, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>{profile.name}</h3>
            <p>{profile.role}</p>
            <p style={{ marginTop: '0.4rem', fontStyle: 'italic', color: 'var(--accent-primary)', fontWeight: 500 }}>
              "Building. Learning. Engineering."
            </p>
          </div>

          <div className="footer-links">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <button
              onClick={scrollToTop}
              className="footer-social-btn"
              title="Scroll to Top"
              aria-label="Scroll to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>Crafted with React, TypeScript & Modern CSS</span>
        </div>
      </div>
    </footer>
  );
};
