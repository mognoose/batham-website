<template>
    <nav>
        <router-link to="/">
            <img ref="logo" class="logo" alt="Hero" src="../assets/batham-logo.png">
        </router-link>
        <div class="some-links">
            <a href="https://youtu.be/yBmYnw4j1-k" class="some-btn">
                <Icon name="uil:youtube" style="color: white" size="2rem" />
                <p>youtube.com/@Bathamband</p>
            </a>
            <a class="some-btn" href="https://www.instagram.com/batham.band" target="_blank">
                <Icon name="uil:instagram" style="color: white" size="2rem" />
                <p>instagram.com/batham.band</p>
            </a>
            <a class="some-btn" href="https://batham.bandcamp.com" target="_blank">
                <Icon name="cib:bandcamp" style="color: white" size="2rem" />
                <p>batham.bandcamp.com</p>
            </a>

        </div>
    </nav>
</template>

<style lang="scss" scoped>
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
        margin: 0 .5rem;
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
        display: flex;
        transition-duration: 250ms;
        margin-top: 1rem;
        overflow: auto;
        justify-content: flex-end;

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
                margin: -.5rem;
                padding: 0;
            }

            .iconify {
                background-color: white;
                margin: .5rem;
            }
        }

        .some-btn:hover {
            @media only screen and (min-width: 650px) {
                width: 16rem;
                padding-right: 3rem;
            }

            .iconify {
                background-color: #d9ae03;
                margin: .5rem;
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
</style>