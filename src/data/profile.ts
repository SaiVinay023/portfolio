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
    'Full stack developer with 3+ years building scalable web apps with React, Node, Express, NextJS, NestJS and MongoDB. Strong with PostgreSQL, REST APIs and AWS. Comfortable with real time features, CI/CD, Docker and Agile. Passionate about creating impactful software solutions and continuously learning new technologies.',

  stats: [
    { label: 'Experience', value: '3+ Years' },
    { label: 'Research', value: 'IIT Italy, EMARO LAB Unige, AI LAB Unige, NIE Crest RE' },
    { label: 'Projects', value: '30+ Public Repos' },
    { label: 'Location', value: 'Global / Remote' },
  ],

  highlights: [
  'Reduced dependency installation time by 40% using pnpm monorepo architecture at Carsu Technologies',
  'Improved task completion efficiency by 25% through RESTful API optimization at ManyDesigns Srl',
  'Integrated complex RML/Prolog monitoring frameworks for autonomous systems at IIT Italy, AI LAB Unige',
  'Built real-time chat infrastructure using Node.js and Socket.IO for scalable communication',
],


  mission: `I believe technology should empower people, not overwhelm them. 
  My mission is to design and build systems that are scalable, accessible, and impactful — 
  from research in human–robot interaction to developing real-world SaaS products.`,

 experience: [

  {
    company: 'Myxoflow',
    role: 'Full Stack Developer (Freelance - stock options)',
    duration: 'oct 2024 - Present',
    location: 'Italy (Remote)',
    description:
      'Building enterprise B2B and B2C SaaS application. Multiple Products',
  },
  {
    company: 'Carsu Technologies',
    role: 'Full Stack Developer (Freelance)',
    duration: 'Jun 2024 - Sep 2024',
    location: 'Netherlands (Remote)',
    description:
      'Building enterprise B2B SaaS application with Next.js, NestJS, and TypeScript. Implemented multi-tenant architecture and RBAC with Clerk Auth.',
    achievements: [
      'Implemented multi-tenant architecture and Supabase RLS for secure data isolation.',
      'Reduced dependency installation time by 40% with pnpm monorepo setup.',
    ],
  },
  {
    company: 'Italian Institute of Technology (IIT)',
    role: 'Software Engineer (Research Intern)',
    duration: 'Dec 2023 - Oct 2024',
    location: 'Genoa, Italy',
    description:
      'Developed software modules for autonomous systems, focusing on monitoring frameworks and RML/Prolog-based system integration.',
    achievements: [
      'Implemented monitoring frameworks and safety strategies for autonomous robotics.',
      'Integrated complex RML/Prolog-based systems into modern software architectures.',
    ],
  },
  {
    company: 'ManyDesigns Srl',
    role: 'Full Stack Developer',
    duration: 'May 2023 - Nov 2023',
    location: 'Genoa, Italy',
    description:
      'Built scalable React components with TypeScript and Ant Design, focusing on role-based authentication and dynamic navigation.',
    achievements: [
      'Improved task completion by 25% through efficient RESTful API integration and state handling.',
      'Developed dynamic navigation with breadcrumbs and multi-level RBAC (user/admin/manager).',
    ],
  },
  {
    company: 'Aceteq Web Services',
    role: 'Web Developer',
    duration: 'Jul 2018 - May 2020',
    location: 'Bangalore, India',
    description:
      'Developed real-time chat applications and responsive dashboards using the MERN stack and Socket.IO.',
    achievements: [
      'Built real-time features using Socket.IO, enhancing user engagement and communication.',
      'Developed data visualization dashboards using Chart.js for business insights.',
    ],
  },
],


  // ✅ Added this field
  languages: ['English', 'Telugu', 'Hindi'],
   certificates: [
    { name: 'AWS Certified Cloud Practitioner', year: '2024' },
    { name: 'Google Professional Cloud Architect', year: '2023' },
    // add/remove as you like
  ],
  
  publications: [
    {
      title: 'Efficient XYZ Scheduling with ABC Heuristics',
      authors: ['Saivinay Manda', 'Co-author Name'],
      venue: 'ICSE',
      year: '2024',
      link: 'https://example.com/paper-xyz',
    },
    {
      title: 'A Practical Guide to Type-Safe Frontends',
      authors: ['Saivinay Manda'],
      venue: 'Medium',
      year: '2023',
    },
  ],

  skills: {
    frontend: [
      'Next.js',
      'React',
      'Vue',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Material UI',
      'Ant Design',
      'Quasar',
      'Tailwind CSS',
    ],
    backend: [
      'NestJS',
      'Node.js',
      'Express.js',
      'Java 17',
      'Spring Boot 3',
      'REST APIs',
      'Microservices',
      'MVC',
    ],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
    cloudDevops: ['AWS EC2', 'S3', 'RDS', 'Lambda', 'Docker', 'CI/CD', 'GitHub Actions', 'vercel'],
    testing: ['Jest', 'Jasmine', 'Selenium', 'Supertest', 'Joi', 'zod', 'cypress'],
    tools: [
      'Git',
      'Jira',
      'Postman',
      'Apache ECharts',
      'RabbitMQ',
      'Socket.IO',
      'JWT',
      'RBAC',
      'Clerk Auth',
      'Supabase RLS',
      'Prisma',
      'pnpm Monorepo',
      'Agile/Scrum',
      'OpenAPI/Swagger',
      'OAuth2.0',
    ],
  },
}
