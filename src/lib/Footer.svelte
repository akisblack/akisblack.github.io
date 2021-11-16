<script>
	import Icon from "@iconify/svelte";
</script>

<footer>
	<p>
		Made with <a href="https://kit.svelte.dev">SvelteKit</a> and <span>&lt;3</span> by Akis.
		Licensed under the MIT license -
		<a href="https://github.com/akisblack/akisblack.github.io"><Icon icon="feather:code" inline={true} height={16} /> Source Code</a>
		-
		<a href="/about"><Icon icon="eva:question-mark-circle-outline" inline={true} height={16} /> About</a>
	</p>
</footer>

<style lang="postcss">
	footer {
		position: fixed;
		width: 100%;
		padding: 0.1em;
		bottom: 0;
		background-color: var(--bg-normal);
	}

	p {
		color: var(--grey);
	}

	span {
		color: #ff5650;
	}
</style>
