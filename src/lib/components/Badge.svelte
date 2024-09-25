<script lang="ts">
	export let src;
	export let alt;
	export let href = '';
	export let title = alt;
</script>

<div>
	{#if href != ''}
		<a {href}>
			<img {src} {alt} {title} />
		</a>
	{:else}
		<img {src} {alt} {title} />
	{/if}
</div>

<style>
	a {
		width: 88px;
		height: 31px;
	}

	img {
		width: 88px;
		height: 31px;
	}
</style>
