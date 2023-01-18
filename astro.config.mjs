import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import vercel from '@astrojs/vercel/static';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  output: "static",
  adapter: vercel()
});