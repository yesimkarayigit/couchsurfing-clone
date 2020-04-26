const express = require('express')
const { surferDatabase, hostDatabase } = require('./database')
const Surfer = require('./models/surfer')
const flatted = require('flatted')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.set('view engine', 'pug')

app.get('/surfers', async (req, res) => {
  const surfers = await surferDatabase.load()
  
  res.render('surfers', { surfers })
})

app.post('/surfers', async (req, res) => {
  const surfer = await surferDatabase.insert(surfer)
  
  res.send(surfer)
})

app.get('/surfers/:surferId', async (req, res) => {
  const surfer = await surferDatabase.find(req.params.surferId)
  if (!surfer) return res.status(404).send('Cannot find surfer')
  res.render('surfer', { surfer })
})

app.get('/hosts', async (req, res) => {
  const hosts = await hostDatabase.load()
  
  res.render('hosts', { hosts })
})

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('started listening')
})