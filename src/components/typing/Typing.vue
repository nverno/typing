<template>
  <div class="typing-container">
    <button @click="start">Start</button>
    <button @click="stop">Stop</button>
    <button @click="pause">
      {{ paused ? 'Unpause' : "Pause" }}
    </button>
    <button @click="reset">Reset</button>
    <Timer :seconds="seconds" />
    <slot />
  </div>
</template>

<script>
import TypingSession from './typing_session';
import Timer from '../Timer';

export default {
  name: 'Typing',
  props: ['codeId'],
  components: {
    Timer,
  },

  data() {
    return {
      tsession: new TypingSession(this.codeId),
      paused: false,
      timer: null,
      seconds: 0,
    };
  },
  watch: {
    "tsession.seconds": function(newVal) {
      this.seconds = newVal;
    },
    "tsession.paused": function(newVal) {
      this.paused = newVal;
    }
  },

  methods: {
    start() {
      this.tsession.start();
    },
    stop() {
      this.tsession.stop();
    },
    reset() {
      this.tsession.reset();
    },
    pause() {
      this.tsession.pause();
    },
  }
}
</script>

<style>

</style>
