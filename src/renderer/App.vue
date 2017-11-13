<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'betteryourweb-multimedia-suite'
  }
</script>

<style lang="scss">
  /* SCSS */
  body {
    background: green;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
  }
  #app {
    box-sizing: border-box;
    overflow: auto;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: $primary-bg-color;
    color: $primary-font-color;
  }
</style>
