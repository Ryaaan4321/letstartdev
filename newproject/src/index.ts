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
        select: {
            username: true,
            email: true,
            password: true,
            todos: true,
            id: true
        }

    })
    res.json({
        msg: response
    })

})
app.get('/finallusers', async (req: Request, res: Response) => {
    const response = await prisma.user.findMany({});
    res.json({
        msg: response
    })
})
app.get('/gettodos', async (req: Request, res: Response) => {
    const response = await prisma.todo.findMany({});
    res.json({
        msg: response
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
app.post('/signin', async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const response = await prisma.user.findUnique({
        where: { email },
        include: { todos: true },
    });

})

app.put('/updateduser/:id', async (req: Request, res: Response) => {
    try {
        const uid = Number(req.params.id);
        const { username, firstname, lastname, email } = req.body;
        const response = await prisma.user.update({
            where: {
                id: uid
            },
            data: {
                ...(username && { username }),
                ...(firstname && { firstname }),
                ...(lastname && { lastname }),
                ...(email && { email })
            }
        })
        console.log(response);
    } catch (error) {
        console.log(error);
    }
})

app.listen(3000, () => {
    console.log("hmlo hmlo");
})