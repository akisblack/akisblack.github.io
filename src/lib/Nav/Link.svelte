<script lang="ts">
	export let link: {
		href: string;
		text: string;
		icon?: string;
	};

	import { page } from "$app/stores";
</script>

<a
	href={link.href}
	class="flex items-center gap-1"
	on:click
	class:text-accent={link.href !== "/"
		? $page.url.pathname.match(link.href)
		: link.href === $page.url.pathname}
	aria-label={link.text}
>
	{#if link.icon}
		<div class={link.icon} />
	{/if}
	<span class:navPlus1:hidden={link.icon}>{link.text}</span>
</a>
