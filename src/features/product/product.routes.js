import express from 'express'
import ProductController from './product.controller.js'

const Productrouter = express.Router()

const productController = new ProductController()

Productrouter.get('/',productController.getAllProducts)
Productrouter.post('/',productController.addProduct)

export default Productrouter