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
    import Header from "$components/subpageHeader.svelte";
    import Project from '$components/projects.svelte';

    const projects =  {
        "Website": {
            "name": "This Website",
            "icon": "mdi mdi-web",
            "description": "I am using this website as a chance to make my Svelte skills better.",
            "url": "https://github.com/akisblack/akisblack.github.io",
        },
        "License": {
            "name": "akisblack Software License (ASL)",
            "icon": "mdi mdi-bank-outline",
            "description": "A license that I use for my current projects.",
            "url": "https://github.com/akisblack/akisblack-software-license",
        }
    }
</script>

<main>
    <div id="container">
        <Header />
        <div id="stuff">
			<h1 class="title">Projects</h1>
                <Project project={projects.Website}/>
                <Project project={projects.License}/>
        </div>
    </div>
</main>