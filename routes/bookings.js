const { bookingService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const bookings = await bookingService.load()
  
  res.render('bookings', { bookings })
})

router.get('/:search', async (req, res) => {
  const location = req.query.location

  const bookings = await bookingService.query(location)

  res.render('bookings', { bookings })
})


module.exports = router