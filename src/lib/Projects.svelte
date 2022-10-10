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
		Description
	} from "./Card";
</script>

	<div class="projects">
		<h1 class="mt-6">Projects</h1>
		{#await promise}
			<span>Loading projects...</span>
		{:then}
			{#each repos as { link, owner, repo, description, languageColor }}
				<a href={link} class="no-underline hover:opacity-100">
					<Card name="{owner === "akisblack" ? "" : `${owner}/`}{repo}" color={languageColor}>
						<Description slot="desc">{description}</Description>
					</Card>
				</a>
			{/each}
		{:catch}
			<span>Failed to load projects.</span>
		{/await}
		<hr class="border-grey" />
	</div>