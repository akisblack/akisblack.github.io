<script>
	import socials from "$lib/Socials.json";
	import SvelteTooltip from "svelte-tooltip";
	import Projects from "$lib/Projects.svelte";
	import Icon from "@iconify/svelte";
</script>

<svelte:head>
	<title>akisblack</title>
</svelte:head>

<div class="container">
	<div class="main">
		<h1>[akisblack@bindozz]$ <span class="cursor">▃</span></h1>
		<p>
			Hi, I am Akis, a web developer from Greece interested in modding of various software and
			videogame consoles. I currently know HTML, CSS and are learning Svelte. JavaScript still isn't
			something I have motivation to learn, but who cares.
		</p>
		<div class="socials">
			<h1>Socials</h1>
			{#each socials as { url, img, title, color }}
				<a href={url}>
					<SvelteTooltip tip={title} top color="var(--bg-light)">
						<Icon icon="{img}" inline={true} color="{color}" height={28} />
					</SvelteTooltip>
				</a>
			{/each}
		</div>
	</div>
	<Projects />
</div>

<style lang="postcss">
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

	.socials a {
		display: inline-flex;
		margin-right: 1em;
		color: var(--grey);
	}
</style>
