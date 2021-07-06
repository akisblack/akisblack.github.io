import Projects from "./Projects.svelte";

const app = new Projects({
  target: document.body,
  props: {
    name: "Projects",
  },
});

export default app;
