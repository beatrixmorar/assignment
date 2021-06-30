<template>
  <div id="app" class="app">
      <header>
          <img class="logo" src="./assets/logo_head_experts.svg" alt="logo" @click="home">
      </header>
      <div class="main" id="main">
          <router-view></router-view>
      </div>
      <footer>
          <img class="copyright" src="./assets/a_star_alliance_member.svg" alt="copyright">
      </footer>
  </div>
</template>

<script>

export default {
    name: 'App',
    methods: {
        home() {
            if (this.$route.path != '/home') {
              this.$router.push('home')
            }
        }
    }
};
</script>

<style>
:root{
    --bg-image-url: url('./assets/bg_home.jpg')
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 20px;
    background-image: var(--bg-image-url);
    background-size: cover;
    align-items: center;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
    'header'
    'main'
    'footer';
}

header {
    grid-area: header;
}

footer {
    grid-area: footer;
}

#app > main {
    grid-area: main;
    padding: 0px;
    overflow: auto;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr minmax(0, 600px) 1fr;
}

body {
    font-family: sans-serif;
    margin: 0;
}

header, footer {
    background-color: white;
}

img.logo {
    margin: 15px 0px 10px 50px
}

img.copyright {
    max-height: 20px;
    max-width: 200px;
    margin: 10px;
    /*position: fixed;*/
    /*right: 0;*/
}

.start-btn {
    background-color: darkblue;
    color: white;
    padding: 10px 15px;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
}
</style>
