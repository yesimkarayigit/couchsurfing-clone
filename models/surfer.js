const mongoose = require('mongoose')

const SurferSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  age: { type: Number, required: true, min: 18 },
  bookings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
    autopopulate: { maxDepth: 2 }
  }]
})

SurferSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Surfer', SurferSchema)
