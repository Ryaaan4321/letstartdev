import { Hono } from "hono";
import { sign } from "hono/jwt";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

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
            msg:newblog
        })
    } catch (error) {

    }
})