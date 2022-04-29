<script lang="ts">
	import contact from "./Contact.json";
	import {
		Card,
		InfoButtonsPanel,
		InfoButtonLink,
		Description
	} from "./Card";
</script>

<div class="contact">
	<h1 class="mt-6 flex max-w-min items-center self-start">Contact</h1>
	<div>
		{#each contact as { url, title, color, username }}
			<Card name={title} {color}>
				<Description slot="desc">{username}</Description>
				<InfoButtonsPanel slot="btn">
					<InfoButtonLink
						tip="Go to profile"
						icon="i-ic:round-open-in-new"
						{url}
					/>
				</InfoButtonsPanel>
			</Card>
		{/each}
	</div>
	<hr class="text-greyish" />
</div>
