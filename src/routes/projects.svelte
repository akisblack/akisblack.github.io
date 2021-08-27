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
    import Project from '$components/Projects.svelte';
    import projects from "$components/Projects.json";
</script>

<div id="container">
    <h1 class="title">Projects</h1>
    <Project project={projects.Website}/>
    <Project project={projects.License}/>
</div>