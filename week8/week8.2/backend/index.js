import express from 'express'
import authrouter from './routes/auth.router.js'
import userrouter from './routes/user.router.js'
const app=express();

app.use(express.json());
app.use('/api/v1',authrouter);
app.use('/api/v2',userrouter);

app.listen(3000,()=>{
    console.log(`server is listening in the port ${3000}`);
})