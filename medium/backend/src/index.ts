import { Hono } from 'hono';
import { userrouter } from './router/user.router';
import { blogrouter } from './router/blog.router';
import { cors } from 'hono/cors';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string
  };
}>();
app.use('/*',cors());
app.route('/user',userrouter);
app.route('/blog',blogrouter);
app.get('/', async (c) => {
  return c.text("hmlo hmlo bitch")
})


export default app

