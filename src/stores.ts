import { writable, type Writable } from "svelte/store";

export const announcements: Writable<{}> = writable({});

export const statusData: Writable<{}> = writable({});

export const heartbeatApi: Writable<{}> = writable({});

export const projects: Writable<any[] | {}> = writable([]);
