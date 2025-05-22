<template>
  <iframe
width="560" height="315" src="https://www.youtube.com/embed/yBmYnw4j1-k?si=r6X5zwCjeusmdoO4"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen />
  <div class="body">
    <section v-for="section in content.fields?.content" :key="section.title">
      <h1>{{ section.fields?.title }}</h1>
      <div class="body" v-html="richTextFormat(section.fields?.body)" />
    </section>
  </div>
</template>

<script setup>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { createClient } from "contentful";

const config = useRuntimeConfig()
const content = ref([]);
const slug = '/';

async function fetchContent() {
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

function richTextFormat(text) {
  return documentToHtmlString(text);
}

fetchContent();

</script>

<style lang="scss">
body {
  overflow-x: hidden;
  color: #d9ae03;
}

#app {
  box-sizing: border-box;
  width: 100vw;
  width: 100dvw;
  margin: 0;
  padding: 0;
}

.body {
  box-sizing: border-box;
  white-space: pre-line;
  font-size: 1.2rem;
  padding: 1em;
  text-align: left;
  width: 52rem;
  margin: 0 auto;
  max-width: 100vw;
  max-width: 100dvw;
  color: rgba(217, 174, 3, 1);

}

iframe {
  max-width: calc(100vw - 4rem);
  max-width: calc(100dvw - 4rem);
  margin: 0 auto;
  padding: 1rem;
  transition-duration: 250ms;
}

.cta-btn {
  box-sizing: border-box;
  max-width: 100vw;
  max-width: 100dvw;
  background-color: #000;
  padding: 1rem;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  transition-duration: 250ms;
  margin-top: 1rem;
  width: auto;

  * {
    margin: auto;
  }

  .some-btn {
    padding: 0;
    height: 3rem;
    width: 3rem;
    overflow: hidden;
    border-radius: 3rem;
    transition: width 500ms ease;
    background-color: #000;
    color: rgba(217, 174, 3, 1);
    border: 2px solid #d9ae03;

    display: grid;
    grid-template-columns: 3rem 1fr auto;

    img {
      margin: 0;
      padding: 0;
    }
  }

  .some-btn:hover {
    width: 100%;
  }
}

.cta-btn-hover:hover {
  box-sizing: border-box;
  border: 2px solid #996600;
  background-color: #000;
  color: #996600;
  box-shadow: 0px 0px 7px rgba(217, 174, 3, 1);

}
</style>
