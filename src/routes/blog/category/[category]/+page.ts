export const load = async ({ fetch, params }) => {
	const { category } = params;
	const response = await fetch(`/api/posts`);
	const allPosts = await response.json();

	const posts = allPosts.filter((post) => post.meta.categories.includes(category));

    console.log(posts);

	return {
		category,
		posts
	};
};