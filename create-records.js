// const Surfer = require('./models/surfer')
// const Host = require('./models/host')
// const database = require('./database/base-database')
// const surferDatabase = require('./database/surfer-database')
// const hostDatabase = require('./database/host-database')

// const printBookingHistory = require('./lib/print-booking-history')

// const yesim = Surfer.create({name: 'Yesim'})
// const mert = Surfer.create({name: 'Mert'})
// const nihal = Host.create({ name: 'Nihal', location: 'Leipzig' })

// yesim.book(nihal, 'Leipzig')
// yesim.book(nihal, 'Leipzig')
// yesim.book(nihal, 'Leipzig')
// yesim.book(nihal, 'Leipzig')
// mert.book(nihal, 'Leipzig')

// surferDatabase.save([yesim, mert])
// hostDatabase.save([nihal])

// // const betul = Surfer.create({name: 'Betul'})

// // surferDatabase.insert(betul)

// const surfers = surferDatabase.load()

// surfers.forEach(printBookingHistory)


const Surfer = require('./models/surfer')
const Host = require('./models/host')
const surferDatabase = require('./database/surfer-database')
const hostDatabase = require('./database/host-database')

const printBookingHistory = require('./lib/print-booking-history')

const armagan = Surfer.create({name: 'Armagan', location: 'Kreuzberg'})
const mert = Surfer.create({name: 'Mert', location: 'Mitte'})
const stefan = Host.create({ name: 'Stefan', location: 'Treptower Park' })

armagan.book(stefan, 'Kreuzberg', 'Neukolln')
armagan.book(stefan, 'Neukolln', 'Mitte')
armagan.book(stefan, 'Mitte', 'Kreuzberg')
armagan.book(stefan, 'Kreuzberg', 'SXF')
mert.book(stefan, 'Mitte', 'Kreuzberg')

surferDatabase.save([armagan, mert])
hostDatabase.save([stefan])

const betul = Surfer.create({name: 'Betul', location: 'Tegel'})

surferDatabase.insert(betul)

const surfers = surferDatabase.load()

surfers.forEach(printBookingHistory)