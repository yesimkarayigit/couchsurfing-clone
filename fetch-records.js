const { surferService, hostService } = require('./services')
const printBookingHistory = require('./lib/print-booking-history')

async function main() {
  const yesim = await surferService.findByName('Yesim')
  const nihal = await hostService.findByHostName('Nihal')

  yesim.book(nihal, 'Leipzig')
  surferService.update(yesim)
  
  console.log(await hostService.findBy('location', 'Leipzig'))
}
main()
