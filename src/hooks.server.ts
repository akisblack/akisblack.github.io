import map from "$lib/map";

const updateMap = async () => {
	const res = await fetch("https://gh-pinned-repos.egoist.dev/?username=akisblack");
	const data = await res.json();

	map.set("data", data);
};

updateMap();

setInterval(updateMap, 30000);