<script lang="ts">
	import projects from "./Projects.json";

	import {
		Card,
		InfoButtonsPanel,
		InfoButton,
		InfoButtonLink,
		Description
	} from "./Card";
</script>

<div class="projects">
	<h1 class="mt-6 flex max-w-min items-center self-start">Projects</h1>
	<div>
		{#each projects as { link, name, description, language, color, license }}
			<Card {name} {color}>
				<InfoButtonsPanel slot="btn">
					{#if language}
						<InfoButton
							tip="Made with {language}"
							icon="i-octicon:bookmark-16"
						/>
					{/if}
					<InfoButtonLink
						tip="GitHub"
						icon="i-simple-icons:github"
						url={link}
					/>
					{#if license}
						<InfoButton
							tip={license}
							icon="i-octicon:law-16"
						/>
					{/if}
				</InfoButtonsPanel>
				<Description slot="desc">{description}</Description>
			</Card>
		{/each}
	</div>
	<hr class="text-greyish" />
</div>