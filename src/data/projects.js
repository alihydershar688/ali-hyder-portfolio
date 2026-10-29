const baseUrl = import.meta.env.BASE_URL;

export const projects = [
  {
    id: 'smart-exam-system',
    title: 'Smart Exam System',
    description:
      'An online assessment workspace for academic teams to create exams, manage student submissions, review answers, and publish results in one place.',
    technologies: ['Python', 'Flask', 'JavaScript', 'Supabase', 'PostgreSQL', 'Ollama', 'Qwen 2.5', 'Sentence-BERT'],
    features: [
      'Separate tools for administrators, teachers, and students.',
      'Exam, question, submission, and results workflows backed by Flask APIs.',
      'Teachers can draft questions locally with Qwen 2.5, then review them before use.',
      'Answer similarity scores help teachers review written responses; possible matches are flagged for human review.',
      'Deployment setup for Render, Vercel, and Supabase Cloud.',
    ],
    githubUrl: 'https://github.com/alihydershar688/Smart-web-exam-fyp',
    demoUrl: 'https://smart-web-exam-system-q7oaiddyc-alihydershar688s-projects.vercel.app/',
    featured: true,
    image: `${baseUrl}/images/Smart%20Exam.png`,
  },
  {
    id: 'prosensia',
    title: 'Prosensia',
    description:
      "An independently built, responsive recreation of Prosensia's public website, with clear navigation and service-focused pages.",
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    features: [
      'Reusable React page sections.',
      'Navigation and layouts for desktop and mobile.',
      'Clear paths to service information and contact details.',
      'Consistent styling across page sections.',
    ],
    githubUrl: 'https://github.com/alihydershar688/Prosensia-clone-',
    demoUrl: 'https://www.prosensia.pk/',
    featured: true,
    image: `${baseUrl}/images/Prosenisa.png`,
  },
  {
    id: 'dependobot',
    title: 'Dependobot — GitHub Dependency Vulnerability Scanner',
    description:
      'A web application for reviewing dependency security alerts across GitHub repositories, with account access, repository scans, a vulnerability dashboard, and scan history.',
    technologies: ['React', 'Spring Boot', 'Java', 'Supabase Auth', 'PostgreSQL', 'GitHub Dependabot API'],
    features: [
      'Account sign-up and sign-in with Supabase Auth.',
      'Repository scan form and vulnerability dashboard.',
      'Scan history with user-scoped results.',
      'Spring Boot API designed to retrieve GitHub Dependabot alerts.',
    ],
    githubUrl: 'https://github.com/alihydershar688/dependobot',
    demoUrl: 'https://dependencyvulnaribilites.vercel.app',
    featured: false,
    image: `${baseUrl}/images/Vulnerability%20scan.png`,
  },
  {
    id: 'library-management',
    title: 'Library Management System',
    description:
      'A database-driven application for maintaining and searching library records.',
    technologies: ['SQL', 'Python', 'JavaScript', 'CRUD', 'Relational Data'],
    features: [
      'SQL queries.',
      'Record management.',
      'Search and retrieval.',
      'CRUD operations.',
    ],
    githubUrl: 'https://github.com/alihydershar688/library-ms',
    demoUrl: '',
    featured: false,
    image: `${baseUrl}/images/Library%20Mangement.png`,
  },
];
