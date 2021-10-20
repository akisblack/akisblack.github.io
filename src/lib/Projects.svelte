<script>
	import projects from "$lib/Projects.json";
</script>

<div class="projects">
	<h1>Projects</h1>
	<div class="item-container">
		{#each projects as { url, icon, name, description, meta: { lang, color, license } }}
			<div class="item">
				<a href={url} class="mdi mdi-{icon} item-name">{name}</a>
				<h2 class="item-desc">{description}</h2>
				<div class="item-metadata">
					<div class="item-metadata-lang">
						<span class="item-metadata-lang-color" style="background-color: {color};" />
						<span class="item-metadata-lang-span">{lang}</span>
					</div>
					<h3 class="mdi mdi-scale-balance item-metadata-license">{license}</h3>
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

		&-name {
			font-size: 22px;
			color: var(--accent);
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
			&::before {
				margin-right: 4px;
			}
		}

		&-desc {
			font-size: 16px;
			color: var(--grey);
			font-weight: 400;
			flex: 1;
		}

		&-metadata {
			margin-top: 0.5em;
			border-top: 1px solid var(--dark-grey);
			&-license {
				display: inline-block;
				&::before {
					margin-right: 4px;
				}
			}

			&-lang {
				display: inline-block;
				margin-right: 16px;
				&-color {
					display: inline-block;
					height: 12px;
					width: 12px;
					border-radius: 50%;
				}

				&-span {
					color: var(--grey);
				}
			}
		}
	}

	.item-container {
		max-width: 50em;
		display: flex;
		flex-flow: row wrap;
	}

	h3 {
		color: var(--grey);
		font-weight: normal;
		font-size: 16px;
	}
</style>
