const mongoose = require("mongoose");

const connect = ()=>{
    console.log("mongo connection request");
    return mongoose.connect("mongodb://localhost/TanisqDB");
}

module.exports ={
    connect
}