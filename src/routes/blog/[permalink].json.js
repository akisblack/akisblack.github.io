/*
Copyright (C) 2021 akisblack
This work is free. You can redistribute it and/or modify it under the terms
of the akisblack Software License, which can be found here: http://github.com/akisblack/akisblack-software-license.
*/

import {findPost} from './_posts.js';

export async function get({params}) {
	// the `permalink` parameter is available because
	// this file is called [permalink].json.js
	const { permalink } = params;

	const post = await findPost(permalink);

	if (post) {
		return {
			headers: {
				'Content-Type': 'application/json'
			},
			status: 200,
			body: post
		}
	} else {
		return {
			headers: {
				'Content-Type': 'application/json'
			},
			status: 404,
			body: {
				message: "Not Found"
			}
		}
	}
}
