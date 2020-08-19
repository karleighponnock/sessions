const router = require('express').Router()
const categoryRoute = require('./categoryRoute')
const fileAWSRoute = require('./fileAWS')

router.use('/category', categoryRoute)
router.use('/fileAWS', fileAWSRoute)

module.exports = router