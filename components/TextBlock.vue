<template>
    <h1>{{ content.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="text" v-html="richTextFormat(content.body)" />
</template>

<script setup>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

defineProps({
    content: {
        type: Object,
        required: true,
    }
})

function richTextFormat(text) {
    return documentToHtmlString(text);
}


</script>

<style lang="scss" scoped>
</style>
