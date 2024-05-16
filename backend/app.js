const express = require('express')
const PORT = 8080;
const app = express();


app.use('/',(req,res)=>{
    res.send({message : 'Running'})
})

app.listen(PORT, () => console.log(`Server started on port : http://localhost:${PORT}`))