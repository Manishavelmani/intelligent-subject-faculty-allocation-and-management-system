
// const express=require('express')
// const router=express.Router()
// const studentModel=require('../models/studentModel')
// <<<<<<< HEAD
// // const { response } = require('../app')
// =======
// <<<<<<< HEAD
// const { response } = require('../app')
// =======
// // const { response } = require('../app')
// >>>>>>> 32410db (Removed nested Git repository)
// >>>>>>> 7c43928 (Initial commit - Uploading IFSAMS project)
// //localhost:3000/students/create
// router.post('/create',(req,res)=>{
//     let students=new studentModel({
//         firstName:req.body.firstName,
//         lastName:req.body.lastName,
//         age:req.body.age,
//         marks:req.body.marks,
//         address:req.body.address
//     })
//     students.save()
//     .then(response=>res.send(response))
//     .catch(err=>res.send(err))
// }
// )
// //localhost:3000/students/read
// <<<<<<< HEAD
// =======
// <<<<<<< HEAD
// router.get('/read',(req,res)=>{
//     studentModel.find()
//     .then(response=>res.send(response))
//     .catch(err=>res.send(err))
// })
// //localhost:3000/Students/read/Adam
// router.get('/read/:firstName',(req,res)=>{
//     studentModel.find({firstName:req.params.firstName})
//     .then(response=>res.send(response))
//     .catch(err=>res.send(err))
// })
// //localhost:3000/students/get/?id=
// router.get('/get',(req,res)=>{
//     studentModel.findById(req.query.id)
//     .then(response=>res.send(response))
//     .catch(err=>res.send(err))
// })
// //localhost:3000/students/update/?id=
// router.put('/update',(req,res)=>{
//     const idQuery=req.query.id
//     studentModel.findByIdAndUpdate(idQuery,{age:req.body.age})
//     .then(response=>res.send(response))
//     .catch(err=>res.send(err))
// })
// //localhost:3000/students/update/Adam
// router.put('/update/:name',(req,res)=>{
//     nameParams=req.params.firstName
//     studentModel.findOneAndUpdate(nameParams,{age:req.body.age})
//     .then(response=>res.send(response))
//     .catch(err=>res.send(err))

// })
// //localhost:3000/students/delete/?id=
// router.delete('/delete',(req,res)=>{
//     const idQuery=req.query.id
//     studentModel.d=findByIdAndDelete(idQuery)
//     .then(response=>res.send(response))
//     .catch(err=>res.send(err))
// })
// =======
// >>>>>>> 7c43928 (Initial commit - Uploading IFSAMS project)
// // router.get('/read',(req,res)=>{
// //     studentModel.find()
// //     .then(response=>res.send(response))
// //     .catch(err=>res.send(err))
// // })
// // //localhost:3000/Students/read/Adam
// // router.get('/read/:firstName',(req,res)=>{
// //     studentModel.find({firstName:req.params.firstName})
// //     .then(response=>res.send(response))
// //     .catch(err=>res.send(err))
// // })
// // //localhost:3000/students/get/?id=
// // router.get('/get',(req,res)=>{
// //     studentModel.findById(req.query.id)
// //     .then(response=>res.send(response))
// //     .catch(err=>res.send(err))
// // })
// // //localhost:3000/students/update/?id=
// // router.put('/update',(req,res)=>{
// //     const idQuery=req.query.id
// //     studentModel.findByIdAndUpdate(idQuery,{age:req.body.age})
// //     .then(response=>res.send(response))
// //     .catch(err=>res.send(err))
// // })
// // //localhost:3000/students/update/Adam
// // router.put('/update/:name',(req,res)=>{
// //     nameParams=req.params.firstName
// //     studentModel.findOneAndUpdate(nameParams,{age:req.body.age})
// //     .then(response=>res.send(response))
// //     .catch(err=>res.send(err))

// // })
// // //localhost:3000/students/delete/?id=
// // router.delete('/delete',(req,res)=>{
// //     const idQuery=req.query.id
// //     studentModel.d=findByIdAndDelete(idQuery)
// //     .then(response=>res.send(response))
// //     .catch(err=>res.send(err))
// // })
// <<<<<<< HEAD
// =======
// >>>>>>> 32410db (Removed nested Git repository)
// >>>>>>> 7c43928 (Initial commit - Uploading IFSAMS project)
// module.exports=router



const express = require('express');
const router = express.Router();
const studentModel = require('../models/studentModel');

// localhost:3000/students/create
router.post('/create', (req, res) => {
    let students = new studentModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        marks: req.body.marks,
        address: req.body.address
    });
    students.save()
        .then(response => res.send(response))
        .catch(err => res.send(err));
});

// localhost:3000/students/read
router.get('/read', (req, res) => {
    studentModel.find()
        .then(response => res.send(response))
        .catch(err => res.send(err));
});

// localhost:3000/Students/read/Adam
router.get('/read/:firstName', (req, res) => {
    studentModel.find({ firstName: req.params.firstName })
        .then(response => res.send(response))
        .catch(err => res.send(err));
});

// localhost:3000/students/get/?id=
router.get('/get', (req, res) => {
    studentModel.findById(req.query.id)
        .then(response => res.send(response))
        .catch(err => res.send(err));
});

// localhost:3000/students/update/?id=
router.put('/update', (req, res) => {
    const idQuery = req.query.id;
    studentModel.findByIdAndUpdate(idQuery, { age: req.body.age }, { new: true })
        .then(response => res.send(response))
        .catch(err => res.send(err));
});

// localhost:3000/students/update/Adam
router.put('/update/:firstName', (req, res) => {
    const nameParams = req.params.firstName;
    studentModel.findOneAndUpdate({ firstName: nameParams }, { age: req.body.age }, { new: true })
        .then(response => res.send(response))
        .catch(err => res.send(err));
});

// localhost:3000/students/delete/?id=
router.delete('/delete', (req, res) => {
    const idQuery = req.query.id;
    studentModel.findByIdAndDelete(idQuery)
        .then(response => res.send(response))
        .catch(err => res.send(err));
});

module.exports = router;
