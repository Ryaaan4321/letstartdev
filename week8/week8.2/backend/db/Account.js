import mongoose from "mongoose";

const accountSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId;
        ref
    }
})