const BaseService = require('./base-service')
const Booking = require('../models/booking')

class BookingService extends BaseService {
  async findBySurferId(surferId) {
    return this.findBy('surfer', surferId)
  }

  async findByDriverId(driverId) {
    return this.findBy('driver', driverId)
  }
}

module.exports = new BookingService(Booking)