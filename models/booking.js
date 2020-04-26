class Booking {
  constructor(host, surfer, origin, duration) {
    this.surfer = surfer
    this.host = host
    this.origin = origin
    this.duration = duration
  }
  static create({host, surfer, origin, duration}) {
    return new Booking(host, surfer, origin, duration)
  }
}

module.exports = Booking
