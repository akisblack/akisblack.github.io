<script>
	export let color;
	export let name;
</script>

<div
	class="relative rounded bg-bg-secondary border-l-4 flex-grow p-4 pb-3 m-10 ml-0 mr-0 text-left transition-all hover:shadow-xl hover:-translate-x-1 hover:-translate-y-1"
	style="border-color: {color};"
>
	<div class="flex items-center pb-2">
		<p class="text-xl text-greyish font-bold">{name}</p>
		<slot name="btn" />
	</div>
	<slot name="desc" />
</div>