<template>
    <div v-for="(node, index) in content" :key="index" class="hero" v-html="richTextFormat(node)" />
</template>

<script setup>
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

defineProps({
    content: {
        type: Object,
        required: true,
    }
})

function richTextFormat(text) {
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node => `<img class="logo" src="https://${node.data.target.fields.file.url}" />`,
            [BLOCKS.HEADING_1]: node => `<h1>${node.content[0].value}</h1>`,
        }
    }
    return documentToHtmlString(text, options);
}

</script>

<style lang="scss" scoped>
.hero {
    text-align: center;

    :deep(.logo) {
        transition-duration: 500ms;
        width: 20rem;
        margin-bottom: -4rem;
    }

    :deep(h1) {
        font-weight: 100;
        font-family: "ACharmingFont";
        font-size: 16rem;
        color: #000;
        text-shadow: 0px 0px 10px rgba(217, 174, 3, 1);
        margin: 5rem 0;
        height: 100px;
        line-height: 7rem;
    }
}
</style>