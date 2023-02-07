import type { PageServerLoad } from "./$types";

export const load = (async () => {
	const meta = {
		title: "Home",
		description: "Web developer, Linux enthusiast and average Greek."
	};

	return {
		...meta
	};
}) satisfies PageServerLoad;
