export const profile = {
  name: 'Saivinay Manda',
  title: 'Software Developer',
  location: 'Genoa, Italy',
  phone: '+39 3482625113',
  email: 'saivinay023@gmail.com',
  linkedin: 'https://www.linkedin.com/in/saivinaymanda',
  github: 'https://github.com/SaiVinay023',
  website: 'https://svmanda.netlify.app',
  summary:
    'Full stack developer with 2.6 years building scalable web apps with React, Node, Express and MongoDB. Strong with PostgreSQL, REST APIs and AWS. Comfortable with real time features, CI/CD, Docker and Agile.',

  // ✅ Add this
  stats: [
    { label: 'Experience', value: '2.6+ Years' },
    { label: 'Research', value: 'IIT Italy, EMARO' },
    { label: 'Projects', value: '20+ Public Repos' },
    { label: 'Location', value: 'Global / Remote' }
  ],

  highlights: [
    'Improved workflow efficiency by 25 percent on eClaim through better navigation and UI',
    'Reduced defect rate by 20 percent after launch with focused testing and debugging',
    'Cut MySQL processing time by 50 percent on internal dashboard analytics',
    'Boosted query retrieval speed by 30 percent in a real time chat app'
  ],

  mission: `I believe technology should empower people, not overwhelm them. 
  My mission is to design and build systems that are scalable, accessible, and impactful — 
  from research in human–robot interaction to developing real-world SaaS products.`,
  experience: [
    {
      company: 'eClaim',
      role: 'Full Stack Developer',
      duration: 'Jan 2023 - Present',
      location: 'Remote',
      description:
        'Developed and maintained a healthcare claims management platform, focusing on improving user experience and system performance.',
      achievements: [
        'Enhanced workflow efficiency by 25% through UI improvements.',
        'Reduced defect rate by 20% post-launch with rigorous testing.'
      ]
    },
    {
      company: 'IIT Italy',
      role: 'Research Intern',
      duration: 'Jun 2022 - Dec 2022',
      location: 'Genoa, Italy',
      description:
        'Conducted research in human-robot interaction, focusing on developing algorithms for better communication between robots and humans.',
      achievements: ['Published research paper in EMARO conference.']
    },
    {
      company: 'Freelance Projects',
      role: 'Full Stack Developer',
      duration: 'Jan 2021 - May 2022',
      location: 'Remote',
      description:
        'Worked on various freelance projects, building web applications using React, Node.js, and MongoDB.',
      achievements: ['Delivered over 10 successful projects with positive client feedback.']
    }
  ],

  skills: {
    frontend: ['React', 'Vue', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Material UI', 'Ant Design', 'Quasar'],
    backend: ['Node.js', 'Express.js', 'Java 17', 'Spring Boot 3', 'REST APIs', 'Microservices', 'MVC'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
    cloudDevops: ['AWS EC2', 'S3', 'RDS', 'Lambda', 'Docker', 'CI/CD', 'GitHub Actions'],
    testing: ['Jest', 'Jasmine', 'Selenium', 'Supertest', 'Joi', 'zod'],
    tools: ['Git', 'Jira', 'Postman', 'Apache ECharts', 'RabbitMQ', 'Socket.IO', 'Google APIs', 'JWT', 'RBAC']
  }
}
