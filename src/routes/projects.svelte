<!--
Copyright (C) 2021 akisblack
This work is free. You can redistribute it and/or modify it under the terms
of the akisblack Software License, which can be found here: http://github.com/akisblack/akisblack-software-license.
-->

<svelte:head>
    <link rel="stylesheet" href="/css/pages.css">
	<title>Projects | akisblack</title>
	<meta property="og:description" content="Projects | akisblack">
</svelte:head>

<script>
    import Content from "$components/projectsContent.svelte";
</script>

<main>
    <div id="container">
        <div id="stuff">
            <a href="/" class="home"><i class="mdi mdi-home-outline"></i> Home</a>

			<h1 class="title">Projects</h1>
			<hr class="line">
            <Content />
        </div>
    </div>
</main>