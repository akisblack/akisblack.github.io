import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
	return {
		projects: await fetch("/api/projects").then(
			(res) => res.json()
		)
	};
};