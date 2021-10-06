<script>
	import socials from "$lib/Socials.json";
	import SvelteTooltip from "svelte-tooltip";
	import Projects from "$lib/Projects.svelte";
</script>

<svelte:head>
	<title>akisblack</title>
</svelte:head>

<div id="container">
	<div class="main">
		<h1>[akisblack@bindozz]$ <span class="cursor">▃</span></h1>
		<p>
			Hi, I am Akis, a web developer from Greece interested in modding of various software and
			videogame consoles. I currently know HTML, CSS and are learning Svelte. JavaScript still isn't
			something I have motivation to learn, but who cares.
		</p>
		<div id="socials">
			<h1>Socials</h1>
			{#each socials as { url, img, title }}
				<a href={url}>
					<SvelteTooltip tip={title} bottom color="var(--bg-light)">
						<img src={img} alt={title} />
					</SvelteTooltip>
				</a>
			{/each}
		</div>
	</div>
	<Projects />
</div>

<style lang="postcss">
	#container {
		padding-left: 4em;
		@media (max-width: 690px) {
			padding-left: 1.5em;
			padding-right: 1.5em;
		}
	}

	.cursor {
		animation: 1.5s cursor step-end infinite;
		font-family: sans-serif;
	}

	@keyframes cursor {
		from,
		to {
			color: transparent;
		}
		50% {
			color: var(--accent);
		}
	}

	p {
		max-width: 35em;
		color: var(--grey);
		font-size: 16px;
		text-align: justify;
	}

	#socials a {
		display: inline-flex;
		margin-right: 1em;
		color: var(--grey);
	}
</style>
