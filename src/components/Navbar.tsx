import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sun, Moon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { PaletteType } from '../App';

interface NavbarProps {
  onResumeClick: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  palette: PaletteType;
  onSelectPalette: (palette: PaletteType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onResumeClick,
  theme,
  onToggleTheme,
  palette,
  onSelectPalette
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'ai-data', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'AI & Data', href: '#ai-data', id: 'ai-data' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const palettesList: { id: PaletteType; label: string; dotClass: string }[] = [
    { id: 'sapphire', label: 'Sapphire & Cyan', dotClass: 'palette-dot-sapphire' },
    { id: 'emerald', label: 'Cyber Emerald', dotClass: 'palette-dot-emerald' },
    { id: 'violet', label: 'Royal Violet', dotClass: 'palette-dot-violet' },
    { id: 'amber', label: 'Champagne Gold', dotClass: 'palette-dot-amber' },
  ];

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Logo */}
          <a href="#home" className="nav-brand" onClick={() => handleNavClick('#home')}>
            <span className="nav-brand-badge">SG</span>
            <span>{portfolioData.profile.name}</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions: Palette Switcher, Theme Toggle, Resume CTA & Mobile Toggle */}
          <div className="nav-actions">
            {/* Color Palette Switcher */}
            <div className="palette-switcher-group" title="Select Color Palette">
              {palettesList.map((p) => (
                <button
                  key={p.id}
                  onClick={() => onSelectPalette(p.id)}
                  className={`palette-btn ${p.dotClass} ${palette === p.id ? 'active' : ''}`}
                  title={p.label}
                  aria-label={p.label}
                />
              ))}
            </div>

            {/* Dark / Light Toggle */}
            <button
              onClick={onToggleTheme}
              className="theme-toggle-btn"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Tech Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onResumeClick}
              className="btn btn-primary btn-sm btn-resume-desktop"
              title="View or Download Resume"
            >
              <FileText size={15} />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {/* Mobile Palette & Theme Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontWeight: 600 }}>Palette:</span>
            <div className="palette-switcher-group">
              {palettesList.map((p) => (
                <button
                  key={p.id}
                  onClick={() => onSelectPalette(p.id)}
                  className={`palette-btn ${p.dotClass} ${palette === p.id ? 'active' : ''}`}
                  title={p.label}
                  aria-label={p.label}
                />
              ))}
            </div>
          </div>

          <button
            onClick={onToggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>

        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="mobile-nav-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.href);
            }}
          >
            {link.name}
          </a>
        ))}
        <button
          onClick={() => {
            setMobileMenuOpen(false);
            onResumeClick();
          }}
          className="btn btn-primary btn-sm"
          style={{ width: '100%', marginTop: '0.5rem' }}
        >
          <FileText size={16} />
          <span>Download Resume</span>
        </button>
      </div>
    </>
  );
};
