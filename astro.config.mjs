// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// site is what makes canonical URLs and the generated sitemap absolute.
// No base: the site is served from the root of a custom domain, not a repo path.
export default defineConfig({
  site: 'https://notix-ai.app',
  integrations: [sitemap()],
});
