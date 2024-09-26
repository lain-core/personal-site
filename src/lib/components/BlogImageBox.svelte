<script lang="ts">
    export const images: {
        src: string,
        alt: string,
    }[] = [];
</script>

<div>
    {#each images as image}
    <img src = {image.src} alt = {image.alt} />
    {/each}
</div>

<style>
    div {
        display: flex;
        gap: 10px;
    }

    img {
        max-width: fit-content;
        max-height: fit-content;
    }
</style>