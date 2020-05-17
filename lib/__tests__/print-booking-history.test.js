const printBookingHistory = require('../print-booking-history')

test('prints surfer bookings', () => {
  // initialization
  const surfer = {
    name: 'Yesim',
    bookings: [{
      surfer: { name: 'Yesim' },
      host: { name: 'Nihal' },
      location: 'Leipzig',
      duration: '2 days'
    }]
  }
  const consoleSpy = jest.spyOn(console, 'log')

  // test
  printBookingHistory(surfer)

  // assertions
  expect(consoleSpy).toHaveBeenCalledWith('Yesim wants to stay at Nihal house, Leipzig for 2 days')

  // teardown
  consoleSpy.mockRestore()
})
