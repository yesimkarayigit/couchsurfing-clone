const { surferDatabase, hostDatabase } = require('./database')
const printBookingHistory = require('./lib/print-booking-history')

async function main() {
  const yesim = await surferDatabase.findByName('Yesim')
  const nihal = await hostDatabase.findByHostName('Nihal')

  yesim.book(nihal, 'Leipzig')
  surferDatabase.update(yesim)
  
  console.log(await hostDatabase.findBy('location', 'Leipzig'))
}
main()
