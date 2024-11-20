import express from 'express';
import mongoose, { Mongoose } from 'mongoose';
import dotenv from 'dotenv'

const app = express();
dotenv.config()

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("db is connected")
    })

app.listen(3000, () => {
    console.log(' hmlo hmlo ');
})