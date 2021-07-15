<svelte:head>
    <link rel="stylesheet" href="/css/pages.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="UTF-8">
	<title>Projects | akisblack</title>
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta property="og:url" content="https://akisblack.github.io">
	<meta property="og:type" content="article">
	<meta property="og:title" content="akisblack's site">
	<meta name="theme-color" content="#ffffff" />
	<meta property="og:description" content="Projects | akisblack">
	<meta name="description" content="akisblack's site">
	<meta name="author" content="akisblack">
</svelte:head>

<script>
    import App from "$components/projects/App.svelte"
    import Content from "$components/projects/Content.svelte"
</script>

<main>
    <div id="container">
        <div id="text">
            <App />
            <Content />

        </div>
    </div>
</main>