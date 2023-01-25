import map from "$lib/map";
import axios from "axios";
import { Agent } from "https";

const agent = new Agent({
	family: 4
});

const updateMap = async () => {
	try {
		const announcements = await axios("https://status.akisblack.dev/api/status-page/akisblack", { httpsAgent: agent });

		if (announcements.status === 200) {
			map.set("announcements", announcements.data);
		} else {
			map.set("announcements", { error: true, message: "Error: " + announcements.status });
		}

	} catch (err) {
		map.set("announcements", { error: true, message: "Error: " + err });
	}

	try {
		const projects = await axios("https://gh-pinned-repos.egoist.dev/?username=akisblack", { httpsAgent: agent });

		if (projects.status === 200) {
			map.set("projects", projects.data);
		} else {
			map.set("projects", { error: true, message: "Error: " + projects.status });
		}
		
	} catch (err) {
		map.set("projects", { error: true, message: "Error: " + err });
	}
};

updateMap();

setInterval(updateMap, 30000);