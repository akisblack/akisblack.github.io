import {
	defineConfig,
	presetIcons,
	presetTypography,
	transformerVariantGroup,
	transformerDirectives,
	presetWind
} from "unocss";

import { extractorSvelte } from "unocss";

export default defineConfig({
	extractors: [extractorSvelte],

	presets: [
		presetIcons(),
		presetTypography(),
		presetWind({
			dark: "class"
		})
	],

	transformers: [transformerVariantGroup(), transformerDirectives()],

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
			greyish: "var(--greyish)",
			accent: "var(--accent)",
			transparent: "transparent",
			current: "currentColor"
		}
	}
});
