import React from 'react';
import { portfolioData } from '../data/portfolio';

const Experience: React.FC = () => {
    const experienceGroups = portfolioData.experience.reduce<Array<{ company: string; location: string; roles: typeof portfolioData.experience }>>((groups, experience) => {
        const currentGroup = groups[groups.length - 1];

        if (currentGroup?.company === experience.company) {
            currentGroup.roles.push(experience);
        } else {
            groups.push({ company: experience.company, location: experience.location, roles: [experience] });
        }

        return groups;
    }, []);

    return (
        <section id="experience" className="compact-section experience-section">
            <div className="compact-heading"><p className="eyebrow"></p><h2>Experience</h2></div>
            <div className="experience-list">
                {experienceGroups.map((group) => (
                    <article className="company-group" key={group.company}>
                        <div className="company-heading">
                            <h3>{group.company}</h3>
                            <p>{group.location}</p>
                        </div>
                        <div className="promotion-list">
                            {group.roles.map((experience, index) => (
                                <div className="experience-item" key={`${experience.company}-${experience.duration}`}>
                                    <div className="experience-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
                                    <div className="experience-meta"><p className="duration">{experience.duration}</p></div>
                                    <div className="experience-body"><h4>{experience.title}</h4><p className="experience-summary">{experience.responsibilities[0]}</p><details><summary>View {experience.responsibilities.length - 1} more contributions</summary><ul>{experience.responsibilities.slice(1).map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul></details></div>
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Experience;