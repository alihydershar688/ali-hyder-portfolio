import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Netlify serves the site from the domain root, while GitHub Pages serves it
// from the /ali-hyder-portfolio sub-path.
const isNetlify = process.env.NETLIFY === 'true';

// https://astro.build/config
export default defineConfig({
  site: isNetlify ? process.env.URL : 'https://alihydershar688.github.io',
  base: isNetlify ? '/' : '/ali-hyder-portfolio',
  integrations: [sitemap()]
});
