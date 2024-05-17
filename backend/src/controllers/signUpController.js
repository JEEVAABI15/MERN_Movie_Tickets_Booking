const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs')

const addNewUser = async(request,response) => {
    const encrypedPassword = await bcrypt.hash(request.body.password, 10)
    const user = new userModel({
        name : request.body.name,
        email : request.body.email,
        password: encrypedPassword
    })

    try{
        const existingUser = await userModel.findOne({email:request.body.email})
        if(existingUser)
        {
            return response.status(409).json({message:'Email ID already exists...'})
        }

        const newUser = await user.save()
        response.status(201).json(newUser)
    }
    catch(error){
        response.status(500).json({message: error.message})


    }

}

module.exports = {addNewUser}
