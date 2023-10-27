require('dotenv').config()
const uuid = require('uuid')
const path = require("path")
const ApiError = require("../error/ApiError")
const {Product} = require('../models')

class ProductController {
    async getProducts(req, res, next) {
        const products = await Product.findAll();
        return res.json({products});
    }

    async getProduct(req, res, next) {
        const {id} = req.params
        const product = await Product.findOne({where: {sku: id}});
        return res.json({product});
    }

    async createProduct(req, res, next) {
        try{
            console.log(req.body, req.files)
            const {name, category, price, manufacturer, provider, count, description} = req.body
            const {image} = req.files
            const sku = uuid.v4()
            let fileName = sku + ".jpg"
            image.mv(path.resolve(__dirname, "..", "static", fileName))
            const product = await Product.create({sku, name, unitOfMeasurement: ".шт", price, maxDiscountSize: 0, manufacturer, supplier: provider, category, discount: 0, stockQuantity: count, description, image: fileName})
    
            return res.json(product)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new ProductController()