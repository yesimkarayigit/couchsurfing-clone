const Surfer = require('./models/surfer')
const Host = require('./models/host')
const surferService = require('./services/surfer-services')
const hostService = require('./services/host-services')

const printBookingHistory = require('./lib/print-booking-history')


const yesim = Surfer.create({name: 'Yesim'})
const nihal = Host.create({name: 'Nihal', location: 'Leipzig'})
const david = Host.create({name: 'David', location: 'Berlin'})


yesim.book(nihal, 'Leipzig', '3 days')
yesim.book(david, 'Berlin', '2 days')

async function main() {
  try {
    await surferService.save([yesim])
    await hostService.save([nihal])
  
    const betul = Surfer.create({name: 'Betul'})
  
    await surferService.insert(betul)
    const surfers = await surferService.load()
    surfers.forEach(printBookingHistory)
  } catch (e) {
    return console.log(e)
  }
}

main()
