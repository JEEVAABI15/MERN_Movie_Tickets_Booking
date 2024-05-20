const dotenv = require("dotenv").config();
const express = require('express')
const app = express();
const connnectDB = require('./src/DB/db')
const PORT = process.env.PORT || 8080
const cookieParser = require("cookie-parser");

const signUp = require('./src/routes/signUpRoute')
const logIn = require('./src/routes/logInRoute')
const Adminlogin = require('./src/routes/logInRoute') 

connnectDB();  
app.use(cookieParser());
app.use(express.json())

const cors = require('cors');

app.use(cors())

app.use('/api/v1/signup',signUp)
app.use('/api/v1/login',logIn)
app.use('/api/v1/login',Adminlogin)


app.use('/',(req,res)=>{
    res.send({message : 'Running'})
})

app.listen(PORT, () => console.log(`Server started on port : http://localhost:${PORT}`))