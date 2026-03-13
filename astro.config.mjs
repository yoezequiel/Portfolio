import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['lucide-react'],
    },
    resolve: {
      alias: {
        // Fuerza a Vite a usar la versión ESM que es compatible con SSR en Astro
        'lucide-react': 'lucide-react/dist/esm/lucide-react.js',
      },
    },
  },
});
