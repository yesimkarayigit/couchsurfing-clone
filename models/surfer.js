// const Booking = require('./booking')
// const uuid = require('uuid')

const mongoose = require('mongoose')

const SurferSchema = new mongoose.Schema({
  name: String,
  bookings: []
})

module.exports = mongoose.model('Surfer', SurferSchema)

// class Surfer {
//   constructor(id = uuid.v4(), name, bookings = []) {
//     this.id = id
//     this.name = name
//     this.bookings = bookings
//   }

//   book(host, origin, duration) {
//     const booking = new Booking(host, this, origin, duration)

//     this.bookings.push(booking)

//     return booking
//   }

//   static create({id, name, bookings}) {
//     return new Surfer(id, name, bookings)
//   }
// }

// module.exports = Surfer