import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  site: 'https://alihydershar688.github.io',
  base: '/ali-hyder-portfolio',
  integrations: [sitemap()]
});