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
  { id: getUserId(), username: 'bill_gates', password: 'microsoft', roles: [ 'standard' ], secret: 'Use Windows!', firstName: 'Bill' },
  { id: getUserId(), username: 'steve_jobs', password: 'apple', roles: [ 'standard' ], secret: 'Use macOS!', firstName: 'Steve' },
  { id: getUserId(), username: 'linus_torvalds', password: 'linux', roles: [ 'administrator' ], secret: 'Fuck you!', firstName: 'Linus' }
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

// CUSTOM MIDDLEWARE

const isAuthenticated = (req, res, next) => {
  try {
    const authorizationHeader = req.header('Authorization')
    const encodedToken = authorizationHeader.replace('Bearer: ', '')
    req.token = getJWTPayload(encodedToken)
    next()
  } catch (err) {
    res.json({
      status: {
        type: 'failure',
        code: 'invalid-token'
      }
    })
  }
}

const getUser = (req, res, next) => {
  req.user = users[req.token.id]
  next()
}

// ROUTES

server.get('/', (req, res) => {
  res.json({
    message: 'Hello, world!'
  })
})

server.post('/login', (req, res) => {
  const { username, password } = req.body

  const user = users.find(user => user.username === username && user.password === password)

  if (!user) {
    res.json({ status: 'failure' })
  }

  const token = getJWT({
    id: user.id,
    roles: user.roles
  })

  res.json({
    status: {
      type: 'success'
    },
    token
  })
})

server.get('/name', isAuthenticated, getUser, (req, res) => {
  res.json({
    name: req.user.firstName
  })
})

server.get('/secret', isAuthenticated, getUser, (req, res) => {
  res.json({
    status: {
      type: 'success'
    },
    message: req.user.secret
  })
})

// START SERVER

server.listen(port, () => {
  console.log(`The server is listening on port ${port}.`)
})
