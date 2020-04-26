const { surferDatabase, hostDatabase } = require('../database')
const flatted = require('flatted')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const surfers = await surferDatabase.load()
  
  res.render('surfers', { surfers })
})

router.post('/', async (req, res) => {
  const surfer = await surferDatabase.insert(req.body)
  
  res.send(surfer)
})

router.delete('/:surferId', async ( req, res) => {
  await surferDatabase.removeBy('id', req.params.surferId)
  res.send('OK')
})

router.get('/:surferId', async (req, res) => {
  const surfer = await surferDatabase.find(req.params.surferId)
  if (!surfer) return res.status(404).send('Cannot find surfer')
  res.render('surfer', { surfer })
})

router.post('/:surferId/bookings', async (req, res) => {
  const { surferId } = req.params
  const { hostId, location, duration } = req.body

  const surfer = await surferDatabase.find(surferId)
  const host = await hostDatabase.find(hostId)

  surfer.book(host, location, duration)

  await surferDatabase.update(surfer)

  res.send('OK')
})

module.exports = router