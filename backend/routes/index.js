const express = require('express')
const router = express.Router()

router.use('/user', require('./modules/User'))

module.exports = router