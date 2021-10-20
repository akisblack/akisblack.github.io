const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssShort = require("postcss-short");
const postcssNested = require("postcss-nested");
const postcssSCSS = require("postcss-scss");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const config = {
	parser: postcssSCSS,
	plugins: [
		autoprefixer(),
		postcssShort(),
		postcssNested(),

		!dev &&
			cssnano({
				preset: "default"
			})
	]
};

module.exports = config;
