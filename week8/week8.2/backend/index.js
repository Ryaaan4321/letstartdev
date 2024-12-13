import express from 'express'
import router from './routes/mainrouter.js'
const app=express();

app.use(express.json());
app.use('/api/v1',router);

app.listen(3000,()=>{
    console.log(`server is listening in the port ${3000}`);
})