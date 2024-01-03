<template>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/yBmYnw4j1-k?si=r6X5zwCjeusmdoO4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <div class="body">
    <a class="cta-btn" href="https://www.instagram.com/batham.band" target="_blank">
      <img class="logo" alt="Hero" src="./../assets/insta.png" style="width: 50px" />
      <p>instagram.com/batham.band</p>
    </a>
    <a class="cta-btn" href="https://batham.bandcamp.com" target="_blank">
      <img class="logo" alt="Hero" src="./../assets/bandcamp.png" style="width: 50px" />
      <p>batham.bandcamp.com</p>
    </a>
  </div>
  <div class="body">
    <h1>{{ content.fields?.title }}</h1>
  </div>
  <div class="body" v-html="richTextFormat(content.fields?.body)" />

</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { createClient } from "contentful";

export default {
  data() {
    return {
      name: 'Content',
      section: 'Frontpage',
      content: {},
    };
  },
  mounted () {
    this.fetchContent();
  },
  methods: {

    async fetchContent() {
      const client = createClient({
        space: process.env.VUE_APP_CTF_SPACE_ID,
        accessToken: process.env.VUE_APP_CTF_CDA_ACCESS_TOKEN,
      });
      return Promise.all([
        client.getEntries({
          content_type: "websiteContent",
          "fields.section": this.section,
          order: "sys.createdAt",
          include: 4,
        }),
      ])
        .then(([content]) => {
          console.log(content);
          [this.content] = content.items;
          // this.setLoading(false);
        })
        .catch(console.error);
    },
    richTextFormat(text) {
      return documentToHtmlString(text);
    },
  },
}
</script>

<style lang="scss">
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
  
}

iframe {
  max-width: calc(100vw - 4rem);
  max-width: calc(100dvw - 4rem);
  margin: 0 auto;
  border: 2px solid #996600;
  padding: 1rem;
  box-shadow: 0px 0px 7px rgba(217, 174, 3, 1);
  transition-duration: 250ms;
}

iframe:hover {
  border: 2px solid #996600;
  padding: 1rem;
  box-shadow: 0px 0px 13px rgba(217, 174, 3, 1);
}

.cta-btn {
  box-sizing: border-box;
  max-width: 100vw;
  max-width: 100dvw;
  margin: 2rem auto;
  border: 2px solid #d9ae03;
  background-color: #996600;
  color: #000;
  padding: 1rem;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr 6fr;
  width: fit-content;
  margin: 0 auto;
  justify-items: center;
  transition-duration: 250ms;
  margin-top: 1rem;

  * {
    margin: auto;
    justify-self: center;
  }
}

.cta-btn:hover {
  box-sizing: border-box;
  border: 2px solid #996600;
  background-color: #000;
  color: #996600;
  box-shadow: 0px 0px 7px rgba(217, 174, 3, 1);

}

</style>
