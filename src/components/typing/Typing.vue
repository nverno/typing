<template>
  <div class="typing-container">
    <button @click="start">Start Typing</button>
    <slot />
  </div>
</template>

<script>
import TypingSession from './typing_session';
export default {
  name: 'Typing',
  props: ['codeId'],

  data() {
    return {
      tsession: new TypingSession(this.codeId),
    };
  },

  methods: {
    start() {
      this.tsession.start();
    }
  }
}
</script>

<style>

</style>
