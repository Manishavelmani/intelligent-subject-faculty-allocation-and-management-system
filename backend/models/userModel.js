const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    username:String,
    email:String,
    password:String,
    degree:String
})

const userModel=new mongoose.model('users',userSchema)
module.exports=userModel
