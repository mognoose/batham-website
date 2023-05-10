<template>
  <nav>
    <div>
      <router-link to="/">
        <img class="logo" alt="Hero" src="./assets/batham-logo.png" />
      </router-link>
    </div>
    <h1 class="logotype">Batham</h1>
  </nav>
  <router-view />
</template>

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

a {
  font-weight: bold;
  color: #d9ae03;
}
</style>
