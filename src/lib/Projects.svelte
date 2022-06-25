<script lang="ts">
	let repos = [];
	async function fetchRepos() {
		const url = `https://gh-pinned-repos.egoist.sh/?username=akisblack`;
		const response = await fetch(url);
		repos = await response.json();
	}

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
	<div on:show={fetchRepos()}>
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
						tip="GitHub"
						icon="i-simple-icons:github"
						url={link}
					/>
				</InfoButtonsPanel>
				<Description slot="desc">{description}</Description>
			</Card>
		{/each}
	</div>
	<hr class="text-greyish" />
</div>
