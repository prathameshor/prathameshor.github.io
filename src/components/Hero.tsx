import React from 'react';
import { portfolioData } from '../data/portfolio';

const Hero: React.FC = () => {
    return (
        <section id="top" className="hero compact-hero section-shell">
            <div className="hero-content">
                <h1>{portfolioData.profile.name}<span className="accent-dot">.</span></h1>
                <p className="hero-role">{portfolioData.profile.role} · Backend, cloud & platform engineering</p>
                <p className="hero-summary">{portfolioData.profile.summary}</p>
                <div className="hero-actions"><a href={`mailto:${portfolioData.profile.email}`} className="social-image-link"><img src="/social/mail.svg" alt="Email Prathamesh Raut" /><span>Email</span></a><a href={portfolioData.profile.github} className="social-image-link" target="_blank" rel="noopener noreferrer"><img src="/social/github.svg" alt="Visit Prathamesh Raut on GitHub" /><span>GitHub</span></a><a href={portfolioData.profile.linkedin} className="social-image-link" target="_blank" rel="noopener noreferrer"><img src="/social/linkedin.svg" alt="Connect with Prathamesh Raut on LinkedIn" /><span>LinkedIn</span></a></div>
            </div>
            <div className="hero-aside"><div className="hero-index"></div><div className="hero-note"><span className="label">Currently based in</span><strong>{portfolioData.profile.location}</strong></div><div className="hero-note"><span className="label">Working across</span><strong>Backend · Cloud · Platform</strong></div></div>
        </section>
    );
};

export default Hero;