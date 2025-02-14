import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { decode,verify,sign } from 'hono/jwt';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET:string
  };
}>();
app.post('/signup', async (c) => {
  console.log("Signup route hit!");
  try {
    const body = await c.req.json();
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
      id:newuser.id
    },c.env.JWT_SECRET)
    return c.json({ message: jwt }, 201);
  } catch (error) {
    console.log(error );
    return c.status(411);
  }

});
app.get('/',async(c)=>{
  return c.text("hmlo hmlo bitch")
})


export default app

