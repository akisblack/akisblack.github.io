import Projects from "./Projects.svelte";

const app = new Projects({
  target: document.body,
  props: {
    name: "Projects",
    websiteText: "I am using this website as a chance to make my Svelte skills better.",
  },
});

export default app;
