import React from 'react';
import { portfolioData } from '../data/portfolio';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="compact-section experience-section">
            <div className="compact-heading"><p className="eyebrow">/ 04 — Experience</p><h2>Experience</h2></div>
            <div className="experience-list">{portfolioData.experience.map((experience, index) => <article className="experience-item" key={`${experience.company}-${experience.duration}`}><div className="experience-marker"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="experience-meta"><p className="duration">{experience.duration}</p><p>{experience.location}</p></div><div className="experience-body"><h3>{experience.title}</h3><p className="company">{experience.company}</p><p className="experience-summary">{experience.responsibilities[0]}</p><details><summary>View {experience.responsibilities.length - 1} more contributions</summary><ul>{experience.responsibilities.slice(1).map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul></details></div></article>)}</div>
        </section>
    );
};

export default Experience;