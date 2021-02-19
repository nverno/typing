<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Typing codeId="code">
    <Code />
  </Typing>
  <Timer />
</template>

<script>
import Typing from './components/typing/Typing';
import Timer from './components/Timer.vue';
import Code from './components/code/Code.vue';
import './styles/theme.scss';

export default {
  name: 'App',
  components: {
    Timer,
    Typing,
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
