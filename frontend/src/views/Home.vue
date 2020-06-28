<script>
// @ is an alias to /src
import Hosts from "@/views/Hosts";
import Surfers from "@/views/Surfers";
import Bookings from "@/views/Bookings";

export default {
  name: "Home",
  components: {
    Hosts,
    Surfers,
    Bookings
  }
};
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Surfers />
    <Hosts />
    <Bookings />

    <router-link to="/bookings">Bookings</router-link>
    <router-link to="/hosts">Hosts</router-link>
    <router-link to="/surfers">Surfers</router-link>
  </div>
</template>
