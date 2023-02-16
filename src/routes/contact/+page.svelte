<script lang="ts">
import type { ActionData, PageServerData } from "./$types";

export let form: ActionData;
export let data: PageServerData;
</script>

<h1>{data.title}</h1>
<p>{data.description}</p>

<form method="POST" class="flex flex-col gap-5">
	<div>
		<label for="name">Name</label>
		<input type="text" name="name" placeholder="Name" />
	</div>

	<div>
		<label for="email">Email</label>
		<input type="email" name="email" placeholder="name@example.com" />
	</div>

	<div>
		<label for="message">Message</label>
		<textarea name="message" placeholder="[...]" rows="5"></textarea>
	</div>

	{#if form?.success}
		{form.message}
	{/if}

	{#if form?.error}
		{form.message}
	{/if}

	<button type="submit" class="transition-filter duration-200 hover:brightness-75">Send message <div class="i-ic:outline-arrow-circle-right" /></button>
</form>

<style>
	form > div {
		@apply flex flex-col items-start gap-2;
	}

	form > div > label {
		@apply text-xl font-semibold;
	}

	form > div > input, form > div > textarea, form > button {
		@apply w-110 px-2 py-1 bg-secondary rounded flex items-center gap-2 text-lg;
	}
</style>