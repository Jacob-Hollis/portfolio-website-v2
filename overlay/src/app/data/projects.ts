/**
 * Project data, moved from the Django site's projects.csv / Postgres table.
 * To add a project, add an entry here, commit, and push. Netlify redeploys automatically.
 */
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  /** Live site or main link (the folder icon and the "open" arrow). */
  link: string;
  githubLink: string;
}

export const PROJECTS: Project[] = [
  {
    // NOTE: reworded from the Django version since the site is now Angular. Edit freely.
    title: 'Portfolio Website',
    description:
      'My personal website, built with Angular and TypeScript and deployed on Netlify. It started life as a Django, Docker and Postgres app.',
    technologies: ['Angular', 'TypeScript', 'Netlify'],
    link: 'https://jacob-hollis.com',
    githubLink: 'https://github.com/Jacob-Hollis/portfolio-website',
  },
  {
    title: 'CPU Monitor',
    description:
      'Built in Java using Netbeans and Scene Builder. Can calculate things such as CPU usage and memory usage.',
    technologies: ['Java'],
    link: 'https://github.com/Jacob-Hollis/CPU-Monitor',
    githubLink: 'https://github.com/Jacob-Hollis/CPU-Monitor',
  },
  {
    title: 'Sarcastic Brewing Website',
    description: 'A stylized interactive website of a beer brewing company built with React and SCSS.',
    technologies: ['React.js', 'SCSS'],
    link: 'https://github.com/Jacob-Hollis/sarcastic-brewing-website',
    githubLink: 'https://github.com/Jacob-Hollis/sarcastic-brewing-website',
  },
  {
    title: 'Selenium Scraper Concept',
    description:
      'Web scraper built in Python extended by Django and using Selenium for scraping listing data from Airbnb.',
    technologies: ['Python', 'Django', 'Selenium'],
    link: 'https://github.com/Jacob-Hollis/scraper-selenium-concept',
    githubLink: 'https://github.com/Jacob-Hollis/scraper-selenium-concept',
  },
];
