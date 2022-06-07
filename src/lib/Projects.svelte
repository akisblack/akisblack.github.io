<script lang="ts">
	let repos = [];
	async function fetchRepos() {
		const url = `https://api.github.com/users/akisblack/repos`;
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
		{#each repos as { html_url, name, description, language, license, archived, fork }}
			{#if name === "dark-discord-vscode" || name === "browser-copypasta" || name === "svelte-blog"}
				<Card {name}>
					<InfoButtonsPanel slot="btn">
						{#if archived}
							<InfoButton
								tip="Archived"
								icon="i-octicon:archive-16"
							/>
						{/if}
						{#if fork}
							<InfoButton
								tip="Forked"
								icon="i-octicon:repo-forked-16"
							/>
						{/if}
						{#if language}
							<InfoButton
								tip="Made with {language}"
								icon="i-octicon:bookmark-16"
							/>
						{/if}
						{#if license}
							<InfoButton
								tip={license?.name}
								icon="i-octicon:law-16"
							/>
						{/if}
						<InfoButtonLink
							tip="GitHub"
							icon="i-simple-icons:github"
							url={html_url}
						/>
					</InfoButtonsPanel>
					<Description slot="desc">{description}</Description>
				</Card>
			{/if}
		{/each}
	</div>
	<hr class="text-greyish" />
</div>
