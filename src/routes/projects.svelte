<!--
Copyright (C) 2021 akisblack
This work is free. You can redistribute it and/or modify it under the terms
of the akisblack Software License, which can be found here: http://github.com/akisblack/akisblack-software-license.
-->

<svelte:head>
	<title>Projects | akisblack</title>
	<meta property="og:description" content="Projects | akisblack">
</svelte:head>

<script>
    import projects from "$lib/Projects.json";
</script>

<div id="pages-container">
    <h1 class="pages-title">Projects</h1>
    {#each projects as project}
        <div class="pages-container">
            <a href={project.url} class="project-name"><i class="{project.icon}"></i> {project.name}</a>
            <h2 class="pages-desc">{project.description}</h2>
        </div>
    {/each}
</div>