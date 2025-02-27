
import express from 'express'
import CartController from './cart.controller.js'
const CartRoute = express.Router()

const cartController = new CartController()

CartRoute.post('/',cartController.add)
CartRoute.get('/',cartController.get)
CartRoute.delete('/:id',cartController.delete)

export default CartRoute
