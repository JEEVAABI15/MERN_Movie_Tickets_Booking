const dotenv = require("dotenv").config();
const express = require('express')
const app = express();
const connnectDB = require('./src/DB/db')
const PORT = process.env.PORT || 8080
const cookieParser = require("cookie-parser");

const auth = require('./src/routes/authRoute')
const movie = require('./src/routes/movieRoute')
const theatre = require('./src/routes/theatreRoutes')
const booking = require('./src/routes/bookingRoute')



connnectDB();  
app.use(cookieParser());
app.use(express.json())

const cors = require('cors');

app.use(cors())

app.use('/api/v1/auth', auth)
app.use('/api/v1/movie', movie)
app.use('/api/v1/theatre', theatre)
app.use('/api/v1/booking', booking)


app.use('/',(req,res)=>{
    res.send({message : 'Running'})
})

app.listen(PORT, () => console.log(`Server started on port : http://localhost:${PORT}`))