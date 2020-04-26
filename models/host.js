const uuid = require('uuid')

class Host {
  constructor(id = uuid.v4(), name, location) {
    this.id = id
    this.name = name
    this.location = location
  }

  static create({id, name, location}) {
    return new Host(id, name, location)
  }
}

module.exports = Host