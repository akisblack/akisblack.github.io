import adapter from "@sveltejs/adapter-static";
import path from "path"
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// options passed to svelte.compile (https://svelte.dev/docs#svelte_compile)
	compilerOptions: null,

	// an array of file extensions that should be treated as Svelte components
	extensions: [".svelte"],

	kit: {
		adapter: adapter({
			// default options are shown
			pages: "./build",
			assets: "./build",
			fallback: null
		}),
		amp: false,
		appDir: "./_app",
		files: {
			hooks: "./src/hooks",
			assets: "./src/assets",
			routes: "./src/routes",
			template: "./src/app.html"
		},
		floc: false,
		vite: {
			resolve: {
			  alias: {
				$css: path.resolve("./src/assets/css"),
				$fonts: path.resolve("./src/assets/fonts"),
				$img: path.resolve("./src/assets/img"),
				$components: path.resolve("./src/components")
			  }
			}
		  },
	},
	// options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
	preprocess: null
};

export default config;
