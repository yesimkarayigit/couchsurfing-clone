<script>
// @ is an alias to /src
import Surfer from '@/components/surfer.vue'

export default {
  name: 'Home',
  components: {
    Surfer
  }
}
</script>

<template lang="pug">
  main
    h1 Hellö!
    surfer
</template>
