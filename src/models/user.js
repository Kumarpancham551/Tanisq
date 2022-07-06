const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

userSchema.pre("save",async function encryptpassword(next){
    const user = this;
    const hash  = await bcrypt.hash(this.password,10);
    this.password = hash;
    next();

})

userSchema.methods.isValidPassword = async function checkValidity(password){
    const user = this;
    const compare = await bcrypt.compare(password,user.password);
    return compare;
}

const User = new mongoose.model('User', userSchema);

module.exports = User;