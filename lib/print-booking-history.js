function printBooking(booking) {
  console.log(`${booking.surfer.name} wants to stay at ${booking.host.name}'s house, ${booking.host.location} for ${booking.duration}`)
}

function printBookingHistory(surfer) {
  if (surfer.bookings.length == 0)
    return console.log(`${surfer.name} has no bookings yet.`)

  surfer.bookings.forEach(printBooking)
}

module.exports = printBookingHistory