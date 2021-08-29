<svelte:head>
    <link rel="stylesheet" href="/css/pages.css">
	<title>Projects | akisblack</title>
	<meta property="og:description" content="Blog | akisblack">
</svelte:head>

<script context="module">
	export function load({ fetch }) {
		return fetch(`/blog.json`).then(r => r.json()).then(posts => {
			return { props: { posts } };
		});
	}
</script>

<script>
	export let posts;
</script>

<div id="container">
	<h1 class="title">Blog</h1>
	<ul>
		<li>
			{#each posts as post}
				<!-- we're using the non-standard `rel=prefetch` attribute to
						tell Sapper to load the data for the page as soon as
						the user hovers over the link or taps it, instead of
						waiting for the 'click' event -->
				<li><a rel="prefetch" href="blog/{post.permalink}">- {post.title}</a></li>
			{/each}
		</li>
	</ul>
</div>

<style>
	ul {
		list-style: none;
		padding-left: 0em;
	}

	a {
		font-size: 17px;
		color: var(--green);
	}
</style>