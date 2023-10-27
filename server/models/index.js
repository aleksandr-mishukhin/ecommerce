const sequelize = require("../db")
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique:true},
    firstName: {type: DataTypes.STRING},
    lastName: {type: DataTypes.STRING},
    patronymic: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
})

const Role = sequelize.define('role', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true}
})

const Product = sequelize.define('product', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  sku: {type: DataTypes.STRING, unique:true},
  name: {type: DataTypes.STRING},
  unitOfMeasurement: {type: DataTypes.STRING},
  price: {type: DataTypes.DECIMAL},
  maxDiscountSize: {type: DataTypes.INTEGER},
  manufacturer: {type: DataTypes.STRING},
  supplier: {type: DataTypes.STRING},
  category: {type: DataTypes.STRING},
  discount: {type: DataTypes.INTEGER},
  stockquantity: {type: DataTypes.INTEGER},
  description: {type: DataTypes.STRING},
  image: {type: DataTypes.STRING},
})

const Cart = sequelize.define('cart', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const CartProduct = sequelize.define('cart_device', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Cart)
Cart.belongsTo(User)

Cart.hasMany(CartProduct)
CartProduct.belongsTo(Cart)

Product.hasMany(CartProduct)
CartProduct.belongsTo(Product)

Role.hasOne(User)
User.belongsTo(Role)

module.exports = {
    User,
    Role,
    Product,
    CartProduct,
    Cart
}