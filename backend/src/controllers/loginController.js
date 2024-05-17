const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_TOKEN ='ksj@$jdhd5589*&'

const loginUser = async(request,response)=>{
    const {email, password} = request.body
    const validUser = await userModel.findOne({email:email})
    if(!validUser){
        return response.status(401).json({message : "Invalid email."})
    }
    if(bcrypt.compare(password,validUser.password))
    {
        const AUTH_TOKEN = jwt.sign({email: validUser.email},JWT_TOKEN)
        if(response.status(201)){
            return response.json({status :'OK',token :AUTH_TOKEN})
        }
    
    }
    response.status(401).json({message : "Invalid Password"})

}

module.exports = {loginUser};