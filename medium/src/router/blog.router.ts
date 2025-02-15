import { Hono } from "hono";
import { sign } from "hono/jwt";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { primitiveMappings } from "openai/_vendor/zod-to-json-schema/index.mjs";

export const blogrouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string
    };
}>();

blogrouter.post('/create', async (c) => {
    try {
        const body = await c.req.json();
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
                authorid: body.authorid
            }
        })
        return c.json({
            msg:newblog.id
        })
    } catch (error) {

    }
})

// try to do the pagination in this blog 
// so that u can show only the some number of blogs 
// at a page and the rest of the blogs will be shown 
// in the next page
blogrouter.get('/bulk',async(c)=>{
    try{
        const prisma = new PrismaClient({
            datasources:{
                db:{url:c.env.DATABASE_URL}
            }
        }).$extends(withAccelerate());
        const bulkblogs=await prisma.blog.findMany();
        return c.json(bulkblogs);
    }catch(error){
        return c.json({
            error
        })
    }
});