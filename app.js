const express = require('express')
const app = express()
const port = 1337

const { helloMessage } = require('./hello')

app.get('/', (req, res) => {
  res.send(helloMessage())
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
