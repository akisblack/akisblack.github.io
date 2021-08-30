<!--
Copyright (C) 2021 akisblack
This work is free. You can redistribute it and/or modify it under the terms
of the akisblack Software License, which can be found here: http://github.com/akisblack/akisblack-software-license.
-->

<footer>
	<div id="nav">
		<a href="/"><i class="mdi mdi-home-outline"></i> Home</a>
		<a href="../bio"><i class="mdi mdi-help-circle-outline"></i> Bio</a>
		<a href="../projects"><i class="mdi mdi-wrench-outline"></i> Projects</a>
		<a href="../blog"><i class="mdi mdi-book-outline"></i> Blog</a>
	</div>
	<p>Made with <a href="https://kit.svelte.dev"> SvelteKit</a> and <span>&lt;3</span> by Akis.</p>
</footer>

<style>
	footer {
		background-color: var(--pfp-color);
		overflow: hidden;
		position: fixed;
		width: 100%;
		bottom: 0;
	}

	p {
		float: right;
		padding-right: 0.5em;
		font-size: 17px;
		color: var(--green);
	}

	span {
		color: #ff5650;
	}

	#nav > * {
		float: left;
		padding: 1em 0.5em;
	}

	@media screen and (max-width: 539px) {
		#nav {
			float: right;
		}
	}
</style>