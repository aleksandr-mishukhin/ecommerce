const express = require('express')
const productController = require('../controllers/productController')
const authMiddleware = require('../middleware/authMiddleware')
const router = express.Router()

router.get('/', productController.getProducts)
router.get('/:id', productController.getProduct)
router.post('/', authMiddleware, productController.createProduct)

module.exports = router