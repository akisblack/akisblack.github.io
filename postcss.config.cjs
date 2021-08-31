const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssNesting = require("postcss-nesting");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const config = {
	plugins: [
		autoprefixer(),

		postcssNesting(),

		!dev && cssnano({
			preset: "default",
		}),
	],
};

module.exports = config;