<svelte:head>
	<!--Imports and viewport stuff-->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.9.55/css/materialdesignicons.min.css" rel="stylesheet">
	<link rel="icon" href="src/lib/img/favicon.png">

	<!--Embed metas-->
	<meta name="theme-color" content="#00e1ff">
	<meta name="description" content="akisblack's site">
	<meta name="author" content="akisblack">
</svelte:head>

<script>
	import "../app.postcss";
    import Footer from "$lib/Footer.svelte";
</script>

<slot />
<Footer />
