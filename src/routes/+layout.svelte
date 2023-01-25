<script lang="ts">
	import Hero from "$lib/Hero.svelte";
	import Footer from "$lib/Footer.svelte";
	import "uno.css";
	import "@unocss/reset/tailwind.css";
	import "../app.css";
	import PageTransition from "$lib/PageTransition.svelte";
	import { page } from "$app/stores";
	import type { LayoutData } from "./$types";

	export let data: LayoutData;
</script>

<svelte:head>
	<title>{$page.data.title} | akisblack</title>
	{#if $page.data.description}
		<meta name="description" content={$page.data.description} />
	{/if}
</svelte:head>

<main class="container">
	<Hero />
	<PageTransition pathname={data.pathname}>
		<slot />
	</PageTransition>
	<Footer />
</main>