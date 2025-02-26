// var express = require('express');
// var router = express.Router();
// var userModel=require('../models/userModel');
// const { response } = require('../app');
// // localhost:3000/users/signup
// // {"username":"adam","email":"a@gmail.com","password":"123456"}
// router.post('/signup',(req,res)=>{
//   let users=new userModel({
//     username:req.body.username,
//     email:req.body.email,
//     password:req.body.password,

//   })
//   users.save()
//   .then(response=>res.status(200).json({message:response}))
//   .catch(err=>res.status(401).json({message:err}))
// })
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;


// const express=require('express')
// const router=express.Router()
// const userModel=require('../models/userModel')
// const bcrypt=require('bcryptjs')
// const nodemailer=require('nodemailer')
// const jwt=require('jsonwebtoken')
// const bodyParser=require('body-parser')
// router.use(bodyParser.json())
// router.post('/signup',async(req,res)=>{
//   // res.send("created")
//   try{
//     const{username,email,password}=req.body
//     const emailFound=await userModel.findone({email})
//     if(emailFound){return res.status(201).json({message:"email already registered"})}
//     const hashedPassword=await bcrypt.hash(password,10)
//     let user=new userModel({
//       username,email,password:hashedPassword
//     })
//     user.save()
//     const transport=nodemailer.createTransport({
//       host:'sandbox.smtp.mailtrap.io',
//       port:2525,
//       auth:{
//         user:process.env.EMAIL,
//         pass:process.env.PASSWORD
//       }
//     })
//     const token=Jwt.sign({email},process.env.SECRET_KEY,{expiresIn:'1h'})
//     const verificationLink='http://localhost:3000/users/verify/${token}'
//     transport.sendMail({
//       from:process.env.EMAIL,
//       to:email,
//       subject:"verification email from APP name",
//       html:'<a href=${verificationLink}>verify on clicking this link</a>'
//     })
//     res.status(200).json({message:"signup successfull and activation link is sent"})

//   }
//   catch(err){
//     res.status(500).json({message:err})
//   }
// })
// router.get('/verify/:token',async(req,res)=>{
//   try{
//     const {token}=req.params
//     const decoded=Jwt.verify(token,process.env.SECRET_KEY)
//     const user=await userModel.findOne({email:decoded.email})
//     if(!user){return res.status(404).json({message:"invalid token"})}
//     user.isVerified=true
//     user.save()
//     res.status(200).json({message:"verification successfull"})
//   }
//   catch(err){
//     res.status(500).json({message:"server error",err})
//   }
// })
// module.exports=router;
// const express=require('express')
// const router=express.Router()
// const usermodel=require('../models/usermodel')
// const bcrypt=require('bcryptjs')
// const nodemailer=require('nodemailer')
// const Jwt=require('jsonwebtoken')
// const bodyParser=require('body-parser')
// router.use(bodyParser.json())
// router.post('/signup',async(req,res)=>{
// //    res.send("created")
//     try{
//         const {username,email,password}=req.body
//         const emailFound=await usermodel.findOne({email})
//         if(emailFound){return res.status(201).json({message:"email already registered"})}
//         const hashedPassword=await bcrypt.hash(password,10)
//         let user=new usermodel({
//             username,email,password:hashedPassword
//         })
//         user.save()
//         const transport=nodemailer.createTransport({
//             host:'sandbox.smtp.mailtrap.io',
//             port:2525,
//             auth:{
//                 user:process.env.EMAIL,
//                 pass:process.env.PASSWORD
//             }
//         })
//         const token=Jwt.sign({email},process.env.SECRET_KEY,{expiresIn:'1h'})
//         const verificationLink=`http://localhost:3000/users/verify/${token}`
//         transport.sendMail({
//             from:process.env.EMAIL,
//             to:email,
//             subject:"verification email from app name",
//             html:`<a href=${verificationLink}>verify on clicking this link</a>`
//         })
//         res.status(200).json({message:"signup successfull"})
//     }
//     catch(err){
//         res.status(500).json({message:err})
//     }}
// )
// router.get('/verify/:token',async(req,res)=>{
//     try{
//         const{token}=req.params
//         const decoded=Jwt.verify(token,process.env.SECRET_KEY)
//         const user=await usermodel.findOne({email:decoded.email})
//         if(!user){return res.status(404).json({message:"invalid token"})}
//         user.isVerified=true
//         user.save()
//         res.status(200).json({message:"verification successfull"})
//     }
//     catch(err){
//         res.status(500).json({message:"server error",err})
//     }
// })
// module.exports=router
var express = require('express');
var router = express.Router();
var userModel=require('../models/userModel');
// const { response } = require('../app');
// localhost:3000/users/signup
// {"username":"adam","email":"a@gmail.com","password":"123456"}
router.post('/signup',(req,res)=>{
  let users=new userModel({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,
    degree:req.body.degree
  })
  users.save()
  .then(response=>res.status(200).json({message:response}))
  .catch(err=>res.status(401).json({message:err}))
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
})
router.post('/login',async(req,res)=>{
  
    console.log(req.body)
    try{
        const {username,password}=req.body
        let user=await userModel.findOne({username})
        if(!user){return res.status(404).json({message:"user not found"})}
        let (isMatched)=await bcrypt.compare(password,user.password)
        if(!isMatched){return res.status(400).json({message:"password is not correct"})}
        res.status(200).json({message:"login successfull",username:user.username})
    }
    catch(err){
        res.status(500).json({err})
    }
})

module.exports = router;
