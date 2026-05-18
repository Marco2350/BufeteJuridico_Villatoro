// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Dominio real donde se sirve el sitio
const SITE_URL = 'https://mddesarrolloshn.com';
// Subdirectorio donde se monta el sitio (sin slash final)
const BASE_PATH = '/bufete';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
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
