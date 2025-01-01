require('dotenv').config
const express = require("express")
const app = express()
const port = 4000

// get request 

app.get('/' , (req , res)=>{
    res.send("Hello World!")
})

app.get('/twitter' , (req , res) =>{
    res.send("Login to your twitter account to continue")
})


app.get('/login' , (req , res)=>{
    res.send("Click here to login")
})

// server listens at port 4000

app.listen(process.env.PORT , ()=>{
    console.log(`Example listening on port ${port}`);    
})




