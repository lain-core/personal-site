export async function load({ params }) {
	const postid = params.slug;
	const post = await import(`../${postid}.md`);
	const { title, date, categories } = post.metadata;
	const content = post.default;

	return {
		postid,
		content,
		title,
		date,
		categories
	};
}