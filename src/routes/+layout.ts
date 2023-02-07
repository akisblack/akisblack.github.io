import type { LayoutLoad } from "./$types";

export const load = (async ({ url }) => {
	return {
		pathname: url.pathname
	};
}) satisfies LayoutLoad;
