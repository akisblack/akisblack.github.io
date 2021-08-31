<!--
Copyright (C) 2021 akisblack
This work is free. You can redistribute it and/or modify it under the terms
of the akisblack Software License, which can be found here: http://github.com/akisblack/akisblack-software-license.
-->

<svelte:head>
	<title>Blog | akisblack</title>
	<meta property="og:description" content="Blog | akisblack">
</svelte:head>

<script context="module">
	const posts = import.meta.glob('../../posts/*.md');
	let body = [];
	for (const path in posts) {
		body.push(posts[path]().then(({ metadata }) => metadata));
	}
	export async function load() {
		const posts = await Promise.all(body);
		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	export let posts;
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
	posts.sort(sortByDate);
</script>

<div id="pages-container">
	<h1 class="pages-title">Blog</h1>
	{#each posts as { slug, title, summary }}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
				<div class="pages-container">
					<a rel="prefetch" href="blog/{slug}" class="project-name">{title}</a>
					<h2 class="pages-desc">{summary}</h2>
				</div>
		{/each}
</div>