<template>
  <p>{{ seconds }} seconds have elapsed</p>
</template>

<script>
export default {
  name: 'Timer',
  data() {
    return {
      seconds: 0,
    };
  },
  created() {
    setInterval(() => {
      this.seconds++;
    }, 1000);
  }
}
</script>
