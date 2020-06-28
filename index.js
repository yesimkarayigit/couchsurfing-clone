const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const surfersRouter = require('./routes/surfers')
const hostsRouter = require('./routes/hosts')
const bookingsRouter = require('./routes/bookings')
const indexRouter = require('./routes/index')
require('./mongo-connection')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.set('view engine', 'pug')

app.use('/', indexRouter)
app.use('/surfers', surfersRouter)
app.use('/hosts', hostsRouter)
app.use('/bookings', bookingsRouter)

app.listen(3000, () => {
  console.log('started listening')
})