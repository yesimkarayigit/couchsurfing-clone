const { hostService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const hosts = await hostService.load()

  res.send(hosts)
  // res.render('hosts', { hosts })
})

router.post('/', async (req, res) => {
  const host = await hostService.insert(req.body)
  
  res.send(host)
})

router.delete('/:hostId', async ( req, res) => {
  await hostService.removeBy('_id', req.params.hostId)
  res.send('OK')
})

router.get('/:hostId', async (req, res) => {
  const host = await hostService.find(req.params.hostId)
  if (!host) return res.status(404).send('Cannot find host')
  res.render('host', { host })
})

router.patch('/:hostId', async (req, res) => {
  const { hostId } = req.params
  const { name } = req.body
  await hostService.update(hostId, { name })
})

module.exports = router