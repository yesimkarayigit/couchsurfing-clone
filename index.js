const { surferDatabase, hostDatabase } = require('./database')
const printBookingHistory = require('./lib/print-booking-history')

const Surfer = require('./models/surfer')
const Host = require('./models/host')


const yesim = Surfer.create({name: 'Yesim'})
const emre = Surfer.create({name: 'Emre'})
const nihal = Host.create({ name: 'Nihal', location: 'Leipzig' })
const david = Host.create({name: 'David', location: 'Berlin'})


yesim.book(nihal, 'Leipzig', '5 days')
emre.book(nihal, 'Leipzig', '3 days')
yesim.book(david, 'Berlin', '1 day')
emre.book(david, 'Berlin', '2 days')

surferDatabase.save([yesim, emre])
hostDatabase.save([nihal, david])

const surfers = surferDatabase.load()

surfers.forEach(printBookingHistory)