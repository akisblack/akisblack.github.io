<script lang="ts">
	import { Card, Description } from "$lib/Card";

	import type { PageData } from "./$types";

	export let data: PageData;
</script>

{#if !data.projects.error}
	<div class="projects">
		<h1 class="mt-6">Projects</h1>
		{#each data.projects as { link, owner, repo, description, languageColor }}
			<a
				href={link}
				class="no-underline hover:opacity-100"
			>
				<Card
					name="{owner === 'akisblack' ? '' : `${owner}/`}{repo}"
					color={languageColor}
				>
					<Description slot="desc">{description}</Description>
				</Card>
			</a>
		{/each}
	</div>
{:else}
	<p>{data.projects.message}</p>
{/if}
