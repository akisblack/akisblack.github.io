<svelte:head>
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
	<link rel="icon" type="image/png" href="./img/favicon.png">
    <link rel="stylesheet" href="css/Projects.css">
</svelte:head>

<script>
    let websiteText = "I am using this website as a chance to make my Svelte skills better.";
</script>

<body>
    <div id="container">
        <div id="text">
            <a href="/" class="home">Home</a>
            <h1 class="title">Projects</h1>
            <hr class="line">
            <h2 class="sub">This Website</h2>
            <h2 class="sub-text">{websiteText}</h2>

        </div>
    </div>
</body>