<footer>
	<a href="/"><i class="mdi mdi-home-outline" /> Home</a>
	<a href="../bio"><i class="mdi mdi-help-circle-outline" /> Bio</a>
	<a href="../projects"><i class="mdi mdi-wrench-outline" /> Projects</a>
	<a href="../blog"><i class="mdi mdi-book-outline" /> Blog</a>
	<hr />
	<p>Made with <a href="https://kit.svelte.dev">SvelteKit</a>and <span>&lt;3</span> by Akis.</p>
</footer>

<style lang="postcss">
	footer {
		position: fixed;
		width: 99%;
		background-color: var(--pfp-color);
		padding: 1em 0 1em 1%;
		bottom: 0;

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
		color: #fff;
		margin: 0;
	}

	span {
		color: #ff5650;
	}
</style>
