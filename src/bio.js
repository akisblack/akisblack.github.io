import Bio from "./Bio.svelte";

const app = new Bio({
  target: document.body,
  props: {
    name: "Bio",
    bioText: "Not done yet.",
  },
});

export default app;
