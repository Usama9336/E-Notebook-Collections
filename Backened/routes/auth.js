const express=require('express')
const router= express.Router();
const {body,validationResult}=require('express-validator');
const User=require('../models/Notes');
const fetchuser=require('../middleware/fetchuser');
//install two packages
var jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const JWT_SECRET='WTF$';
router.post('/createuser',[
    body('name').isLength({min:3}),
    body('email').isEmail(),
    body('password').isLength({min:5}),
],async (req,res)=>{
   // console.log(req.body);
//const user=User(req.body);
//user.save();
const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}
try{
//check whether the user with same exists
let user=await User.findOne({email:req.body.email});
if(user){
    return res.status(400).json({error:"Sorry a user with this Email already exists"})
}
const salt=await bcrypt.genSalt(10);
const secPass=await bcrypt.hash(req.body.password,salt);
user=await User.create({
    name:req.body.name,
    password:secPass,
    email:req.body.email,
});
/*.then(user=>res.json(user))
.catch(err=>{console.log(err)
    res.json({error:'Please Enter a Unique value for Email',message:err.message})})
res.send("Haelouw");*/
    /*obj={
    a:'the',
    number:20
}*/
const data={
    user:{
        id:user.id 
    }
}
const authtoken=jwt.sign(data,JWT_SECRET);
res.json({authtoken});
//res.json(user);
}
catch(error){
console.log(error.message);
res.status(500).send("Internal Server Error");
}
})
//authentication of user using post '/api/auth/login', no login required
router.post('/login',[
    //body('name','Enter a valid Email').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password can not be Blank').isLength({min:5}),
],async (req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
      const {email,password}=req.body;
      try{
        let user=await User.findOne({email});
if(!user){
    return res.status(400).json({error:"Sorry a user does not exists"});
  }
  const passwordCompare=await bcrypt.compare(password,user.password)
  if(!passwordCompare){
    return res.status(400).json({error:"Sorry a user does not exists"});
  }
  const data={
    user:{
        id:user.id 
    }
}
const authtoken=jwt.sign(data,JWT_SECRET);
res.json({authtoken});
 }
 catch(error){
    console.log(error.message);
    res.status(500).send("Internal Server Error");
 } 
})
//route 3 for signup 
router.post('/getuser',fetchuser,async (req,res)=>{
try {
    const userId=req.user.id;
const user=await User.findById(userId).select("password")  
res.send(user)
} catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server error")
}
})
//route 3 update notes

module.exports=router;