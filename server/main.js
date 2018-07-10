// MODULES

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

// SERVER

const server = express()
const port = process.env.PORT || 8080

// MIDDLEWARE

server.use(morgan('dev'))
server.use(bodyParser.json())

// IN MEMORY DATABASE

const getUserId = (() => {
  let id = 0
  return () => id++
})()

const users = [
  { id: getUserId(), username: 'bill_gates', password: 'microsoft', roles: [ 'standard' ] },
  { id: getUserId(), username: 'steve_jobs', password: 'apple', roles: [ 'standard' ] },
  { id: getUserId(), username: 'linus_torvalds', password: 'linux', roles: [ 'administrator' ] }
]

// JWT

const secret = 'Whatever happened to Gary Cooper? The strong, silent type.'

const getJWT = ({ id, roles }) => {
  return jwt.sign({
    id,
    roles
  }, secret, { expiresIn: 30 })
}

const getJWTPayload = token => {
  return jwt.verify(token, secret)
}

// ROUTES

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

  let user = null
  users.forEach(dbUser => {
    if (dbUser.username === username && dbUser.password === password) {
      user = dbUser
    }
  })

  if (!user) {
    res.json({ status: 'failure' })
  }

  const token = getJWT({
    id: user.id,
    roles: user.roles
  })

  res.json({
    status: 'success',
    token
  })
})

// START SERVER

server.listen(port, () => {
  console.log(`The server is listening on port ${port}.`)
})
