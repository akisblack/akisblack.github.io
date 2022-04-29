<script lang="ts">
	export let color: string;
	export let name: string;
</script>

<div
	class="bg-secondary hover:(-translate-x-1 shadow-xl) my-10 -translate-y-1 rounded-lg border-l-4 p-4 transition-all"
	style="border-color: {color};"
>
	<div class="flex items-center pb-2">
		<p class="text-greyish text-xl font-bold">{name.replace(/\./g, "-")}</p>
		<slot name="btn" />
	</div>
	<slot name="desc" />
</div>
