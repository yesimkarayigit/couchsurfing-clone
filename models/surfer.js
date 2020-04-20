const Booking = require('./booking')
const uuid = require('uuid')

class Surfer {
  constructor(id = uuid.v4(), name, location, bookings = []) {
    this.id = id

    this.name = name
    this.location = location
    this.bookings = bookings
  }

  book(host, origin) {
    const booking = new Booking(host, this, origin)

    this.bookings.push(booking)

    return booking
  }

  static create({id, name, location, bookings}) {
    return new Surfer(id, name, location, bookings)
  }
}

module.exports = Surfer