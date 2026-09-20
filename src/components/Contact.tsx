import React from 'react';
import { portfolioData } from '../data/portfolio';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact-section"><div className="section-shell contact-grid"><div><p className="eyebrow"></p><h2>Let&apos;s make useful things.</h2><p className="contact-intro">For roles, collaborations, or a thoughtful conversation about backend systems, my inbox is open.</p></div><div className="contact-details"><a className="contact-email" href={`mailto:${portfolioData.profile.email}`}><span className="contact-icon" aria-hidden="true">@</span>{portfolioData.profile.email} <span aria-hidden="true">↗</span></a><a href={`tel:${portfolioData.profile.phone.replace(/[^+\d]/g, '')}`}><span className="contact-icon" aria-hidden="true">⌕</span>{portfolioData.profile.phone}</a><a className="contact-image-link" href={portfolioData.profile.github} target="_blank" rel="noopener noreferrer"><img src="/social/github.svg" alt="" aria-hidden="true" />github.com/prathameshor <span aria-hidden="true">↗</span></a><a className="contact-image-link" href={portfolioData.profile.linkedin} target="_blank" rel="noopener noreferrer"><img src="/social/linkedin.svg" alt="" aria-hidden="true" />linkedin.com/in/prathameshor <span aria-hidden="true">↗</span></a></div></div>
        </section>
    );
};

export default Contact;