<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/style.scss';
</script>

<div>
	<Header />

	<main>
		<slot />
	</main>
	
	<Footer />
	
</div>

<style>
	div {
		width: 100vw;
		height: 100vh;
	}
</style>