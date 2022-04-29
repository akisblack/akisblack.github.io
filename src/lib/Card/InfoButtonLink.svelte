<script lang="ts">
	import SvelteTooltip from "svelte-tooltip";

	export let tip: string;
	export let url: string;
	export let icon: string;
</script>

<SvelteTooltip {tip} top>
	<a href={url}>
		<div class="text-greyish ml-4 {icon} h-5" />
	</a>
</SvelteTooltip>
