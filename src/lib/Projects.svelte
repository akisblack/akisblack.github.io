<script>
	import SvelteTooltip from "svelte-tooltip";
	import projects from "$lib/Projects.json";
</script>

<div id="projects">
	<h1>Projects</h1>
	{#each projects as { url, icon, name, description, meta: {lang, color, license} }}
		<div class="item-div">
			<span class="item-name"><i class="mdi mdi-{icon}" /> {name}</span>
			<div class="tooltip-wrapper">
				<SvelteTooltip tip="Go to repository" top color="var(--bg-light)">
					<a href={url}><img src="/img/github.svg" alt="Go to repository"></a>
				</SvelteTooltip>
			</div>
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
		border: 2px solid #fff;
		border-radius: 5px;
		width: 30em;
		height: fit-content;
		padding: 1em;
		margin-bottom: 1em;
		@media (max-width: 690px) {
			width: 15em;
		}
	}

	.item-name {
		font-size: 22px;
		color: var(--accent);
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
		@media (max-width: 690px) {
			width: auto;
			display: block;
		}
	}

	.tooltip-wrapper {
		color: var(--grey);
		float: inline-end;
	}
</style>