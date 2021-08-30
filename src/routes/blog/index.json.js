/*
Copyright (C) 2021 akisblack
This work is free. You can redistribute it and/or modify it under the terms
of the akisblack Software License, which can be found here: http://github.com/akisblack/akisblack-software-license.
*/

import {getPosts} from './_posts.js';

export async function get() {
	const posts = (await getPosts()).map(post => {
			return {
				title: post.title,
				permalink: post.permalink
			};
		})
	return {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		},
		body: posts
	}
}