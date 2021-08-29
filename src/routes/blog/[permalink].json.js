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
