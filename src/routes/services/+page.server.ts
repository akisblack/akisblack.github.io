import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
	const meta = {
		title: "Services"
	}

	return {
		announcements: await fetch("/api/announcements").then(
			(res) => res.json()
		),
		...meta
	};
};