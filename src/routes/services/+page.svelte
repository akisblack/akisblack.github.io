<script lang="ts">
	import sanitizeHtml from "sanitize-html";
	import type { PageData } from "./$types";
	import { Card } from "$lib/Card";

	export let data: PageData;

	$: backgroundColor = "#5cdd8b";

	$: if (data.announcements) {
		if (!data.announcements.error) {
			if (data.announcements.incident) {
				if (data.announcements.incident.style === "info") {
					backgroundColor = "#0dcaf0";
				} else if (data.announcements.incident.style === "warning") {
					backgroundColor = "#f8a306";
				} else if (data.announcements.incident.style === "danger") {
					backgroundColor = "#dc3545";
				} else if (data.announcements.incident.style === "primary") {
					backgroundColor = "#5cdd8b";
				} else if (data.announcements.incident.style === "light") {
					backgroundColor = "#f8f9fa";
				} else if (data.announcements.incident.style === "dark") {
					backgroundColor = "#212529";
				}
			}
		}
	}
</script>

<div class="services prose max-w-none">
	<h1>Services</h1>

	<p>
		I host a bunch of public services on a VPS and the Project Segfault
		pubnix.
	</p>

	{#if !data.announcements.error}
		{#if data.announcements.incident}
			<div
				class="flex flex-col break-words rounded p-8 {backgroundColor ===
				'#212529'
					? 'text-text'
					: 'text-black'}"
				style="background-color: {backgroundColor};"
			>
				{#if data.announcements.incident.title}
					<span class="text-xl font-semibold"
						>{data.announcements.incident.title}</span
					>
				{/if}

				{#if data.announcements.incident.content}
					<p>
						{@html sanitizeHtml(
							data.announcements.incident.content.replace(
								/\n/g,
								"<br />"
							)
						)}
					</p>
				{/if}

				<span>Created - {data.announcements.incident.createdDate}</span>
				{#if data.announcements.incident.lastUpdatedDate}
					<span
						>Updated - {data.announcements.incident
							.lastUpdatedDate}</span
					>
				{/if}
			</div>
		{/if}
	{:else}
		<p>{data.announcements.message}</p>
	{/if}

	<h3>But where are the instances!!!????</h3>

	<details
		class="px-0 not-prose"
		open
	>
		<summary class="m-2 ml-0">Click here to reveal the instances</summary>
		{#if !data.statusData.error && !data.heartbeatApi.error}
			{#each data.statusData.publicGroupList as category}
				<h4>{category.name}</h4>
				{#each category.monitorList as instance}
					{@const isUp =
						data.heartbeatApi.heartbeatList[
							instance.tags[0].monitor_id
						][0].status === 1
							? true
							: false}
					{@const uptimeRaw =
						data.heartbeatApi.uptimeList[
							instance.tags[0].monitor_id + "_" + 24
						] * 100}
					{@const uptime =
						uptimeRaw % 1 === 0 ? uptimeRaw : uptimeRaw.toFixed(2)}
					{@const ping =
						data.heartbeatApi.heartbeatList[
							instance.tags[0].monitor_id
						][0].ping}
					{@const itemsInArray = instance.name.split(" ").length}
					{@const pillStyles = "bg-opacity-20 rounded px-[2px] w-fit"}
					{@const green = "bg-green-bg text-green-text"}
					{@const red = "bg-red-bg text-red-text"}
					<a
						href={"https://" +
							instance.name
								.split(" ")
								[itemsInArray === 3 ? 2 : 1].split("(")[1]
								?.split(")")[0]}
						class="{isUp
							? ''
							: 'pointer-events-none'} no-underline hover:brightness-100"
					>
						<Card
							name={itemsInArray === 3
								? instance.name.split(" ")[0] +
								  " " +
								  instance.name.split(" ")[1]
								: instance.name.split(" ")[0]}
							color={instance.tags[0].color}
						>
							<div
								class="flex flex-row flex-wrap gap-1"
								slot="btn"
							>
								{#if !isUp}
									<div class="{red} {pillStyles}">Down</div>
								{/if}
								<div
									class="{uptime !== 0
										? green
										: red} {pillStyles}"
								>
									{uptime + "%"}
								</div>
								{#if isUp}
									<div class="{green} {pillStyles}">
										{ping + "MS"}
									</div>
								{/if}
								<div
									class="bg-[{instance.tags[0]
										.color}] text-[{instance.tags[0]
										.color}] {pillStyles}"
								>
									{instance.tags[0].name}
								</div>
							</div>
						</Card>
					</a>
				{/each}
			{/each}
		{:else}
			{#if data.statusData.error}
				<p>{data.statusData.message}</p>
			{/if}
			{#if data.heartbeatApi.error}
				<p>{data.heartbeatApi.message}</p>
			{/if}
		{/if}
	</details>

	<p>...or <a href="https://status.akisblack.dev">on the status page</a>.</p>

	<h3>Technical information</h3>

	<p>
		The VPS is provided by OVHcloud, has 1 CPU and 2GB RAM and is located in
		Germany. It runs Debian 11 and uses Caddy as its web server (fuck
		NGINX). All the services (except Caddy, Cockpit and ... Docker) run
		under Docker for improved security and for my own sanity.
	</p>

	<p>
		The services that run on the Project Segfault pubnix are hosted on the
		Soleil Levant server of Project Segfault. You can find more info about
		those on <a href="https://projectsegfau.lt"
			>the Project Segfault website</a
		>
		and
		<a href="https://wiki.projectsegfau.lt">the Project Segfault wiki</a>.
	</p>

	<h3>Why should I use your services?</h3>

	<ul>
		<li>
			Automatic updates - The services are auto-updated every 3 hours, so
			you get the latest and greatest.
		</li>
		<li>
			EU based - The services are hosted in France and Germany, both EU
			countries, which have strict privacy laws.
		</li>
		<li>
			Your data is not being used - I do not sell or do anything with your
			data (most of the times i dont know who "you" are).
		</li>
		<li>
			Probably secure - While I am quite new to this, I make sure to use
			the most secure tech, including Debian, Caddy and Docker.
		</li>
		<li>
			Stock experience - As a fan of stock Android, I believe having a
			stock and unmodified experience is key to understanding how a
			service works and looks.
		</li>
	</ul>

	<h3>
		I like your services, how do I <span class="bg-amber text-[#141414]"
			>donate</span
		>?
	</h3>

	<p>
		While donations are not required, you can donate to me using Monero
		(XMR). My address, and QR code are below, but you can also use <a
			href="https://akisblack.dev">akisblack.dev</a
		> in an OpenAlias compatible client!
	</p>

	<details class="p-0">
		<summary>Address</summary>
		<div class="mt-4">
			<code class="break-words whitespace-normal"
				>49burTxWHyqa9NkkC9PV33D79PrwARMq8aic4XezTx36i66qyLA3afYXicycTTA5st93CV5Rr9AGkKpeE5GPueRN2PkfFQN</code
			>
		</div>
	</details>

	<details class="p-0">
		<summary>QR code</summary>
		<img
			src="/monero.png"
			alt="Monero QR code"
			class="mt-4"
		/>
	</details>
</div>
