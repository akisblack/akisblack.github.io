const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssShort = require('postcss-short');

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const config = {
	plugins: [
		autoprefixer(),

		postcssShort(),

		!dev &&
			cssnano({
				preset: "default"
			})
	]
};

module.exports = config;
