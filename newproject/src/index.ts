import express,{Request,Response} from "express"
import dotenv from "dotenv"
import { PrismaClient } from "@prisma/client";

dotenv.config();

const prisma= new PrismaClient();
const app=express();
app.use(express.json());

app.get('/',(req:Request,res:Response)=>{
    res.send("hmlo hmlo from the ts");
})

app.post('/createuser',async(req:Request,res:Response)=>{
    const {username,email,firstname,lastname,password}=req.body;
    const newuser=await prisma.user.create({
        data:{
            username,
            email,
            firstname,
            lastname,
            password
        }
    })
    res.json(newuser);
    console.log("newuser = ",newuser);
})

app.listen(3000,()=>{
    console.log("hmlo hmlo");
})