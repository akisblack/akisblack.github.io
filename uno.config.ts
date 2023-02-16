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
		presetWind({
			dark: "class"
		}),
		presetTypography()
	],

	transformers: [transformerVariantGroup(), transformerDirectives()],

	safelist: [
		"i-ic:outline-dark-mode",
		"i-ic:outline-light-mode",
		"bg-[#DC2626]",
		"bg-[#7C3AED]",
		"text-[#DC2626]",
		"text-[#7C3AED]"
	],

	theme: {
		fontFamily: {
			primary: ["var(--font-primary)"]
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
			greenBg: "var(--green-bg)",
			greenText: "var(--green-text)",
			redBg: "var(--red-bg)",
			redText: "var(--red-text)",
			transparent: "transparent",
			current: "currentColor"
		},
		breakpoints: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			nav: "440px",
			navPlus1: "441px"
		}
	}
});