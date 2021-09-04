<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		return {
			props: {
				Post: await import(`../../posts/${page.params.slug}.md`)
			}
		};
	}
</script>

<script>
	export let Post;
</script>

<svelte:head>
	<title>Blog/{Post.metadata.title} | akisblack</title>
</svelte:head>

<div id="container">
	<h1>{Post.metadata.title}</h1>
	<h2>{Post.metadata.date}, by {Post.metadata.author}</h2>
	<hr />

	<div class="content">
		<svelte:component this={Post.default} />
	</div>
</div>

<style lang="postcss">
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}

	* :global() {
		color: var(--white);
	}

	h2 {
		font-size: 14px;
		color: #929292;
	}

	#container {
		padding: 0 10% 0 10%;
	}

	hr {
		width: 30px;
		margin: 0px;
	}
</style>
