import express from "express";
import swagger from "swagger-ui-express";
import fs from 'fs';
import Productrouter from "./src/features/product/product.routes.js";
import UserRoute from "./src/features/user/user.routes.js";
import jwtAuth from "./src/middlewares/jwb.middleware.js";
import CartRoute from "./src/features/cart/cart.routes.js";
import cookieParser from "cookie-parser";
// import apiDocs from "./swagger.json"  
const server = express();
const swaggerJSDoc = JSON.parse(fs.readFileSync('./swagger.json','utf8'))
server.use('/api-docs',swagger.serve,swagger.setup(swaggerJSDoc))
// server.use(bodyParser.json())

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

// for all requests related to product, redirect to product routes
server.use("/api-docs", swagger.serve, swagger.setup(swaggerJSDoc));

server.use("/api/products", jwtAuth, Productrouter);
server.use("/api/cart", jwtAuth, CartRoute);
server.use("/api/user", UserRoute);
server.get("/", (req, res) => {
  res.send("Welcome to Ecommerce APIs");
});

server.listen(3200, () => {
  console.log("Server running on port no 3200");
});
