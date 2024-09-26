<script lang="ts">
	export let data;

	import BlogImageBox from '$lib/components/BlogImageBox.svelte';
</script>

<svelte:head>
	<title>My blog - {data.title}</title>
	<meta property="og:title" content={data.title} />
</svelte:head>

<article>
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>

	<svelte:component this={data.content} />

	{#if data.categories.length}
		<aside>
			<h2>Posted in:</h2>
			<ul>
				{#each data.categories as category}
					<li>
						<a href="/blog/category/{category}">
							{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</article>

<style>
	img {
		max-width: 500px;
		max-height: 500px;
	}
</style>