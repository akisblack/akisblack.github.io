<svelte:head>
	<link rel="shortcut icon" href="/img/logo.png" type="image/x-icon">
</svelte:head>

<script>
	import { MetaTags } from "svelte-meta-tags";
	import Footer from "$lib/Footer.svelte";
	import "../app.css";
</script>

<MetaTags
	title="akisblack"
	description="My website."
	canonical="https://akisblack.tech/"
	openGraph={{
		url: "https://akisblack.tech/",
		title: "akisblack",
		description: "My website.",
		images: [
			{
				url: "https://akisblack.tech/img/logo.png",
				width: 512,
				height: 512,
				alt: "My logo"
			}
		],
		site_name: "SiteName"
	}}
	twitter={{
		handle: "@akisblack_",
		site: "@akisblack.tech",
		cardType: "summary_large_image"
	}}
/>

<slot />

<Footer />
