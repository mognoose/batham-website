<template>
  <NuxtRouteAnnouncer />
  <MainNavigation />
  <template v-if="content">
    <section v-for="section in content.fields?.content" :key="section.fields.title" class="body">
      <HeroBlock v-if="computedType(section.fields.type) === 'Hero'" :content="section.fields" />
      <TextBlock v-if="computedType(section.fields.type) === 'Rich Text'" :content="section.fields" />
      <VideoBlock v-if="computedType(section.fields.type) === 'Video'" :content="section.fields" />
    </section>
  </template>
</template>

<script setup>
import { createClient } from "contentful";

const { data: content } = await useAsyncData('page', async () => {
  const config = useRuntimeConfig()
  const client = createClient({
    space: config.public.VUE_APP_CTF_SPACE_ID,
    accessToken: config.public.VUE_APP_CTF_CDA_ACCESS_TOKEN,
  })

  const data = await client.getEntries({
    content_type: 'websitePage',
    'fields.slug': '/',
    order: 'sys.createdAt',
    include: 4,
  })

  return data.items[0] ?? null
})

const computedType = type => type[0];

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
