<script lang="ts">
	import {
		Card,
		Description
	} from "./Card";

	export let projects: any = [];
</script>

<div class="projects">
	<h1 class="mt-6">Projects</h1>
	{#each projects as { link, owner, repo, description, languageColor }}
		<a href={link} class="no-underline hover:opacity-100">
			<Card name="{owner === "akisblack" ? "" : `${owner}/`}{repo}" color={languageColor}>
				<Description slot="desc">{description}</Description>
			</Card>
		</a>
	{/each}
	<hr class="border-grey" />
</div>