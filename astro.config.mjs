import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://lautard12.github.io',
  base: '/fausto-memories/',
  outDir: './docs'
});