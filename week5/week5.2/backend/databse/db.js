const mongoose=require('mongoose');


mongoose.connect('mongodb+srv://aryan:ertGLmNhb0oYCJJ3@cluster0.0m6yk.mongodb.net/tododb');


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

const User=mongoose.model('User',UserSchema);
const Todo=mongoose.model('Todo',TodoSchema);
module.exports={
    User,
    Todo
}