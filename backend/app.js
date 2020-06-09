const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

// set use body json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())

app.use('/api', require('./routes/'))

app.listen(8000, function () {
  console.log('App listen on port 8000')
})

module.exports = app