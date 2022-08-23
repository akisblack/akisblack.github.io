<script lang="ts">
	let repos = [];
	async function fetchRepos() {
		const url = `https://gh-pinned-repos.egoist.dev/?username=akisblack`;
		const response = await fetch(url);
		repos = await response.json();
	}

	const promise = fetchRepos();

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
		{#await promise}
			<span>Loading projects...</span>
		{:then}
			{#each repos as { link, owner, repo, description, language, languageColor }}
				<Card name="{owner}/{repo}" color={languageColor}>
					<InfoButtonsPanel slot="btn">
						{#if language}
							<InfoButton
								tip="Made with {language}"
								icon="i-octicon:bookmark-16"
							/>
						{/if}
						<InfoButtonLink
							tip="Website"
							icon="i-ic:language"
							url={link}
						/>
					</InfoButtonsPanel>
					<Description slot="desc">{description}</Description>
				</Card>
			{/each}
		{:catch}
			<span>Failed to load projects.</span>
		{/await}
		<hr class="border-grey" />
	</div>