<script>
	import Footer from "$lib/Footer.svelte";
</script>

<svelte:head>
	<!--Imports and viewport stuff-->
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<link
		href="https://cdn.jsdelivr.net/npm/@mdi/font@5.9.55/css/materialdesignicons.min.css"
		rel="stylesheet"
	/>
	<link rel="shortcut icon" type="image/jpg" href="/img/favicon.png" />

	<!--Embed metas-->
	<meta name="theme-color" content="#39d687" />
	<meta name="description" content="akisblack's site" />
	<meta name="author" content="akisblack" />
</svelte:head>

<slot />
<Footer />

<style lang="postcss" global>
	@font-face {
		font-family: "JetBrains Mono";
		src: url(/fonts/JetBrainsMono[wght].ttf);
	}

	:root {
		--bg-normal: #171717;
		--bg-light: #272727;
		--accent: #39d687;
		--grey: #ddd;
	}

	body {
		font-family: "JetBrains Mono";
		background-color: var(--bg-normal);
		margin: 0 0 150px 0;
		padding-top: 2em;
	}

	a {
		color: var(--accent);
		text-decoration: underline;
	}

	h1 {
		color: #fff;
		@media (max-width: 690px) {
			font-size: 22px !important;
		}
	}
</style>
