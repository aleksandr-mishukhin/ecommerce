require('dotenv').config()
const ApiError = require("../error/ApiError")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {User, Role, Cart, Product, CartProduct} = require('../models')

const generateJwt = (id, email, roleId, firstName, lastName, patronymic) => {
    return jwt.sign({id, email, roleId, firstName, lastName, patronymic}, process.env.TOKEN_KEY, {expiresIn: "24h"})
}

class UserController {
    async getRoles(req, res, next) {
        const roles = await Role.findAll();
        return res.json({roles});
    }

    async getRole(req, res, next) {
        const {id} = req.params
        const role = await Role.findOne({where: {id}});

        if (!role) {
            return next(ApiError.badRequest("The role doesn't exist"))
        }

        return res.json({role});
    }

    async registration(req, res, next){
        const {firstName, lastName, patronymic, email, password, roleId} = req.body

        if (!email || !password){
            return next(ApiError.badRequest("Invalid email or password"))
        }

        const candidate = await User.findOne({where: {email}})

        if (candidate){
            return next(ApiError.badRequest("The user with that email already exists"))
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const user = await User.create({firstName, lastName, patronymic, email, roleId, password: hashPassword})
        const cart = await Cart.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.roleId, user.firstName, user.lastName, user.patronymic)

        return res.json({token})
    }

    async login(req,res,next){
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})

        if (!user){
            return next(ApiError.internal("User not found"))
        }

        let comparedPassword = bcrypt.compareSync(password, user.password)

        if (!comparedPassword) {
            return next(ApiError.internal("Incorrect Password"))
        }

        const token = generateJwt(user.id, user.email, user.roleId, user.firstName, user.lastName, user.patronymic)
        
        return res.json({token})
    }

    async check(req, res, next){
        const user = req.user
        const token = generateJwt(user.id, user.email, user.roleId, user.firstName, user.lastName, user.patronymic)

        return res.json({token})
    }

    async cart(req, res, next){
        const {id} = req.user
        const cart = await Cart.findOne({where: {userId: id}})
        const cartProducts = await CartProduct.findAll({where: {cartId: cart.id}})
        const products = await Product.findAll({where: {id: cartProducts.map(
            (cartProduct) => cartProduct.productId
        )}})

        return res.json(products)
    }

    async addToCart(req,res,next){
        const {productId} = req.body
        const cart = await Cart.findOne({where: {userId: req.user.id}})
        const duplicate = await CartProduct.findOne({where: {cartId: cart.id, productId}})

        if (duplicate) {
            return next(ApiError.badRequest("This device already exists in the cart"))
        }

        const cartProduct = await CartProduct.create({productId, cartId: cart.id})

        return res.json({cartProduct})
    }

    async removeFromCart(req, res, next){
        console.log(req)
        const {productId} = req.body
        const cart = await Cart.findOne({where: {userId: req.user.id}})
        const cartProduct = await CartProduct.findOne({where: {cartId: cart.id, productId}})
        await cartProduct.destroy()

        if (!cartProduct) {
            return next(ApiError.badRequest("This cart product doesn't exist"))
        }

        return res.send(200)
    }
}

module.exports = new UserController()
