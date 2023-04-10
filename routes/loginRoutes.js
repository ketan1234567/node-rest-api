const express = require('express');
const app = express();
const loginRoutes = express.Router();
let Book = require('../model/Book');
const jwt=require('jsonwebtoken')
let Login=require('../model/login');
const login = require('../model/login');



//Add Login 

loginRoutes.route('/userlogin').post(async(req, res)=>{
   // let data=new Login(req.body);

   const username = req.body.username
   const password = req. body.password

    let result= await Login.find({username} && {password});
    console.log(result)
    secretkey="ketan_d"
    
 if (result[0].username===username && result[0].password===password) {
   
    const token = jwt.sign({username:username},secretkey,{expiresIn:"1800s"})
    console.log(token)
    res.cookie('token', token , { maxAge:900000,  httpOnly:true})
    
    res.redirect('/book-list')
   
  } else {
    console.log("This is Error");
  }
});
 
module.exports = loginRoutes;
