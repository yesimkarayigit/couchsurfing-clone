// const uuid = require('uuid')

const mongoose = require('mongoose')

const HostSchema = new mongoose.Schema({
  name: String,
  location: String,
})

module.exports = mongoose.model('Host', HostSchema)

// class Host {
//   constructor(id = uuid.v4(), name, location) {
//     this.id = id
//     this.name = name
//     this.location = location
//   }

//   static create({id, name, location}) {
//     return new Host(id, name, location)
//   }
// }

// module.exports = Host