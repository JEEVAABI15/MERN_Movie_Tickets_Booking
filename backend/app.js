const dotenv = require("dotenv").config();

const express = require('express')
const app = express();
const connnectDB = require('./src/DB/db')
const PORT = process.env.PORT || 8080

const signUp = require('./src/routes/signUpRoute')
const logIn = require('./src/routes/logInRoute')

connnectDB();  

app.use(express.json())

app.use('/api/v1/signup',signUp)
app.use('/api/v1/login',logIn)


app.use('/',(req,res)=>{
    res.send({message : 'Running'})
})

app.listen(PORT, () => console.log(`Server started on port : http://localhost:${PORT}`))