const router = require('express').Router()
const categoryRoute = require('./categoryRoute')
const fileAWSRoute = require('./fileAWS')

// require books
const bookRoutes = require("./books");

router.use('/category', categoryRoute)
router.use('/fileAWS', fileAWSRoute)

// Book routes
router.use("/books", bookRoutes);

module.exports = router