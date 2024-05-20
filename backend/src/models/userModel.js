const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: { 
            type: String, 
            required: true, 
            unique: true,
            trim: true
        },
        email: { 
            type: String, 
            required: true, 
            unique: true 
        },
        password: { 
            type: String, 
            required: true 
        },
        email: { 
            type: String, 
            required: true, 
            unique: true 
        },
        role: { 
            type: String, 
            enum: ['user', 'admin'], 
            default: 'user' ,
            required: true,
        },
},
{   
    timestamps: true 
}
);

module.exports = mongoose.model('User', userSchema);