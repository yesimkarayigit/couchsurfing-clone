const { hostDatabase } = require('../database')
const flatted = require('flatted')

const router = require('express').Router()

router.get('/hosts', async (req, res) => {
  const hosts = await hostDatabase.load()
  
  res.render('hosts', { hosts })
})

module.exports = router