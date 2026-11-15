# Jacob Hollis | Portfolio Website

Personal portfolio site for [jacob-hollis.com](https://jacob-hollis.com), built with Angular and TypeScript and deployed on Netlify.

The site started as a Django, Docker and Postgres app. It was ported to a static Angular app, since the content is five pages and a short project list and needs no backend. Hosting on Netlify also means HTTPS certificates renew automatically.

## Pages

| Route | Description |
|---|---|
| `/` | Home, with an animated "Full-Stack / Back-End / Front-End" intro |
| `/about` | Short bio |
| `/skills` | Technologies and tools |
| `/projects` | Project cards (GitHub and live links) |
| `/contact` | Email, LinkedIn and GitHub links |

## Tech stack

- [Angular](https://angular.dev) with standalone components, signals and lazy-loaded routes
- TypeScript
- Bootstrap 4, Font Awesome and Devicon, loaded from CDNs in `src/index.html`
- Netlify for hosting, HTTPS and the single-page-app redirect

## Getting started

Requires Node.js 22 or newer (the version used by the Netlify build, set in `netlify.toml`) and npm.

```bash
npm install
npm start
```

The dev server runs at http://localhost:4200 and reloads when you change a file.

## Scripts

| Command | What it does |
|---|---|
| `npm start` | Runs the dev server |
| `npm run build` | Production build, output in `dist/portfolio-site/browser` |
| `npm run watch` | Rebuilds on change in development mode |

## Project structure

```
src/
  index.html                 Page shell and CDN stylesheets
  styles.css                 Global styles (ported from the Django site)
  app/
    app.routes.ts            Routes, with a lazy-loaded component per page
    layout/shell.component.ts  Navbar and footer around every page
    pages/                   Home, About, Skills, Projects and Contact components
    data/projects.ts         Project list shown on the Projects page
public/
  favicon.png
  img/                       Logo and profile picture
netlify.toml                 Netlify build settings and SPA redirect
```

## Adding or editing a project

Projects live in [`src/app/data/projects.ts`](src/app/data/projects.ts). Add an entry to the `PROJECTS` array:

```ts
{
  title: 'My Project',
  description: 'One or two sentences about it.',
  technologies: ['Angular', 'TypeScript'],
  link: 'https://example.com',
  githubLink: 'https://github.com/Jacob-Hollis/my-project',
},
```

Commit and push, and Netlify rebuilds the site.

## Deployment

The site deploys to Netlify from the `main` branch, and every push triggers a new deploy.

- **Build command:** `npm run build`
- **Publish directory:** `dist/portfolio-site/browser`
- **SPA redirect:** `netlify.toml` rewrites every path to `/index.html` so direct links and refreshes on routes like `/projects` work. Real files such as images are still served as-is.
- **Custom domain and HTTPS:** configured under Domain management in Netlify. DNS records for `jacob-hollis.com` point to Netlify, which issues and renews the certificate automatically.

If you rename the Angular project, update the publish directory in `netlify.toml` to `dist/<project-name>/browser`.

## Contact

- Email: jakebhollis@gmail.com
- LinkedIn: [linkedin.com/in/jb-hollis](https://www.linkedin.com/in/jb-hollis/)
- GitHub: [github.com/Jacob-Hollis](https://github.com/Jacob-Hollis)
