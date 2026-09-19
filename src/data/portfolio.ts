export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
};

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const portfolioData = {
  profile: {
    name: 'Prathamesh Raut',
    role: 'Software Development Engineer',
    location: 'Pune, India',
    email: 'prathamesh.raut.00@gmail.com',
    phone: '+91 9325-483-698',
    github: 'https://github.com/prathameshor',
    website: 'https://prathameshor.github.io',
    summary: 'I design, develop, and debug scalable software systems, with a focus on event-driven architecture, backend services, and cloud infrastructure.',
  },
  about: 'Experienced software development engineer with a background in building reliable services for cloud products, building management systems, and AI-enabled workflows. I enjoy working at the boundary between thoughtful system design and the practical details that make production software observable, secure, and maintainable.',
  skills: [
    { label: 'Core engineering', skills: ['Golang', 'C#', 'Python', 'REST', 'gRPC', 'GraphQL', 'NATS'] },
    { label: 'Data and platforms', skills: ['PostgreSQL', 'MongoDB', 'AWS Cloud', 'Linux Ubuntu/RHEL', 'Windows'] },
    { label: 'Delivery and operations', skills: ['Docker', 'Kubernetes', 'Helm', 'Terraform', 'Git', 'GitHub', 'GitLab', 'TeamCity', 'Nomad'] },
  ] satisfies SkillGroup[],
  experience: [
    {
      title: 'Software Engineer', company: 'Siemens Technology and Services Private Limited', location: 'Pune, India', duration: 'Jan 2026 - Aug 2026',
      responsibilities: ['Developed Golang-based event-driven services for Siemens BuildingX BMS, with deployments managed through GitLab CI/CD and AWS.', 'Designed and maintained GitLab CI/CD pipelines to automate application and Terraform infrastructure deployments across AWS environments.', 'Contributed to ComfortScore, a tenant comfort and usage tracking capability, and data flows supporting AI-based fault analysis.', 'Supported AWS infrastructure maintenance and cleanup, reducing cloud costs by 70 percent for affected services.'],
    },
    {
      title: 'Senior Software Engineer', company: 'Persistent Systems', location: 'Pune, India', duration: 'Aug 2024 - Jan 2026',
      responsibilities: ['Developed and optimized Golang and C# microservices for data acquisition, processing, and reporting in a web environment.', 'Designed scalable services with gRPC, GraphQL, and NATS for efficient data flow.', 'Improved performance and reliability through deep debugging, root cause analysis, logging, and middleware for system metrics.', 'Delivered features including audit trails for compliance and localization for multilingual support.', 'Managed deployments with JetBrains TeamCity for CI/CD and HashiCorp Nomad for service orchestration.', 'Conducted code reviews and maintained best practices for security and scalability.'],
    },
    {
      title: 'Software Engineer', company: 'Persistent Systems', location: 'Pune, India', duration: 'Jul 2022 - Aug 2024',
      responsibilities: ['Built backend systems focused on microservices, cloud IAM solutions, and backend-for-frontend architecture.', 'Developed and optimized a BFF for an AI chatbot using Golang, gRPC, and GraphQL, with logging and monitoring middleware.', 'Built and managed AWS IAM services, integrating Golang-based authentication and authorization.', 'Leveraged EC2, S3, Lambda, and RDS, and deployed services on EKS with Kubernetes and Helm.', 'Contributed to an Identity as a Service platform by developing secure authentication and access management solutions.'],
    },
    {
      title: 'Academic Intern', company: 'Persistent Systems', location: 'Pune, India', duration: 'Feb 2022 - Jul 2022',
      responsibilities: ['Trained in object-oriented programming, low-level design, and full-stack development for scalable web applications.', 'Gained hands-on experience with REST APIs, database design, and debugging.'],
    },
  ] satisfies ExperienceItem[],
  education: [
    { degree: 'B.E. in Information Technology', institution: 'Shri Sant Gajanan Maharaj College of Engineering', location: 'Shegaon, India', duration: 'Aug 2018 - Aug 2022', result: 'CGPA: 7.83 / 10.0' },
    { degree: 'Higher Secondary School Certificate', institution: 'Jawahar Navodaya Vidyalaya', location: 'Washim, India', duration: 'Aug 2017 - Aug 2018', result: 'Percentage: 72.20%' },
    { degree: 'Secondary School Certificate', institution: 'Jawahar Navodaya Vidyalaya', location: 'Washim, India', duration: 'Aug 2015 - Aug 2016', result: 'Percentage: 84.20%' },
  ],
  highlights: [
    { number: '01', title: 'Event-driven building systems', description: 'Golang services, comfort tracking, and AI fault-analysis data flows for Siemens BuildingX BMS.', tags: ['Golang', 'AWS', 'GitLab CI/CD'] },
    { number: '02', title: 'AI chatbot BFF', description: 'A backend-for-frontend layer designed to keep frontend and backend data flows efficient and observable.', tags: ['Golang', 'gRPC', 'GraphQL'] },
    { number: '03', title: 'Identity and access platforms', description: 'Secure authentication, authorization, and IAM services for cloud and SaaS environments.', tags: ['AWS IAM', 'REST APIs', 'Kubernetes'] },
  ],
};