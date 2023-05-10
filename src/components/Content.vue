<template>
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
.body {
  white-space: pre-line;
  font-size: 1.2rem;
  padding: 1em;
  text-align: left;
  max-width: 52rem;
  margin: 0 auto;
}
</style>
