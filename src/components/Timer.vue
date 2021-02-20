<template>
  <p>{{ seconds }} seconds elapsed</p>
</template>

<script>
export default {
  name: 'Timer',
  props: ['seconds'],
}
</script>
