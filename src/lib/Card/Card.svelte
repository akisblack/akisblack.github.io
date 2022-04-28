<script lang="ts">
	export let color: string;
	export let name: string;
</script>

<div
	class="bg-secondary relative m-10 ml-0 mr-0 flex-grow rounded-lg border-l-4 p-4 pb-3 text-left transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl"
	style="border-color: {color};"
>
	<div class="flex items-center pb-2">
		<p class="text-greyish text-xl font-bold">{name.replace(/\./g, "-")}</p>
		<slot name="btn" />
	</div>
	<slot name="desc" />
</div>
