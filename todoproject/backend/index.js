import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import userrouter from './routes/userrouter.js'; 

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1', userrouter);

mongoose
    .connect('mongodb+srv://aryan056400:l3kKLLJpprQ7pCfI@noteauth.fksnm.mongodb.net/')
    .then(() => {
        console.log("hmlo hmlo from the db");
    })
    .catch((error) => {
        console.error(error.message);
    });

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
