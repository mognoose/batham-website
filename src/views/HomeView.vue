<template>
  <div class="hero">
    <img alt="Hero" src="../assets/batham-claymortar-header.png" />
    <div class="overlay" />
  </div>
  <Content />
</template>

<script>
import Content from "../components/Content.vue";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {

  components: {
    Content,
  },
  
}
</script>
<style lang="scss">
.hero {
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;

  img {
    grid-column-start: 1;
    grid-row-start: 1;
    width: 100vw;
  }

  .overlay {
    grid-column-start: 1;
    grid-row-start: 1;
    align-self: end;
    display: relative;
    bottom: 10rem;
    z-index: 2;
    width: 100vw;
    height: 20rem;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 50%,
      rgba(0, 0, 0, 1) 100%
    );
  }
}
</style>
