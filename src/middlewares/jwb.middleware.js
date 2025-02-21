import jwt from 'jsonwebtoken'
const jwtAuth = (req,res,next)=>{

    const token = req.cookies.jwtToken

    if(!token){
       return  res.status(401).send('Unauthorized')
    }
try{
   const payload =  jwt.verify(token, 'quJEmC0FIwT94LgKvNcmjWmsik8hiUnx')
}catch(err){
    return  res.status(401).send('Unauthorized')
}
next();
}

export default jwtAuth