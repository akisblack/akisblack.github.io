<svelte:head>
	<title>Projects | akisblack</title>
</svelte:head>

<script>
    import projects from "$lib/Projects.json";
</script>

<div id="pages-container">
    <h1 class="pages-title">Projects</h1>
    {#each projects as {url, icon, name, description}}
        <div class="pages-container">
            <a href={url} class="project-name"><i class="mdi mdi-{icon}"></i> {name}</a>
            <h2 class="pages-desc">{description}</h2>
        </div>
    {/each}
</div>