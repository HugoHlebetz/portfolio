import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site =
  process.env.SITE_URL ||
  (vercelUrl ? `https://${vercelUrl}` : 'https://hugohlebetz.github.io');

const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
