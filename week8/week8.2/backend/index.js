import express from 'express'
import authrouter from './routes/auth.router.js'
import userrouter from './routes/user.router.js'
import mongoose from 'mongoose';
import dotnev from 'dotenv'
dotnev.config();

const app=express();

app.use(express.json());
app.use('/api/v1',authrouter);
app.use('/api/v2',userrouter);

const connecttoDatabse=async()=>{
    try{
       const mongouri=process.env.MONGO;
       await mongoose.connect(mongouri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
       });
       console.log('hmlo from db');
    }catch(error){
       console.log(error);
       process.exit(1);
    }
};

app.listen(3000,()=>{
    console.log(`server is listening in the port ${3000}`);
})
connecttoDatabse();