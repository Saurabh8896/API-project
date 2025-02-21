
import ProductModel from "./product.model.js";

export default class ProductController{
    
    getAllProducts(req,res){
       const product = ProductModel.getProduct();
       res.status(200).send(product);
    }

    addProduct(req,res){
        const {name,price,sizes} = req.body
        console.log(req.body)
        const newProduct = {
            name:name,
            price:parseFloat(price),
            sizes:sizes.split(','),
            imageUrl: req.file.filename,
        }
        const createdRecord = ProductModel.addProduct(newProduct)
        res.status(201).send(createdRecord);
    }

    getOneProduct(req,res){
        const id = req.params.id
        const product = ProductModel.get(id)
        if(!product){
            res.status(404).send("Product not found")
        }else{
            res.status(200).send(product)
        }
    }

    filterProducts(req,res){
        
        const minPrice = req.query.minPrice
        const maxPrice = req.query.maxPrice
        const category = req.query.category
        const result = ProductModel.filter(minPrice,maxPrice,category)
        res.status(200).send(result)
    }
    productrating(req,res){

        const {userId, productId, rating} = req.query

       const result = ProductModel.productrating(userId,productId,rating)
            const product = ProductModel.get(result)
       if(result){
        if(product){
        res.status(200).json({Item:product})
        }else{
        res.status(200).json({Item:result})
        }

       }else{
        res.status(400).json({Status:"failed"})
       }
    }

    
}