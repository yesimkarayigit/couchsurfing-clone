const Surfer = require('./surfer')
const Host = require('./host')


const yesim = new Surfer('Yesim')
const nihal = new Host('Nihal', 'Leipzig')

const booking1 = yesim.book(nihal, 3, 'Leipzig')
const booking2 = yesim.book(nihal, 10, 'Halle')
const booking3 = yesim.book(nihal, 12, 'Halle')

function printBooking(booking) {
  console.log(`${booking.surfer.name} booked ${booking.host.name} to stay at ${booking.location} for ${booking.duration} days`)
}

function printBookingHistory(surfer) {
  surfer.bookings.forEach(printBooking)
}

printBookingHistory(yesim)