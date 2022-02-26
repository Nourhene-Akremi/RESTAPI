const express=('express');
const contact = require("../models/contactModels");
const route= express.Router();

route.post('/',async(req,resp)=>{
    const {name,email,age} = req.body;
    try {
        const addContact= new contact(req.body)
        const existContact=await contact.findOne({email})
        if  (existContact) {return resp.status(400).send('contact already exist')}     
        await addContact.save()
        resp.status(200).send({msg:'added contact with success',addContact})
    }catch (error) {
        resp.status(500).send({msg:'ooups,contact could not be saved'})}  
 })
//   routes.get('/',async(req,resp)=>{
//       try {
//           const getContact=await contact.find()
//           resp.status(200).send({msg:'get contact with success',addContact})
//       }catch (error) {
//           resp.status(500).send({msg:'ooups,contact could not be gated'})}  
//   })
 
// routes.put('/:id',async(req,resp)=>{
//     try {
//         const putContact= await contact.findByIdAndUpdate(req.params.id,{$set:{...req.body}})
//         resp.status(200).send({msg:'update contact with success',addContact})
//     }catch (error) {
//         resp.status(500).send({msg:'Ooups,contact could not be updated'})}  
// })
// routes.delete('/:id',async(req,resp)=>{
//     try {
//         const deleteContact= await contact.findOneAndDelete({_id:req.params.id})
//         resp.status(200).send({msg:'added contact with success',addContact})
//     }catch (error) {
//         resp.status(500).send({msg:'ooups,contact could not be saved'})}  
// })
// routes.getone('/:id',async(req,resp)=>{
//     try {
//         const getoneContact= await contact.findOne({_id:req.params.id})
//         resp.status(200).send({msg:'added contact with success',addContact})
//     }catch (error) {
//         resp.status(500).send({msg:'ooups,contact could not be saved'})}  
// })


module.exports=route;