import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://lautard12.github.io',
  base: '/fausto-memories/',
  outDir: './dist',  // Asegúrate de que la salida sea en dist
});