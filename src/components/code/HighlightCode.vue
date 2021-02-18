<template>
  <pre>
    <code class="javascript">{{ code }}</code>
  </pre>
</template>

<script>
import hljs from "highlight.js";
import { onMounted } from "vue";

/* NOTE: highlightjs and vue-highlightjs aren't working with vue3 (2/17/21) */
export default {
  name: "HighlightedCode",
  props: ['code'],
  setup() {
    onMounted(() => {
      document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightBlock(block);
      });
    });
  },
};
</script>
