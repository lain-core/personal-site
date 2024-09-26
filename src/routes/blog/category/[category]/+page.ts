import type { MarkdownGet } from '$lib/types/markdown.js';

export const load = async ({ fetch, params }) => {
	const { category } = params;
	const response = await fetch(`/api/posts`);
	const allPosts = await response.json();

	const posts = allPosts.filter((post: MarkdownGet) => post.meta.categories.includes(category));

	return {
		category,
		posts
	};
};