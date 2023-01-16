<script lang="ts">
	import Projects from "$lib/Projects.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<Projects projects={data.projects} />
