<script>
	import Icon from "@iconify/svelte";
	import SvelteTooltip from "svelte-tooltip";

	export let tip;
	export let url;
	export let icon;
</script>

<SvelteTooltip {tip} top color="#111111">
	<a href={url}>
		<Icon {icon} inline={true} height={20} class="ml-4 text-greyish" />
	</a>
</SvelteTooltip>