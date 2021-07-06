import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: "akisblack",
		sub: "Greek kid exploring the interwebz",
		green: "#0bf574",
		white: "#fff"
	}
});

export default app;