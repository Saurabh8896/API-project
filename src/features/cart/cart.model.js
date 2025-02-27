
export default class CartModel{
    constructor(id,productId,userId,quantity){
        this.id = id
        this.productId = productId
        this.userId = userId
        this.quantity = quantity
    }

    static add(productId,userId,quantity){
        const item = new CartModel(cartItems.length+1,productId,userId,quantity)
        cartItems.push(item)
        return item
    }

    static get(userId){
        return cartItems.filter((i)=>i.userId==userId)
    }

    static delete(cartId,userId){
        const cartitemIndex = cartItems.findIndex((cart)=>cart.id == cartId && i.userId == userId)
        if(!cartitemIndex){
            return "Item is not found"
        }else{
            cartItems.splice(cartitemIndex,1)
        }
    }
}

var cartItems = [
    new CartModel(1,1,1,3),
    new CartModel(2,2,2,2)

]