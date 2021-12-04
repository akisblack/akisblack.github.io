<script>
	import projects from "$lib/Projects.json";
	import Icon from "@iconify/svelte";
	import SvelteTooltip from "svelte-tooltip";
</script>

<div class="projects">
	<h1 class="text-accent-secondary max-w-min flex items-center mt-6 self-start">
		<Icon icon="feather:code" inline={true} class="mr-2" /> Projects
	</h1>
	<div>
		{#each projects as { url, name, description, meta: { lang, color, license } }}
			<div
				class="relative rounded bg-bg-secondary border-l-4 flex-grow p-4 pb-3 m-10 ml-0 mr-0 text-left transition-all hover:shadow-xl hover:-translate-x-1 hover:-translate-y-1"
				style="border-color: {color};"
			>
				<div class="flex items-center pb-2">
					<p class="text-xl text-greyish font-bold">{name}</p>
					<div class="text-right cursor-pointer ml-auto flex text-greyish">
						<SvelteTooltip tip={lang} top color="#111111">
							<Icon icon="feather:bookmark" inline={true} height={20} class="ml-4" />
						</SvelteTooltip>
						<SvelteTooltip tip={license} top color="#111111">
							<Icon icon="lucide:scale" inline={true} height={20} class="ml-4" />
						</SvelteTooltip>
						<SvelteTooltip tip="GitHub" top color="#111111">
							<a href={url}>
								<Icon icon="feather:github" inline={true} height={20} class="ml-4 text-greyish" />
							</a>
						</SvelteTooltip>
					</div>
				</div>
				<h2 class="text-base text-greyish font-normal pb-2">{description}</h2>
			</div>
		{/each}
	</div>
</div>
