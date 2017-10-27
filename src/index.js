const express = require('express')
const routes = require('./router')

const app = express()

const APP_PORT = 5000

app.use('/', routes)

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })


app.listen(APP_PORT, "0.0.0.0", function () {
  console.log(`Example app listening on port ${APP_PORT}!`)
})