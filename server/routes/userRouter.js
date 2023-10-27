const authMiddleware = require("../middleware/authMiddleware")
const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.get('/roles', userController.getRoles)
router.get('/roles/:id', userController.getRole)
router.get('/cart', authMiddleware, userController.cart)
router.post('/cart', authMiddleware, userController.addToCart)
router.delete('/cart', authMiddleware, userController.removeFromCart)

module.exports = router