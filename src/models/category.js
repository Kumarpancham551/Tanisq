const mongoose = require('mongoose');

const cateogrySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
},{timestamps:true});

const categoryModel = new mongoose.model('Category',cateogrySchema);
module.exports = categoryModel;