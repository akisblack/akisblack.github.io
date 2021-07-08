<svelte:head>
	<link rel="stylesheet" href="css/Projects.css">
</svelte:head>

<script>
    export let websiteText;
</script>

<div id="container">
    <div id="text">
        <a href="/" class="home">Home</a>
        <h1 class="title">Projects</h1>
        <hr class="line">
        <h2 class="sub">This Website</h2>
        <h2 class="sub-text">{websiteText}</h2>

    </div>
</div>