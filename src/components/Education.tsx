import React from 'react';
import { portfolioData } from '../data/portfolio';

const Education: React.FC = () => {
    return (
        <section id="education" className="compact-section education-section">
            <div className="compact-heading">
                <p className="eyebrow">/ 05 — Education</p>
                <h2>Education</h2>
            </div>
            <div className="education-list">
                {portfolioData.education.map((item) => (
                    <article className="education-item" key={`${item.institution}-${item.duration}`}>
                        <p className="compact-date">{item.duration}</p>
                        <div>
                            <h3>{item.degree}</h3>
                            <p className="compact-muted">{item.institution} · {item.location}</p>
                        </div>
                        <strong>{item.result}</strong>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Education;