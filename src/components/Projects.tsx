import React from 'react';
import { portfolioData } from '../data/portfolio';

const Projects: React.FC = () => {
    return (
        <section id="work" className="compact-section work-section">
            <div className="compact-heading"><p className="eyebrow">/ 06 — Selected work</p><h2>Selected work</h2></div>
            <div className="work-grid">{portfolioData.highlights.map((project) => <article className="work-card" key={project.number}><span className="work-number work-icon" aria-hidden="true">{project.number}</span><div><h3>{project.title}</h3><p>{project.description}</p></div><ul className="tag-list">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
            <a className="profile-link" href={portfolioData.profile.github} target="_blank" rel="noopener noreferrer">View my GitHub profile <span aria-hidden="true">↗</span></a>
        </section>
    );
};

export default Projects;