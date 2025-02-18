import express from 'express'
import ProductController from './product.controller.js'
import {upload} from '../../middlewares/fileupload.middleware.js'

const Productrouter = express.Router()

const productController = new ProductController()

Productrouter.get('/filter',productController.filterProducts)
Productrouter.get('/',productController.getAllProducts)
Productrouter.post('/',upload.single('imageUrl'),productController.addProduct)
Productrouter.get('/:id',productController.getOneProduct)
export default Productrouter