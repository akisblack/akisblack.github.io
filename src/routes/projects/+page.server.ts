import type { PageServerLoad } from "./$types";
import { projects } from "../../stores";
import { get } from "svelte/store";

export const load = (async () => {
	const meta = {
		title: "Projects"
	}

	return {
		projects: get(projects),
		...meta
	};
}) satisfies PageServerLoad;