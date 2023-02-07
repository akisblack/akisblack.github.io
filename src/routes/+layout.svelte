<script lang="ts">
	import Footer from "$lib/Footer.svelte";
	import "uno.css";
	import "@unocss/reset/tailwind.css";
	import "../app.css";
	import PageTransition from "$lib/PageTransition.svelte";
	import { page, navigating } from "$app/stores";
	import type { LayoutData } from "./$types";
	import Nav from "$lib/Nav/Nav.svelte";
	import PageProgressBar from '$lib/PageProgressBar.svelte';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>{$page.data.title} | akisblack</title>
	{#if $page.data.description}
		<meta name="description" content={$page.data.description} />
	{/if}
</svelte:head>


<Nav>
	{#if $navigating}
		<PageProgressBar />
	{/if}
</Nav>

<main class="container">
	<PageTransition pathname={data.pathname}>
		<slot />
	</PageTransition>
</main>

<Footer />