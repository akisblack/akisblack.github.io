import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import unoCSS from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte({
			preprocess: sveltePreprocess()
		}),

		unoCSS()
	],

	optimizeDeps: {
		exclude: ["os", "url"]
	}
});
