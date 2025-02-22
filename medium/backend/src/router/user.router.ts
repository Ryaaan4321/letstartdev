import { Hono } from "hono";
import { sign } from "hono/jwt";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import {signininput} from '@fuccaryan/meidum-common'
export const userrouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string
    };
}>();


userrouter.post('/signup', async (c) => {
    console.log("Signup route hit!");
    try {
        const body = await c.req.json();
        const {success}=signininput.safeParse(body);
        if(!success){
            c.status(411);
            c.json({
               msg:"inputs are not valid"
            })
        }
        const prisma = new PrismaClient({
            datasources: {
                db: { url: c.env.DATABASE_URL }
            }
        }).$extends(withAccelerate());
        const newuser = await prisma.user.create({
            data: {
                name: body.name,
                username: body.username,
                email: body.email,
                password: body.password,
            }
        })
        const jwt = await sign({
            id: newuser.id
        }, c.env.JWT_SECRET)
        return c.json({ message: jwt }, 201);
    } catch (error) {
        console.log(error);
        return c.status(411);
    }

});
userrouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const {success}=signininput.safeParse(body);
    if(!success){
        c.status(411);
        c.json({
           msg:"inputs are not valid"
        })
    }
    console.log(body);
    const prisma = new PrismaClient({
        datasources: {
            db: { url: c.env.DATABASE_URL }
        }
    }).$extends(withAccelerate());
    try {
        const user = await prisma.user.findFirst({
            where: {
                username: body.username,
                password: body.password
            }
        })
        if (!user) {
            c.status(403);
            return c.json({
                message: "not found"
            })
        }
        const token = await sign({
            id: user.email
        }, c.env.JWT_SECRET)
        return c.json({ jwt: token });
    } catch (error) {
        console.log(error);
        return c.json({
            message: "there is an error"
        }, 404);
    }
})
userrouter.get('/getallblog/:id', async (c) => {
    const id = parseInt(c.req.param('id'));
    const prisma = new PrismaClient({
        datasources: {
            db: { url: c.env.DATABASE_URL }
        }
    }).$extends(withAccelerate());
    try {
        const response = await prisma.user.findUnique({
            where: {
                id: id
            },
            select: {
                blog: true,
                email: true,
                username: true,
                name: true
            }
        })
        return c.json({
            msg: response
        })
    }catch(e){
        console.log(e);
    }
    
})
userrouter.get('/getalluser/:id', async (c) => {
    const prisma = new PrismaClient({
        datasources: {
            db: { url: c.env.DATABASE_URL }
        }
    }).$extends(withAccelerate());
    const id=parseInt(c.req.param('id'));
    const response = await prisma.user.findFirst({
        where:{id},
        select: {
            id:true,
            email:true,
            blog:true
        }
    })
    return c.json({
        msg: response
    })
})
userrouter.get('/getusersbulk',async(c)=>{
    const prisma=new PrismaClient({
        datasources:{
            db:{url:c.env.DATABASE_URL}
        }
    }).$extends(withAccelerate());
    const response=await prisma.user.findMany({});
    return c.json({
        msg:response
    })
});

// signin is happening with the name and the password 
// signin is also happenign with the username and the password 
// email && password
// so what that said it says that something is wrong with my inputs 
// and what are inputs they are the zod 