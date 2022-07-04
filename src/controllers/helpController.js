const helpDetails = (req,res)=>{
 return res.status(200).send({
    message:"Successfully hiting the help API",
    succes:true,
    data:{
        contact : "+91XXXXXX"
    }
 })
}

module.exports ={
    helpDetails
}