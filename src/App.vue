<template>
  <nav>
    <div>
      <router-link to="/">
        <img ref="logo" :class="{'goNuts': goNuts}" class="logo" alt="Hero" src="./assets/batham-logo.png" @click="onGoNuts()"/>
      </router-link>
    </div>
    <h1 class="logotype">Batham</h1>
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
  height: 15rem;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  .logo {
    opacity: 0.5;
    transition-duration: 500ms;
  }

  .logo:hover {
    opacity: 1;
  }

  h1 {
    font-weight: 100;
    font-family: "ACharmingFont";
    font-size: 15rem;
    color: #000;
    text-shadow: 0px 0px 7px rgba(217, 174, 3, 1);
    margin: 0;
    height: 100px;
    line-height: 7rem;
  }

  * {
    align-self: center;
  }

  :nth-child(1) {
    grid-column-start: 2;
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

}
@media only screen and (max-width: 650px) {
  nav {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 25rem;

    :nth-child(1) {
      grid-column-start: 1;
      justify-self: center;
    }
    :nth-child(2) {
      grid-column-start: 1;
      grid-row-start: 2;
      justify-self: center;
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
