<script lang="ts">
	import DarkMode from "svelte-dark-mode";
	import type { Theme } from "svelte-dark-mode/types/DarkMode.svelte";
	let theme: Theme;

	let toggle = () => {
		theme = theme === "dark" ? "light" : "dark";
	};

	$: document.documentElement.className = theme;
</script>

<DarkMode bind:theme />

<button
	class="bg-grey text-primary duration-400 flex h-10 w-10 items-center justify-center rounded transition"
	on:click={toggle}
>
	{#if theme === "dark"}
		<i class="i-ic:outline-light-mode" />
	{:else if theme === "light"}
		<i class="i-ic:outline-dark-mode" />
	{/if}
</button>

<style>
	i {
		@apply h-6 w-6;
	}
</style>
