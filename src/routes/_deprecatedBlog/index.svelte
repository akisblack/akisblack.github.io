<script context="module">
	const posts = import.meta.glob("./posts/*.md");
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

<style lang="postcss">
	#blog {
		margin-bottom: 100px;
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

	.outer-item-div {
		height: 22em;
		overflow-x: hidden;
		overflow-y: auto;
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
</style>