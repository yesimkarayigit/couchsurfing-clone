const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Host',
    autopopulate: { maxDepth: 1 }
  },
  surfer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Surfer',
    autopopulate: { maxDepth: 1 }
  },
  location: { type: String, required: true },
  duration: { type: String, required: true }
})

BookingSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Booking', BookingSchema)

