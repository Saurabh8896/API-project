import express from 'express';
import Productrouter from './src/features/product/product.routes.js';
import bodyParser from 'body-parser';
const server = express();

server.use(bodyParser.json())

// for all requests related to product, redirect to product routes

server.use('/api/products',Productrouter)

server.get('/',(req,res)=>{
    res.send("Welcome to Ecommerce APIs")
})


server.listen(3200,()=>{
    console.log("Server running on port no 3200")
});