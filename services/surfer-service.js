const BaseService = require('./base-service')
const Surfer = require('../models/surfer')
const bookingService = require('./booking-service')
const hostService = require('./host-service')

class SurferService extends BaseService {
  async findByName(name) {
    return this.findBy('name', name)
  }
  
  async book(hostId, surferId, location, duration) {
    const surfer = await this.find(surferId)
    const host = await hostService.find(hostId)

    const booking = await bookingService.insert({host, surfer, location, duration})
    surfer.bookings.push(booking)
    await surfer.save()
  
    return booking
  }
}

module.exports = new SurferService(Surfer)