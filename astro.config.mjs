// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },

  build: {
    inlineStylesheets: 'always',
  },

  integrations: [sitemap()],
  site: 'https://know-twice.vercel.app/',
});
