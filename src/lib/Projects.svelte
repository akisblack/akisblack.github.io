<script>
	import projects from "$lib/Projects.json";
	import Icon from "@iconify/svelte";
	import { Card, InfoButtonsPanel, InfoButton, InfoButtonLink, Description } from "$lib/CardComp";
</script>

<div class="projects">
	<h1 class="text-accent-secondary max-w-min flex items-center mt-6 self-start">
		<Icon icon="feather:code" inline={true} class="mr-2" /> Projects
	</h1>
	<div>
		{#each projects as { url, name, description, meta: { lang, color, license } }}
			<Card {name} {color}>
				<InfoButtonsPanel slot="btn">
					<InfoButton tip={lang} icon="feather:bookmark" />
					<InfoButton tip={license} icon="lucide:scale" />
					<InfoButtonLink tip="GitHub" icon="feather:github" {url} />
				</InfoButtonsPanel>
				<Description slot="desc">{description}</Description>
			</Card>
		{/each}
	</div>
</div>
