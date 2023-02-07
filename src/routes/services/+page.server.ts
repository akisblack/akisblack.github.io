import type { PageServerLoad } from "./$types";
import { announcements, statusData, heartbeatApi } from "../../stores";
import { get } from "svelte/store";

export const load = (() => {
	const meta = {
		title: "Services"
	};

	return {
		announcements: get(announcements),
		statusData: get(statusData),
		heartbeatApi: get(heartbeatApi),
		...meta
	};
}) satisfies PageServerLoad;
