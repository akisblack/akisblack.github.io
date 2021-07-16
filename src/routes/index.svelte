<svelte:head>
	<link rel="stylesheet" href="./css/index.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="UTF-8">
	<title>Home | akisblack</title>
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta property="og:url" content="https://akisblack.github.io">
	<meta property="og:type" content="article">
	<meta property="og:title" content="akisblack's site">
	<meta name="theme-color" content="#ffffff" />
	<meta property="og:description" content="Home | akisblack">
	<meta name="description" content="akisblack's site">
	<meta name="author" content="akisblack">
</svelte:head>

<script>
	import App from "$components/index/App.svelte"
	import Webring from "$components/index/Webring.svelte";
</script>

<main>
	<App />
	<Webring />
</main>