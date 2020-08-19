const express = require('express')
const router = express.Router()
const uploadMulter = require('../../middleware/upload')
const validation = require('../../middleware/validation')

// controller
const {
    createCategory
} = require('../../controllers/categoryControllers')

// 
router.post('/', uploadMulter, validation, createCategory)

module.exports = router