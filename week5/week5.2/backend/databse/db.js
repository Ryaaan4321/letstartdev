const mongoose=require('mongoose');
const { string } = require('zod');


mongoose.connect('mongodb+srv://aryan:ertGLmNhb0oYCJJ3@cluster0.0m6yk.mongodb.net/tododb');
// mongodb+srv://aryan:ertGLmNhb0oYCJJ3@cluster0.0m6yk.mongodb.net/

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:1,
        unique:1,
    },
    email:{
       type:String,
       required:1,
       unique:1
    },
    password:{
        type:String,
        required:1,
        unique:1
    }
});

const TodoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:1,
    },
    descreption:{
        type:String,
        required:1
    },completed:{
        type:Boolean,
        required:1,
        default:0
    }
})
const AdminSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:1,
    },
    password:{
        type:String,
        required:true,
    }
    ,isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
})

const User=mongoose.model('User',UserSchema);
const Todo=mongoose.model('Todo',TodoSchema);
const Admin=mongoose.model('Admin',AdminSchema);
module.exports={
    User,
    Todo
}