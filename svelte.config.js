import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-static";
import path from "path"
import json from "@rollup/plugin-json"
/** @type {import('@sveltejs/kit').Config} */

const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

    kit: {
		adapter: adapter(),
		files: {
			assets: "./src/assets",
		},
		vite: {
			resolve: {
			  alias: {
				$css: path.resolve("./src/assets/css"),
				$fonts: path.resolve("./src/assets/fonts"),
				$img: path.resolve("./src/assets/img"),
				$components: path.resolve("./src/components")
			  },
			  plugins: [json()],
			}
		  },
	},

    preprocess: [mdsvex(mdsvexConfig)]
};

export default config;
