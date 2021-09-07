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
		<h1>PS C:\Users\black> <span class="cursor">|</span></h1>
		<p>
			I am Akis. A dev from Greece interested in web development and modding of various software and
			videogame consoles. I currently know HTML, CSS and are learning Svelte. JavaScript still isn't
			something I have motivation to learn, but who cares.
		</p>
	</div>

	<div class="item-wrapper">
		<div id="projects">
			<h1>Projects</h1>
			<div class="inner-blog-div">
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
			<div class="inner-blog-div">
				{#each articles as { slug, title, summary }}
					<div class="item-div">
						<a rel="prefetch" href="blog/{slug}" class="item-name">{title}</a>
						<h2 class="item-desc">{summary}</h2>
					</div>
				{/each}
			</div>
		</div>

		<div id="socials">
			<h1>Socials</h1>
			{#each socials as { url, img, title }}
				<a href={url}>
					<div class="item-div">
						<img src={img} alt="My {title}" />
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	#container {
		margin: 0 auto;
		width: 80%;
	}

	#socials {
		margin-bottom: 100px;
	}
	.main {
		vertical-align: middle;
	}

	h1 {
		color: #fff;
		white-space: nowrap;
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
		max-width: 80vh;
		color: var(--grey);
		text-align: justify;
	}

	.item-div {
		border: 2px solid #fff;
		border-radius: 5px;
		max-width: 18em;
		padding: 1em;
		margin-bottom: 1em;
	}

	#socials > a {
		width: fit-content;
		display: inline-flex;

		&:not(:first-child) {
			margin-left: 0.5em;
		}
	}
	.item-name {
		font-size: 22px;
	}

	.item-desc {
		font-size: 16px;
		color: var(--grey);
	}

	.item-wrapper > * {
		float: left;
		padding-right: 5em;

		&:nth-child(3) {
			padding-right: 0;

			@media (max-width: 1049px) {
				padding-right: 5em;
			}
		}
	}

	.inner-blog-div {
		height: 22em;
		overflow-x: hidden;
		overflow-y: auto;
		padding-right: 1em;
	}
</style>
