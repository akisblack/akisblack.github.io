<script lang="ts">
	import { afterUpdate } from "svelte";
	import DarkMode from "svelte-dark-mode";

	let theme: "dark" | "light";

	afterUpdate(() => {
		document.documentElement.className = theme;
	});

	let toggle = () => {
		theme = theme === "dark" ? "light" : "dark";
	};

	let classes: string = "";

	export { classes as class };
</script>

<DarkMode bind:theme />

<button
	class="bg-grey text-primary flex h-8 navPlus1:w-8 lt-navPlus1:p-2 gap-2 items-center justify-center rounded {classes}"
	on:click={toggle}
	aria-label="Toggle theme"
>
	<div
		class="i-ic:outline-{theme === 'dark' ? 'light' : 'dark'}-mode h-5 w-5"
	/>
	<span class="navPlus1:hidden">Toggle theme</span>
</button>
