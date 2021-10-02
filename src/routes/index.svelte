<script>
	import projects from "$lib/Projects.json";
	import socials from "$lib/Socials.json";
	import SvelteTooltip from "svelte-tooltip";
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
			{#each socials as { url, img, title }}
				<SvelteTooltip tip="My {title}" bottom color="var(--bg-light)">
					<a href={url}>
						<img src={img} alt="My {title}" />
					</a>
				</SvelteTooltip>
			{/each}
		</div>
	</div>

	<div id="projects">
		<h1>Projects</h1>
		{#each projects as { url, icon, name, description, meta: {lang, color, license} }}
			<div class="item-div">
				<span class="item-name"><i class="mdi mdi-{icon}" /> {name}</span>
				<h2 class="item-desc">{description}</h2>
				<div class="lang-container">
					<div class="lang-div" style="background-color: {color};"></div>
					<h3 class="lang-span">{lang}</h3>
				</div>
				<h3 class="mdi mdi-bank-outline license"> {license}</h3>
				<div class="tooltip-wrapper">
					<SvelteTooltip tip="Go to repository" top color="var(--bg-light)">
						<a href={url}><img src="/img/github.svg" alt="Go to repository"></a>
					</SvelteTooltip>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	#container {
		width: fit-content;
		padding-left: 4em;
		padding-right: 1em;

		@media (max-width: 690px) {
			padding-left: 1em;
		}
	}

	h1 {
		color: #fff;
		white-space: nowrap;
		font-size: 36px;
	}

	.cursor {
		animation: 1.5s cursor step-end infinite;
		font-family: "Roboto Slab";
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

	#socials {
		color: var(--grey);
		& a {
			display: inline-flex;
			padding-inline-end: 1em;
		}
	}

	.item-div {
		border: 2px solid #fff;
		border-radius: 5px;
		width: 30em;
		height: auto;
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

	h3 {
		color: var(--grey);
		font-weight: normal;
		font-size: 16px;
	}

	.lang-div, .lang-span, .license {
		display: inline-block;
		transform: translateY(15px);
	}

	.lang-container, .license {
		width: 20%;
		display: inline-block;
		@media (max-width: 690px) {
			width: auto;
			display: block;
			transform: translateY(15px);
		}
	}

	.tooltip-wrapper {
		color: var(--grey);
		float: right;
		transform: translateY(25px);
		@media (max-width: 690px) {
			transform: translateY(-25px);
		}
	}
</style>
