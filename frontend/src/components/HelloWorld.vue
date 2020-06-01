<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      count: 4
    }
  },
  methods: {
    increment() { this.count++ },
    decrement() { this.count-- }
  }
};
</script>

<template lang="pug">
  .hello 
    p {{ msg }}
    .counter {{ count }}
    button.increment(@click="increment") Increment
    button.decrement(@click="decrement") Decrement
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
