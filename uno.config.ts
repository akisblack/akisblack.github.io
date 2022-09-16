import {
	defineConfig,
	presetIcons,
	transformerVariantGroup,
	transformerDirectives,
	presetWind
} from "unocss";

import { extractorSvelte } from "unocss";

export default defineConfig({
	extractors: [extractorSvelte],

	presets: [
		presetIcons(),
		presetWind({
			dark: "class"
		})
	],

	transformers: [transformerVariantGroup(), transformerDirectives()],

	safelist: ["i-ic:outline-dark-mode", "i-ic:outline-light-mode"],

	theme: {
		fontFamily: {
			primary: ["Outfit"]
		},
		margin: {
			"0-auto": "0 auto"
		},
		colors: {
			primary: "var(--primary)",
			secondary: "var(--secondary)",
			tertiary: "var(--tertiary)",
			grey: "var(--grey)",
			accent: "var(--accent)",
			transparent: "transparent",
			current: "currentColor"
		}
	}
});
