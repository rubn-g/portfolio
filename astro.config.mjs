import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
	site: "https://www.rubn.es/",
	integrations: [mdx(), sitemap(), tailwind()],
	devToolbar: {
		enabled: false,
	},
});
