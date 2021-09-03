import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-static";
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
			  plugins: [json()],
			}
		  },
	},

    preprocess: [mdsvex(mdsvexConfig), preprocess({
        "postcss": true
    })]
};

export default config;
