/*
Copyright (C) 2021 akisblack
This work is free. You can redistribute it and/or modify it under the terms
of the akisblack Software License, which can be found here: http://github.com/akisblack/akisblack-software-license.
*/

// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells SvelteKit not to do that.
const actualPosts = import.meta.glob('../../posts/*');
const posts = Object.values(actualPosts).map(function (p) { return p().then(transform)});
function transform(p) {
	// convert date string into a proper `Date`
	const date = new Date(p.metadata.date)
	// return the new shape
	return {...p.metadata, date, ...p}
}

export async function findPost(link) {
	const p = await Promise.all(posts);
	return p.find(({permalink}) => permalink === link);
}  

export async function getPosts() {
	const p = await Promise.all(posts);
	return p;
}
