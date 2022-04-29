<script lang="ts">
	import SvelteTooltip from "svelte-tooltip";

	export let tip: string;
	export let icon: string;
</script>

<SvelteTooltip {tip} top>
	<div class="ml-4 h-5 {icon} text-greyish" />
</SvelteTooltip>
