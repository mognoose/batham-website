<template>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/yBmYnw4j1-k?si=r6X5zwCjeusmdoO4"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen />
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
    mounted() {
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
  body {
    overflow-x: hidden;
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
  