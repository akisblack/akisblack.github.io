<script>
	import socials from "$lib/Socials.json";
	import Icon from "@iconify/svelte";
	import { Card, InfoButtonsPanel, InfoButtonLink, Description } from "$lib/CardComp";
</script>

<div class="socials">
	<h1 class="text-accent-secondary max-w-min flex items-center mt-6 self-start">
		<Icon icon="fluent:chat-12-regular" inline={true} class="mr-2" /> Socials
	</h1>
	<div>
		{#each socials as { url, title, color, username }}
			<Card name={title} {color}>
				<Description slot="desc">{username}</Description>
				<InfoButtonsPanel slot="btn">
					<InfoButtonLink tip="Go to profile" icon="feather:external-link" {url} />
				</InfoButtonsPanel>
			</Card>
		{/each}
	</div>
</div>
