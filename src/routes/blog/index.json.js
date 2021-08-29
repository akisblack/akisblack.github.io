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