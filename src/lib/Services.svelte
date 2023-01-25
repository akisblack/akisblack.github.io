<script lang="ts">
	import { copy } from "svelte-copy";
	import sanitizeHtml from "sanitize-html";
	import type { PageData } from "../routes/services/$types";

	export let data: PageData;

	$: hasJS = typeof Window !== "undefined";

	$: backgroundColor = "#5cdd8b";

	$: if (!data.announcements.error) {
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
</script>

<div class="services prose max-w-none">
	<h1 class="mt-6">Services</h1>

	<p>I host a bunch of public services on a VPS and the Project Segfault pubnix.</p>

{#if !data.announcements.error}
	{#if data.announcements.incident}
		<div class="flex flex-col break-words rounded p-8 {backgroundColor === "#212529" ? "text-text" : "text-black"}" style="background-color: {backgroundColor};">
			{#if data.announcements.incident.title}
				<span class="text-xl font-semibold">{data.announcements.incident.title}</span>
			{/if}

			{#if data.announcements.incident.content}
				<p>{@html sanitizeHtml(data.announcements.incident.content.replace(/\n/g, "<br />"))}</p>
			{/if}

			<span>Created - {data.announcements.incident.createdDate}</span>
			{#if data.announcements.incident.lastUpdatedDate}
				<span>Updated - {data.announcements.incident.lastUpdatedDate}</span>
			{/if}
		</div>
	{/if}
{:else}
	<p>{data.announcements.message}</p>
{/if}


	<h3>But where are the instances!!!????</h3>

	<p>You can find a list of all services/instances hosted on the VPS on <a href="https://status.akisblack.dev">the status page</a>.</p>

	<h3>Technical information</h3>

	<p>The VPS is provided by OVHcloud, has 1 CPU and 2GB RAM and is located in Germany. It runs Debian 11 and uses Caddy as its web server (fuck NGINX). All the services (except Caddy, Cockpit and ... Docker) run under Docker for improved security and for my own sanity.</p>

	<p>The services that run on the Project Segfault pubnix are hosted on the Soleil Levant server of Project Segfault. You can find more info about those on <a href="https://projectsegfau.lt">the Project Segfault website</a> and <a href="https://wiki.projectsegfau.lt">the Project Segfault wiki</a>.</p>

	<h3>Why should I use your services?</h3>

	<ul>
		<li>Automatic updates - The services are auto-updated every 3 hours, so you get the latest and greatest.</li>
		<li>EU based - The services are hosted in France and Germany, both EU countries, which have strict privacy laws.</li>
		<li>Your data is not being used - I do not sell or do anything with your data (most of the times i dont know who "you" are).</li>
		<li>Probably secure - While I am quite new to this, I make sure to use the most secure tech, including Debian, Caddy and Docker.</li>
		<li>Stock experience - As a fan of stock Android, I believe having a stock and unmodified experience is key to understanding how a service works and looks.</li>
	</ul>

	<h3>I like your services, how do I <span class="bg-amber text-[#141414]">donate</span>?</h3>

	<p>While donations are not required, you can donate to me using Monero (XMR). My address, and QR code are below, but you can also use <a href="https://akisblack.dev">akisblack.dev</a> in an OpenAlias compatible client!</p>

	<details class="p-0">
		<summary>Address</summary>
		<div class="mt-4"><code class="break-words whitespace-normal">49burTxWHyqa9NkkC9PV33D79PrwARMq8aic4XezTx36i66qyLA3afYXicycTTA5st93CV5Rr9AGkKpeE5GPueRN2PkfFQN</code></div>
	</details>

	<details class="p-0">
		<summary>QR code</summary>
		<img src="/monero.png" alt="Monero QR code" class="mt-4" />
	</details>

	{#if hasJS}
		<h3 id="privacy-policy" class="cursor-pointer group flex flex-row items-center w-fit" use:copy={"https://akisblack.dev/services#privacy-policy"}><span class="underline underline-offset-6">Privacy policy</span> <small class="text-sm font-normal opacity-0 group-hover:opacity-100 mt-1 ml-1 transition-opacity duration-250">Click to copy</small></h3>
	{:else}
		<h3 id="privacy-policy">Privacy policy</h3>
	{/if}

	<p>I collect no data whatsoever and couldn't care less about doing so. I have turned off logging inside Caddy which removes all logs with sensitive data. For the services that include user account functionality, I do not look at any databases or anything that exposes sensitive data.</p>

	<p>If you want to contact me about your personal data then look at the navigation bar for my Matrix or Email.</p>

	<hr class="border-grey not-prose mt-6" />
</div>