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
		font-family: "Roboto Slab";
		src: url(/fonts/RobotoSlab-VariableFont_wght.ttf);
	}
	:root {
		--bg-normal: #171717;
		--bg-light: #272727;
		--accent: #39d687;
		--grey: #ddd;
	}

	body {
		font-family: "Roboto Slab";
		background-color: var(--bg-normal);
		margin: 4em 1em 0 4em;
	}

	a {
		color: var(--accent);
		text-decoration: none;

		&:hover {
			color: #fff;
		}
	}

	@media (max-width: 690px) {
		body {
			margin-left: 1em;
		}

		h1 {
			font-size: 22px !important;
		}
	}
</style>
