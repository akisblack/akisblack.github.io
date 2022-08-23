<script lang="ts">
	import ThemeToggle from "./ThemeToggle.svelte";
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-row">
		<div class="flex sm:flex-row sm:items-center gap-4 flex-col">
			<h1>akisblack</h1>
			<div class="flex flex-row gap-4">
				<a href="https://matrix.to/#/@akis:projectsegfau.lt"><div class="i-simple-icons:matrix" /></a>
				<a href="mailto:akisblack0@gmail.com"><div class="i-ic:mail-outline" /></a>
				<a href="https://github.com/akisblack"><div class="i-simple-icons:github" /></a>
			</div>
		</div>
		<div class="ml-auto">
			<ThemeToggle />
		</div>
	</div>
	<span>Web developer, Linux enthusiast and average Greek.</span>
	<hr class="border-grey" />
</div>

<style>
	a {
		@apply text-grey text-xl;
	}
</style>