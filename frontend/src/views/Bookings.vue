<script>
import Booking from "../components/Booking";

export default {
  name: "Bookings",
  components: {
    Booking
  }
};
</script>

<template lang="pug">
  .container
      h2 Bookings
      //- p There are #{bookings.length} bookings.

      //- ul
      //-   each booking in bookings
      //-     li
      //-       p Surfer: 
      //-         a(href=`/surfers/${booking.surfer.id}`) #{booking.surfer.name}
      //-       p Host:
      //-         a(href=`/hosts/${booking.host.id}`) #{booking.host.name}
      //-       p Location: #{booking.location}
      //-       p Duration: #{booking.duration}
      Booking(msg="Booking Page is in here")
</template>
