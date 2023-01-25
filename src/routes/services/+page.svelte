<script lang="ts">
	import Services from "$lib/Services.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<Services {data} />
