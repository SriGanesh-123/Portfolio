import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MessageSquare, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { profile } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (status !== 'idle') {
      setStatus('idle');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill out all fields before submitting.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    // Since this is a client-side portfolio without a custom backend server,
    // we provide a smooth direct mailto trigger and display a clear confirmation state.
    setStatus('success');
    
    // Construct mailto link as fallback
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    // Optionally prompt mail client if user clicks
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">Let's Build Something Meaningful.</h2>
          <p className="section-subtitle">
            I'm always interested in learning, building, and connecting with people who are passionate about technology.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Reach Channels */}
          <div className="contact-info-card">
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Connect Directly
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Whether you are discussing backend architecture, data engineering pipelines, or potential collaborations, feel free to reach out.
            </p>

            <div className="contact-channels-list">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
              >
                <div className="channel-icon-wrap">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="channel-label">LinkedIn</div>
                  <div className="channel-val">linkedin.com/in/sri-ganesh-kumar</div>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
              >
                <div className="channel-icon-wrap">
                  <Github size={20} />
                </div>
                <div>
                  <div className="channel-label">GitHub</div>
                  <div className="channel-val">github.com/SriGanesh-123</div>
                </div>
              </a>

              <div className="contact-channel-item">
                <div className="channel-icon-wrap">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="channel-label">Email</div>
                  <div className="channel-val">{profile.email}</div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    (Editable in <code>portfolioData.ts</code>)
                  </span>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="channel-icon-wrap">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="channel-label">Location</div>
                  <div className="channel-val">{profile.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Send a Message
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Submit your inquiry below. Submitting will validate your message and prepare your default mail application.
            </p>

            {status === 'success' && (
              <div className="form-feedback success">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                  <CheckCircle size={18} />
                  <span>Message Prepared Successfully!</span>
                </div>
                <p style={{ fontSize: '0.85rem' }}>
                  Thank you, {formData.name}. Your email client is launching with this inquiry. You can also contact directly via LinkedIn.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="form-feedback error">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <AlertCircle size={18} />
                  <span>{errorMessage}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email Address <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@company.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Your Message <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Sri Ganesh, I came across your portfolio and wanted to discuss..."
                  className="form-textarea"
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
