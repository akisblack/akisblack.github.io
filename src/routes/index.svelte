<script>
	import Projects from "$lib/Projects.svelte";
	import Socials from "$lib/Socials.svelte";
	import { Tabs, TabList, TabPanel, Tab } from "$lib/TabsComp";
	import { Card, InfoButtonsPanel, InfoButton, InfoButtonLink, Description } from "$lib/CardComp";
</script>

<div class="container text-center">
	<h1 class="text-accent-secondary text-6xl w-min m-0-auto">
		akis<span class="text-accent-primary">black</span>
		<hr class="border-b-4 border-accent-primary rounded-[1.5px]" />
	</h1>
	<h2 class="text-greyish mt-2 text-3xl font-medium">
		Greek teenager interested in web development
	</h2>

	<Tabs>
		<TabList>
			<Tab>Projects</Tab>
			<Tab>Socials</Tab>
		</TabList>
	
		<TabPanel>
			<Projects />
		</TabPanel>
	
		<TabPanel>
			<Socials />
		</TabPanel>
	</Tabs>
</div>
