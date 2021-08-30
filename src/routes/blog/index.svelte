<!--
Copyright (C) 2021 akisblack
This work is free. You can redistribute it and/or modify it under the terms
of the akisblack Software License, which can be found here: http://github.com/akisblack/akisblack-software-license.
-->

<svelte:head>
    <link rel="stylesheet" href="/css/pages.css">
	<title>Blog | akisblack</title>
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
		{#each posts as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
				<div class="container">
					<a rel="prefetch" href="blog/{post.permalink}" class="project-name">{post.title}</a>
					<h2 class="desc">{post.summary}</h2>
				</div>
		{/each}
</div>