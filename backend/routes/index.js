const express = require('express')
const router = express.Router()

router.use('/user', require('./modules/User'))
router.use('/service', require('./modules/Service'))
router.use('/uploadPDF', require('./modules/UploadPDF'))

module.exports = router