const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const server = express()
const port = process.env.PORT || 8080

server.use(morgan('dev'))
server.use(bodyParser.json())

server.get('/', (req, res) => {
    res.json({
        message: 'Hello, world!'
    })
})

server.get('/secret', (req, res) => {
  res.json({
    message: 'The cake is a lie!'
  })
})

server.post('/login', (req, res) => {
  const { username, password } = req.body
  if (username === 'elon_musk' && password === 'tesla') {
    res.json({ status: 'success' })
  } else {
    res.json({ status: 'failure' })
  }
})

server.listen(port, () => {
    console.log(`The server is listening on port ${port}.`)
})
