
import type { Markdown, MarkdownGet } from "$lib/types/markdown";

export const fetchMarkdownPosts = async (): Promise<MarkdownGet[]> => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts: MarkdownGet[] = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver() as Markdown;
			const postPath = path.slice(11, -3);
			return {
				meta: metadata,
				path: postPath,
			};
		})
	);

	return allPosts;
};