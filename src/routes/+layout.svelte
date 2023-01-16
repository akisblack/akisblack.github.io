<script lang="ts">
	import SvelteSEO from "svelte-seo";
	import Hero from "$lib/Hero.svelte";
	import Footer from "$lib/Footer.svelte";
	import "uno.css";
	import "@unocss/reset/tailwind.css";
	import "../app.css";
</script>

<SvelteSEO
	title="akisblack"
	description="My website"
	canonical="https://akisblack.github.io/"
	openGraph={{
		url: "https://akisblack.github.io/",
		title: "akisblack",
		description: "My website",
		images: [
			{
				url: "https://akisblack.github.io/logo.png",
				width: 512,
				height: 512,
				alt: "My logo"
			}
		]
	}}
/>

<main class="container">
	<Hero />
	<slot />
	<Footer />
</main>