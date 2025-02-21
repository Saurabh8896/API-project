import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";
export default class UserController {
  signin(req, res) {
    const { email, password } = req.body;
    const user = UserModel.signin(email, password);
    if (!user) {
      res.status(400).send("Incorrect Credential");
    } else {
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        "quJEmC0FIwT94LgKvNcmjWmsik8hiUnx",
        { expiresIn: "1h" }
      );
      res.cookie('jwtToken',token,{httpOnly:true})
      res.status(200).json({user:user,token:token});
    }
  }

  signup(req, res) {
    const { name, email, password, type } = req.body;
    const register = UserModel.singup(name, email, password, type);
    res.status(201).send(register);
  }
}
