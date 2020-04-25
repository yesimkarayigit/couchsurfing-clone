const Surfer = require('./models/surfer')
const Host = require('./models/host')
const surferDatabase = require('./database/surfer-database')
const hostDatabase = require('./database/host-database')

const printBookingHistory = require('./lib/print-booking-history')


const yesim = Surfer.create({name: 'Yesim'})
const nihal = Host.create({name: 'Nihal', location: 'Leipzig'})
const david = Host.create({name: 'David', location: 'Berlin'})


yesim.book(nihal, 'Leipzig', '3 days')
yesim.book(david, 'Berlin', '2 days')

async function main() {
  try {
    await surferDatabase.save([yesim])
    await hostDatabase.save([nihal])
  
    const betul = Surfer.create({name: 'Betul'})
  
    await surferDatabase.insert(betul)
    const surfers = await surferDatabase.load()
    surfers.forEach(printBookingHistory)
  } catch (e) {
    return console.log(e)
  }
}

main()
