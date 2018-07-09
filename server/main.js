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

server.listen(port, () => {
    console.log(`The server is listening on port ${port}.`)
})
