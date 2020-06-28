<script>
import { mapActions } from "vuex";

export default {
  name: "Surfers",
  data() {
    return {
      surfers: []
    };
  },
  async mounted() {
    this.surfers = await this.fetchSurfers();
  },
  methods: {
    ...mapActions(["fetchSurfers"])
  }
};
</script>

<template lang="pug">
  .container
      h2 Surfers
      p The {{ surfers.length }} surfers here

      ul
        li(v-for="surfer in surfers")
          a(:href="`/surfers/${surfer._id}`") {{ surfer.name }}
</template>
