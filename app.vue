<template>
  <NuxtRouteAnnouncer />
  <MainNavigation />
  <section class="body" v-for="section in content.fields?.content" :key="section.title">
    <HeroBlock v-if="computedType(section.fields.type) === 'Video'" :content="section.fields" />
    <TextBlock v-if="computedType(section.fields.type) === 'Rich Text'" :content="section.fields" />
    <!-- <VideoBlock v-if="computedType(section.fields.type) === 'Video'" :content="section.fields" /> -->
  </section>
</template>

<script setup>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { createClient } from "contentful";

const content = ref([]);
const slug = '/';

async function fetchContent() {
  const config = useRuntimeConfig()
  const client = createClient({
    space: config.public.VUE_APP_CTF_SPACE_ID,
    accessToken: config.public.VUE_APP_CTF_CDA_ACCESS_TOKEN,
  });

  const data = await client.getEntries({
    content_type: 'websitePage',
    'fields.slug': slug,
    order: 'sys.createdAt',
    include: 4,
  })

  content.value = data.items[0];
}

const computedType = type => {
  return type[0];
}

fetchContent();

</script>

<style lang="scss">
@font-face {
  font-family: "ACharmingFont";
  src: url("./assets/fonts/Achafont.ttf");
}

body,
html {
  background-color: #000;
  margin: 0;
  padding: 0;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
