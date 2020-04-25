const { surferDatabase, hostDatabase } = require('./database')
const printBookingHistory = require('./lib/print-booking-history')

async function main() {
  const yesim = surferDatabase.findByName('Yesim')

  const surfers = await surferDatabase.load()
  surfers.forEach(printBookingHistory)
}

main()
