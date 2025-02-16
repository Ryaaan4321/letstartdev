import { Hono } from "hono";
import { sign, verify } from "hono/jwt";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import {z} from 'zod';
export const blogrouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string
    }, Variables: {
        userId: string
    };
}>();

const bloginput=z.object({
    title:z.string(),
    content:z.string(),
    thumbnail:z.string(),
    published:z.boolean()
});

blogrouter.use('/*', async (c, next) => {
    try {
        const authheader = c.req.header("Authorization") || "";
        const user = await verify(authheader, c.env.JWT_SECRET);
        console.log(typeof user);
        if (user) {
            c.set("userId", user.id);
            await next();
            return;
        }
    }
    catch (e) {
        console.log(e);
        return c.json({
            msg: "there is an error on this auth middleware"
        })
    }
})

blogrouter.post('/create', async (c) => {
    try {
        const body = await c.req.json();
        const userid = c.get("userId")
        console.log("user from the post req = ", userid);
        const prisma = new PrismaClient({
            datasources: {
                db: { url: c.env.DATABASE_URL }
            }
        }).$extends(withAccelerate());
        const newblog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                thumbnail: body.thumbnail,
                published: body.published,
                authorid: parseInt(userid)
            }
        })
        return c.json({
            msg: newblog.id
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
        const bulkblogs = await prisma.blog.findMany();
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
        const body =await c.req.json();
        const id = parseInt(c.req.param('id'));
        const updatedData = await prisma.blog.update({
           where:{id },
           data:{
            title:body.title,
            content:body.content,
            published:body.published
           }
        })
        return c.json(
            {msg:updatedData},201)
    }catch(e){
        console.log(e);
        return c.json({
            msg:"user not found"
        },404)
    }
})