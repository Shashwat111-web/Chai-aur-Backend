import express from "express"
const app = express()

const port =  process.env.PORT ||  4000


app.get("/" , (req , res)=>{
    res.send("Server is ready");
})

// get a list of 5 jokes 

const jokes = [
    {
        id:1,
        title : `First joke`,
        content : "This is first joke"
    },
    {
        id: 2,
        title: `Second joke`,
        content: "This is second joke"
    },
    {
        id: 3,
        title: `Third joke`,
        content: "This is Third joke"
    },
    {
        id: 4,
        title: `Fourth joke`,
        content: "This is fourth joke"
    },
    {
        id: 5,
        title: `Fifth joke`,
        content: "This is fifth joke"
    },
];


app.get('/api/jokes' , (req,res)=>{
    res.send(jokes);
})

app.listen(port , ()=>{
    console.log(`Example port running at ${port}`);
    
})