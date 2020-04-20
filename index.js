const { surferDatabase, hostDatabase } = require('./database')
const printBookingHistory = require('./lib/print-booking-history')

const nihal = hostDatabase.findBy('name', 'Nihal')
const yesim = surferDatabase.findByName('Yesim')

yesim.book(nihal, 'Kreuzberg')
surferDatabase.update(yesim)

printBookingHistory(yesim)
