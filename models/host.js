class Host {
  constructor(name, location) {
    this.name = name
    this.location = location
  }

  static create({name, location}) {
    return new Host(name, location)
  }
}

module.exports = Host