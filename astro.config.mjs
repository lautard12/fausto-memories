import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://lautard12.github.io',
  base: '/fausto-memories/',  // Asegúrate de que haya una barra al final
  trailingSlash: 'always',    // Esto garantiza que todas las URLs tengan barra al final
  build: {
    assets: '_assets'         // Prefija los assets con guion bajo
  }
});