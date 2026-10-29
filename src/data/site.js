// Base path without a trailing slash ('' on Netlify, '/ali-hyder-portfolio' on GitHub Pages).
export const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export const site = {
  name: 'Ali Hyder',
  title: 'Ali Hyder | Software Engineer',
  description:
    'Software Engineer portfolio for Ali Hyder, featuring responsive web applications, backend APIs, database integration, and practical product work.',
  location: 'Karachi, Sindh, Pakistan',
  email: 'alihydershar688@gmail.com',
  github: 'https://github.com/alihydershar688',
  linkedin: 'https://www.linkedin.com/in/alihyder110/',
  discordUsername: 'freethinker7430',
  portfolio: 'https://alihydershar688.github.io/ali-hyder-portfolio/',
  resumePath: `${basePath}/resume/Ali-Hyder-Resume.pdf`,
  resumeLabel: 'Download Resume',
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
];
