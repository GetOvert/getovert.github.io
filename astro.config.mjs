import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), lit()]
});