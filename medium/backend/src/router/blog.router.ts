import { Hono } from "hono";
import { sign, verify } from "hono/jwt";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
// import { BlogInput } from "@fuccaryan/meidum-common";
export const blogrouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string
    }, Variables: {
        userId: string
    };
}>();

blogrouter.use('/*', async (c, next) => {
    try {
        const authheader = c.req.header('authorization') || c.req.header('Authorization');
        // console.log("authheader from the blod middleware = ", authheader)
        if (!authheader) {
            return c.json({
                message: "unauthorized from the blog middleware"
            })
        }
        const token = authheader.split(" ")[1];
        // console.log("token = ", token);
        try {
            const payload = await verify(token, c.env.JWT_SECRET);
            console.log("payload fromt the blog middleware = ",payload);
            if (payload) {
                c.set('userId', payload.id);
                await next();
            }
        } catch (error) {
            return c.json({ message: "there is some error on this middleware" }, 401);
        }
    }
    catch (e) {
        console.log(e);
        return c.json({
            msg: "there is an error on this auth middleware"
        }, 404)
    }
})

blogrouter.post('/create', async (c) => {
    try {
        const body = await c.req.json();
        const userid = c.get("userId");
        // console.log("type of the user id = ", typeof userid);
        // console.log("user from the post req = ", userid);
        const prisma = new PrismaClient({
            datasources: {
                db: { url: c.env.DATABASE_URL }
            }
        }).$extends(withAccelerate());
        const newblog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                // thumbnail: body.thumbnail, i can add thumbnail any time i want,just chnage the blog schema run migration and redeploy it
                published: body.published,
                authorid: userid
            }
        })
        return c.json({
            newblog
        }, 200)
    } catch (error) {
        console.log(error);
    }
})

// try to do the pagination in this blog 
// so that u can show only the some number of blogs 
// at a page and the rest of the blogs will be shown 
// in the next page
blogrouter.get('/bulk', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasources: {
                db: { url: c.env.DATABASE_URL }
            }
        }).$extends(withAccelerate());
        const bulkblogs = await prisma.blog.findMany({
            select: {
                content: true,
                title: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });
        console.log("type of the bulk blogs" , typeof bulkblogs);
        return c.json(bulkblogs);
    } catch (error) {
        console.log(error);
        return c.json({
            error
        }, 404)
    }
});
blogrouter.put('/update/:id', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasources: {
                db: { url: c.env.DATABASE_URL }
            }
        }).$extends(withAccelerate());
        const body = await c.req.json();
        const id = c.req.param('id');
        const updatedData = await prisma.blog.update({
            where: { id },
            data: {
                title: body.title,
                content: body.content,
                published: body.published
            }
        })
        return c.json(
            { msg: updatedData }, 201)
    } catch (e) {
        console.log(e);
        return c.json({
            msg: "user not found"
        }, 404)
    }
})

blogrouter.get('/:id', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasources: {
                db: { url: c.env.DATABASE_URL }
            }
        }).$extends(withAccelerate());
        const body = await c.req.json();
        const id = c.req.param('id');
        const BlogData = await prisma.blog.findFirst({
            where: { id },
            select:{
                id:true,
                title:true,
                content:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
            
        })
        return c.json(
            { msg: BlogData }, 201)
    } catch (e) {
        console.log(e);
        return c.json({
            msg: "user not found"
        }, 404)
    }
})