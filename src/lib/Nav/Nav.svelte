<script lang="ts">
	import ThemeToggle from "./ThemeToggle.svelte";
	import Link from "./Link.svelte";
	import Logo from "./Logo.svelte";
	import { slide } from "svelte/transition"
	import { quintOut } from "svelte/easing";

	const links = [
		{ href: "/services", text: "Services" },
		{ href: "/projects", text: "Projects" },
		{ href: "https://matrix.to/#/@akis:projectsegfau.lt", text: "Matrix", icon: "i-simple-icons:matrix" },
		{ href: "mailto:akisblack0@gmail.com", text: "Email", icon: "i-ic:mail-outline" },
		{ href: "https://github.com/akisblack", text: "GitHub", icon: "i-simple-icons:github" }
	];

	const allowedWidth = 440;

	let width: number;

	$: showMenu = width > allowedWidth;

	const navStyles = "flex items-center justify-between lt-navPlus1:(flex-col items-start) gap-2 p-4 bg-secondary z-50 mb-16";

	const linkContainerStyles = "flex items-center gap-4 bg-secondary children:(no-underline text-grey)";
</script>

<svelte:window bind:innerWidth={width} />

<nav 
	class="{navStyles} sticky w-full top-0 z-50 js"
>
	<!-- Slot for the progress bar -->
	<slot />
	<div class="flex items-center justify-between w-full">
		<Logo />
		<button on:click={() => showMenu = !showMenu}>
			<div class="{showMenu ? "i-ic:outline-close" : "i-ic:outline-menu"} navPlus1:hidden" />
		</button>
	</div>
	{#if showMenu}
		<div class="
			{linkContainerStyles}
			lt-navPlus1:(flex-col !items-start fixed pl-4 pb-4 z-50 w-full left-0 top-16)
			"
			transition:slide={{ duration: 300, easing: quintOut }}
		>
			{#each links as link }
				<Link {link} on:click={() => width < allowedWidth ? (showMenu = false) : (showMenu = true)} />
			{/each}
			<ThemeToggle />
		</div>
	{/if}
</nav>

<noscript>
	<nav class="{navStyles} no-js">
		<Logo />
		<div class="
			{linkContainerStyles}
			lt-navPlus1:(grid grid-cols-2)
			"
		>
			{#each links as link }
				<Link {link} />
			{/each}
		</div>
	</nav>

	<style>
		.js {
			display: none;
		}
	</style>
</noscript>
