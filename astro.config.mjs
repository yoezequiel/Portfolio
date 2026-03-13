import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  vite: {
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
