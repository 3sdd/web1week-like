<template>
  <div id="app">
    <LikeComponent/>
  </div>
</template>

<script>
import LikeComponent from "./components/LikeComponent.vue"

export default {
  name: 'App',
  components: {
    LikeComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
