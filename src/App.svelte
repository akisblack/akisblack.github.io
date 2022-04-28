<script lang="ts">
	import SvelteSEO from "svelte-seo";
	import Hero from "./lib/Hero.svelte";
	import Projects from "./lib/Projects.svelte";
	import Contact from "./lib/Contact.svelte";
	import Footer from "./lib/Footer.svelte";
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

<div class="container">
	<Hero />
	<Projects />
	<Contact />
	<Footer />
</div>
