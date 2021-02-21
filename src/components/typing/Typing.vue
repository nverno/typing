<template>
  <div class="typing-container">
    <div class="controls">
      <div v-if="state == ts.INACTIVE">
        <button @click="tsession.start">Start</button>
      </div>
      <div v-else-if="Boolean(state & ts.ACTIVE)">
        <button @click="tsession.pause">
          {{ state & ts.PAUSED ? 'Unpause' : "Pause" }}
        </button>
        <!-- <button @click="stop">Stop</button> -->
        <button @click="tsession.reset">Reset</button>
      </div>
      <div v-else-if="Boolean(state & ts.FINISHED)">
        <button @click="tsession.reset">Reset</button>        
      </div>
    </div>

    <Timer :seconds="seconds" />
    <slot />
  </div>
</template>

<script>
import TypingSession, { ts } from './typing_session';
import Timer from '../Timer';
import { reactive, ref, toRefs, } from 'vue';

export default {
  name: 'Typing',
  props: ['codeId'],
  components: {
    Timer,
  },

  setup(props) {
    const state = ref(ts.INACTIVE);
    const setState = (newState) => {
      return (state.value = newState);
    };
    const tsession = reactive(new TypingSession(props.codeId, state, setState));

    let { seconds } = toRefs(tsession);
    return {
      ts,
      tsession,
      state,
      seconds
    };
  },
}
</script>

<style>

</style>
