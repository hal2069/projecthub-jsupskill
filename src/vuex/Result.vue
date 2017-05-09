<template>
  <div>
    <p>Counter: {{ counter }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['counter'])
    }
  }
</script>
