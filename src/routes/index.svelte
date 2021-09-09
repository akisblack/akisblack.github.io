<script context="module">
	const posts = import.meta.glob("../posts/*.md");
	let body = [];
	for (const path in posts) {
		body.push(posts[path]().then(({ metadata }) => metadata));
	}
	export async function load() {
		const articles = await Promise.all(body);
		return {
			props: {
				articles
			}
		};
	}
</script>

<script>
	import projects from "$lib/Projects.json";
	import socials from "$lib/Socials.json";
	import SvelteTooltip from "svelte-tooltip";

	export let articles;
	function sortByDate(a, b) {
		const dateA = a.date;
		const dateB = b.date;
		let comparison = 0;
		if (dateA > dateB) {
			comparison = 1;
		} else if (dateA < dateB) {
			comparison = -1;
		}
		return comparison * -1;
	}
	articles.sort(sortByDate);
</script>

<svelte:head>
	<title>akisblack</title>
</svelte:head>

<div id="container">
	<div class="main">
		<h1>akisblack@bindozz:~# <span class="cursor">▃</span></h1>
		<p>
			Hi, I am Akis, a web developer from Greece interested in modding of various software and
			videogame consoles. I currently know HTML, CSS and are learning Svelte. JavaScript still isn't
			something I have motivation to learn, but who cares.
		</p>
		<div id="socials">
			{#each socials as { url, img, title }}
				<SvelteTooltip tip="My {title}" bottom color="var(--accent)">
					<a href={url}>
						<img src={img} alt="My {title}" />
					</a>
				</SvelteTooltip>
			{/each}
		</div>
	</div>

	<div class="item-wrapper">
		<div id="projects">
			<h1>Projects</h1>
			<div class="outer-item-div">
				{#each projects as { url, icon, name, description }}
					<div class="item-div">
						<a href={url} class="item-name"><i class="mdi mdi-{icon}" /> {name}</a>
						<h2 class="item-desc">{description}</h2>
					</div>
				{/each}
			</div>
		</div>

		<div id="blog">
			<h1>Blog</h1>
			<div class="outer-item-div">
				{#each articles as { slug, title, summary }}
					<div class="item-div">
						<a rel="prefetch" href="blog/{slug}" class="item-name">{title}</a>
						<h2 class="item-desc">{summary}</h2>
					</div>
				{/each}
			</div>
		</div>
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
		padding-inline-end: 1em;
	}

	.item-wrapper > * {
		float: left;

		&:not(:last-child) {
			margin-right: 2em;
		}
	}

	.item-div {
		border: 2px solid #fff;
		border-radius: 5px;
		width: 16em;
		height: 7em;
		padding: 1em;
		margin-bottom: 1em;
	}

	.item-name {
		font-size: 22px;
	}

	.item-desc {
		font-size: 16px;
		color: var(--grey);
		font-weight: 400;
	}

	#blog {
		margin-bottom: 100px;
	}

	.outer-item-div {
		height: 22em;
		overflow-x: hidden;
		overflow-y: auto;
	}
</style>
