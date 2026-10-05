import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://acrepairgastonianc.com',
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  },
  vite: {
    build: {
      cssMinify: true,
      minify: true
    }
  }
});
