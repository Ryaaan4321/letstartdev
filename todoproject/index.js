import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userrouter from './backend/routes/userrouter.js'
const app = express();
dotenv.config();
console.log('MONGO_URI:', process.env.MONGO);
mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB connected successfully'))
    .catch(err => console.error('DB connection error:', err));


app.use(express.json());

app.use('/user', userrouter);
app.listen(3000, () => {
    console.log(' hmlo hmlo ');
})
