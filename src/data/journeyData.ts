import { TimelineItem } from '@/types/timeline';

export const journeyData: TimelineItem[] = [
  // === CURRENT FOCUS - Make this stand out ===
  {
    id: '1',
    type: 'work',
    title: 'Full Stack Developer (Freelance)',
    organization: 'Carsu Technologies',
    location: 'Netherlands (Remote)',
    startDate: '2024-10-01',
    description: 'Building enterprise B2B SaaS application with Next.js, NestJS, and TypeScript. Implemented multi-tenant architecture, RBAC with Clerk Auth, and Supabase RLS. Reduced dependency installation time by 40% with pnpm monorepo setup.',
    skills: ['Next.js', 'NestJS', 'TypeScript', 'Supabase', 'Prisma', 'REST APIs', 'RBAC', 'Monorepo'],
  },

  // === RECENT EXPERIENCE ===
  {
    id: '2',
    type: 'work',
    title: 'Software Engineer (Research Intern)',
    organization: 'Italian Institute of Technology (IIT)',
    location: 'Genoa, Italy',
    startDate: '2023-12-01',
    endDate: '2024-10-01',
    description: 'Developed software modules for autonomous systems. Implemented monitoring frameworks, safety strategies, and integrated RML/Prolog-based systems. Strong focus on software architecture and system integration.',
    skills: ['Software Architecture', 'System Integration', 'Real-time Systems', 'Python', 'ROS'],
  },

  {
    id: '3',
    type: 'work',
    title: 'Full Stack Developer',
    organization: 'ManyDesigns Srl',
    location: 'Genoa, Italy',
    startDate: '2023-05-01',
    endDate: '2023-11-01',
    description: 'Built scalable React components with TypeScript and Ant Design. Implemented role-based authentication (user/admin/manager), dynamic navigation with breadcrumbs. Integrated RESTful APIs with efficient state handling, improving task completion by 25%.',
    skills: ['React', 'TypeScript', 'Ant Design', 'REST APIs', 'State Management', 'Agile/Scrum'],
  },

  // === EDUCATION - Show technical foundation ===
  {
    id: '4',
    type: 'education',
    title: 'Masters in Robotics Engineering (LM-32)',
    organization: 'Universit\u00e0 degli Studi di Genova',
    location: 'Genoa, Italy',
    startDate: '2021-09-01',
    endDate: '2024-10-01',
    description: 'Advanced software development, AI/ML, computer vision, and distributed systems. Focused on software engineering principles applicable to modern web architecture and complex system design.',
    skills: ['Software Architecture', 'AI/ML', 'Computer Vision', 'Distributed Systems', 'System Design'],
  },

  // === EARLY WEB EXPERIENCE - Shows web dev roots ===
  {
    id: '5',
    type: 'work',
    title: 'Web Developer',
    organization: 'Aceteq Web Services',
    location: 'Bangalore, India',
    startDate: '2018-07-01',
    endDate: '2020-05-01',
    description: 'Built real-time chat applications with Node.js, Express, and Socket.IO. Implemented user authentication and role-based access control. Developed responsive dashboards with Chart.js for data visualization.',
    skills: ['Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JavaScript', 'MySQL', 'Chart.js'],
  },

  // === FOUNDATION - Keep brief ===
  {
    id: '6',
    type: 'education',
    title: 'Bachelors in Mechanical Engineering',
    organization: 'The National Institute of Engineering',
    location: 'Mysore, India',
    startDate: '2015-08-01',
    endDate: '2019-01-01',
    description: 'Technical foundation in systems thinking, problem-solving, and engineering principles. Built analytical and logical reasoning skills.',
    skills: ['Problem Solving', 'Systems Thinking', 'Engineering Fundamentals'],
  },

  // === FUTURE FOCUS ===
  {
    id: '7',
    type: 'learning',
    title: 'AI/LLM Integration in Web Applications',
    startDate: '2024-11-01',
    description: 'Exploring integration of AI models, LLMs, and vector databases into production web applications. Focus on building intelligent, user-facing features with OpenAI, LangChain, and modern AI tools.',
    skills: ['OpenAI API', 'LangChain', 'Vector Databases', 'AI Integration', 'Prompt Engineering'],
  },
];
