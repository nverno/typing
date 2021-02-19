<template>
  <input v-model="language" type="text">
  <button @click="updateLanguage">Update Language</button>
  <pre>
    <code id="code">{{ code }}</code>
  </pre>
</template>

<script>
import hljs from "highlight.js";

/* NOTE: highlightjs and vue-highlightjs aren't working with vue3 (2/17/21) */
export default {
  name: "HighlightedCode",
  props: ['code'],
  emits: ['highlight-code'],
  data() {
    return {
      language: null,
    };
  },
  mounted() {
    this.highlightAll();
  },
  methods: {
    highlightAll() {
      document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightBlock(block);
        this.language = block.classList.item(block.classList.length - 1);
      });
      this.$emit("highlight-code");
    },
    updateLanguage() {
      let ele = document.querySelector("#code");
      ele.className = `hljs ${this.language}`;
      ele.innerHTML = this.code;
      this.highlightAll();
    }
  }
};
</script>
