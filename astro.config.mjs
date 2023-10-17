import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from 'astro-robots-txt';
// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://fire-tx.asia',
  integrations: [tailwind(), react(), robotsTxt(), sitemap()]
});