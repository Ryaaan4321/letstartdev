import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { decode, verify, sign } from 'hono/jwt';
import { userrouter } from './router/user.router';
import { blogrouter } from './router/blog.router';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string
  };
}>();
app.route('/user',userrouter);
app.route('/blog',blogrouter);
app.get('/', async (c) => {
  return c.text("hmlo hmlo bitch")
})


export default app

