<template>
    <div class="hero">
        <img ref="logo" class="logo" alt="Hero" src="../assets/batham-logo.png">
        <h1>Batham</h1>
    </div>
</template>

<script setup>
console.log('hero');

const props = defineProps({
    content: {
        type: Object,
        required: true,
    }
})
</script>

<style lang="scss" scoped>
.hero {
    text-align: center;

    .logo {
        opacity: 0.5;
        transition-duration: 500ms;
        width: 20rem;
        margin-bottom: -4rem;
    }

    h1 {
        font-weight: 100;
        font-family: "ACharmingFont";
        font-size: 16rem;
        color: #000;
        text-shadow: 0px 0px 7px rgba(217, 174, 3, 1);
        margin: 5rem 0;
        height: 100px;
        line-height: 7rem;
    }
}
</style>