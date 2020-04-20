const { surferDatabase, hostDatabase } = require('./database')
const printBookingHistory = require('./lib/print-booking-history')

const nihal = hostDatabase.findBy('name', 'Stefan')
const yesim = surferDatabase.findByName('Betul')

yesim.book(nihal, 'Kreuzberg')
surferDatabase.update(yesim)

printBookingHistory(yesim)
