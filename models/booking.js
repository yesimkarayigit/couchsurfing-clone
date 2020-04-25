class Booking {
  constructor(host, surfer, origin, duration) {
    this.surfer = surfer
    this.host = host
    this.origin = origin
    this.duration = duration
  }
  static create({host, surfer, duration}) {
    return new Booking(host, surfer, duration)
  }
}

module.exports = Booking
