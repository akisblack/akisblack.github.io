<script>
	import socials from "$lib/Socials.json";
	import Icon from "@iconify/svelte";
	import { Card, Description } from "$lib/CardComp";
</script>

<div class="socials">
	<h1 class="text-accent-secondary max-w-min flex items-center mt-6 self-start">
		<Icon icon="fluent:chat-12-regular" inline={true} class="mr-2" /> Socials
	</h1>
	<div>
		{#each socials as { url, title, color, username }}
			<a href={url}>
				<Card name={title} {color}>
					<Description slot="desc">{username}</Description>
				</Card>
			</a>
		{/each}
	</div>
</div>
