import express from 'express';
import jwt from 'jsonwebtoken'
import {JWT_SECRET} from '../config/config'

 const authMiddlrware=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader && !authHeader.startWith('Beares')){
        return res.status(401).json({

        })
    }
    const token=authHeader.split('')[1];
    try{
        const decoded=jwt.verify(token,JWT_SECRET);
        req.userId=decoded.userId;
        next();
    }catch(error){
        return res.status(401).json({

        })
    }
}
export default authMiddlrware;