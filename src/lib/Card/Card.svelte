<script lang="ts">
	export let color: string = "";
	export let name: string;
</script>

<div
	class="bg-secondary hover:(-translate-x-1 -translate-y-1 shadow-xl) my-6 rounded border-l-4 p-4 transition-all not-prose"
	style="border-color: {color};"
>
	<div
		class="flex items-center justify-between lt-sm:(flex-col items-start gap-2)"
	>
		<p class="text-grey text-xl font-bold break-words hyphens-auto">
			{name}
		</p>
		<slot name="btn" />
	</div>
	<slot name="desc" />
</div>
