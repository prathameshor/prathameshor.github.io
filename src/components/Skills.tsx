import React from 'react';
import { portfolioData } from '../data/portfolio';

const Skills: React.FC = () => {
    const skillIcons: Record<string, string> = {
        Golang: 'devicon-go-plain',
        'C#': 'devicon-csharp-plain',
        Python: 'devicon-python-plain',
        gRPC: 'devicon-grpc-plain',
        GraphQL: 'devicon-graphql-plain',
        PostgreSQL: 'devicon-postgresql-plain',
        MongoDB: 'devicon-mongodb-plain',
        'AWS Cloud': 'devicon-amazonwebservices-plain-wordmark',
        'Linux Ubuntu/RHEL': 'devicon-linux-plain',
        Windows: 'devicon-windows8-original',
        Docker: 'devicon-docker-plain',
        Kubernetes: 'devicon-kubernetes-plain',
        Helm: 'devicon-helm-original',
        Terraform: 'devicon-terraform-plain',
        Git: 'devicon-git-plain',
        GitHub: 'devicon-github-original',
        GitLab: 'devicon-gitlab-plain',
    };

    const skillFallbacks: Record<string, string> = {
        REST: '↔',
        NATS: '≋',
    };

    return (
        <section id="skills" className="compact-section skills-section">
            <div className="compact-heading"><p className="eyebrow"></p><h2>Technical skills</h2></div>
            <div className="skill-groups">{portfolioData.skills.map((group) => <div className="skill-group" key={group.label}><h3><span className="skill-icon" aria-hidden="true">{group.label === 'Core engineering' ? '⌘' : group.label === 'Data and platforms' ? '◈' : '↗'}</span>{group.label}</h3><ul>{group.skills.map((skill) => <li key={skill}>{skillIcons[skill] ? <i className={`skill-tech-icon ${skillIcons[skill]}`} aria-hidden="true" /> : <span className="skill-tech-fallback" aria-hidden="true">{skillFallbacks[skill] ?? '•'}</span>}{skill}</li>)}</ul></div>)}</div>
        </section>
    );
};

export default Skills;