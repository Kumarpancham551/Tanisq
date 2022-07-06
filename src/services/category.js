const Category = require("../models/category");


const createCategory = async (data)=>{
try{
const newCategory = {
    name:data.name
}
const category = await new Category(newCategory).save();
return category;
}catch(err){
 console.log(err);
}
}

const deleteCategory = async (id)=>{
    try{
        const category = await Category.findByOneAndDelete({id:id});
        return category;
    }catch(err){
        console.log(err);
    }
}
const getAllCaategories = async()=>{
    try{
        const category = await Category.find();
        return category;
    }catch(err){
        console.log(err);
    }
}
const getCategory = async(id)=>{
    try{
        const category = await Category.findById(id);
        return category;
    }catch(err){
        console.log(err);
    }
}
const updateCategory = async(data,id)=>{
try{
 const category = await Category.findOneAndUpdate({id:id},data,{new:true});
 return category
}catch(err){
    console.log(err)
}
}

module.exports={
createCategory,
deleteCategory,
getAllCaategories,
getCategory,
updateCategory
}