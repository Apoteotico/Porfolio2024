// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://apoteotico.github.io/Porfolio2024/',
  base: '/Porfolio2024/',
  integrations: [tailwind()]
});