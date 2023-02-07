import { announcements, statusData, heartbeatApi, projects } from "./stores";
import axios from "axios";
import { Agent } from "https";

const agent = new Agent({
	family: 4
});

const updateMap = async () => {
	try {
		const res = await axios("https://status.akisblack.dev/api/status-page/akisblack", { httpsAgent: agent, timeout: 10000 });

		if (res.status === 200) {
			announcements.set(res.data);
			statusData.set(res.data);
		} else {
			announcements.set({ error: true, message: "Error: " + res.status });
			statusData.set({ error: true, message: "Error: " + res.status });
		}

	} catch (err) {
		announcements.set({ error: true, message: "Error: " + err });
		statusData.set({ error: true, message: "Error: " + err });
	}

	try {
		const res = await axios("https://status.akisblack.dev/api/status-page/heartbeat/akisblack", { httpsAgent: agent, timeout: 10000 });

		if (res.status === 200) {
			heartbeatApi.set(res.data);
		} else {
			heartbeatApi.set({ error: true, message: "Error: " + res.status });
		}

	} catch (err) {
		heartbeatApi.set({ error: true, message: "Error: " + err });
	}

	try {
		const res = await axios("https://gh-pinned-repos.egoist.dev/?username=akisblack", { httpsAgent: agent, timeout: 10000 });

		if (res.status === 200) {
			projects.set(res.data);
		} else {
			projects.set({ error: true, message: "Error: " + res.status });
		}
		
	} catch (err) {
		projects.set({ error: true, message: "Error: " + err });
	}
};

updateMap();

setInterval(updateMap, 30000);