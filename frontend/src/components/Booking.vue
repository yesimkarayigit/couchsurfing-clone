<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Booking",
  props: {
    msg: String
  },
  methods: {
    ...mapActions(["increment", "decrement"])
  },
  computed: {
    ...mapState(["count"])
  }
};
</script>

<template lang="pug">
  .container 
    p {{ msg }}
    .counter {{ count }}
    button.increment(@click="increment") Increment
    button.decrement(@click="decrement") Decrement
</template>

<style scoped lang="scss"></style>
