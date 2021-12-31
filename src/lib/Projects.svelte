<script>
	let repos = [];

	async function fetchRepos() {
		const url = `https://api.github.com/users/akisblack/repos`;
		const response = await fetch(url)
		repos = await response.json();
	}

	import Icon from "@iconify/svelte";
	import { Card, InfoButtonsPanel, InfoButton, InfoButtonLink, Description } from "$lib/CardComp";
</script>

<div class="projects">
	<h1 class="text-accent-secondary max-w-min flex items-center mt-6 self-start">
		<Icon icon="feather:code" inline={true} class="mr-2" /> Projects
	</h1>
	<div on:show={fetchRepos()}>
		{#each repos as { html_url, name, description, language, license, archived, fork } }
			{#if (
					name == "akisblack.github.io" || 
					name == "browser-copypasta" || 
					name == "svelte-blog" || 
					name == "CSS-Snippets" || 
					name == "svelte-personal-site-template"
				)
			}
				<Card {name} >
					<InfoButtonsPanel slot="btn">
						{#if archived}
							<InfoButton tip="Archived" icon="feather:archive" />
						{/if}
						{#if fork}
							<InfoButton tip="Forked" icon="octicon:repo-forked-16" />
						{/if}
						<InfoButton tip="Made with {language}" icon="feather:bookmark" />
						<InfoButton tip={license?.name} icon="lucide:scale" />
						<InfoButtonLink tip="GitHub" icon="feather:github" url={html_url} />
					</InfoButtonsPanel>
					<Description slot="desc">{description}</Description>
				</Card>
			{/if}
		{/each}
	</div>
</div>
