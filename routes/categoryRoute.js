const express = require('express')
const router = express.Router()
const uploadMulter = require('../middleware/upload.js')
const validation = require('../middleware/validation.js')

// controller
const {
    createCategory
} = require('../controllers/categoryControllers')

// 
router.post('/category', uploadMulter, validation, createCategory)

module.exports = router