<template>
  <div id="app">
      <header>
          <img class="logo" src="./assets/logo_head_experts.svg" alt="logo" @click="$router.push('home')">
      </header>
    <router-view></router-view>
      <footer>
          <img class="copyright" src="./assets/a_star_alliance_member.svg" alt="copyright">
      </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
    margin: 0;
}

footer {
    height: 1vh;
}

img.logo {
    margin: 15px 0px 10px 50px
}

img.copyright {
    height: 20px;
    width: auto;
    margin: 20px 5px 0px;
    position: fixed;
    right: 0;
}

.start-btn {
    background-color: darkblue;
    color: white;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;
}
</style>
