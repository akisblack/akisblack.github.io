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
</script>

<DarkMode bind:theme />

<button
	class="bg-grey text-primary duration-400 flex h-10 w-10 items-center justify-center rounded transition"
	on:click={toggle}
>
	<i class="i-ic:outline-{theme === "dark" ? "light" : "dark"}-mode h-6 w-6" />
</button>