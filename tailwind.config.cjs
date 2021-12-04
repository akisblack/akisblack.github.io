const colors = require("tailwindcss/colors");

const config = {
	mode: "jit",
	purge: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		colors: {
			bg: {
				primary: "#141414",
				secondary: "#111111",
				alt: "#0c0c0c"
			},
			accent: {
				primary: "#3B82F6",
				secondary: "#6EE7B7"
			},
			greyish: "#c8c8c8",
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray
		},
		fontFamily: {
			primary: ["Outfit"]
		},
		screens: {
			sm: { raw: "(max-width: 411px)" }
		},
		extend: {
			boxShadow: {
				custom: "0 4px 4px rgba(0, 0, 0, 0.16)"
			},
			margin: {
				"0-auto": "0 auto"
			}
		}
	}
};

module.exports = config;
