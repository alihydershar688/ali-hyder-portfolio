# Ali Hyder | Full-Stack Software Engineer Portfolio

This is a production-ready Astro portfolio for Ali Hyder, built as a static, fast, accessible, and mobile-friendly personal website.

## Overview

- Framework: Astro.js
- Styling: custom CSS with dark/light themes and responsive layout
- Content: project data, experience timeline, education, and skill groups separated from presentation
- Hosting: static deployment with GitHub Pages support
- SEO: meta tags, open graph, sitemap, and robots.txt

## Tech Stack

- Astro.js
- JavaScript
- CSS3
- Lucide icons
- GitHub Pages / static hosting

## Prerequisites

- Node.js 18+
- npm 9+

## Installation

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Open the local preview in your browser, typically at:

```text
http://localhost:4321
```

## Production Build

```bash
npm run build
```

## Preview the Production Build

```bash
npm run preview
```

## Project Structure

```text
src/
  components/
  data/
  layouts/
  pages/
  styles/
public/
.github/workflows/
```

## Add Screenshots for Projects

Place project preview images in `public/images/`. Use simple `.svg` placeholders or your own screenshots. Then update the matching project object in `src/data/projects.js`.

## Update Project Details

Edit the entries in `src/data/projects.js` and `src/data/skills.js` to change:

- project titles and descriptions
- technologies
- features
- GitHub/demo links
- skill groups and details

## Add a Resume PDF

A placeholder is already set at:

```text
public/resume/README.md
public/resume/Ali-Hyder-Resume.pdf
```

Replace the placeholder PDF in `public/resume/Ali-Hyder-Resume.pdf` with your real resume file, then update the resume link in the hero section if needed.

## Update Personal Links

Update the following values in `src/data/site.js` or the relevant page components:

- GitHub URL
- email address
- portfolio URL
- social references

## Contact Form and Email Setup

This portfolio uses a mailto fallback for the contact form because it is a static site. It builds a valid `mailto:` link with the user’s name, subject, and message. No backend is required.

If you want a real form submission service later, add a backend or a service like Formspree or Resend and replace the fallback logic in the contact component.

## GitHub Setup

1. Create a repository on GitHub.
2. Push this project to the repository.
3. Go to repository Settings > Pages.
4. Select GitHub Actions as the source.
5. Commit and push the workflow file in `.github/workflows/deploy-pages.yml`.

## Free Hosting

This project is prepared for GitHub Pages.

### GitHub Pages deployment

The repository should use the following deployment path:

```text
https://alihydershar688.github.io/ali-hyder-portfolio/
```

### Required repository settings

- enable GitHub Pages
- use GitHub Actions as the deployment source
- ensure the repository is public or has Pages access enabled

### Workflow file

The deployment workflow is in:

```text
.github/workflows/deploy-pages.yml
```

### Verify deployment

After pushing to GitHub:

1. Open the repository on GitHub.
2. Go to Settings > Pages.
3. Confirm the site is published.
4. Visit the site URL and verify the content loads.

## Troubleshooting

### `npm install` fails

- ensure Node.js 18+ is installed
- clear `node_modules` and re-run `npm install`

### Local dev fails

- make sure all dependencies are installed
- verify the project directory contains `astro.config.mjs`

### Build fails

- run `npm run build`
- inspect the Astro error output
- confirm there are no invalid imports or broken asset paths

## License

MIT
