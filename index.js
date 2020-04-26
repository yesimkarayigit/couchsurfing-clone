const express = require('express')
const bodyParser = require('body-parser')
const surfersRouter = require('./routes/surfers')
const hostsRouter = require('./routes/hosts')
const indexRouter = require('./routes/index')

const app = express()
app.use(bodyParser.json())

app.set('view engine', 'pug')

app.use('/', indexRouter)
app.use('/surfers', surfersRouter)
app.use('./hosts', hostsRouter)

app.listen(3000, () => {
  console.log('started listening')
})