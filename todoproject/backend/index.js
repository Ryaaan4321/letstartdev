import express from 'express';
import mongoose, { Mongoose } from 'mongoose';
import dotenv from 'dotenv'
import userrouter from './routes/userrouter.js'
const app = express();
dotenv.config()

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("db is connected")
    })

app.use(express.json());

app.use('/user', userrouter);
app.listen(3000, () => {
    console.log(' hmlo hmlo ');
})
