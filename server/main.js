const express = require('express')
const morgan = require('morgan')

const server = express()
const port = process.env.PORT || 8080

server.use(morgan('dev'))

server.get('/', (req, res) => {
    res.json({
        message: 'Hello, world!'
    })
})

server.get('/time', (req, res) => {
    res.json({
        time: Date.now()
    })
})

server.listen(port, () => {
    console.log(`The server is listening on port ${port}.`)
})
