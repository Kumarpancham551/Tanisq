const express = require("express");

const app = express();
const apiRouter = require("./src/routes/index");

app.use("/api",apiRouter);
app.get('/',(req,res)=>{
    res.send({
        success:true,
        message:"hello world",
        data:{}
    })
})


app.listen(3000,()=>{
    console.log("server started successfully");
})