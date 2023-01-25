<script lang="ts">
	import ThemeToggle from "./ThemeToggle.svelte";
	import { page } from "$app/stores";

	$: showThemeToggle = typeof Window !== "undefined";

	$: isIndex = $page.url.pathname === "/";

	$: isServices = $page.url.pathname === "/services";
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-row">
		<div class="flex sm:flex-row sm:items-center gap-4 flex-col">
			{#if isIndex}
				<h1>akisblack</h1>
			{:else}
				<a href="/" class="!text-4xl !font-bold underline-offset-6">akisblack</a>
			{/if}
			<div class="flex flex-row items-center gap-3">
				<a href="https://matrix.to/#/@akis:projectsegfau.lt" aria-label="Matrix"><div class="i-simple-icons:matrix" /></a>
				<a href="mailto:akisblack0@gmail.com" aria-label="Email"><div class="i-ic:mail-outline" /></a>
				<a href="https://github.com/akisblack" aria-label="GitHub"><div class="i-simple-icons:github" /></a>
				{#if !isServices}
					<a href="/services" class="!text-lg">Services</a>
				{/if}
			</div>
		</div>
		{#if showThemeToggle}
			<div class="ml-auto">
				<ThemeToggle />
			</div>
		{/if}
	</div>
	<span>Web developer, Linux enthusiast and average Greek.</span>
	<div class="flex flex-row gap-2 text-2xl">
		<div class="i-simple-icons:svelte" />
		<div class="i-simple-icons:unocss" />
		<div class="i-simple-icons:typescript" />
		<div class="i-simple-icons:docker" />
		<div class="i-simple-icons:git" />
		<div class="i-simple-icons:linux" />
		<div class="i-simple-icons:mongodb" />
	</div>
	<hr class="border-grey" />
</div>

<style>
	a {
		@apply text-grey text-xl;
	}
</style>