import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://lautard12.github.io',
  base: '/fausto-memories/',  // Asegúrate de que haya una barra al final
  outDir: './docs'  // Cambiar el directorio de salida a 'docs'
});