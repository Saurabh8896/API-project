import express from 'express'
import UserController from "./user.controller.js"

const UserRoute = express.Router()

const userController = new UserController()

UserRoute.post('/signin',userController.signin)
UserRoute.post('/signup',userController.signup)


export default UserRoute