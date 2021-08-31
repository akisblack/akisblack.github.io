<svelte:head>
	<!--Imports and viewport stuff-->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.9.55/css/materialdesignicons.min.css" rel="stylesheet">
	<link rel="icon" href="/img/favicon.png">

	<!--Embed metas-->
	<meta property="og:url" content="https://akisblack.github.io">
	<meta property="og:type" content="article">
	<meta property="og:title" content="akisblack's site">
	<meta name="theme-color" content="#ffffff" />
	<meta name="description" content="akisblack's site">
	<meta name="author" content="akisblack">
</svelte:head>

<script>
	import Footer from "$lib/Footer.svelte";
</script>

<slot />
<Footer />

<style>
	@font-face {
		font-family: Quicksand;
		src: url(/fonts/Quicksand-Medium.ttf);
	}

	:root {
		--green: #0bf574;
		--blue: #00e1ff;
		--orange: #eca622;
		--pink: #ec0ee1;
		--pfp-color: #272727;
		--dark: #191919;
		--white: #ffffff;
	}

	:global(body) {
		background-color: var(--dark);
		font-family: Quicksand, sans-serif;
		margin: 0;
	}

	:global(a) {
		text-decoration: none;
		color: var(--green);
	}

	:global(a:hover) {
		color: var(--pink);
	}

	/*Pages styles*/
	:global(#pages-container) {
		padding: 0 10% 0 10%;
	}

	:global(.pages-title) {
		font-size: 60px;
		color: var(--blue);
	}

	:global(.project-name) {
		font-size: 24px;
		color: var(--orange);
	}

	:global(.pages-desc) {
		font-size: 20px;
		color: var(--white);
		text-align: justify;
	}

	:global(.pages-container) {
		border: var(--blue) 4px solid;
		border-radius: 15px;
		padding: 2em;
		background-color: var(--pfp-color);
	}

	:global(.pages-container:not(:first-child)) {
		margin-top: 2em;
	}
</style>