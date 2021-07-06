import Bio from "./Bio.svelte";

const app = new Bio({
  target: document.body,
  props: {
    name: "Bio",
  },
});

export default app;
