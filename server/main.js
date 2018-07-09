const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const server = express()
const port = process.env.PORT || 8080

server.use(morgan('dev'))
server.use(bodyParser.json())

const users = [
  { id: 0, username: 'bill_gates', password: 'microsoft' },
  { id: 1, username: 'steve_jobs', password: 'apple' },
  { id: 2, username: 'linus_torvalds', password: 'linux' }
]

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

  let isValid = false
  users.forEach(user => {
    if (user.username === username && user.password === password) {
      isValid = true
    }
  })

  res.json({ status: isValid ? 'success' : 'failure' })
})

server.listen(port, () => {
    console.log(`The server is listening on port ${port}.`)
})
