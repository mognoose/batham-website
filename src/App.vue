<template>
    <nav>
        <router-link to="/">
            <img ref="logo" class="logo" alt="Hero" src="./assets/batham-logo.png" />
        </router-link>
        <div class="some-links">
            <a class="some-btn" href="https://www.instagram.com/batham.band" target="_blank">
                <img class="some-logo" alt="Hero" src="./assets/insta.png" style="width: 3rem" />
                <p>instagram.com/batham.band</p>
            </a>
            <a class="some-btn" href="https://batham.bandcamp.com" target="_blank">
                <img class="some-logo" alt="Hero" src="./assets/bandcamp.png" style="width: 3rem" />
                <p>batham.bandcamp.com</p>
            </a>
        </div>
    </nav>
    <router-view />
</template>

<script>
export default {
    data() {
        return {
            goNuts: false,
        }
    },
    methods: {
        onGoNuts() {
            this.goNuts = !this.goNuts
        }
    },
}
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
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #996600;
}

nav {
    position: relative;
    width: 100vw;
    height: auto;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(0deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.8) 100%);
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;

    .logo {
        opacity: 0.5;
        transition-duration: 500ms;
        width: 6rem;
        margin: 1rem;
    }

    .logo:hover {
        opacity: 1;
    }

    :nth-child(2) {
        grid-column-start: 3;
        align-content: left;
        text-align: left;
    }

    a {
        font-weight: bold;
        color: #d9ae03;

        &.router-link-exact-active {
            color: #d9ae03;
        }
    }

    .some-links {
        box-sizing: border-box;
        max-width: 100vw;
        max-width: 100dvw;
        background-color: #000;
        padding: 1rem;
        border-radius: 1rem;
        display: grid;
        grid-template-columns: 1fr .25fr 1fr .25fr;
        transition-duration: 250ms;
        margin-top: 1rem;
        overflow: auto;

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

            p {}
        }

        .some-btn:hover {
            @media only screen and (min-width: 650px) {
                width: 100%;
                padding-right: 3rem;
            }
        }
    }

    .some-links-hover:hover {
        @media only screen and (min-width: 650px) {
            box-sizing: border-box;
            border: 2px solid #996600;
            background-color: #000;
            color: #996600;
            box-shadow: 0px 0px 7px rgba(217, 174, 3, 1);
        }
    }
}

.hero {

    .logo {
        opacity: 0.5;
        transition-duration: 500ms;
        width: 16rem;
    }

    .logo:hover {
        opacity: 1;
    }

    h1.logotype {
        font-weight: 100;
        font-family: "ACharmingFont";
        font-size: 15rem;
        color: #000;
        text-shadow: 0px 0px 7px rgba(217, 174, 3, 1);
        margin: 0;
        height: 100px;
        line-height: 7rem;
    }
}

@media only screen and (max-width: 650px) {
    nav {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;

        :nth-child(1) {
            grid-column-start: 1;
            justify-self: center;
        }

        :nth-child(2) {
            grid-column-start: 2;
            justify-self: center;

            * {
                margin: 0 .25rem;
            }
        }
    }
}

a {
    font-weight: bold;
    color: #d9ae03;
}

.goNuts {
    position: absolute;
    bottom: 24px;
    left: 17px;
    animation-name: goNuts;
    animation-duration: 1700ms;
}

@keyframes goNuts {
    0% {
        bottom: 24px;
        left: 17px;
        transform: rotate(0deg);
    }

    20% {
        bottom: -180px;
        left: 250px;
        transform: rotate(-90deg);

    }

    30% {
        bottom: -450px;
        left: 50px;
        transform: rotate(-40deg);
    }

    40% {
        bottom: 300px;
        left: -10px;
        transform: rotate(60deg);
    }

    50% {
        bottom: -300px;
        left: 10px;
        transform: rotate(120deg);
    }

    60% {
        bottom: -200px;
        left: -150px;
        transform: rotate(10deg);
    }

    70% {
        bottom: 100px;
        left: -300px;
        transform: rotate(70deg);
    }

    80% {
        bottom: 170px;
        left: -380px;
        transform: rotate(180deg);
    }

    90% {
        bottom: -600px;
        left: 300px;
        transform: rotate(67deg);
    }

    100% {
        bottom: 24px;
        left: 17px;
        transform: rotate(0deg);
    }

}
</style>
