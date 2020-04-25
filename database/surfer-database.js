const BaseDatabase = require('./base-database')
const Surfer = require('../models/surfer')

class SurferDatabase extends BaseDatabase {
  async findByName(name) {
    const objects = await this.load()

    return objects.find(o => o.name == name)
  }
}

module.exports = new SurferDatabase(Surfer)