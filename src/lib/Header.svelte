<header>
	<a href="/"><i class="mdi mdi-home-outline"></i> Home</a>
	<a href="../bio"><i class="mdi mdi-help-circle-outline"></i> Bio</a>
	<a href="../projects"><i class="mdi mdi-wrench-outline"></i> Projects</a>
	<a href="../blog"><i class="mdi mdi-book-outline"></i> Blog</a>
	<hr>
	<p>Made with <a href="https://kit.svelte.dev">SvelteKit</a>and <span>&lt;3</span> by Akis.</p>
</header>

<style lang="postcss">
	header {
		width: 99%;
		background-color: var(--pfp-color);
		padding: 1em 0 1em 1%;

		& a {
			margin: 0 0;
			padding-inline-end: 0.5em;
		}
	}
	hr {
		width: 2em;
		margin-left: 0;
	}

	p {
		color: #FFF;
		margin: 0;
	}

	span {
		color: #ff5650;
	}
</style>