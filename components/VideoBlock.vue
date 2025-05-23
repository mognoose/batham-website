<template>
    <div v-for="(link, index) in links" :key="`link-${index}`" class="video-container">
        <iframe
            width="560"
            height="315"
            :src="link"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        />
    </div>
</template>

<script setup>

const props = defineProps({
    content: {
        type: Object,
        required: true,
    }
})

const links = computed(() => {
    if (!props.content.body?.content) return;

    const links = props.content.body.content[0].content.filter(c => c.nodeType === 'hyperlink');

    return links.map(link => link.data.uri);
})

</script>

<style lang="scss">
.video-container {
    text-align: center;

    iframe {
        transition-duration: 250ms;
    }
}
</style>
