const express = require("express");
const router = express.Router();
const users = require("../schema/user-schema.js");

router.post("/Add", async(req, res) => {
 console.log(req.body);
 const { name, email, age, mobile, work, address,desc } = req.body;
 if (!name || !email || !age || !mobile || !work || !desc||!address) 
 {
  res.status(404).send("plz,fill all the data");
 }

 try {
  const preuser=await users.findOne({email:email})

  if(preuser)
  {
   res.status(404).send("User already registered");
   console.log("User already presented");

  }
  else
  {
   const adduser=new users({name,email,age,mobile,work,address,desc});
   await adduser.save();
   res.status(200).json(adduser);
   console.log("is added to database successsfully");

  }
 }
 catch (error) {
  res.status(404).json(error)

 }
})

router.get('/users',async(req,res)=>{
 try{
  const Allusers=await users.find();
  res.status(200).json(Allusers)
  console.log(Allusers)
 }
 catch(error)
 {
  res.status(404).json(error)
 }
})


router.get('/view/:id',async(req,res)=>{

 const {id}=req.params;
  console.log(id);

 try{

  const Iuser=await users.findById({_id:id});
 
  res.status(200).json(Iuser);
  
 }
 catch(error)
 {
  res.status(404).json(error);
  console.log(error);
 }
})

router.patch('/updateuser/:id',async(req,res)=>{
 try{
  const {id}=req.params;
  const updateduser=await users.findByIdAndUpdate(id,req.body,{new:true});
  console.log(updateduser);
  res.status(200).json(updateduser); 
 }
 catch(error)
 {
  res.status(422).json(error); 
 }
 
});

router.delete('/deleteuser/:id',async(req,res)=>{
 const {id}=req.params;
 try{
  const delteuser=await users.findByIdAndDelete({_id:id});
  console.log(delteuser);
  res.status(200).json(delteuser);
 }
 catch(error)
 {
  res.status(404).json(error);
  console.log("failed to delete user");
 }

})
module.exports = router;