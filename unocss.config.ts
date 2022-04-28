import {
	defineConfig,
	presetIcons,
	presetTypography,
	transformerVariantGroup,
	transformerDirectives,
	presetWind
} from "unocss";

import { extractorSvelte } from "unocss";

import { presetBetterNestedColors } from "unocss-preset-better-nested-colors";

export default defineConfig({
	extractors: [extractorSvelte],

	presets: [
		presetIcons(),
		presetTypography(),
		presetWind({
			dark: "class"
		}),
		presetBetterNestedColors()
	],

	transformers: [transformerVariantGroup(), transformerDirectives()],

	theme: {
		fontFamily: {
			sans: ["Outfit"]
		},
		margin: {
			"0-auto": "0 auto"
		},
		colors: {
			primary: {
				DEFAULT: "#dddddd",
				":dark": "#141414"
			},
			secondary: {
				DEFAULT: "#f9f3f3",
				":dark": "#2e2e2e"
			},
			tertiary: {
				DEFAULT: "#939393",
				":dark": "#474747"
			},
			greyish: {
				DEFAULT: "#444444",
				":dark": "#c8c8c8"
			},
			accent: {
				DEFAULT: "#0a9396",
				":dark": "#98f5e1"
			},
			transparent: "transparent",
			current: "currentColor"
		}
	}
});
