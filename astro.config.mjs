// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Cambia esta URL por el dominio real de producción
const SITE_URL = 'https://villatoroasociados.hn';

export default defineConfig({
  site: SITE_URL,
  integrations: [
    tailwind({
      applyBaseStyles: false, // usamos nuestro propio reset en global.css
    }),
    sitemap(),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Activa optimización de imágenes locales con sharp (incluido por defecto)
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
});
