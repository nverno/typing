<template>
  <p>{{ $filters.minutes(seconds)  }}</p>
</template>

<script>
export default {
  name: 'Timer',
  props: ['seconds'],
}
</script>
