const Surfer = require('./models/surfer')
const Host = require('./models/host')
const surferDatabase = require('./database/surfer-database')
const hostDatabase = require('./database/host-database')

const printBookingHistory = require('./lib/print-booking-history')


const betul = Surfer.create({name: 'Betul'})
const nihal = Host.create({name: 'Nihal', location:'Leipzig'})

surferDatabase.insert(betul)

betul.book(nihal, 'Leipzig', '7 days')

surferDatabase.save([betul])

const surfers = surferDatabase.load()

surfers.forEach(printBookingHistory)

