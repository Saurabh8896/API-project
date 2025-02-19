export default class UserModel {
  constructor(name, email, password, type) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
  }

  static singup(name, email, password, type) {
    const newUser = new UserModel(name, email, password, type);
    users.push(newUser)
    return newUser
  }

  static signin(email,password){
    const user = users.find((user)=>user.email == email && user.password == password)
    return user
  }

  static getall(){
    return users
  }
}

let users = [
  {
    name: "seller user",
    email: "seller@gmail.com",
    password: "12345",
    type: "seller",
  }
];
  