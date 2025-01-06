import express from 'express';
import {Account} from '../db/Account.js';
import {User} from '../db/User.js';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import authMiddleware from '../middleware/index.js';

const router=express.Router();

router.get('/balance',authMiddleware,async(req,res)=>{
    const account=await Account.findOne({userId:req.user._id});
    res.json({
        balance:account.balance
    })
})
router.post('/transfer',authMiddleware,async(req,res)=>{
    const session=await mongoose.startSession();
    session.startTransaction();
    const {amount,to}=req.body;

    const account=await Account.findOne({userId:req.user._id}).session(session);
    if(!account|| account.balance<amount){
        await session.abortTransaction();
        return res.status(400).json({
            msg:"insufficeint balance"
        })
    }
    const toAccount=await Account.findOne({userId:to}).session(session);
    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            msg:"inavalid account"
        })
    };
    await Account.updateOne({userId:req.user._id},{$inc:{balance:-amount}}).session(session);
    await Account.updateOne({userId:to},{$inc:{balance:amount}}).session(session);

    await session.commitTransaction();

    res.json({
        msg:"transfered successfully"
    });

})
export default router;