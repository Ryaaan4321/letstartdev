import express, { Request, Response } from "express"
import dotenv from "dotenv"
import { PrismaClient } from "@prisma/client";

dotenv.config();

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.get('/finduser/:id', async (req: Request, res: Response) => {
    const userid = parseInt(req.params.id);
    const response = await prisma.user.findUnique({
        where: { id: userid },
        select:{
            todos:true
        }
    })
    res.json({
        msg: response
    })

})
app.get('/gettodos',async(req:Request,res:Response)=>{
    const response=await prisma.todo.findMany({});
    res.json({
        msg:response
    })
})
app.post('/createuser', async (req: Request, res: Response) => {
    const { username, email, firstname, lastname, password } = req.body;
    const newuser = await prisma.user.create({
        data: {
            username,
            email,
            firstname,
            lastname,
            password
        }
    })
    res.json(newuser);
    console.log("newuser = ", newuser);
})
app.post('/createtodo', async (req: Request, res: Response) => {
    const { title, description, iscompleted, userid } = req.body;
    const newtodo = await prisma.todo.create({
        data: {
            title,
            description,
            iscompleted: iscompleted ?? false,
            userid
        }
    });
    console.log(newtodo);
})


app.listen(3000, () => {
    console.log("hmlo hmlo");
})