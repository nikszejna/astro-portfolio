import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), mdx(), image()],
	  output: "server",
      adapter: cloudflare({
      runtime: {
      	mode: "local"
      }
  })
});




// https://astro.build/config
export default defineConfig({

});