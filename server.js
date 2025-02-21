import express from 'express';
import Productrouter from './src/features/product/product.routes.js';
import UserRoute from './src/features/user/user.routes.js';
// import basicAuthorizer from './src/middlewares/basicAuth.middleware.js';
import jwtAuth from './src/middlewares/jwb.middleware.js';
import cookieParser from 'cookie-parser';
// import bodyParser from 'body-parser';
const server = express();
// server.use(bodyParser.json())
server.use(express.json())
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser())
// for all requests related to product, redirect to product routes
server.use('/api/products',jwtAuth,Productrouter)
server.use('/api/user',UserRoute)

server.get('/',(req,res)=>{
    res.send("Welcome to Ecommerce APIs")
})


server.listen(3200,()=>{
    console.log("Server running on port no 3200")
});