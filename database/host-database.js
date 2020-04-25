const BaseDatabase = require('./base-database')
const Host = require('../models/host')

class HostDatabase extends BaseDatabase {
  async findByHostName(name) {
    await this.findBy('name', name)
  }

  async findByLocation(location) {
    await this.findBy('location', location)
  }
}

module.exports = new HostDatabase(Host)