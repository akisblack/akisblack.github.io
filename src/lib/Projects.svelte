<script>
	import SvelteTooltip from "svelte-tooltip";
	import projects from "$lib/Projects.json";
</script>

<div id="projects">
	<h1>Projects</h1>
	{#each projects as { url, icon, name, description, meta: {lang, color, license} }}
		<div class="item-div">
			<a href={url} class="mdi mdi-{icon} item-name"> {name}</a>
			<h2 class="item-desc">{description}</h2>
			<div class="lang-container">
				<span class="lang-div" style="background-color: {color};"></span>
				<span class="lang-span">{lang}</span>
			</div>
			<h3 class="mdi mdi-bank-outline license"> {license}</h3>
		</div>
	{/each}
</div>

<style lang="postcss">
	.item-div {
		border-top: 1px solid #fff;
		width: 30em;
		padding: 1em;
		&:last-child {
			border-bottom: 1px solid #fff;
		}
		@media (max-width: 690px) {
			width: auto;
		}
	}

	.item-name {
		font-size: 22px;
		color: var(--accent);
		text-decoration: none;
	}


	.item-desc {
		font-size: 16px;
		color: var(--grey);
		font-weight: 400;
	}

	.lang-div {
		height: 12px;
		width: 12px;
		border-radius: 50%;
	}

	.lang-span {
		color: var(--grey);
	}

	h3 {
		color: var(--grey);
		font-weight: normal;
		font-size: 16px;
	}

	.lang-div, .lang-span, .license {
		display: inline-block;
	}

	.lang-container, .license {
		width: 33%;
		display: inline-block;
	}
</style>