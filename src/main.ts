import App from "./App.svelte";
import "uno.css";
import "@unocss/reset/tailwind.css";
import "./lib/app.css";

const app = new App({
	target: document.getElementById("app")
});

export default app;
