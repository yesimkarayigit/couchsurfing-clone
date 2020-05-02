const mongoose = require('mongoose')

const HostSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  age: { type: Number, required: true, min: 18 },
  location: { type: String, required: true }
})

module.exports = mongoose.model('Host', HostSchema)