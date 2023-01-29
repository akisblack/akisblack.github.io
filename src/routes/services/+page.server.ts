import type { PageServerLoad } from "./$types";
import axios from "axios";
import { Agent } from "https";

const agent = new Agent({
	family: 4
});

export const load: PageServerLoad = async ({ fetch }) => {
	const meta = {
		title: "Services"
	}

	return {
		announcements: await fetch("/api/announcements").then(
			(res) => res.json()
		),
		statusData: await (await axios("https://status.akisblack.dev/api/status-page/akisblack", { httpsAgent: agent })).data,
		heartbeatApi: await (await axios("https://status.akisblack.dev/api/status-page/heartbeat/akisblack", { httpsAgent: agent })).data,
		...meta
	};
};