import React from 'react';
import { portfolioData } from '../data/portfolio';

const About: React.FC = () => {
    return (
        <section id="about" className="section-shell section-grid">
            <div className="section-heading"><p className="eyebrow">/ 02 — Profile</p><h2>Systems thinking, with a human edge.</h2></div>
            <div className="about-copy"><p className="lead">{portfolioData.about}</p><div className="fact-row"><div><span className="label">Specialty</span><strong>Event-driven software</strong></div><div><span className="label">Experience</span><strong>4+ years in engineering</strong></div></div></div>
        </section>
    );
};

export default About;