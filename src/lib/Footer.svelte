<script>
	import socials from "$lib/Socials.json";
	import Icon from "@iconify/svelte";
	import SvelteTooltip from "svelte-tooltip";
</script>

<footer class="bg-bg-alt fixed w-full p-4 bottom-0 text-lg">
	<div class="socials flex flex-row justify-center">
		{#each socials as { url, img, title, color }}
			<a href={url} class="ml-4 first:ml-0 text-greyish bg-bg-primary p-3 pb-1 rounded">
					<SvelteTooltip tip={title} top color="#111111">
						<Icon icon={img} {color} height={22} />
					</SvelteTooltip>
			</a>
		{/each}
	</div>
</footer>
