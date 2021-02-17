<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Code />
  <Timer />
</template>

<script>
import Timer from './components/Timer.vue';
import Code from './components/Code.vue';

export default {
  name: 'App',
  components: {
    Timer,
    Code,
  },
};
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
