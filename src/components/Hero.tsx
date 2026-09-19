import React from 'react';
import { portfolioData } from '../data/portfolio';

const Hero: React.FC = () => {
    return (
        <section id="top" className="hero compact-hero section-shell">
            <div className="hero-content">
                <p className="eyebrow"><span className="status-dot" /> Open to thoughtful engineering conversations</p>
                <h1>{portfolioData.profile.name}<span className="accent-dot">.</span></h1>
                <p className="hero-role">{portfolioData.profile.role} · Backend, cloud & platform engineering</p>
                <p className="hero-summary">{portfolioData.profile.summary}</p>
                <div className="hero-actions"><a href={`mailto:${portfolioData.profile.email}`} className="button button-primary">Contact me <span aria-hidden="true">↗</span></a><a href={portfolioData.profile.github} className="button button-text" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a></div>
            </div>
            <div className="hero-aside"><div className="hero-index">/ 01</div><div className="hero-note"><span className="label">Currently based in</span><strong>{portfolioData.profile.location}</strong></div><div className="hero-note"><span className="label">Working across</span><strong>Backend · Cloud · Platform</strong></div></div>
        </section>
    );
};

export default Hero;