const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		fontFamily: {
			primary: ["Outfit"]
		},
		extend: {
			boxShadow: {
				custom: "0 4px 4px rgba(0, 0, 0, 0.16)"
			},
			margin: {
				"0-auto": "0 auto"
			},
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
				current: "currentColor"
			},
			keyframes: {
				fade: {
					"0%": {opacity: "0"},
					"100%": {opacity: "1"}
				}
			},
			animation: {
				fade: "fade .7s"
			}
		}
	}
};

module.exports = config;
