const express = require('express');
const { User } = require('../databse/db');
const app = express();

async function checkUser(req,res,next){
    const email=req.headers.email;
    const flag = await User.findOne({email:email})
    if (!flag) {
        return res.status(401).json({ msg: "User is not authorized" });  
    }
    next();
}
module.exports={
    checkUser  
}