<script>
	let repos = [];

	async function fetchRepos() {
		const url = `https://api.github.com/users/akisblack/repos`;
		const response = await fetch(url)
		repos = await response.json();
	}

	import Icon from "@iconify/svelte";
</script>


<div class="repos" on:show={fetchRepos()}>
	<h1>All Repos</h1>
	<div class="item-container">
		{#each repos as { html_url, name, description, language, license, fork } }
			<div class="item">
				<div class="item-first-div">
					<a href={html_url} class="item-name">{name}</a>
					{#if description}
						<h2 class="item-desc">{description}</h2>
					{/if}
				</div>
				{#if language || license || fork}
					<hr />
				{/if}
				<div class="item-metadata">
					{#if language}
						<span class="item-metadata-lang"><Icon icon="feather:bookmark" inline={true} /> {language}</span>
					{/if}
					
					{#if license}
						<a class="item-metadata-license" href="https://choosealicense.com/licenses/{license?.key}"><Icon icon="lucide:scale" inline={true} /> {license?.spdx_id}</a>
					{/if}

					{#if fork}
						<span class="item-metadata-forked">Forked</span>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.item {
		size: 20em auto;
		padding: 1.5em;
		background-color: var(--bg-light);
		margin: 10px 20px 10px 0;
		border-radius: 8px;
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.16);
		display: flex;
		flex-direction: column;

		&-first-div {
			flex: 1;
		}

		&-name {
			font-size: 22px;
			&::before {
				margin-right: 4px;
			}
		}
		
		&-desc {
			font-size: 16px;
			color: var(--grey);
			font-weight: 400;
		}

		&-metadata {
			margin-top: 0.5em;
			&-license {
				display: inline;
				margin-right: 16px;
				&::before {
					margin-right: 4px;
				}
			}
			&-lang {
				display: inline-block;
				margin-right: 16px;
				color: var(--grey);
				&::before {
					margin-right: 4px;
				}
			}
			&-forked {
				display: inline-block;
				color: #fff;
				background-color: var(--bg-normal);
				border-radius: 5px;
				padding: 0.5em;
				width: fit-content;
			}
		}
	}

	.item-container {
		max-width: 50em;
		display: flex;
		flex-flow: row wrap;
	}

	hr {
		size: 100% 1px;
		background-color: var(--dark-grey);
		border-radius: 8px;
		border: 0;
	}
</style>