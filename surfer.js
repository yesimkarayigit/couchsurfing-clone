const Booking = require('./booking')

class Surfer {
  constructor(name) {
    this.name = name
    this.bookings = []
  }

  book(host, duration, location) {
    const booking = new Booking(this, host, duration, location)

    this.bookings.push(booking)

    return booking
  }
}

module.exports = Surfer