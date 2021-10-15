<script>
	import projects from "$lib/Projects.json";
</script>

<div id="projects">
	<h1>Projects</h1>
	{#each projects as { url, icon, name, description, meta: {lang, color, license} }}
		<div class="item">
			<a href={url} class="mdi mdi-{icon} item-name"> {name}</a>
			<h2 class="item-desc">{description}</h2>
			<div class="item-lang">
				<span class="item-lang-color" style="background-color: {color};"></span>
				<span class="item-lang-span">{lang}</span>
			</div>
			<h3 class="mdi mdi-scale-balance item-license"> {license}</h3>
		</div>
	{/each}
</div>

<style lang="postcss">
	.item {
		border-top: 1px solid #fff;
		width: 30em;
		padding: 1em;

		&:last-child {
			border-bottom: 1px solid #fff;
		}
		
		@media (max-width: 690px) {
			width: auto;
		}

		&-name {
			font-size: 22px;
			color: var(--accent);
			text-decoration: none;
		}

		&-desc {
			font-size: 16px;
			color: var(--grey);
			font-weight: 400;
		}

		&-lang {
			&-color {
				height: 12px;
				width: 12px;
				border-radius: 50%;
			}

			&-span {
				color: var(--grey);
			}
		}
	}

	h3 {
		color: var(--grey);
		font-weight: normal;
		font-size: 16px;
	}

	.item-lang-color, .item-lang-span, .license {
		display: inline-block;
	}

	.item-lang, .item-license {
		display: inline-block;
		margin-right: 16px;
	}
</style>