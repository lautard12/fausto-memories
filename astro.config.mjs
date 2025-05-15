import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://lautard12.github.io',
  base: '/fausto-memories', // Este debe ser el nombre de tu repositorio
});