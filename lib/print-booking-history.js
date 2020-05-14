function printBooking(booking) {
  console.log(`${booking.surfer.name} wants to stay at ${booking.host.name} house, ${booking.host.location} for ${booking.duration}`)
}

function printBookingHistory(surfer) {
  if (surfer.bookings.length == 0)
    return console.log(`${surfer.name} has no bookings yet.`)

  surfer.bookings.forEach(printBooking)
}

module.exports = printBookingHistory

module.exports = {
  sum: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b
}
