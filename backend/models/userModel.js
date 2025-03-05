// const mongoose=require('mongoose')
// const userSchema=mongoose.Schema({
//     username:String,
//     email:String,
//     password:String,
//     degree:String
// })

// const userModel=new mongoose.model('users',userSchema)
// module.exports=userModel
// <<<<<<< HEAD
// =======
// <<<<<<< HEAD
// =======
// >>>>>>> 7c43928 (Initial commit - Uploading IFSAMS project)
// // const mongoose=require('mongoose')
// // const userSchema=mongoose.Schema({
// //     username:String,
// //     email:{type:String,unique:true},
// //     password:String,
// //     isVerified:{type:Boolean,default:false}
// // },{timestamps:true}
// // )
// // const userModel=new mongoose.model('users',userSchema)
// <<<<<<< HEAD
// // module.exports=userModel
// =======
// // module.exports=userModel
// >>>>>>> 32410db (Removed nested Git repository)
// >>>>>>> 7c43928 (Initial commit - Uploading IFSAMS project)
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
    isVerified: { type: Boolean, default: false }
}, { timestamps: true });

const userModel = new mongoose.model('users', userSchema);
module.exports = userModel;
