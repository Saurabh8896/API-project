// import UserModel from "../features/user/user.model.js"

import UserModel from "../features/user/user.model.js"

const basicAuthorizer = (req,res,next)=>{

    const authHeader = req.headers['authorization']

    if(!authHeader){
        res.status(401).send("No authorized details found")
    }

    // console.log(authHeader)
// Extract Credential.
    const base64Credentails = authHeader.replace('Basic ','')
    // console.log(base64Credentails)

// Decode Credentials

    const  decodeCredentials = Buffer.from(base64Credentails,'base64').toString('utf8')

    // console.log(decodeCredentials)
    const creds = decodeCredentials.split(':')

    const user = UserModel.getall().find((u)=>u.email == creds[0] && u.password == creds[1])

    if(user){
        next();
    }else{
        return res.status(401).send("Incorrect Credentails")
    }
}

export default basicAuthorizer




