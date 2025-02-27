import UserModel from "../user/user.model.js";
export default class ProductModel {
  
    constructor(id, name, desc, price, imageUrl, category, sizes) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.imageUrl = imageUrl;
    this.category = category;
    this.sizes = sizes;
  }

  static getProduct(){
    return products;
  }

  static addProduct(product){
    product.id = products.length+1;
    products.push(product)
    return product;
  }

  static get(id){
    const product = products.find(i=>i.id==id)
    return product
  }

  static filter(minPrice, maxPrice, category){
    const result = products.filter((p)=>{
      return(
        (!minPrice || p.price >= minPrice)&& 
      (!maxPrice || p.price <= maxPrice) && 
      (!category ||p.category == category)
    )
    })
    return result

  }

  static productrating(userId,productId,rating){
      const user = UserModel.getall().find((u)=>u.id==userId)
      const product = products.find((p)=>p.id==productId)
      // console.log(productId)
      // console.log(product)
      // console.log(user)
      if(!user){
        return "User not found"
      }
      if(product<=0){
        return "product not found"
      }
      if(rating<0 || rating>5){
          return "The rating should lie between 0 to 5"
      }

      if(!product.rating){
        product.rating = []
        product.rating.push({UserId:userId,
        Rating:rating})
        return productId
      }else{
       const existingproduct = product.rating.findIndex((u)=>u.UserId==userId)
        if(existingproduct>=0){
           product.rating[existingproduct]= { UserId:userId,
          Rating:rating } 
        return productId;
        }else{
           product.rating.push({UserId:userId,
           Rating:rating})
        return productId
        }
      }


  }

}

var products = [
    new ProductModel(
      1,
      'Product 1',
      'Description for Product 10',
      19.99,
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
      'category',

    ),
    new ProductModel(
      2,
      'Product 2',
      'Description for Product 2',
      29.99,
      'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
      'category2',
      ['M','XL','S']
    ),
    new ProductModel(
      3,
      'Product 3',
      'Description for Product 3',
      39.99,
      'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
      'category3',
      ['M','S']
    ),
  ];
  