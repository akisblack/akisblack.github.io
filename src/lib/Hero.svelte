<script lang="ts">
	import logo from "/logo.png";
	import ThemeToggle from "./ThemeToggle.svelte";
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-row">
		<img src={logo} alt="My logo" class="w-28 rounded-xl" />
		<div class="ml-auto">
			<ThemeToggle />
		</div>
	</div>
	<h1>akisblack</h1>
	<img
		src="https://skillicons.dev/icons?i=css,git,github,html,linux,md,netlify,svelte,windicss,vscode"
		alt="Skill Icons"
	/>
	<hr class="text-greyish" />
</div>
