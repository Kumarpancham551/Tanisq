const express = require("express");
const {connect} = require("./src/config/databseConfig")
const app = express();
const apiRouter = require("./src/routes/index");
const User = require("./src/models/user")

app.use("/api",apiRouter);
app.get('/',(req,res)=>{
    res.send({
        success:true,
        message:"hello world",
        data:{}
    })
})


app.listen(3000,async ()=>{
    await connect();
    console.log("mongo db connect successfully");
    console.log("server started successfully");
   let user = await User.create({email:"abc@xyz.com",password:"12345"})

   console.log(user);
})