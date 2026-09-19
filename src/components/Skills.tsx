import React from 'react';
import { portfolioData } from '../data/portfolio';

const Skills: React.FC = () => {
    const skillIcons: Record<string, string> = {
        'Core engineering': 'devicon-go-plain',
        'Data and platforms': 'devicon-amazonwebservices-plain-wordmark',
        'Delivery and operations': 'devicon-docker-plain',
    };

    return (
        <section id="skills" className="compact-section skills-section">
            <div className="compact-heading"><p className="eyebrow">/ 03 — Toolkit</p><h2>Technical skills</h2></div>
            <div className="skill-groups">{portfolioData.skills.map((group) => <div className="skill-group" key={group.label}><h3><i className={`skill-icon ${skillIcons[group.label]}`} aria-hidden="true" />{group.label}</h3><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
        </section>
    );
};

export default Skills;