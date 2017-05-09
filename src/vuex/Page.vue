<template>
  <div>
    <app-counter></app-counter>
    <app-result></app-result>
  </div>
</template>

<script>
  import Counter from './Counter.vue'
  import Result from './Result.vue'

  export default {
    components: {
      appResult: Result,
      appCounter: Counter
    }
  }
</script>