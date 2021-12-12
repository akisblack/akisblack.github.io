<script>
	import { getContext } from "svelte";
	import { TABS } from "./Tabs.svelte";

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<button class:selected={$selectedTab === tab} on:click={() => selectTab(tab)}>
	<slot />
</button>

<style>
	button {
		@apply bg-bg-secondary border-b-2 border-solid border-greyish text-accent-secondary rounded rounded-b-sm text-xl p-1 ml-2 first:ml-0;
	}

	.selected {
		@apply border-accent-primary;
	}
</style>
