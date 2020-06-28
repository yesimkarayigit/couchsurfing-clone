const { surferService, hostService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
  res.send(await surferService.load())
  // const surfers = await surferService.load()
  
  // res.send(surfers)
  // res.render('surfers', { surfers })
})

router.post('/', async (req, res, next) => {
  try {
    const surfer = await surferService.insert(req.body)
    res.send(surfer)
  } catch(e) {
    next(e)
  }
})

router.delete('/:surferId', async ( req, res) => {
  await surferService.removeBy('_id', req.params.surferId)
  res.send('OK')
})

router.get('/:surferId', async (req, res) => {
  const surfer = await surferService.find(req.params.surferId)
  
  if (!surfer) return res.status(404).send('Cannot find surfer')
  res.render('surfer', { surfer })
})

router.post('/:surferId/bookings', async (req, res) => {
  const { surferId } = req.params
  const { hostId, location, duration } = req.body

  const booking = await surferService.book(hostId, surferId, location, duration)

  res.send(booking)
})

router.patch('/:surferId', async (req, res) => {
  const { surferId } = req.params
  const { name } = req.body
  await surferService.update(surferId, { name })
})

module.exports = router