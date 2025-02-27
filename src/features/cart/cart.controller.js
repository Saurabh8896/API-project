import CartModel from "./cart.model.js"
export default class CartController{
    
    add(req,res){
        const {productId,quantity} = req.query
        const userId = req.userId
        CartModel.add(productId,userId,quantity)
        res.status(201).send("cart is updated")
    }

    get(req,res){
        const userId = req.userId
        const items =CartModel.get(userId)
        return res.status(200).send(items)
    }
    delete(req,res){
        const userId = req.userId
        const cartIndex = req.param.id
        const error = CartModel.delete(cartIndex,userId)
        if(error){
            return res.status(404).send(error)
        }else{
            return res.status(200).send("Successully deleted")
        }
    }

}