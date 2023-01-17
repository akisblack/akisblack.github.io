<script lang="ts">
	import { copy } from "svelte-copy";

	$: hasJS = typeof Window !== "undefined";
</script>

<div class="services prose">
	<h1 class="mt-6">Services</h1>

	<p>I host a bunch of public services on a VPS.</p>

	<h3>But where are the instances!!!????</h3>

	<p>You can find a list of all services/instances hosted on the VPS on <a href="https://status.akisblack.dev">the status page</a>.</p>

	<h3>Technical information</h3>

	<p>The VPS is provided by OVHcloud, has 1 CPU and 2GB RAM and is located in Germany. It runs Debian 11 and uses Caddy as its web server (fuck NGINX). All the services (except Caddy, Cockpit and ... Docker) run under Docker for improved security and for my own sanity.</p>

	<h3>Why should I use your services?</h3>

	<ul>
		<li>Automatic updates - The services are auto-updated every 3 hours, so you get the latest and greatest.</li>
		<li>EU based - The VPS that hosts these services is located in Germany, an EU country, which has strict privacy laws.</li>
		<li>Your data is not being used - I do not sell or do anything with your data (most of the times i dont know who "you" are).</li>
		<li>Probably secure - While I am quite new to this, I make sure to use the most secure tech, including Debian, Caddy and Docker.</li>
		<li>Stock experience - As a fan of stock Android, I believe having a stock and unmodified experience is key to understanding how a service works and looks.</li>
	</ul>

	{#if hasJS}
		<h3 id="privacy-policy" class="cursor-pointer group flex flex-row items-center w-fit" use:copy={"https://akisblack.dev/services#privacy-policy"}><span class="underline underline-offset-6">Privacy policy</span> <small class="text-sm font-normal opacity-0 group-hover:opacity-100 mt-1 ml-1 transition-opacity duration-250">Click to copy</small></h3>
	{:else}
		<h3 id="privacy-policy">Privacy policy</h3>
	{/if}

	<p>I collect no data whatsoever and couldn't care less about doing so. I have turned off logging inside Caddy which removes all logs with sensitive data. For the services that include user account functionality, I do not look at any databases or anything that exposes sensitive data.</p>

	<p>If you want to contact me about your personal data then look at the navigation bar for my Matrix or Email.</p>

	<hr class="border-grey not-prose mt-6" />
</div>